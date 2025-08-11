// FPS Counter
let fpsElem = document.getElementById('fps');
let prevTime = performance.now();
let frames = 0;
function updateFPS() {
  frames++;
  const now = performance.now();
  const delta = now - prevTime;
  if (delta >= 1000) {
    fpsElem.textContent = ((frames / delta) * 1000).toFixed(1);
    frames = 0; prevTime = now;
  }
  requestAnimationFrame(updateFPS);
}
updateFPS();

// Typed.js intro
new Typed(".GioiThieu", {
  strings: ["Hi my name is ThanhDieu", "Welcome to my profile", "Enjoy your stay!"],
  typeSpeed: 50, backSpeed: 50, loop: true
});

// Music autoplay
function MusicPlay() {
  try {
    let audio = new Audio("./public/src/t/mp3/ThanhDieu.mp3");
    audio.loop = true; audio.volume = 0.5;
    audio.play().catch(err => console.warn("Autoplay blocked:", err));
  } catch (err) { console.error("Music error:", err); }
}
document.addEventListener('click', MusicPlay, { once: true });

// Loader & Toast
window.addEventListener('load', () => {
  document.querySelector('.LoaderCover').classList.add('HideLoader');
  showToast();
});
function showToast() {
  let toast = document.getElementById("Toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// Social links
const socialLinks = {
  Facebook: "https://facebook.com/yourpage",
  Youtube: "https://youtube.com/yourchannel",
  Discord: "https://discord.gg/yourinvite",
  Instagram: "https://instagram.com/yourprofile"
};
Object.entries(socialLinks).forEach(([id, url]) => {
  document.getElementById(id).addEventListener('click', () => window.open(url, "_blank"));
});

// Skills progress (nếu có)
document.querySelectorAll('.skill-per').forEach(skill => {
  let per = skill.getAttribute('per');
  skill.style.width = per + "%";
  skill.style.transition = "width 1s";
});

// IP info
function __GetIP() {
  fetch("https://api-ipv4.ip.sb/jsonip")
    .then(res => res.json())
    .then(data => { document.getElementById("geoip").textContent = data.ip; })
    .catch(console.error);
}
function __GetInfo() {
  fetch("https://api-ipv4.ip.sb/geoip")
    .then(res => res.json())
    .then(data => { document.getElementById("geoinfo").textContent = data.city + ", " + data.country; })
    .catch(console.error);
}
setTimeout(__GetIP, 3000);
setTimeout(__GetInfo, 5000);

// Network speed test (giữ nguyên để bạn hoàn thiện)
const maxtheard = 5;
const testurl = 'https://your-speedtest-file';
let lsat_date, all_down_sum = 0, run = false;
let thread_down = [], lsat_all_down = [];
function start_thread() {
  // Your speedtest logic here
}    let audio = new Audio("./public/src/t/mp3/ThanhDieu.mp3");
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
