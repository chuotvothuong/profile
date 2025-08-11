// =========================
// 1. Hiển thị FPS
// =========================
let fpsElem = document.getElementById('fps');
let prevTime = performance.now();
let frames = 0;

function updateFPS() {
  frames++;
  const now = performance.now();
  const delta = now - prevTime;
  if (delta >= 1000) {
    const fps = (frames / delta) * 1000;
    fpsElem.textContent = fps.toFixed(1);
    frames = 0;
    prevTime = now;
  }
  requestAnimationFrame(updateFPS);
}
updateFPS();

// =========================
// 2. Chữ chạy Typed.js
// =========================
new Typed(".GioiThieu", {
  strings: ["Hi my name is ThanhDieu", "Welcome to my profile", "Enjoy your stay!"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

// =========================
// 3. Phát nhạc tự động
// =========================
function MusicPlay() {
  try {
    let audio = new Audio("./public/src/t/mp3/ThanhDieu.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(err => console.warn("Autoplay bị chặn:", err));
  } catch (err) {
    console.error("Lỗi phát nhạc:", err);
  }
}
document.addEventListener('click', MusicPlay, { once: true });

// =========================
// 4. Loader khi vào trang
// =========================
window.addEventListener('load', () => {
  document.querySelector('.LoaderCover').classList.add('HideLoader');
  showToast();
});

// =========================
// 5. Hiển thị toast
// =========================
function showToast() {
  let toast = document.getElementById("Toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// =========================
// 6. Link mạng xã hội
// =========================
const socialLinks = {
  Facebook: "https://facebook.com/yourpage",
  Youtube: "https://youtube.com/yourchannel",
  Discord: "https://discord.gg/yourinvite",
  Instagram: "https://instagram.com/yourprofile"
};

Object.entries(socialLinks).forEach(([id, url]) => {
  document.getElementById(id).addEventListener('click', () => {
    window.open(url, "_blank");
  });
});

// =========================
// 7. Thanh kỹ năng
// =========================
document.querySelectorAll('.skill-per').forEach(skill => {
  let per = skill.getAttribute('per');
  skill.style.width = per + "%";
  skill.style.transition = "width 1s";
});

// =========================
// 8. Lấy thông tin IP
// =========================
function __GetIP() {
  fetch("https://api-ipv4.ip.sb/jsonip")
    .then(res => res.json())
    .then(data => {
      document.getElementById("geoip").textContent = data.ip;
    })
    .catch(err => console.error(err));
}

function __GetInfo() {
  fetch("https://api-ipv4.ip.sb/geoip")
    .then(res => res.json())
    .then(data => {
      document.getElementById("geoinfo").textContent = `${data.city}, ${data.country}`;
    })
    .catch(err => console.error(err));
}

// Sửa lỗi gọi hàm sai
setTimeout(__GetIP, 3000);
setTimeout(__GetInfo, 5000);

// =========================
// 9. Test tốc độ mạng (giữ lại nguyên gốc)
// =========================
const maxtheard = 5;
const testurl = 'https://your-speedtest-file';
let lsat_date, all_down_sum = 0, run = false;
let thread_down = [], lsat_all_down = [];

function start_thread() {
  // Giữ nguyên logic test tốc độ của bạn ở đây
}
