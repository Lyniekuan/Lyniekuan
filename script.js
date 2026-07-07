/* ==============================================================
   LYNIE KUAN — PORTFOLIO SCRIPT
   Everything content-related lives in DATA below. Edit this
   object to update text, links, projects, gallery, timeline,
   and skills without touching markup or animation logic.

   GALLERY DATA MODEL (two-level, by design):
   DATA.gallery is a list of PROJECTS, not individual screenshots.
   Each project has one `cat` (Posters / UI Design / Logo / etc.)
   and an `images` array holding every screen/page that belongs to
   that project. The grid always renders one card per PROJECT
   (using images[0] as the cover). Clicking the category filters
   above the grid narrows which project cards are visible; it
   never explodes a project into separate cards. Clicking a card
   opens the lightbox scoped to that project's own `images` array
   only — Next/Prev can never leak into another project's screens.
   To add a new project: add ONE new entry to DATA.gallery with
   all of its screens listed under `images`. Do NOT add a separate
   gallery entry per screenshot.
   ============================================================== */

const DATA = {
  // Set photo to e.g. "assets/images/profile.jpg" to replace the "LK"
  // initials in the About section with a real photo. Leave it "" to
  // keep the initials.
  profile: {
    photo: "assets/images/GRADUATEPICTURE.jpg"
  },

  socials: {
    email: "kuanlynie@gmail.com",
    github: "https://github.com/lyniekuan",
    linkedin: "https://linkedin.com/in/kuanlynie",
    facebook: "https://www.facebook.com/lynie.kuan.2024"
  },

  skills: [
    { name:"UI Design",          cat:"Design",       icon:"pen" },
    { name:"UX Design",          cat:"Design",       icon:"layers" },
    { name:"Figma",              cat:"Tool",         icon:"shape" },
    { name:"Canva",              cat:"Tool",         icon:"palette" },
    { name:"HTML",               cat:"Code",         icon:"code" },
    { name:"CSS",                cat:"Code",         icon:"code" },
    { name:"JavaScript",         cat:"Code",         icon:"code" },
    { name:"Responsive Design",  cat:"Design",       icon:"devices" },
    { name:"Wireframing",        cat:"Design",       icon:"grid" },
    { name:"Prototyping",        cat:"Design",       icon:"cursor-click" },
    { name:"Microsoft Office",   cat:"Productivity", icon:"briefcase" },
    { name:"Google Workspace",   cat:"Productivity", icon:"cloud" },
    { name:"Data Entry",         cat:"VA",           icon:"keyboard" },
    { name:"Communication",      cat:"Soft Skill",   icon:"chat" },
    { name:"Time Management",    cat:"Soft Skill",   icon:"clock" }
  ],

  // Add a real screenshot by setting `image: "path/or/url.jpg"` — the
  // gradient icon tile is only a placeholder until a real image is added.
  // `role` and `tools` render as their own labeled rows on the card;
  // set `capstone:true` (with a `year` string) to show the capstone badge.
  projects: [
    { title:"Contact Management Mobile App", image:"",
      desc:"Designed and developed a mobile application for storing and managing contact information using MIT App Inventor. The app allows users to add, edit, delete, and organize contacts through a simple and user-friendly interface.",
      role:"Team Leader & Mobile App Developer",
      tools:["MIT App Inventor"],
      capstone:false, year:"Second Year College",
      icon:"smartphone" },
    { title:"The Twelve Disciples Portfolio Website", image:"",
      desc:"Designed and developed a static website showcasing information about the Twelve Disciples. The project focused on creating a clean layout, responsive design, and an engaging user experience using front-end technologies.",
      role:"Front-end Developer & UI Designer",
      tools:["HTML","CSS","JavaScript"],
      capstone:false, year:"Third Year College",
      icon:"grid" },
    { title:"Guitar E-commerce Website", image:"",
      desc:"Collaborated on the development of a guitar e-commerce website that allows users to browse products and make purchases. As the team leader, I managed project planning, coordinated team tasks, and ensured the project met its milestones, while another team member handled the UI design.",
      role:"Team Leader & Project Coordinator",
      tools:["HTML","CSS","JavaScript","PHP","MySQL"],
      capstone:false, year:"Third Year College",
      icon:"cart" },
    { title:"IoT-Based Smart Shopping Trolley with Automatic Billing", image:"assets/images/IOTCART.jpg",
      desc:"Led the development of an IoT-based smart shopping trolley designed to automate product detection and billing, helping reduce checkout time and improve the shopping experience. As the team leader, I coordinated the team's workflow, managed project planning, delegated tasks, and oversaw the successful completion of the capstone project while contributing to system design and documentation.",
      role:"Team Leader",
      tools:["Arduino IDE","Barcode Scanner","Weight Sensor","React Native","Firebase"],
      capstone:true, year:"Fourth Year College (Thesis)",
      icon:"cpu" }
  ],

  // Each gallery entry is ONE PROJECT/tile in the grid — `images` holds
  // every picture that belongs to that project. A tile with 4 images
  // (like a 4-screen app design) still shows as a single card; clicking
  // it opens a lightbox where Next/Prev cycles through only that
  // project's own images. Give a project multiple images by listing
  // them in order; give it one image by listing just one.
  galleryCats: ["All","Posters","Social Media","UI Design","Logo","Presentations"],
  gallery: [
    { title:"Brochure Design",        cat:"Posters",       icon:"image",        tall:true,
      images:["assets/images/BROCHUREFRONT.png","assets/images/BROCHUREBACK.png"] },
    { title:"Instagram Carousel Set", cat:"Social Media",  icon:"share",        tall:false, images:[""] },
    { title:"Facebook Campaign Ad",   cat:"Social Media",  icon:"share",        tall:true,  images:[""] },
    { title:"Solar App UI",           cat:"UI Design",     icon:"smartphone",   tall:true,
      images:["assets/images/SOLARHOME.png","assets/images/SOLARCALCULATE.png","assets/images/SOLARTIPS.png","assets/images/SOLARABOUT.png"] },
    { title:"Brand Logo Mark",        cat:"Logo",          icon:"tag",          tall:false, images:[""] },
    { title:"Logo Variations",        cat:"Logo",          icon:"tag",          tall:false, images:[""] },
    { title:"Pitch Deck Cover",       cat:"Presentations", icon:"presentation", tall:true,  images:[""] },
    { title:"Slide Layout System",    cat:"Presentations", icon:"presentation", tall:false, images:[""] },
    { title:"Story Highlight Icons",  cat:"Social Media",  icon:"share",        tall:false, images:[""] },
    { title:"Minimal Poster Series",  cat:"Posters",       icon:"image",        tall:false,
      images:["assets/images/BALANCE.png","assets/images/FOCUS.png","assets/images/GROWTH.png","assets/images/HORIZON.png","assets/images/FLOW.png","assets/images/SILENCE.png","assets/images/TIME.png","assets/images/ENERGY.png"] }
  ],

  timeline: [
    { date:"2022 – 2026", title:"Bachelor of Science in Computer Science", org:"Don Mariano Marcos Memorial State University",
      desc:"Focused on software development, web technologies, database management, and user interface design. Completed academic projects involving UI/UX design and front-end development.", type:"education" },
    { date:"2023 – 2026", title:"Started Academic Design & Development Projects", org:"Coursework",
      desc:"Began creating UI/UX designs and web applications through academic coursework, applying design principles, prototyping, and front-end development using HTML, CSS, and JavaScript.", type:"project" },
    { date:"2022", title:"Computer Systems Servicing NC II (CSS NC II)", org:"TESDA",
      desc:"National Certificate II in Computer Systems Servicing, covering computer hardware installation, troubleshooting, maintenance, and networking fundamentals.", type:"certification" },
    { date:"2024", title:"Natural Language Processing (NLP)", org:"Great Learning Academy",
      desc:"Completed training on Natural Language Processing, covering the fundamentals of text processing and AI language technologies.", type:"certification" }
  ],

  whyHireMe: [
    { title:"Fast Learner", icon:"rocket",
      desc:"I pick up new tools and workflows quickly, and I'm comfortable being a beginner in service of getting better." },
    { title:"Detail-Oriented", icon:"target",
      desc:"I sweat spacing, alignment, and consistency — the small things that make a design feel finished." },
    { title:"Creative Problem Solver", icon:"bulb",
      desc:"I enjoy untangling messy requirements into interfaces that feel obvious in hindsight." },
    { title:"Team Player", icon:"users",
      desc:"I communicate clearly, take feedback well, and care about the outcome as much as my part of it." },
    { title:"Passionate About Design", icon:"heart",
      desc:"Good design isn't a job to me — it's something I notice and think about everywhere I go." },
    { title:"Eager to Grow Professionally", icon:"trending-up",
      desc:"I'm early in my career and genuinely excited to be mentored, corrected, and pushed to improve." }
  ]
};

/* ---------------- ICON LIBRARY (hand-authored, stroke-based) ---------------- */
const ICON_PATHS = {
  "pen":"<path d='M12 20h9'/><path d='M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z'/>",
  "layers":"<path d='M12 3 3 8l9 5 9-5-9-5Z'/><path d='M3 13l9 5 9-5'/>",
  "shape":"<rect x='4' y='4' width='10' height='10' rx='2'/><circle cx='16' cy='16' r='5'/>",
  "palette":"<path d='M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.5-1.5-1-2 .2-2 1.5-2H17a4 4 0 0 0 4-4c0-5-4-8-9-8Z'/><circle cx='7.5' cy='10.5' r='1' fill='currentColor' stroke='none'/><circle cx='11' cy='7' r='1' fill='currentColor' stroke='none'/><circle cx='15' cy='8' r='1' fill='currentColor' stroke='none'/>",
  "code":"<polyline points='9 8 4 12 9 16'/><polyline points='15 8 20 12 15 16'/>",
  "devices":"<rect x='2' y='4' width='14' height='10' rx='1.5'/><rect x='17' y='9' width='5' height='10' rx='1.2'/><line x1='6' y1='18' x2='12' y2='18'/>",
  "grid":"<rect x='3' y='3' width='7' height='7' rx='1.2'/><rect x='14' y='3' width='7' height='7' rx='1.2'/><rect x='3' y='14' width='7' height='7' rx='1.2'/><rect x='14' y='14' width='7' height='7' rx='1.2'/>",
  "cursor-click":"<path d='M5 3l4.5 16.5 2.2-6.3L18 11 5 3Z'/><line x1='14' y1='14' x2='19' y2='19'/>",
  "briefcase":"<rect x='3' y='7' width='18' height='13' rx='2'/><path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/><line x1='3' y1='12' x2='21' y2='12'/>",
  "cloud":"<path d='M7 18a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.4 8.02 4 4 0 0 1 17 18H7Z'/>",
  "keyboard":"<rect x='2' y='6' width='20' height='12' rx='2'/><line x1='6' y1='10' x2='6' y2='10.01'/><line x1='10' y1='10' x2='10' y2='10.01'/><line x1='14' y1='10' x2='14' y2='10.01'/><line x1='18' y1='10' x2='18' y2='10.01'/><line x1='6' y1='14' x2='18' y2='14'/>",
  "chat":"<path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z'/>",
  "clock":"<circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/>",
  "mail":"<rect x='2' y='4' width='20' height='16' rx='2'/><path d='m2 7 10 6 10-6'/>",
  "github":"<path d='M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z'/>",
  "linkedin":"<rect x='3' y='3' width='18' height='18' rx='3'/><line x1='7.5' y1='10' x2='7.5' y2='17'/><circle cx='7.5' cy='6.8' r='1.1' fill='currentColor' stroke='none'/><path d='M11.5 17v-4.2c0-1.6 1-2.6 2.4-2.6 1.4 0 2.1 1 2.1 2.6V17'/><line x1='11.5' y1='10' x2='11.5' y2='17'/>",
  "facebook":"<path d='M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v3.5H8V21h3.5v-7.5h2.6L15 10h-3.5V7.8c0-.9.4-1.3 1.3-1.3H15V3Z'/>",
  "external":"<path d='M7 17 17 7'/><path d='M8 7h9v9'/>",
  "graduation-cap":"<path d='M22 9 12 4 2 9l10 5 10-5Z'/><path d='M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5'/>",
  "folder":"<path d='M3 6a1.5 1.5 0 0 1 1.5-1.5h4l2 2.2H19.5A1.5 1.5 0 0 1 21 8.2V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18Z'/>",
  "award":"<circle cx='12' cy='8.5' r='5.5'/><path d='M8.2 13.3 6.5 21l5.5-3 5.5 3-1.7-7.7'/>",
  "star":"<path d='M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.5L12 17l-5.9 3.4 1.2-6.5-4.8-4.6 6.6-.8Z'/>",
  "rocket":"<path d='M12 2c3 1 5 4 5 8 0 3-2 6-5 9-3-3-5-6-5-9 0-4 2-7 5-8Z'/><circle cx='12' cy='9' r='2'/><path d='M8 17l-3 4'/><path d='M16 17l3 4'/>",
  "target":"<circle cx='12' cy='12' r='8.5'/><circle cx='12' cy='12' r='5'/><circle cx='12' cy='12' r='1.5' fill='currentColor' stroke='none'/>",
  "bulb":"<path d='M9 18h6'/><path d='M10 21h4'/><path d='M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.7V16h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0 0 12 3Z'/>",
  "users":"<circle cx='9' cy='8' r='3.2'/><path d='M3 19c0-3 2.7-5 6-5s6 2 6 5'/><circle cx='17' cy='8.5' r='2.6'/><path d='M15.5 14c2.5.3 4.5 2 4.5 5'/>",
  "heart":"<path d='M12 20.5s-7.5-4.6-9.8-9.3C.7 7.8 2.5 4.5 6 4.5c2 0 3.4 1 6 3.8 2.6-2.8 4-3.8 6-3.8 3.5 0 5.3 3.3 3.8 6.7C19.5 15.9 12 20.5 12 20.5Z'/>",
  "trending-up":"<polyline points='3 17 9.5 10.5 14 15 21 8'/><polyline points='15 8 21 8 21 14'/>",
  "smartphone":"<rect x='6' y='2' width='12' height='20' rx='2.2'/><line x1='10' y1='19' x2='14' y2='19'/>",
  "utensils":"<path d='M7 2v6a2 2 0 0 0 4 0V2'/><path d='M9 10v12'/><path d='M17 2c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4v10'/>",
  "cart":"<circle cx='9' cy='20' r='1.3' fill='currentColor' stroke='none'/><circle cx='18' cy='20' r='1.3' fill='currentColor' stroke='none'/><path d='M2.5 3h2l2.6 12.3a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H6'/>",
  "id-card":"<rect x='2.5' y='5' width='19' height='14' rx='2'/><circle cx='8.5' cy='11' r='2'/><path d='M5.5 16c.5-1.8 1.7-2.6 3-2.6s2.5.8 3 2.6'/><line x1='14.5' y1='9.5' x2='18.5' y2='9.5'/><line x1='14.5' y1='13' x2='18.5' y2='13'/>",
  "user":"<circle cx='12' cy='8' r='3.4'/><path d='M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2'/>",
  "tools":"<path d='M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.6-2.6z'/>",
  "cpu":"<rect x='7' y='7' width='10' height='10' rx='1.5'/><line x1='9' y1='2' x2='9' y2='6'/><line x1='15' y1='2' x2='15' y2='6'/><line x1='9' y1='18' x2='9' y2='22'/><line x1='15' y1='18' x2='15' y2='22'/><line x1='2' y1='9' x2='6' y2='9'/><line x1='2' y1='15' x2='6' y2='15'/><line x1='18' y1='9' x2='22' y2='9'/><line x1='18' y1='15' x2='22' y2='15'/>",
  "image":"<rect x='3' y='4' width='18' height='16' rx='2'/><circle cx='9' cy='10' r='1.7'/><path d='m3 17 5-5 4 4 3-3 6 6'/>",
  "share":"<circle cx='6' cy='12' r='2.4'/><circle cx='18' cy='6' r='2.4'/><circle cx='18' cy='18' r='2.4'/><line x1='8.1' y1='10.8' x2='15.9' y2='7.2'/><line x1='8.1' y1='13.2' x2='15.9' y2='16.8'/>",
  "tag":"<path d='M20.5 12.5 12.8 20.2a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8L11.5 3.5 20.5 4Z'/><circle cx='16' cy='8' r='1.3' fill='currentColor' stroke='none'/>",
  "presentation":"<path d='M3 4h18'/><path d='M5 4v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4'/><path d='M12 16v4'/><path d='M9 20h6'/><path d='M8 12l3-3 2 2 3-3'/>",
  "send":"<path d='M22 2 11 13'/><path d='M22 2 15 22l-4-9-9-4Z'/>",
  "check":"<polyline points='4 12 9 17 20 6'/>",
  "chevron-left":"<polyline points='15 18 9 12 15 6'/>",
  "chevron-right":"<polyline points='9 18 15 12 9 6'/>"
};
function icon(name, extra){
  const p = ICON_PATHS[name] || ICON_PATHS.star;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="${extra||''}">${p}</svg>`;
}

/* ---------------- RENDER FUNCTIONS ---------------- */

function renderSkills(){
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = DATA.skills.map(s => `
    <div class="skill-card glass tilt">
      <div class="sc-icon">${icon(s.icon)}</div>
      <div class="sc-name">${s.name}</div>
      <div class="sc-cat">${s.cat}</div>
    </div>
  `).join('');
}

function projectCover(p){
  if(p.image){
    return `<img src="${p.image}" alt="${p.title} cover image" loading="lazy" decoding="async">`;
  }
  return `<div class="pc-icon">${icon(p.icon)}</div>`;
}

function renderProjects(){
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = DATA.projects.map((p,i) => `
    <article class="project-card glass reveal">
      <div class="project-cover${p.image ? ' has-image' : ''}" data-index="${i}" style="background:${coverGradient(i)}"${p.image ? ` tabindex="0" role="button" aria-label="View full ${p.title} image"` : ''}>
        ${projectCover(p)}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-divider"></div>
        <div class="project-meta-row">
          <div class="pm-icon">${icon('user')}</div>
          <div>
            <div class="pm-label">Role</div>
            <div class="pm-value">${p.role}</div>
          </div>
        </div>
        <div class="project-meta-row">
          <div class="pm-icon">${icon('tools')}</div>
          <div>
            <div class="pm-label">Tools</div>
            <div class="pm-tools">${p.tools.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          </div>
        </div>
        ${p.capstone ? `
        <div class="project-meta-row">
          <div class="pm-icon">${icon('graduation-cap')}</div>
          <div>
            <div class="pm-label">Capstone Project</div>
            <div class="pm-value">${p.year}</div>
          </div>
        </div>` : ''}
      </div>
    </article>
  `).join('');
}

function coverGradient(i){
  const angles = [135,115,150,120,140,110];
  const a = angles[i % angles.length];
  return `linear-gradient(${a}deg, rgba(124,92,255,0.28), rgba(18,18,27,0.9) 60%)`;
}

function renderGalleryFilters(){
  const wrap = document.getElementById('gallery-filters');
  wrap.innerHTML = DATA.galleryCats.map((c,i)=>`
    <button class="g-filter${i===0?' active':''}" data-cat="${c}">${c}</button>
  `).join('');
}

function galleryCover(g){
  const first = g.images && g.images[0];
  if(first){
    return `<img src="${first}" alt="${g.title}" loading="lazy" decoding="async">`;
  }
  return icon(g.icon);
}

/* Renders ONE CARD PER PROJECT (DATA.gallery entry) — never one card
   per screenshot. `images.length` many screens live behind a single
   card and are only revealed in the lightbox after a click. */
function renderGallery(){
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = DATA.gallery.map((g,i) => `
    <div class="g-item reveal" data-cat="${g.cat}" data-index="${i}" tabindex="0" role="button" aria-label="Open ${g.title}${g.images.length>1?', '+g.images.length+' screens':''}">
      <div class="g-cover" style="height:${g.tall? '300px':'210px'};background:${coverGradient(i)}">
        ${galleryCover(g)}
        ${g.images.length > 1 ? `<span class="g-count">${icon('layers')}${g.images.length}</span>` : ''}
      </div>
      <div class="g-overlay">
        <div class="g-title">${g.title}</div>
        <div class="g-cat">${g.cat}</div>
      </div>
    </div>
  `).join('');
}

const TYPE_ICON = { education:"graduation-cap", project:"folder", certification:"award", skill:"star" };
function renderTimeline(){
  const wrap = document.getElementById('timeline-list');
  wrap.innerHTML = DATA.timeline.map((t,i) => `
    <div class="t-row ${i%2===1?'right':''}">
      <div class="t-card glass reveal">
        <span class="t-date">${t.date}</span>
        <div class="t-title">${t.title}</div>
        <div class="t-org">${t.org}</div>
        <p class="t-desc">${t.desc}</p>
        <span class="t-type">${t.type}</span>
      </div>
      <div class="t-node"><div class="dotwrap">${icon(TYPE_ICON[t.type]||'star')}</div></div>
    </div>
  `).join('');
}

function renderWhy(){
  const grid = document.getElementById('why-grid');
  grid.innerHTML = DATA.whyHireMe.map(w => `
    <div class="why-card glass reveal">
      <div class="why-icon">${icon(w.icon)}</div>
      <h3 class="why-title">${w.title}</h3>
      <p class="why-desc">${w.desc}</p>
    </div>
  `).join('');
}

function renderContactLinks(){
  const emailSet = DATA.socials.email && DATA.socials.email !== 'YOUR_EMAIL_HERE';
  if(!emailSet){
    console.warn('[portfolio] DATA.socials.email is still a placeholder — update it in the DATA object before publishing.');
  }
  const emailLabel = emailSet ? DATA.socials.email : 'Add your email in DATA.socials';
  // Gmail compose link — clicking this always opens Gmail directly
  // (in a new tab) instead of relying on the visitor's default mail app.
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(DATA.socials.email)}`;
  const wrap = document.getElementById('contact-links');
  wrap.innerHTML = `
    <a href="${gmailLink}" target="_blank" rel="noopener"><span class="ic">${icon('mail')}</span>${emailLabel}</a>
    <a href="${DATA.socials.github}" target="_blank" rel="noopener"><span class="ic">${icon('github')}</span>GitHub</a>
    <a href="${DATA.socials.linkedin}" target="_blank" rel="noopener"><span class="ic">${icon('linkedin')}</span>LinkedIn</a>
    <a href="${DATA.socials.facebook}" target="_blank" rel="noopener"><span class="ic">${icon('facebook')}</span>Facebook</a>
  `;
  const footer = document.getElementById('footer-social');
  footer.innerHTML = `
    <a href="${gmailLink}" target="_blank" rel="noopener" aria-label="Email">${icon('mail')}</a>
    <a href="${DATA.socials.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon('github')}</a>
    <a href="${DATA.socials.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')}</a>
    <a href="${DATA.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook')}</a>
  `;
}

function renderProfile(){
  const path = DATA.profile && DATA.profile.photo;
  if(!path) return; // no photo set — keep the "LK" initials as-is
  const card = document.getElementById('about-card');
  const test = new Image();
  test.onload = () => {
    card.innerHTML = `<img id="profile-photo" src="${path}" alt="Photo of Lynie Kuan" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;cursor:zoom-in;">`;
    const photoEl = document.getElementById('profile-photo');
    photoEl.addEventListener('click', ()=>{
      openLightboxItem({
        title:'Graduation Photo', cat:'Profile', icon:'image', images:[path],
        bg:'linear-gradient(135deg, rgba(124,92,255,0.28), rgba(18,18,27,0.9) 60%)'
      });
    });
  };
  test.onerror = () => {
    console.warn('[portfolio] profile photo failed to load at "' + path + '" — showing initials instead. Check the file path.');
  };
  test.src = path;
}

function renderCounts(){
  document.getElementById('meta-projects').textContent = DATA.projects.length;
  document.getElementById('meta-skills').textContent = DATA.skills.length;
}

/* ---------------- PRELOADER ---------------- */
function initPreloader(onDone){
  const el = document.getElementById('preloader');
  const fill = document.getElementById('preload-fill');
  let p = 0;
  const t = setInterval(()=>{
    p += Math.random()*18;
    if(p >= 100){
      p = 100;
      clearInterval(t);
      fill.style.width = p + '%';
      setTimeout(()=>{
        el.classList.add('done');
        document.body.classList.remove('lock');
        if(onDone) onDone();
      }, 380);
      return;
    }
    fill.style.width = p + '%';
  }, 120);
}

/* ---------------- CUSTOM CURSOR ---------------- */
function initCursor(){
  if(window.matchMedia('(hover:none),(pointer:coarse)').matches) return;
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if(!dot || !ring) return;
  let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
  window.addEventListener('mousemove', e=>{
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  (function loop(){
    rx += (mx-rx)*0.16; ry += (my-ry)*0.16;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  const hoverables = 'a, button, .skill-card, .g-item, .project-card, input, textarea';
  document.addEventListener('mouseover', e=>{
    if(e.target.closest(hoverables)) ring.classList.add('is-active');
  });
  document.addEventListener('mouseout', e=>{
    if(e.target.closest(hoverables)) ring.classList.remove('is-active');
  });
}

/* ---------------- MAGNETIC BUTTONS ---------------- */
function initMagnetic(){
  const els = document.querySelectorAll('.magnetic');
  const isCoarse = window.matchMedia('(hover:none),(pointer:coarse)').matches;
  if(isCoarse) return;
  els.forEach(el=>{
    el.addEventListener('mousemove', e=>{
      const r = el.getBoundingClientRect();
      const relX = e.clientX - r.left - r.width/2;
      const relY = e.clientY - r.top - r.height/2;
      el.style.transform = `translate(${relX*0.28}px, ${relY*0.35}px)`;
    });
    el.addEventListener('mouseleave', ()=>{
      el.style.transform = 'translate(0,0)';
    });
  });
}

/* ---------------- NAV + MOBILE MENU ---------------- */
function initNav(){
  const nav = document.getElementById('site-nav');
  const onScroll = ()=> nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const setOpen = (open)=>{
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('lock', open);
  };
  toggle.addEventListener('click', ()=> setOpen(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> setOpen(false)));
}

/* ---------------- TILT CARDS (skills) ---------------- */
function initTilt(){
  if(window.matchMedia('(hover:none),(pointer:coarse)').matches) return;
  document.querySelectorAll('.tilt').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width - 0.5;
      const py = (e.clientY - r.top)/r.height - 0.5;
      card.style.transform = `rotateY(${px*14}deg) rotateX(${-py*14}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = 'rotateY(0) rotateX(0)';
    });
  });
}

/* ---------------- SCROLL REVEAL + COUNTERS (GSAP) ---------------- */
function initScrollFx(){
  const hasGsap = window.gsap && window.ScrollTrigger;
  if(!hasGsap){
    // graceful fallback: just show everything, no animation
    document.querySelectorAll('.reveal').forEach(el=>{ el.style.opacity=1; el.style.transform='none'; });
    animateCountersFallback();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.reveal').forEach((el, i)=>{
    gsap.fromTo(el, { opacity:0, y:30 }, {
      opacity:1, y:0, duration:0.9, ease:'power3.out',
      scrollTrigger:{ trigger:el, start:'top 88%', once:true }
    });
  });

  // stagger grids specifically for a nicer cascade
  ['#skills-grid .skill-card','#projects-grid .project-card','#gallery-grid .g-item','#why-grid .why-card'].forEach(sel=>{
    const items = gsap.utils.toArray(sel);
    if(!items.length) return;
    gsap.fromTo(items, { opacity:0, y:26 }, {
      opacity:1, y:0, duration:0.7, ease:'power3.out', stagger:0.06,
      scrollTrigger:{ trigger:items[0].closest('section'), start:'top 78%', once:true }
    });
  });

  // counters
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target = parseInt(el.dataset.count, 10) || 0;
    const obj = { v:0 };
    gsap.to(obj, {
      v: target, duration:1.4, ease:'power2.out',
      onUpdate: ()=> el.textContent = Math.round(obj.v),
      scrollTrigger:{ trigger:el, start:'top 90%', once:true }
    });
  });

  // hero title lines rise in
  gsap.fromTo('.hero-title .line-inner', { yPercent:110 }, { yPercent:0, duration:1, ease:'power4.out', stagger:0.1, delay:0.15 });
  gsap.fromTo(['.hero-kicker','.hero-subtitle','.hero-actions','.hero-meta'],
    { opacity:0, y:18 },
    { opacity:1, y:0, duration:0.8, ease:'power3.out', stagger:0.12, delay:0.55 });
}

function animateCountersFallback(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    el.textContent = el.dataset.count;
  });
}

function setCounterTargets(){
  document.getElementById('stat-projects').dataset.count = DATA.projects.length;
  document.getElementById('stat-skills').dataset.count = DATA.skills.length;
  document.getElementById('stat-gallery').dataset.count = DATA.gallery.length;
  document.getElementById('meta-projects').textContent = DATA.projects.length;
  document.getElementById('meta-skills').textContent = DATA.skills.length;
}

/* ==============================================================
   HERO 3D SCENE — "the live design canvas"
   Floating UI frames (mobile / dashboard / card) linked by thin
   alignment-guide lines, a few abstract tool shapes, and a soft
   drifting particle field. Reacts gently to mouse parallax and
   auto-rotates, like a canvas caught mid-thought.
   ============================================================== */
function initHeroScene(){
  const canvas = document.getElementById('hero-canvas');
  const wrap = canvas.parentElement;
  if(!window.THREE){
    wrap.style.display = 'none';
    document.querySelector('.hero').classList.add('no-webgl');
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ACCENT = 0x7c5cff;
  const ACCENT_SOFT = 0xb8a6ff;

  let W = wrap.clientWidth, H = wrap.clientHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, W/H, 0.1, 100);
  camera.position.set(0, 0.2, 9);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(W, H);

  // lights
  scene.add(new THREE.AmbientLight(0x8f8fb8, 0.55));
  const keyLight = new THREE.PointLight(ACCENT, 14, 22);
  keyLight.position.set(3.5, 2.5, 4);
  scene.add(keyLight);
  const fillLight = new THREE.PointLight(0xffffff, 4, 22);
  fillLight.position.set(-4, -2, 3);
  scene.add(fillLight);

  const rig = new THREE.Group();
  scene.add(rig);

  // ---- helper: a "frame" = flat glass card + a couple of content bars ----
  function makeFrame(w, h, x, y, z, rotZ, barCount){
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.set(-0.12, 0.28, rotZ);

    const bodyGeo = new THREE.BoxGeometry(w, h, 0.045);
    const bodyMat = new THREE.MeshStandardMaterial({
      color:0x171722, transparent:true, opacity:0.62,
      metalness:0.25, roughness:0.35, emissive:0x2a1f66, emissiveIntensity:0.25
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    g.add(body);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(bodyGeo),
      new THREE.LineBasicMaterial({ color:ACCENT_SOFT, transparent:true, opacity:0.55 })
    );
    g.add(edges);

    // content bars (little UI placeholder lines)
    const barMat = new THREE.MeshBasicMaterial({ color:0xffffff, transparent:true, opacity:0.35 });
    for(let i=0;i<barCount;i++){
      const bw = w * (0.35 + Math.random()*0.35);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(bw, h*0.07, 0.02), barMat);
      bar.position.set(-w/2 + bw/2 + w*0.08, h/2 - h*0.16 - i*(h*0.19), 0.04);
      g.add(bar);
    }
    // one accent "button" chip on each frame
    const chip = new THREE.Mesh(
      new THREE.BoxGeometry(w*0.3, h*0.1, 0.03),
      new THREE.MeshBasicMaterial({ color:ACCENT, transparent:true, opacity:0.8 })
    );
    chip.position.set(-w/2 + w*0.3/2 + w*0.08, -h/2 + h*0.14, 0.04);
    g.add(chip);

    rig.add(g);
    return g;
  }

  const frameA = makeFrame(1.5, 2.5, -2.3, 0.5, 0.3, 0.05, 3);   // mobile-ish
  const frameB = makeFrame(2.6, 1.7, 1.5, 1.1, -0.6, -0.04, 2);  // dashboard-ish
  const frameC = makeFrame(1.5, 1.1, 0.6, -1.5, 0.9, 0.08, 1);   // small card

  // ---- alignment guide lines connecting frame corners ----
  function guideLine(p1, p2){
    const geo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    const mat = new THREE.LineDashedMaterial({ color:ACCENT_SOFT, transparent:true, opacity:0.28, dashSize:0.08, gapSize:0.08 });
    const line = new THREE.Line(geo, mat);
    line.computeLineDistances();
    rig.add(line);
    return line;
  }
  guideLine(new THREE.Vector3(-2.3,0.5,0.3), new THREE.Vector3(1.5,1.1,-0.6));
  guideLine(new THREE.Vector3(1.5,1.1,-0.6), new THREE.Vector3(0.6,-1.5,0.9));
  guideLine(new THREE.Vector3(0.6,-1.5,0.9), new THREE.Vector3(-2.3,0.5,0.3));

  // ---- abstract floating tool shapes ----
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.42, 0.09, 12, 40),
    new THREE.MeshStandardMaterial({ color:ACCENT, metalness:0.4, roughness:0.25, emissive:ACCENT, emissiveIntensity:0.35 })
  );
  torus.position.set(3.1, -1.3, -0.4);
  rig.add(torus);

  const ico = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.55, 0)),
    new THREE.LineBasicMaterial({ color:ACCENT_SOFT, transparent:true, opacity:0.6 })
  );
  ico.position.set(-3.4, -0.9, -0.8);
  rig.add(ico);

  const dot = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 16, 16),
    new THREE.MeshBasicMaterial({ color:0xffffff })
  );
  dot.position.set(2.0, 2.2, 1.1);
  rig.add(dot);

  // ---- particle field ----
  const PCOUNT = reduceMotion ? 0 : 260;
  let particles = null;
  if(PCOUNT){
    const positions = new Float32Array(PCOUNT*3);
    for(let i=0;i<PCOUNT;i++){
      positions[i*3]   = (Math.random()-0.5)*14;
      positions[i*3+1] = (Math.random()-0.5)*9;
      positions[i*3+2] = (Math.random()-0.5)*8 - 1;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color:ACCENT_SOFT, size:0.028, transparent:true, opacity:0.55, sizeAttenuation:true });
    particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);
  }

  // ---- mouse parallax ----
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  window.addEventListener('mousemove', e=>{
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
  });

  function onResize(){
    W = wrap.clientWidth; H = wrap.clientHeight;
    camera.aspect = W/H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  }
  window.addEventListener('resize', onResize);

  const clock = new THREE.Clock();

  function renderStatic(){
    renderer.render(scene, camera);
  }

  function tick(){
    const t = clock.getElapsedTime();
    targetX += (mouseX - targetX) * 0.04;
    targetY += (mouseY - targetY) * 0.04;

    rig.rotation.y = targetX * 0.35 + t * 0.045;
    rig.rotation.x = -targetY * 0.18;

    frameA.position.y = 0.5 + Math.sin(t*0.6) * 0.12;
    frameB.position.y = 1.1 + Math.sin(t*0.5 + 1.2) * 0.12;
    frameC.position.y = -1.5 + Math.sin(t*0.7 + 2.1) * 0.12;

    torus.rotation.x += 0.006;
    torus.rotation.y += 0.009;
    ico.rotation.x += 0.004;
    ico.rotation.y += 0.006;
    dot.position.y = 2.2 + Math.sin(t*1.1) * 0.15;

    if(particles) particles.rotation.y = t * 0.01;

    camera.position.x += (targetX*0.4 - camera.position.x) * 0.05;
    camera.position.y += (-targetY*0.25 - camera.position.y) * 0.05;
    camera.lookAt(0,0,0);

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  if(reduceMotion){
    renderStatic();
  } else {
    tick();
  }
}

/* ---------------- GALLERY FILTER + LIGHTBOX ----------------
   The lightbox is generic: it always opens an "item" —
   { title, cat, icon, images, bg } — regardless of whether that
   item came from DATA.gallery (a design project), DATA.projects
   (an academic project), or the profile photo. This guarantees the
   SAME contain-based, full-image, no-crop behavior everywhere a
   picture can be clicked, using the item's ORIGINAL image src(es),
   never a resized/cropped thumbnail.
   lbImageIndex only ever cycles within the CURRENT item's own
   `images` array — it never leaks into another project's screens.
   Closing the lightbox just returns to the page/grid underneath;
   it never shows a flat list of every screenshot from every project. */
let lbCurrentItem = null;
let lbImageIndex = 0;
let lbZoomed = false;

function galleryItemToLbItem(i){
  const g = DATA.gallery[i];
  return { title:g.title, cat:g.cat, icon:g.icon, images:g.images, bg:coverGradient(i) };
}

function initGallery(){
  const filters = document.querySelectorAll('.g-filter');
  const items = document.querySelectorAll('#gallery-grid .g-item');

  filters.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      items.forEach(it=>{
        const show = cat === 'All' || it.dataset.cat === cat;
        it.classList.toggle('hidden', !show);
      });
    });
  });

  items.forEach(it=>{
    const open = ()=> openLightboxItem(galleryItemToLbItem(parseInt(it.dataset.index,10)));
    it.addEventListener('click', open);
    it.addEventListener('keydown', e=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
    });
  });

  // academic project thumbnails (Projects section) open the same lightbox
  document.querySelectorAll('#projects-grid .project-cover.has-image').forEach(el=>{
    const i = parseInt(el.dataset.index, 10);
    const p = DATA.projects[i];
    const open = ()=> openLightboxItem({ title:p.title, cat:'Project', icon:p.icon, images:[p.image], bg:coverGradient(i) });
    el.addEventListener('click', open);
    el.addEventListener('keydown', e=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
    });
  });

  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', ()=> stepLightbox(-1));
  document.getElementById('lb-next').addEventListener('click', ()=> stepLightbox(1));
  document.getElementById('lightbox').addEventListener('click', e=>{
    if(e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', e=>{
    const lb = document.getElementById('lightbox');
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') stepLightbox(-1);
    if(e.key === 'ArrowRight') stepLightbox(1);
  });
}

function openLightboxItem(item){
  lbCurrentItem = item;
  lbImageIndex = 0;
  lbZoomed = false;
  paintLightbox();
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  document.body.classList.add('lock');
}

/* Renders exactly ONE image from the CURRENT item (lbCurrentItem),
   always from its original src — never a thumbnail. object-fit is
   always `contain` here (see .lightbox-frame img in CSS), so the
   complete image is visible regardless of aspect ratio. If the
   image is taller than the frame, the frame scrolls so every part
   stays reachable. Clicking the image toggles a zoomed (100%+) view. */
function paintLightbox(){
  const item = lbCurrentItem;
  const total = item.images.length;
  const src = item.images[lbImageIndex];
  const frame = document.getElementById('lb-frame');
  frame.style.background = item.bg || coverGradient(0);
  frame.classList.toggle('is-zoomed', lbZoomed);

  const media = src
    ? `<img id="lb-img" src="${src}" alt="${item.title} — image ${lbImageIndex+1}" class="${lbZoomed?'zoomed':''}">`
    : `<span class="lb-placeholder-icon">${icon(item.icon)}</span>`;
  frame.innerHTML = media;

  const img = document.getElementById('lb-img');
  if(img){
    img.addEventListener('click', ()=>{
      lbZoomed = !lbZoomed;
      img.classList.toggle('zoomed', lbZoomed);
      frame.classList.toggle('is-zoomed', lbZoomed);
    });
  }

  const counter = total > 1 ? ` · Image ${lbImageIndex+1} of ${total}` : '';
  document.getElementById('lb-title').textContent = item.title;
  document.getElementById('lb-cat').textContent = (item.cat || '') + counter;
  document.getElementById('lb-hint').textContent = src ? 'Click the image to zoom in' : '';

  // hide prev/next entirely when there's only one image to show
  const showNav = total > 1;
  document.getElementById('lb-prev').style.display = showNav ? '' : 'none';
  document.getElementById('lb-next').style.display = showNav ? '' : 'none';
}

function stepLightbox(dir){
  const total = lbCurrentItem.images.length;
  lbImageIndex = (lbImageIndex + dir + total) % total;
  lbZoomed = false;
  paintLightbox();
}

function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.classList.remove('lock');
}

/* ---------------- CONTACT FORM ----------------
   No backend is wired up yet. On submit, this validates the
   fields then opens Gmail compose in a new tab with the message
   pre-filled — guarantees Gmail specifically opens, rather than
   relying on the visitor's default mail app.

   To use a real form backend instead (recommended for production,
   since this still requires the visitor to be signed into Gmail
   in that browser), swap the try block in handleSubmit for a
   fetch() call to a service like Formspree, Web3Forms, or EmailJS, e.g.:

   fetch('https://formspree.io/f/yourFormId', {
     method:'POST', headers:{Accept:'application/json'}, body:formData
   })
------------------------------------------------- */
function initContactForm(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('cf-status');

  const fields = {
    name:    { el: document.getElementById('cf-name'),    wrap: document.getElementById('field-name') },
    email:   { el: document.getElementById('cf-email'),   wrap: document.getElementById('field-email') },
    message: { el: document.getElementById('cf-message'), wrap: document.getElementById('field-message') }
  };

  function validate(){
    let ok = true;
    const nameVal = fields.name.el.value.trim();
    const emailVal = fields.email.el.value.trim();
    const msgVal = fields.message.el.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    fields.name.wrap.classList.toggle('invalid', nameVal.length < 2);
    fields.email.wrap.classList.toggle('invalid', !emailRe.test(emailVal));
    fields.message.wrap.classList.toggle('invalid', msgVal.length < 5);

    if(nameVal.length < 2) ok = false;
    if(!emailRe.test(emailVal)) ok = false;
    if(msgVal.length < 5) ok = false;
    return ok;
  }

  Object.values(fields).forEach(f=>{
    f.el.addEventListener('input', ()=> f.wrap.classList.remove('invalid'));
  });

  form.addEventListener('submit', e=>{
    e.preventDefault();
    if(!validate()){
      status.textContent = 'Please fix the highlighted fields.';
      status.style.color = '#ff9f9f';
      return;
    }
    const name = fields.name.el.value.trim();
    const email = fields.email.el.value.trim();
    const message = fields.message.el.value.trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(DATA.socials.email)}&su=${subject}&body=${body}`;

    status.style.color = 'var(--accent-soft)';
    status.textContent = 'Opening Gmail to send this…';
    window.open(mailto, '_blank');
    form.reset();
  });
}

/* ---------------- INIT ----------------
   Each step runs in isolation: if one feature throws (a blocked
   CDN, an unsupported API, etc.) the rest still initialize
   instead of the whole page silently breaking. */
function safe(name, fn){
  try { fn(); }
  catch(err){ console.warn(`[portfolio] "${name}" failed to init:`, err); }
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.body.classList.add('lock');

  safe('renderSkills', renderSkills);
  safe('renderProjects', renderProjects);
  safe('renderGalleryFilters', renderGalleryFilters);
  safe('renderGallery', renderGallery);
  safe('renderTimeline', renderTimeline);
  safe('renderWhy', renderWhy);
  safe('renderContactLinks', renderContactLinks);
  safe('renderProfile', renderProfile);
  safe('setCounterTargets', setCounterTargets);

  safe('initNav', initNav);
  safe('initCursor', initCursor);
  safe('initMagnetic', initMagnetic);
  safe('initTilt', initTilt);
  safe('initGallery', initGallery);
  safe('initContactForm', initContactForm);
  safe('initHeroScene', initHeroScene);
  safe('initScrollFx', initScrollFx);

  safe('initPreloader', initPreloader);
});
