const APPWRITE_CONFIG = {
  endpoint:     'https://cloud.appwrite.io/v1',
  projectId:    'YOUR_PROJECT_ID',
  databaseId:   'YOUR_DATABASE_ID',
  collectionId: 'YOUR_COLLECTION_ID',
};

const IS_CONFIGURED = !Object.values(APPWRITE_CONFIG).some(v => v.startsWith('YOUR_'));

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
    if (!IS_CONFIGURED) {
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
    showError(certId, true);
  } finally {
    hideLoading();
  }
}

async function fetchFromAppwrite(certId) {
  const { endpoint, projectId, databaseId, collectionId } = APPWRITE_CONFIG;

  const url = new URL(
    `${endpoint}/databases/${databaseId}/collections/${collectionId}/documents`
  );
  url.searchParams.set('queries[]', `equal("certificate_id","${certId}")`);
  url.searchParams.set('limit', '1');

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
  const isExpired = cert.expiry_date && new Date(cert.expiry_date) < new Date();
  const statusText = isExpired ? 'Certificate Expired' : 'Certificate Valid';
  const statusIcon = isExpired ? '⚠️' : '✅';

  const issueFormatted  = formatDate(cert.issue_date);
  const expiryFormatted = cert.expiry_date ? formatDate(cert.expiry_date) : 'No Expiry';

  const html = `
    <div class="result-card">
      <div class="result-header ${isExpired ? 'invalid' : ''}">
        <div class="result-status-icon">${statusIcon}</div>
        <div class="result-header-text">
          <h3>${statusText}</h3>
          <p>This certificate has been verified in the Selvi Infotech registry.</p>
        </div>
      </div>
      <div class="result-body">
        <div class="result-logo-row">
          <img src="logo.png" alt="Selvi Infotech" class="result-logo">
          <div class="result-badge ${isExpired ? 'expired' : ''}">
            ${isExpired ? '⚠ Expired' : '✓ Authentic'}
          </div>
        </div>
        <div class="result-grid">
          <div class="result-field">
            <div class="field-label">Certificate ID</div>
            <div class="field-value highlight">${escHtml(cert.certificate_id)}</div>
          </div>
          <div class="result-field">
            <div class="field-label">Student Name</div>
            <div class="field-value">${escHtml(cert.student_name)}</div>
          </div>
          <div class="result-field" style="grid-column:1/-1;">
            <div class="field-label">Course / Program</div>
            <div class="field-value">${escHtml(cert.course_name)}</div>
          </div>
          <div class="result-field">
            <div class="field-label">Date of Issue</div>
            <div class="field-value">${issueFormatted}</div>
          </div>
          <div class="result-field">
            <div class="field-label">Valid Until</div>
            <div class="field-value">${expiryFormatted}</div>
          </div>
          ${cert.grade ? `
          <div class="result-field">
            <div class="field-label">Grade</div>
            <div class="field-value">${escHtml(cert.grade)}</div>
          </div>` : ''}
          ${cert.duration ? `
          <div class="result-field">
            <div class="field-label">Program Duration</div>
            <div class="field-value">${escHtml(cert.duration)}</div>
          </div>` : ''}
        </div>
        <div class="result-footer-note">
          🔒 This certificate was issued by <strong>Selvi Infotech Private Limited</strong>.
          Verified on ${formatDate(new Date().toISOString().split('T')[0])}.
        </div>
      </div>
    </div>
  `;

  const el = document.getElementById('verifyResult');
  el.innerHTML = html;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showError(certId, isNetworkError = false) {
  const message = isNetworkError
    ? 'Unable to connect to the certificate database. Please try again in a moment.'
    : `No certificate found with the ID <strong>${escHtml(certId)}</strong>. Please check the ID and try again, or contact <a href="mailto:info@selviinfotech.com" style="color:var(--gold-500)">info@selviinfotech.com</a>.`;

  const html = `
    <div class="result-card">
      <div class="result-error">
        <div class="error-icon">❌</div>
        <h3>${isNetworkError ? 'Connection Error' : 'Certificate Not Found'}</h3>
        <p>${message}</p>
      </div>
    </div>
  `;

  const el = document.getElementById('verifyResult');
  el.innerHTML = html;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showLoading()  { document.getElementById('verifyLoading').style.display = 'block'; }
function hideLoading()  { document.getElementById('verifyLoading').style.display = 'none'; }
function hideResult()   { document.getElementById('verifyResult').style.display  = 'none'; }

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function escHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(String(str)));
  return d.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  if (!IS_CONFIGURED) {
    document.getElementById('setupNotice').style.display = 'block';
  }
});
