const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '7️⃣'];

function spin() {
  const reel1 = document.getElementById('reel1');
  const reel2 = document.getElementById('reel2');
  const reel3 = document.getElementById('reel3');
  const result = document.getElementById('result');

  // Pilih simbol acak untuk tiap reel
  const s1 = symbols[Math.floor(Math.random() * symbols.length)];
  const s2 = symbols[Math.floor(Math.random() * symbols.length)];
  const s3 = symbols[Math.floor(Math.random() * symbols.length)];

  reel1.textContent = s1;
  reel2.textContent = s2;
  reel3.textContent = s3;

  // Cek hasil
  if (s1 === s2 && s2 === s3) {
    result.textContent = "🎉 You Win! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Try Again!";
    result.style.color = "red";
  }
}
