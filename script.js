// ========== YOUR LINKS (EDIT HERE) ==========
// Put your link between the quotes. Leave "" empty to hide that icon.
const LINKS = {
  telegram:  "https://t.me/Muusa_Rabiic",   
  whatsapp:  "https://wa.me/25907549864",   
  instagram: "https://instagram.com/RABIIC_JULDHE",   
  facebook:  "",   
//  email:     "",  
  github:    "https://github.com/Musse-mo", 
  linkedin:  "",  
};

const ICONS = {
  telegram:  "fa-brands fa-telegram",
  whatsapp:  "fa-brands fa-whatsapp",
  instagram: "fa-brands fa-instagram",
  facebook:  "fa-brands fa-facebook",
  email:     "fa-solid fa-envelope",
  github:    "fa-brands fa-github",
  linkedin:  "fa-brands fa-linkedin",
};

// Builds the icon buttons inside any element you give it
function renderSocials(containerId) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = Object.keys(LINKS)
    .filter((name) => LINKS[name])
    .map((name) => `
      <a href="${LINKS[name]}" target="_blank" rel="noopener" title="${name}">
        <i class="${ICONS[name]}"></i>
      </a>`)
    .join("");
}

renderSocials("home-socials");





// ========== YOUR SKILLS (EDIT HERE) ==========
// Each group becomes one card.
// color can be: "blue", "green", "purple" or "amber"
// A card shows EITHER "list" (wide boxes with a small subtitle)
// OR "items" (small chips). Delete the one you don't use.
// Icons are Font Awesome names, e.g. "fa-solid fa-code"
const SKILLS = [
  {
    title: "Software Development",
    desc: "Building interactive applications for web, mobile and games.",
    icon: "fa-solid fa-code",
    color: "blue",
    list: [
      { icon: "fa-solid fa-gamepad",       name: "Game Development",       sub: "OpenGL • Game Logic" },
      { icon: "fa-solid fa-mobile-screen", name: "Full-Stack Development", sub: "App Development" },
    ],
  },
  {
    title: "Networking",
    desc: "Designing networks, configuring devices and understanding how systems connect.",
    icon: "fa-solid fa-sitemap",
    color: "green",
    items: [
      { icon: "fa-solid fa-location-dot", name: "IP Addressing" },
      { icon: "fa-solid fa-sitemap",      name: "Subnetting" },
      { icon: "fa-solid fa-laptop",       name: "LANs" },
      { icon: "fa-solid fa-ethernet",     name: "Routers & Switches" },
      { icon: "fa-solid fa-gear",         name: "Network Configurations" },
      { icon: "fa-solid fa-server",       name: "TCP/IP" },
      { icon: "fa-solid fa-phone-volume", name: "VoIP / XiVO" },
      { icon: "fa-solid fa-diagram-project", name: "VLANs" },
    ],
  },
  {
    title: "Programming",
    desc: "Writing clean, efficient code using different programming languages.",
    icon: "fa-solid fa-code",
    color: "purple",
    items: [
      { icon: "fa-brands fa-html5",    name: "HTML" },
      { icon: "fa-brands fa-css3-alt", name: "CSS" },
      { icon: "fa-brands fa-js",       name: "JavaScript" },
      { icon: "fa-solid fa-c",         name: "C++" },
      { icon: "fa-brands fa-python",   name: "Python" },
      { icon: "fa-brands fa-java",     name: "Java" },
      { icon: "fa-brands fa-php",      name: "PHP" },
      { icon: "fa-solid fa-circle-plus", name: "and more" },
    ],
  },
  {
    title: "Tools & Platforms",
    desc: "Using the right tools to develop, manage and deploy projects.",
    icon: "fa-solid fa-screwdriver-wrench",
    color: "amber",
    items: [
      { icon: "fa-solid fa-code",      name: "VS Code" },
      { icon: "fa-brands fa-git-alt",  name: "Git & GitHub" },
      { icon: "fa-brands fa-linux",    name: "Linux" },
      { icon: "fa-solid fa-cube",      name: "VirtualBox" },
      { icon: "fa-solid fa-phone",     name: "XiVO" },
      { icon: "fa-solid fa-sitemap",   name: "Cisco Packet Tracer" },
    ],
  },
  {
    title: "Problem-Solving Skills",
    desc: "Analyzing challenges and finding creative solutions.",
    icon: "fa-solid fa-lightbulb",
    color: "blue",
    items: [
      { icon: "fa-solid fa-brain",        name: "Logical Thinking" },
      { icon: "fa-solid fa-puzzle-piece", name: "Critical Thinking" },
      { icon: "fa-solid fa-bug",          name: "Debugging" },
      { icon: "fa-solid fa-chart-line",   name: "Analytical Thinking" },
      { icon: "fa-solid fa-palette",      name: "Creativity" },
      { icon: "fa-solid fa-mountain",     name: "Persistence" },
    ],
  },
  {
    title: "Communication Skills",
    desc: "Working well with others and explaining ideas clearly.",
    icon: "fa-solid fa-users",
    color: "green",
    items: [
      { icon: "fa-solid fa-people-group",   name: "Teamwork" },
      { icon: "fa-solid fa-comment-dots",   name: "Clear Communication" },
      { icon: "fa-solid fa-chalkboard-user", name: "Explaining Technical Concepts" },
      { icon: "fa-solid fa-ear-listen",     name: "Active Listening" },
      { icon: "fa-solid fa-microphone",     name: "Presentation" },
      { icon: "fa-solid fa-arrows-rotate",  name: "Adaptability" },
    ],
  },
];

// Builds the skill cards (you don't need to edit this part)
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map((group) => {
    const list = group.list
      ? `<div class="skill-list">
          ${group.list.map((it) => `
            <div class="skill-item">
              <i class="${it.icon}"></i>
              <div><h4>${it.name}</h4><small>${it.sub || ""}</small></div>
            </div>`).join("")}
        </div>`
      : "";

    const chips = group.items
      ? `<div class="skill-chips">
          ${group.items.map((it) => `<span><i class="${it.icon}"></i>${it.name}</span>`).join("")}
        </div>`
      : "";

    return `
      <div class="skill-card ${group.color}">
        <div class="skill-top">
          <div class="skill-icon"><i class="${group.icon}"></i></div>
          <div><h3>${group.title}</h3><p>${group.desc}</p></div>
        </div>
        ${list}${chips}
      </div>`;
  }).join("");
}

renderSkills();


// ========== THEME TOGGLE ==========
const html = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");

// Load saved theme (default is dark)
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
});

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
}

// ========== HIGHLIGHT ACTIVE MENU LINK WHILE SCROLLING ==========
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

// ========== SLIDE IN WHEN A SECTION SCROLLS INTO VIEW ==========
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }   // starts when 20% of the section is on screen
);

document.querySelectorAll("section").forEach((sec) => revealObserver.observe(sec));



// ========== YOUR PROJECTS (EDIT HERE) ==========
// Each { ... }, block is one project card.
// To add a project: copy one block and change the text.
// To remove a project: delete its whole block.
// Leave link: "" if the project has no link.
const PROJECTS = [
  // {
  //   title: "Aeroplane Game",
  //   desc: "A 3-level obstacle game built with C++ and OpenGL.",
  //   tags: ["C++", "OpenGL"],
  //   link: "",   // example: "https://github.com/yourusername/aeroplane-game"
  // },
  // {
  //   title: "My Portfolio",
  //   desc: "This website, built with HTML, CSS and JavaScript.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   link: "",
  // },
];

// Builds the project cards 
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (PROJECTS.length === 0) {
    grid.innerHTML = `<p class="projects-empty">Keep in eye, More Projects coming soon.</p>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((p) => `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span>${t}</span>`).join("")}
      </div>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project →</a>` : ""}
    </div>`).join("");
}

renderProjects();






// ========== CONTACT CARDS (built from the LINKS list at the top) ==========
const CONTACT_LABELS = {
  telegram:  "Telegram",
  whatsapp:  "WhatsApp",
  instagram: "Instagram",
  facebook:  "Facebook",
  email:     "Email",
  github:    "GitHub",
  linkedin:  "LinkedIn",
};

function renderContact() {
  const grid = document.getElementById("contact-grid");
  if (!grid) return;

  const filled = Object.keys(LINKS).filter((name) => LINKS[name]);

  if (filled.length === 0) {
    grid.innerHTML = `<p class="projects-empty">Add your links in the LINKS list in script.js to show them here.</p>`;
    return;
  }

  grid.innerHTML = filled.map((name) => `
    <a class="contact-card" href="${LINKS[name]}" target="_blank" rel="noopener">
      <i class="${ICONS[name]}"></i>
      <h3>${CONTACT_LABELS[name]}</h3>
      <span>${name === "email" ? "Send me a message" : "Get in touch"}</span>
    </a>`).join("");
}

renderContact();