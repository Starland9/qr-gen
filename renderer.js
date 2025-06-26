const generateBtn = document.getElementById('generate-btn');
const textInput = document.getElementById('text-input');
const qrCodeImg = document.getElementById('qr-code');

generateBtn.addEventListener('click', async () => {
  const text = textInput.value;
  if (text) {
    const qrCodeDataUrl = await window.electronAPI.generateQR(text);
    qrCodeImg.src = qrCodeDataUrl;
  }
});