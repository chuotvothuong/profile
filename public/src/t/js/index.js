// Hiển thị FPS
let fpsDisplay = document.getElementById("fps");
let lastLoop = new Date();

function updateFPS() {
  const thisLoop = new Date();
  const fps = 1000 / (thisLoop - lastLoop);
  lastLoop = thisLoop;
  fpsDisplay.textContent = fps.toFixed(1);
  requestAnimationFrame(updateFPS);
}
updateFPS();

// Typed.js hiệu ứng gõ chữ
new Typed(".TieuSu", {
  strings: ["Hi my name is ThanhDieu", "Welcome to my website!"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Lấy IP và hiển thị vị trí (GeoIP)
$.getJSON("https://ipapi.co/json/", function(data) {
  $("#geoip").text(`${data.city}, ${data.country_name}`);
  $("#geoinfo").text(`Your IP: ${data.ip}`);
});

// Xử lý toast thông báo
function showToast(msg) {
  const toast = document.getElementById("Toast");
  toast.textContent = msg;
  toast.style.opacity = 1;
  setTimeout(() => (toast.style.opacity = 0), 3000);
}
