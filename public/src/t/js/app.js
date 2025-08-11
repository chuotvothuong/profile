const date = new Date();
const colorsByMonth = [
  ["#0099ff", "#ffffff"], ["#ffffff", "#9900ff"], ["#99ffcc", "#737373"], ["#ff99cc", "#ffffff"],
  ["#e0e0e0", "#99cc00"], ["#cccc00", "#f0f0f0"], ["#cc9900", "#ffffff"], ["#cc3300", "#cc9900"],
  ["#ff0066", "#ffffff"], ["#0066cc", "#ffffff"], ["#00cc99", "#ccff66"], ["#ffffff", "#ff0000"]
];
const selColors = colorsByMonth[date.getMonth()];

particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 1000 } },
    color: { value: selColors },
    shape: { type: ["polygon"], stroke: { width: 12, color: "#000000" }, polygon: { nb_sides: 6 } },
    opacity: { value: 1, random: true, anim: { enable: true, speed: 1, opacity_min: 0.4, sync: false } },
    size: { value: 7, random: true, anim: { enable: true, speed: 40, size_min: 4, sync: false } },
    line_linked: { enable: true, distance: 120, color: selColors[0], opacity: 0.5, width: 1.5 },
    move: { enable: true, speed: 2, direction: "top", attract: { enable: true, rotateX: 600, rotateY: 1200 } }
  },
  interactivity: {
    detect_on: "window",
    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "repulse" }, resize: true },
    modes: { grab: { distance: 150, line_linked: { opacity: 0.8 } }, repulse: { distance: 250 } }
  },
  retina_detect: true
});
