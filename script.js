// Typing Terminal Effect
const lines = [
  '> sudo su',
  '> whoami: bopan',
  '> pwd: seattle, WA',
  '> status: learning SOC Level1 on TryHackMe',
  '> status: participating AoC 2025',
  '> echo "Welcome to my page!"'
];

let currentLine = 0;
let currentChar = 0;
const terminal = document.getElementById('typingTerminal');
const speed = 50;
const lineDelay = 200;

function typeText() {
  if (currentLine < lines.length) {
    if (currentChar === 0) {
      const lineDiv = document.createElement('div');
      lineDiv.id = `line-${currentLine}`;
      terminal.appendChild(lineDiv);
    }

    const lineDiv = document.getElementById(`line-${currentLine}`);
    const line = lines[currentLine];

    if (currentChar < line.length) {
      lineDiv.textContent = line.substring(0, currentChar + 1);
      lineDiv.innerHTML += '<span class="cursor">|</span>';
      currentChar++;
      setTimeout(typeText, speed);
    } else {
      lineDiv.innerHTML = line;
      currentChar = 0;
      currentLine++;
      setTimeout(typeText, lineDelay);
    }
  }
}

// Start typing animation
setTimeout(typeText, 500);

// Set build time
document.getElementById('buildTime').textContent = new Date().toLocaleString();

// Copy email function
function copyEmail() {
  const email = 'bopan6008@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Email copied: ' + email);
  }).catch(() => {
    prompt('Copy this email', email);
  });
}

// Download resume function
function downloadResume() {
  window.open('/assets/Bo_Pan_Resume.pdf', '_blank');
}