// Lấy ngày hiện tại
const date = new Date();

// Màu theo từng tháng
const colorsByMonth = [
  ["#0099ff", "#ffffff"], // Jan
  ["#ffffff", "#9900ff"], // Feb
  ["#99ffcc", "#737373"], // Mar
  ["#ff99cc", "#ffffff"], // Apr
  ["#e0e0e0", "#99cc00"], // May
  ["#cccc00", "#f0f0f0"], // Jun
  ["#cc9900", "#ffffff"], // Jul
  ["#cc3300", "#cc9900"], // Aug
  ["#ff0066", "#ffffff"], // Sep
  ["#0066cc", "#ffffff"], // Oct
  ["#00cc99", "#ccff66"], // Nov
  ["#ffffff", "#ff0000"]  // Dec
];

const selColors = colorsByMonth[date.getMonth()];

// Cấu hình particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: { enable: true, value_area: 1000 }
    },
    color: { value: selColors },
    shape: {
      type: ["polygon"],
      stroke: { width: 12, color: "#000000" },
      polygon: { nb_sides: 6 },
      image: { src: "images/sitelogo.png", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.4, sync: false }
    },
    size: {
      value: 7,
      random: true,
      anim: { enable: true, speed: 40, size_min: 4, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: selColors[0],
      opacity: 0.5,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 150, line_linked: { opacity: 0.8 } },
      bubble: { distance: 300, size: 8, duration: 1, opacity: 6, speed: 6 },
      repulse: { distance: 250 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      // Not used since it's not in the "type" array above
      "image": { 
        "src": "images/sitelogo.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.4,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 4,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      // The color changes depending on month
      "color": selColors[0],
      "opacity": 0.5,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        // Avoid "push": if the user repeatedly clicks, the frame rate starts dropping
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 0.8
        }
      },
      "bubble": {
        "distance": 300,
        "size": 8,
        "duration": 1,
        "opacity": 6,
        "speed": 6
      },
      "repulse": {
        "distance": 250
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
}

);
