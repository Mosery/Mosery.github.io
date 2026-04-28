const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

// Simple availability indicator; customize if you want
const statusDot = document.getElementById('status-dot')
const statusText = document.getElementById('status-text')
if (statusDot && statusText) {
  statusDot.style.background = '#6bb430'
  statusText.textContent = '到岗：随时'
}

