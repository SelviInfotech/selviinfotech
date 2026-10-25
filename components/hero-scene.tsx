"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { lotusPetals, petalOutline, type LotusPetal } from "@/lib/lotus";

const gold = new THREE.Color("#E4C16A");

function LotusPetalMesh({ petal, material }: { petal: LotusPetal; material: THREE.Material }) {
  const geometry = useMemo(() => {
    const points = petalOutline(petal, 96).map(([x, y, z]) => new THREE.Vector3(x, y, z));
    const curve = new THREE.CatmullRomCurve3(points, true, "catmullrom", 0.25);
    return new THREE.TubeGeometry(curve, 180, 0.0135, 10, true);
  }, [petal]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return <mesh geometry={geometry} material={material} />;
}

function FloorGrid() {
  const geometry = useMemo(() => {
    const positions: number[] = [];
    const span = 6.2;
    const step = 0.62;
    for (let i = -span; i <= span; i += step) {
      positions.push(-span, 0, i, span, 0, i);
      positions.push(i, 0, -span, i, 0, span * 0.35);
    }
    const next = new THREE.BufferGeometry();
    next.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return next;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <lineSegments geometry={geometry} position={[0, -1.05, -0.6]} rotation={[-0.42, 0, 0]}>
      <lineBasicMaterial color="#C9962F" transparent opacity={0.12} />
    </lineSegments>
  );
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 36;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 3.4;
      positions[i * 3 + 1] = (Math.random() - 0.45) * 2.6;
      positions[i * 3 + 2] = -0.3 - Math.random() * 1.1;
    }
    const next = new THREE.BufferGeometry();
    next.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return next;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color="#F0C463" size={0.01} transparent opacity={0.28} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Scene() {
  const rig = useRef<THREE.Group>(null);
  const scroll = useRef(0);
  const hovering = useRef(false);
  const renderer = useThree((state) => state.gl);
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: gold,
        metalness: 1,
        roughness: 0.32,
        clearcoat: 0.45,
        clearcoatRoughness: 0.28,
        envMapIntensity: 1.05,
      }),
    [],
  );

  useEffect(() => () => material.dispose(), [material]);

  useEffect(() => {
    const onScroll = () => {
      scroll.current = Math.min(Math.max(window.scrollY / 900, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = renderer.domElement;
    const enter = () => {
      hovering.current = true;
    };
    const leave = () => {
      hovering.current = false;
    };
    el.addEventListener("pointermove", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointermove", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, [renderer]);

  useFrame((state, delta) => {
    const group = rig.current;
    if (!group) return;
    const t = state.clock.elapsedTime;
    const pointerX = hovering.current ? state.pointer.x : 0;
    const pointerY = hovering.current ? state.pointer.y : 0;
    const targetY = Math.sin(t * 0.42) * 0.62 + pointerX * 0.26;
    const targetX = -0.08 - pointerY * 0.1 - scroll.current * 0.18;
    const blend = 1 - Math.exp(-2.4 * delta);
    group.rotation.y += (targetY - group.rotation.y) * blend;
    group.rotation.x += (targetX - group.rotation.x) * blend;
    const breathe = 1.08 + Math.sin(t * 0.45) * 0.012;
    group.scale.setScalar(breathe);
  });

  return (
    <>
      <fog attach="fog" args={["#0F3B24", 6.5, 12]} />
      <ambientLight intensity={0.25} color="#fff6ea" />
      <directionalLight position={[2.4, 3.2, 4]} intensity={1.6} color="#fff8ef" />
      <directionalLight position={[-3.2, 0.6, 2]} intensity={0.35} color="#F0C463" />
      <FloorGrid />
      <Dust />
      <group ref={rig} position={[0, -0.38, 0]} scale={1.08}>
        {lotusPetals.map((petal) => (
          <LotusPetalMesh key={`${petal.rotation}-${petal.z}`} petal={petal} material={material} />
        ))}
      </group>
    </>
  );
}

export default function HeroScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={visible ? "always" : "never"}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.12, 4.7], fov: 30 }}
        onCreated={({ gl, scene, camera }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.08;
          const pmrem = new THREE.PMREMGenerator(gl);
          scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
          scene.environmentIntensity = 0.9;
          pmrem.dispose();
          camera.lookAt(0, 0.05, 0);
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
