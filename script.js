const toggleBtns = document.querySelectorAll('.toggle-btn');
    const sections = document.querySelectorAll('.section');
    const body = document.body;

    const bgColors = [
      getComputedStyle(document.documentElement).getPropertyValue('--g4-bg').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--val-bg').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--cyanide-bg').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--culprit-bg').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--lust-bg').trim()
    ];

    function setActive(index) {
      toggleBtns.forEach(btn => btn.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));

      toggleBtns[index].classList.add('active');
      sections[index].classList.add('active');

      body.style.backgroundColor = bgColors[index];

      let color = getComputedStyle(sections[index]).getPropertyValue('--theme-color');
      loadParticles(color.trim());
    }

    toggleBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => setActive(index));
    });

    function loadParticles(color) {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }

      particlesJS('particles-js', {
        particles: {
          number: { value: 80 },
          color: { value: color },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          line_linked: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }

    body.style.backgroundColor = bgColors[0];
    loadParticles(getComputedStyle(sections[0]).getPropertyValue('--theme-color').trim());