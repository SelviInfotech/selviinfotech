function getConfig() {
  return window.APPWRITE_CONFIG || {};
}

function isConfigured() {
  const cfg = getConfig();
  return cfg.endpoint && cfg.projectId && cfg.databaseId && cfg.collectionId &&
    !Object.values(cfg).some(v => v.startsWith('YOUR_'));
}

async function verifyCertificate() {
  const input  = document.getElementById('certInput');
  const certId = input.value.trim().toUpperCase();

  if (!certId) {
    input.focus();
    input.style.borderColor = 'var(--gold-400)';
    return;
  }
  input.style.borderColor = '';

  showLoading();
  hideResult();

  try {
    if (!isConfigured()) {
      hideLoading();
      document.getElementById('setupNotice').style.display = 'block';
      return;
    }

    const cert = await fetchFromAppwrite(certId);

    if (cert) {
      showCertificate(cert);
    } else {
      showError(certId);
    }
  } catch (err) {
    console.error('Verification error:', err);
    hideLoading();
    showToast('Connection Error', 'Unable to reach the certificate database. Please try again.');
    return;
  } finally {
    hideLoading();
  }
}

async function fetchFromAppwrite(certId) {
  const { endpoint, projectId, databaseId, collectionId } = getConfig();

  const url = new URL(
    `${endpoint}/databases/${databaseId}/collections/${collectionId}/documents`
  );
  url.searchParams.append('queries[]', `equal("certificateId", ["${certId}"])`);
  url.searchParams.append('limit', '1');

  const res = await fetch(url.toString(), {
    headers: {
      'X-Appwrite-Project': projectId,
    },
  });

  if (!res.ok) throw new Error(`Appwrite error: ${res.status}`);

  const data = await res.json();
  if (data.documents && data.documents.length > 0) {
    return data.documents[0];
  }
  return null;
}

function showCertificate(cert) {
  const verifiedOn = new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  const html = `
    <div class="result-card">
      <div class="result-header">
        <div class="result-status-icon">✅</div>
        <div class="result-header-text">
          <h3>Certificate Valid</h3>
          <p>This certificate has been verified in the Selvi Infotech registry.</p>
        </div>
      </div>
      <div class="result-body">
        <div class="result-logo-row">
          <img src="logo.png" alt="Selvi Infotech" class="result-logo">
          <div class="result-badge">✓ Authentic</div>
        </div>
        <div class="result-grid">
          <div class="result-field">
            <div class="field-label">Certificate ID</div>
            <div class="field-value highlight">${escHtml(cert.certificateId)}</div>
          </div>
          <div class="result-field">
            <div class="field-label">Student Name</div>
            <div class="field-value">${escHtml(cert.name)}</div>
          </div>
        </div>
        <div class="result-footer-note">
          🔒 This certificate was issued by <strong>Selvi Infotech Private Limited</strong>.
          Verified on ${verifiedOn}.
        </div>
      </div>
    </div>
  `;

  const el = document.getElementById('verifyResult');
  el.innerHTML = html;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showError(certId) {
  const html = `
    <div class="result-card">
      <div class="result-notfound">
        <div class="nf-icon">🔍</div>
        <h3>Invalid Certificate ID</h3>
        <div class="nf-id">${escHtml(certId)}</div>
        <p>No certificate was found with this ID.<br>
        Please double-check the ID on your certificate document.<br>
        Need help? <a href="mailto:info@selviinfotech.com">info@selviinfotech.com</a></p>
      </div>
    </div>
  `;

  const el = document.getElementById('verifyResult');
  el.innerHTML = html;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showToast(title, msg) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">⚠️</span>
    <div class="toast-body">
      <div class="toast-title">${escHtml(title)}</div>
      <div class="toast-msg">${escHtml(msg)}</div>
    </div>
    <button class="toast-close" onclick="dismissToast(this.parentElement)">✕</button>
  `;
  container.appendChild(toast);

  setTimeout(() => dismissToast(toast), 5000);
}

function dismissToast(toast) {
  if (!toast || toast.classList.contains('hiding')) return;
  toast.classList.add('hiding');
  setTimeout(() => toast.remove(), 300);
}

function showLoading() { document.getElementById('verifyLoading').style.display = 'block'; }
function hideLoading() { document.getElementById('verifyLoading').style.display = 'none'; }
function hideResult()  { document.getElementById('verifyResult').style.display  = 'none'; }

function escHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(String(str)));
  return d.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isConfigured()) {
    document.getElementById('setupNotice').style.display = 'block';
  }
});
