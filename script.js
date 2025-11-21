// ===== GLOBAL STATE =====
let portfolioData = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
  await loadPortfolioData();
  initParticles();
  initScrollAnimations();
  initScrollToTop();
  initNavbarEffects();
  initSmoothScroll();
  hideLoader();
});

// ===== LOAD JSON DATA =====
async function loadPortfolioData() {
  try {
    const response = await fetch('data.json');
    portfolioData = await response.json();
    populateContent();
  } catch (error) {
    console.error('Error loading portfolio data:', error);
  }
}

// ===== POPULATE CONTENT FROM JSON =====
function populateContent() {
  if (!portfolioData) return;

  const { personal, stats, currentFocus, summary, skills, projects, experience, education, publications, certifications } = portfolioData;

  // Navigation
  document.getElementById('nav-brand').textContent = personal.name;
  document.getElementById('nav-email').href = `mailto:${personal.email}`;
  document.getElementById('nav-github').href = personal.github;

  // Hero Section
  document.getElementById('hero-eyebrow').textContent = personal.title;
  document.getElementById('hero-title').textContent = personal.tagline;
  document.getElementById('hero-description').textContent = personal.description;
  
  // Badges
  const badgesContainer = document.getElementById('hero-badges');
  badgesContainer.innerHTML = personal.badges.map(badge => 
    `<span class="badge">${badge}</span>`
  ).join('');

  // CTAs
  document.getElementById('hero-cta-email').href = `mailto:${personal.email}`;
  document.getElementById('hero-cta-github').href = personal.github;

  // Stats
  const statsContainer = document.getElementById('hero-stats');
  statsContainer.innerHTML = stats.map(stat => 
    `<div class="stat">
      <div class="stat-number">${stat.number}</div>
      <div class="stat-label">${stat.label}</div>
    </div>`
  ).join('');

  // Current Focus
  document.getElementById('focus-title').textContent = currentFocus.title;
  document.getElementById('focus-description').textContent = currentFocus.description;
  
  const focusChips = document.getElementById('focus-chips');
  focusChips.innerHTML = currentFocus.technologies.map(tech => 
    `<span class="chip">${tech}</span>`
  ).join('');

  const focusDetails = document.getElementById('focus-details');
  focusDetails.innerHTML = currentFocus.details.map(detail => 
    `<div>
      <div class="mini-label">${detail.label}</div>
      <div class="mini-value">${detail.value}</div>
    </div>`
  ).join('');

  // Summary
  const summaryGrid = document.getElementById('summary-grid');
  summaryGrid.innerHTML = summary.map(item => 
    `<div class="summary-item">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>`
  ).join('');

  // Skills
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = skills.map(skill => 
    `<div class="skill-card">
      <h3>${skill.category}</h3>
      <p>${skill.technologies}</p>
    </div>`
  ).join('');

  // Projects
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = projects.map(project => 
    `<article class="project-card">
      <div class="project-top">
        <div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <span class="tag">${project.tag}</span>
      </div>
      <ul>
        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
      </ul>
      ${project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer" class="github-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        View on GitHub
      </a>` : ''}
    </article>`
  ).join('');

  // Experience
  const experienceTimeline = document.getElementById('experience-timeline');
  experienceTimeline.innerHTML = experience.map(exp => 
    `<div class="timeline-item">
      <div class="timeline-date">${exp.period} · ${exp.company} · ${exp.location}</div>
      <h3>${exp.role}</h3>
      <ul>
        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>
      <div class="stack-line">Tech: ${exp.technologies}</div>
    </div>`
  ).join('');

  // Education
  const educationGrid = document.getElementById('education-grid');
  educationGrid.innerHTML = education.map(edu => 
    `<div class="edu-card">
      <div class="edu-top">
        <h3>${edu.degree}</h3>
        <span class="tag">${edu.institution}</span>
      </div>
      <p>${edu.period}${edu.gpa ? ` · ${edu.gpa}` : ''}${edu.focus ? ` · ${edu.focus}` : ''}</p>
      ${edu.coursework ? `<p class="dim">${edu.coursework}</p>` : ''}
      ${edu.location ? `<p>${edu.location}</p>` : ''}
    </div>`
  ).join('');

  // Publications
  const publicationsList = document.getElementById('publications-list');
  publicationsList.innerHTML = publications.map(pub => 
    `<div class="list-item">
      <div>
        <h3>${pub.title}</h3>
        <p>${pub.venue} — ${pub.description}</p>
      </div>
      <span class="tag">${pub.tag}</span>
    </div>`
  ).join('');

  // Certifications
  const certificationsList = document.getElementById('certifications-list');
  certificationsList.innerHTML = certifications.map(cert => 
    `<div class="list-item">
      <div>
        <h3>${cert.name}</h3>
        <p>${cert.issuer}${cert.id ? ` · ${cert.id}` : ''}</p>
      </div>
      <span class="tag">${cert.status}</span>
    </div>`
  ).join('');

  // Contact
  const contactGrid = document.getElementById('contact-grid');
  contactGrid.innerHTML = `
    <div>
      <div class="contact-label">Email</div>
      <a href="mailto:${personal.email}">${personal.email}</a>
    </div>
    <div>
      <div class="contact-label">Phone</div>
      <a href="tel:${personal.phone.replace(/[^0-9+]/g, '')}">${personal.phone}</a>
    </div>
    <div>
      <div class="contact-label">GitHub</div>
      <a href="${personal.github}" target="_blank" rel="noreferrer">${personal.github.replace('https://github.com/', 'github.com/')}</a>
    </div>
  `;

  // Footer
  document.getElementById('footer-name').textContent = `${personal.name} — AI Engineer & LLM Systems`;
  document.getElementById('footer-location').textContent = `Based in ${personal.location}`;
}

// ===== PARTICLE CANVAS =====
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 80;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(118, 247, 216, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, i) => {
      particle.update();
      particle.draw();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[j].x - particle.x;
        const dy = particles[j].y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.strokeStyle = `rgba(118, 247, 216, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== NAVBAR EFFECTS =====
function initNavbarEffects() {
  const nav = document.querySelector('.nav');
  
  const updateNav = () => {
    if (window.scrollY > 18) {
      nav.style.background = 'rgba(10, 14, 24, 0.95)';
      nav.style.boxShadow = '0 18px 50px rgba(0,0,0,0.65)';
    } else {
      nav.style.background = 'rgba(10, 14, 24, 0.85)';
      nav.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.45)';
    }
  };
  
  window.addEventListener('scroll', updateNav);
  updateNav();
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// ===== HIDE LOADER =====
function hideLoader() {
  setTimeout(() => {
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
  }, 800);
}
