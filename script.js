document.addEventListener("DOMContentLoaded", function() {
  // Initialize Particles.js with a simplified black and white configuration
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 2, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // Initialize Leaflet map for the contact section
  var map = L.map('map').setView([22.5726, 88.3639], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([22.5726, 88.3639]).addTo(map)
    .bindPopup('Kolkata, India')
    .openPopup();

  // Enable smooth scrolling for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Data for projects
  const projects = [
    {
      title: "Dynamic Flight Pricing",
      description: "Processed 500 synthetic data for flight booking and user records, optimizing Decision Tree Regressor with 99.97% accuracy.",
      link: "https://github.com/saswata-maity/Dynamic-Flight-Pricing"
    },
    {
      title: "Credit Card Fraud Analysis",
      description: "Detailed analysis of fraudulent transactions by credit card for corresponding companies using MySQL.",
      link: "https://github.com/Saswata-Maity/fraud-transactions"
    },
    {
      title: "Heart Attack Prediction App",
      description: "Web app developed using Kaggle dataset to determine if a person has a high or low chance of heart attack.",
      link: "https://heartattackpred-webapp.onrender.com/"
    },
    {
      title: "Crop Disease Prediction",
      description: "Web app to classify plant disease type with 99.01% accuracy and 98.65% confidence using a custom CNN architecture.",
      link: "https://crop-disease-prediction-1kel.onrender.com/"
    }
  ];

  // Data for certifications
  const certifications = [
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      date: "November 13, 2023",
      link: "https://coursera.org/share/2bfddd8df47a60e1fe600e07e707e2eb"
    },
    {
      title: "Google IT Crash Course on Python",
      issuer: "Coursera",
      date: "June 6, 2023",
      link: "https://coursera.org/share/7c205309f91a772e9eb30045ebfa8197"
    },
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      date: "September 14, 2023",
      link: "https://www.hackerrank.com/certificates/fec12e2f45e5"
    },
    {
      title: "SQL TOP 50 BADGE (LeetCode)",
      issuer: "LEETCODE",
      date: "April 16, 2024",
      link: "https://leetcode.com/medal/?showImg=0&id=3182394&isLevel=false"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera (By Deeplearning.Ai)",
      date: "April 16, 2024",
      link: "https://coursera.org/share/7cbe07f39b3058ce14938bf56e53449d"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (By Deeplearning.Ai)",
      date: "February 1, 2025",
      link: "https://coursera.org/share/bf183daa93e360a34bcaf1c8399586df"
    }
  ];

  // Functions to create HTML for project and certification items
  function createProjectItem(project) {
    return `
      <div class="website-item">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn" target="_blank">View Project</a>
      </div>
    `;
  }

  function createCertificationItem(cert) {
    return `
      <div class="cert-item">
        <h3>${cert.title}</h3>
        <p>${cert.issuer} - ${cert.date}</p>
        <a href="${cert.link}" class="btn" target="_blank">View Certificate</a>
      </div>
    `;
  }

  // Dynamically populate the projects and certifications sections
  document.getElementById('projects-grid').innerHTML = projects.map(createProjectItem).join('');
  document.getElementById('certifications-grid').innerHTML = certifications.map(createCertificationItem).join('');
});
