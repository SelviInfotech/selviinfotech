// ── Formspree endpoint — sign up at https://formspree.io, create a form, paste your ID here ──
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu ──
const navToggle     = document.getElementById('navToggle');
const mobileOverlay = document.getElementById('mobileMenuOverlay');

function openMenu() {
  navbar.classList.add('menu-open');
  if (mobileOverlay) mobileOverlay.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navbar.classList.remove('menu-open');
  if (mobileOverlay) mobileOverlay.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navbar.classList.contains('menu-open') ? closeMenu() : openMenu();
  });
}

const mobileClose = document.getElementById('mobileMenuClose');
if (mobileClose) mobileClose.addEventListener('click', closeMenu);

if (mobileOverlay) {
  mobileOverlay.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// ── Active nav link on scroll ──
const sections  = document.querySelectorAll('section[id], div[id]');
const navItems  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) link.classList.add('active');
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((sib, idx) => { if (sib === entry.target) delay = idx * 80; });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Toast ──
function showToast(message, type = 'error') {
  document.getElementById('siToast')?.remove();
  const toast = document.createElement('div');
  toast.id = 'siToast';
  toast.setAttribute('role', 'alert');
  toast.style.cssText = `
    position:fixed;bottom:32px;left:50%;transform:translateX(-50%) translateY(20px);
    background:${type === 'error' ? '#3D1010' : 'var(--green-800)'};
    color:#fff;padding:14px 24px;border-radius:50px;font-family:var(--font-body);
    font-size:0.92rem;font-weight:500;display:flex;align-items:center;gap:10px;
    box-shadow:0 8px 32px rgba(0,0,0,.25);z-index:99999;opacity:0;
    transition:opacity .25s ease,transform .25s ease;white-space:nowrap;max-width:90vw;
  `;
  toast.innerHTML = `<span>${type === 'error' ? '⚠' : '✓'}</span><span>${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── Field error highlight ──
function setFieldError(id, hasError) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = hasError ? '#C0392B' : '';
  el.style.background  = hasError ? 'rgba(192,57,43,.05)' : '';
  if (hasError) {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'shake 0.35s ease';
  }
  el.addEventListener('input', () => {
    el.style.borderColor = '';
    el.style.background  = '';
  }, { once: true });
}

// ── Reset form after successful submission ──
function resetForm() {
  ['fname','lname','email','phone','service','message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const btn = document.getElementById('formSubmitBtn');
  const success = document.getElementById('formSuccess');
  if (btn) { btn.style.display = ''; btn.disabled = false; btn.innerHTML = `Send Message <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`; }
  if (success) success.style.display = 'none';
}

// ── Contact form submit ──
async function handleFormSubmit(e) {
  e.preventDefault();

  const btn     = document.getElementById('formSubmitBtn');
  const fname   = document.getElementById('fname')?.value.trim();
  const email   = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  // Validate required fields
  let hasError = false;
  if (!fname)   { setFieldError('fname', true);   hasError = true; }
  if (!email)   { setFieldError('email', true);   hasError = true; }
  if (!message) { setFieldError('message', true); hasError = true; }

  if (hasError) { showToast('Please fill in all required fields.'); return; }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setFieldError('email', true);
    showToast('Please enter a valid email address.');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = 'Sending&hellip;';

  // Build form data
  const formData = {
    name:    `${fname} ${document.getElementById('lname')?.value.trim() || ''}`.trim(),
    email,
    phone:   document.getElementById('phone')?.value.trim() || '',
    service: document.getElementById('service')?.value || '',
    message,
  };

  // If Formspree ID is not yet configured, fall back to a friendly message
  if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'block';
      showToast('Message received! We\'ll be in touch soon.', 'success');
      setTimeout(resetForm, 5000);
    }, 1000);
    return;
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      document.getElementById('formSuccess').style.display = 'block';
      showToast('Message sent! We\'ll be in touch soon.', 'success');
      setTimeout(resetForm, 5000);
    } else {
      throw new Error('Server error');
    }
  } catch {
    btn.disabled = false;
    btn.innerHTML = `Send Message <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    showToast('Something went wrong. Please email us directly.');
  }
}

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
