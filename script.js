// ============================================
// MOBILE NAV TOGGLE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// ============================================
// SCROLLSPY: active nav link tracking
// ============================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(section => spyObserver.observe(section));

// ============================================
// HERO STAT COUNTERS
// ============================================
function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statEls = document.querySelectorAll('.stat-num');
let statsAnimated = false;
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statEls.forEach(el => {
        const target = parseInt(el.dataset.count, 10);
        animateCount(el, target);
      });
    }
  });
}, { threshold: 0.4 });

if (statEls.length) {
  statsObserver.observe(document.querySelector('.hero-stats'));
}

// ============================================
// ANNOTATION MARKER (hero mock window)
// ============================================
const annoMarker = document.getElementById('annoMarker');
const annoCallout = document.getElementById('annoCallout');

if (annoMarker && annoCallout) {
  annoMarker.addEventListener('click', () => {
    annoCallout.classList.toggle('visible');
  });

  document.addEventListener('click', (e) => {
    if (!annoMarker.contains(e.target) && !annoCallout.contains(e.target)) {
      annoCallout.classList.remove('visible');
    }
  });

  // auto-open once on load to invite interaction
  setTimeout(() => {
    annoCallout.classList.add('visible');
    setTimeout(() => annoCallout.classList.remove('visible'), 2600);
  }, 900);
}

// ============================================
// CASE FILE TABS
// ============================================
const caseTabs = document.querySelectorAll('.case-tab');
const casePanels = document.querySelectorAll('.case-panel');

caseTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.case;

    caseTabs.forEach(t => t.classList.remove('active'));
    casePanels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.querySelector(`.case-panel[data-case="${target}"]`).classList.add('active');
  });
});

// ============================================
// STRATEGY: FLOW STEP WALKTHROUGH
// ============================================
const flowSteps = document.querySelectorAll('.flow-step');
const flowPlay = document.getElementById('flowPlay');
const flowHint = document.getElementById('flowHint');

let flowPlaying = false;
let flowTimers = [];

function clearFlowTimers() {
  flowTimers.forEach(t => clearTimeout(t));
  flowTimers = [];
}

function resetFlow() {
  flowSteps.forEach(step => step.classList.remove('flow-active', 'flow-done'));
}

function playFlow() {
  if (flowPlaying) return;
  flowPlaying = true;
  clearFlowTimers();
  resetFlow();
  flowPlay.classList.add('playing');
  flowPlay.querySelector('.flow-play-icon').textContent = '⏸';
  if (flowHint) flowHint.textContent = 'Walking through the pass...';

  const stepDelay = 1100;

  flowSteps.forEach((step, i) => {
    const t1 = setTimeout(() => {
      step.classList.add('flow-active');
      if (i > 0) flowSteps[i - 1].classList.remove('flow-active');
      if (i > 0) flowSteps[i - 1].classList.add('flow-done');
      if (flowHint) flowHint.textContent = step.querySelector('h5').textContent;
    }, i * stepDelay);
    flowTimers.push(t1);
  });

  const totalTime = flowSteps.length * stepDelay;
  const t2 = setTimeout(() => {
    flowSteps.forEach(s => { s.classList.add('flow-done'); s.classList.remove('flow-active'); });
    flowPlay.classList.remove('playing');
    flowPlay.querySelector('.flow-play-icon').textContent = '▶';
    if (flowHint) flowHint.textContent = 'Hover a tile, or press play again.';
    flowPlaying = false;
  }, totalTime + 500);
  flowTimers.push(t2);
}

if (flowPlay) {
  flowPlay.addEventListener('click', playFlow);
}

// auto-play once when the strategy section first scrolls into view
const flowContainer = document.getElementById('flow');
let flowAutoPlayed = false;
if (flowContainer) {
  const flowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !flowAutoPlayed) {
        flowAutoPlayed = true;
        setTimeout(playFlow, 400);
      }
    });
  }, { threshold: 0.5 });
  flowObserver.observe(flowContainer);
}

// ============================================
// STRATEGY: PRINCIPLE CARD STAGGER REVEAL
// ============================================
const principleCards = document.querySelectorAll('.principle-card');

if (principleCards.length) {
  const principleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.principle-card');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('reveal'), i * 90);
        });
        principleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const principleGrid = document.getElementById('principleGrid');
  if (principleGrid) principleObserver.observe(principleGrid);
}

// ============================================
// STRATEGY: WORKED EXAMPLE SEQUENTIAL REVEAL
// ============================================
const workedExample = document.getElementById('workedExample');

if (workedExample) {
  const weObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const rows = entry.target.querySelectorAll('.worked-example-row');
        rows.forEach((row, i) => {
          setTimeout(() => row.classList.add('reveal'), i * 220);
        });
        weObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  weObserver.observe(workedExample);
}
