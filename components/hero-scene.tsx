"use client";

import { Float } from "@react-three/drei/core/Float";
import { RoundedBox } from "@react-three/drei/core/RoundedBox";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const chips = [
  { src: "/icons/tech/react.svg", position: [-1.62, 0.92, 0.15] as const },
  { src: "/icons/tech/flutter.svg", position: [1.62, 1.02, 0.05] as const },
  { src: "/icons/tech/nextdotjs.svg", position: [1.42, -0.92, 0.45] as const },
  { src: "/icons/tech/nodedotjs.svg", position: [-1.38, -0.78, 0.4] as const },
];

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim().replaceAll('"', "") || "sans-serif";
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function paintSite(ctx: CanvasRenderingContext2D, w: number, h: number, display: string, sans: string) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#f5efe6";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#0d2818";
  ctx.fillRect(0, 0, w, 88);
  ctx.fillStyle = "#c9943a";
  ctx.fillRect(0, 88, w, 6);

  ["#c9943a", "rgba(245,239,230,0.7)", "rgba(245,239,230,0.35)"].forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(40 + index * 28, 44, 8, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#143524";
  roundRect(ctx, w / 2 - 150, 22, 300, 44, 22);
  ctx.fill();
  ctx.fillStyle = "#f5efe6";
  ctx.font = `500 22px ${sans}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("preview.site", w / 2, 44);

  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#7a5410";
  ctx.font = `600 18px ${sans}`;
  ctx.fillText("SAMPLE SCREEN", 48, 156);

  ctx.fillStyle = "#0d2818";
  ctx.font = `600 64px ${display}, Georgia, serif`;
  ctx.fillText("Your offer,", 44, 246);
  ctx.fillText("clearly", 44, 322);

  ctx.fillStyle = "#3e5346";
  ctx.font = `400 24px ${sans}`;
  ctx.fillText("A website built around the work.", 48, 378);

  ctx.fillStyle = "#c9943a";
  roundRect(ctx, 48, 414, 132, 52, 26);
  ctx.fill();
  ctx.fillStyle = "#0d2818";
  ctx.font = `600 22px ${sans}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Ask", 114, 440);

  [
    ["Orders", "Open"],
    ["Schedule", "Draft"],
  ].forEach(([label, state], index) => {
    const x = 620;
    const y = 168 + index * 128;
    ctx.fillStyle = "#eaf3ed";
    roundRect(ctx, x, y, 520, 108, 18);
    ctx.fill();
    ctx.fillStyle = "#0d2818";
    ctx.font = `600 28px ${sans}`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x + 28, y + 54);
    ctx.fillStyle = "#f7f1e8";
    roundRect(ctx, x + 340, y + 30, 148, 48, 24);
    ctx.fill();
    ctx.fillStyle = "#7a5410";
    ctx.font = `600 16px ${sans}`;
    ctx.textAlign = "center";
    ctx.fillText(state.toUpperCase(), x + 414, y + 54);
  });
}

function paintApp(ctx: CanvasRenderingContext2D, w: number, h: number, display: string, sans: string) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#f5efe6";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#143524";
  roundRect(ctx, w / 2 - 70, 22, 140, 28, 14);
  ctx.fill();

  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#7a5410";
  ctx.font = `600 18px ${sans}`;
  ctx.fillText("APP PREVIEW", 36, 100);

  ctx.fillStyle = "#0d2818";
  ctx.font = `600 52px ${display}, Georgia, serif`;
  ctx.fillText("Today", 36, 168);

  ["Bookings", "Messages", "Schedule", "Profile"].forEach((item, index) => {
    const y = 210 + index * 156;
    ctx.fillStyle = "#eaf3ed";
    roundRect(ctx, 28, y, w - 56, 136, 24);
    ctx.fill();
    ctx.fillStyle = "#1a4a2e";
    roundRect(ctx, 52, y + 36, 64, 64, 16);
    ctx.fill();
    ctx.fillStyle = "#0d2818";
    ctx.font = `600 30px ${sans}`;
    ctx.textBaseline = "middle";
    ctx.fillText(item, 136, y + 68);
  });
}

function usePaintedTexture(paint: typeof paintSite, width: number, height: number) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const next = new THREE.CanvasTexture(canvas);
    next.colorSpace = THREE.SRGBColorSpace;
    next.anisotropy = 8;
    return next;
  }, [width, height]);

  useEffect(() => {
    let alive = true;
    const draw = () => {
      const canvas = texture.image as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      paint(ctx, canvas.width, canvas.height, cssVar("--font-playfair"), cssVar("--font-inter"));
      texture.needsUpdate = true;
    };
    draw();
    document.fonts?.ready.then(() => {
      if (alive) draw();
    });
    return () => {
      alive = false;
      texture.dispose();
    };
  }, [paint, texture]);

  return texture;
}

function useLogoTexture(src: string) {
  const [map, setMap] = useState<THREE.CanvasTexture | null>(null);
  const held = useRef<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const response = await fetch(src);
      if (!response.ok) return;
      const text = await response.text();
      const sized = text.includes(" width=") ? text : text.replace("<svg", '<svg width="256" height="256"');
      const url = URL.createObjectURL(new Blob([sized], { type: "image/svg+xml" }));
      try {
        const img = new Image();
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error("logo"));
          img.src = url;
        });
        if (cancelled) return;
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, 256, 256);
        ctx.drawImage(img, 36, 36, 184, 184);
        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.needsUpdate = true;
        held.current = texture;
        setMap(texture);
      } finally {
        URL.revokeObjectURL(url);
      }
    };
    load().catch(() => undefined);
    return () => {
      cancelled = true;
      held.current?.dispose();
      held.current = null;
    };
  }, [src]);

  return map;
}

function Laptop({ map }: { map: THREE.Texture }) {
  return (
    <group position={[-0.22, -0.02, 0]} rotation={[0.08, -0.48, -0.02]}>
      <Float speed={1.15} rotationIntensity={0.08} floatIntensity={0.45} floatingRange={[-0.05, 0.07]}>
        <group>
          <RoundedBox args={[1.82, 1.2, 0.08]} radius={0.02} smoothness={2} bevelSegments={1} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.58, 0.1]}>
            <meshStandardMaterial color="#efe4d4" roughness={0.55} metalness={0.05} />
          </RoundedBox>
          <mesh position={[0, -0.532, 0.12]}>
            <boxGeometry args={[1.38, 0.01, 0.7]} />
            <meshStandardMaterial color="#d9cdb8" roughness={0.86} />
          </mesh>
          <mesh position={[0, -0.524, 0.58]}>
            <boxGeometry args={[0.46, 0.01, 0.28]} />
            <meshStandardMaterial color="#cfc3b0" roughness={0.7} />
          </mesh>
          <group position={[0, -0.52, -0.46]} rotation={[-0.34, 0, 0]}>
            <RoundedBox args={[1.72, 1.12, 0.055]} radius={0.016} smoothness={2} bevelSegments={1} position={[0, 0.56, 0]}>
              <meshStandardMaterial color="#143524" roughness={0.4} metalness={0.14} />
            </RoundedBox>
            <mesh position={[0, 0.56, 0.031]}>
              <planeGeometry args={[1.56, 0.96]} />
              <meshBasicMaterial map={map} toneMapped={false} />
            </mesh>
          </group>
        </group>
      </Float>
    </group>
  );
}

function Phone({ map }: { map: THREE.Texture }) {
  return (
    <group position={[1.12, 0.08, 0.42]} rotation={[0.06, -0.28, 0.1]}>
      <Float speed={1.45} rotationIntensity={0.1} floatIntensity={0.55} floatingRange={[-0.07, 0.06]}>
        <group>
          <RoundedBox args={[0.66, 1.24, 0.07]} radius={0.02} smoothness={2} bevelSegments={1}>
            <meshStandardMaterial color="#102818" roughness={0.32} metalness={0.22} />
          </RoundedBox>
          <mesh position={[0, 0.01, 0.038]}>
            <planeGeometry args={[0.54, 1.06]} />
            <meshBasicMaterial map={map} toneMapped={false} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function LogoChip({ src, position }: { src: string; position: readonly [number, number, number] }) {
  const map = useLogoTexture(src);
  return (
    <group position={position}>
      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.7} floatingRange={[-0.06, 0.08]}>
        <group>
          <RoundedBox args={[0.42, 0.42, 0.07]} radius={0.02} smoothness={2} bevelSegments={1}>
            <meshStandardMaterial color="#f7f1e8" roughness={0.42} metalness={0.04} />
          </RoundedBox>
          {map ? (
            <mesh position={[0, 0, 0.04]}>
              <planeGeometry args={[0.28, 0.28]} />
              <meshBasicMaterial map={map} transparent toneMapped={false} />
            </mesh>
          ) : null}
        </group>
      </Float>
    </group>
  );
}

function ContactShadow() {
  const map = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const gradient = ctx.createRadialGradient(128, 64, 8, 128, 64, 120);
    gradient.addColorStop(0, "rgba(0,0,0,0.4)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 128);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useEffect(() => () => map?.dispose(), [map]);
  if (!map) return null;

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.05, -1.22, 0.15]}>
      <planeGeometry args={[4.4, 2.1]} />
      <meshBasicMaterial map={map} transparent depthWrite={false} toneMapped={false} />
    </mesh>
  );
}

function Scene() {
  const rig = useRef<THREE.Group>(null);
  const scroll = useRef(0);
  const hovering = useRef(false);
  const site = usePaintedTexture(paintSite, 1280, 800);
  const app = usePaintedTexture(paintApp, 640, 1100);
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const onScroll = () => {
      scroll.current = Math.min(Math.max(window.scrollY / 700, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = gl.domElement;
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
  }, [gl]);

  useFrame((state, delta) => {
    const group = rig.current;
    if (!group) return;
    const pointerX = hovering.current ? state.pointer.x : 0;
    const pointerY = hovering.current ? state.pointer.y : 0;
    const targetY = pointerX * 0.32;
    const targetX = -pointerY * 0.14 - scroll.current * 0.22;
    const blend = 1 - Math.exp(-3 * delta);
    group.rotation.y += (targetY - group.rotation.y) * blend;
    group.rotation.x += (targetX - group.rotation.x) * blend;
  });

  return (
    <>
      <ambientLight intensity={0.72} color="#fff6ea" />
      <directionalLight position={[-3.2, 4.2, 4.4]} intensity={1.2} color="#fff3e2" />
      <directionalLight position={[3.6, 1.4, 2.2]} intensity={0.48} color="#e0b15a" />
      <pointLight position={[0, -0.4, 2.4]} intensity={0.28} color="#f5efe6" distance={8} />
      <ContactShadow />
      <group ref={rig}>
        <Laptop map={site} />
        <Phone map={app} />
        {chips.map((chip) => (
          <LogoChip key={chip.src} src={chip.src} position={chip.position} />
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
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={visible ? "always" : "never"}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.22, 5.35], fov: 30 }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
          camera.lookAt(0, 0.02, 0);
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
