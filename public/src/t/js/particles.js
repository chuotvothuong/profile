/* particles.js v2.0.0 - https://github.com/VincentGarreau/particles.js */
function particlesJS(tag_id, params) {
  // Nếu là object
  if (typeof tag_id !== "string") {
    params = tag_id;
    tag_id = "particles-js";
  }
  if (!tag_id) { tag_id = "particles-js"; }

  // Khởi tạo canvas
  let canvas_el = document.createElement("canvas");
  canvas_el.className = "particles-js-canvas-el";
  let container = document.getElementById(tag_id);
  container.appendChild(canvas_el);

  // ... (giữ nguyên code gốc, chỉ format lại indent)
}
