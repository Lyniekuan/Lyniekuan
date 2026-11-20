/* ====== EDIT ME: your details ====== */
const CONTACT_EMAIL = "kuanlynie@gmail.com";
const SOCIALS = [
  {label:"LinkedIn", url:"https://www.linkedin.com/in/kuanlynie"},
  {label:"GitHub", url:"https://github.com/Lyniekuan"}
];

/* ====== EDIT ME: add a design = add one line ====== */
const work = [
 {id:"distorted-reality", title:"Distorted Reality", tag:"Glassmorphism", alt:"Blurred, stretched portrait with a sharp glass window over the face and bold yellow type", desc:"A glitch-stretched portrait with a crisp glass panel, paired with heavy yellow headline type."},
 {id:"bilami", title:"Bilami", tag:"Sports design", alt:"Basketball player dribbling on a pink and purple gradient poster", desc:"A point guard poster with a soft gradient, light streaks and an italic wordmark."},
 {id:"neoclassical", title:"Transcendence", tag:"Neoclassical", alt:"Four-panel wall poster of a classical sculpture with green lettering", desc:"A four-panel poster on neoclassical art (1750 to 1850 AD), shown as a wall mockup."},
 {id:"matcha-bliss", title:"Matcha Bliss", tag:"Social media ad", alt:"Iced matcha drink with large cream lettering on a green background", desc:"A social media ad for an iced matcha brand, with big type layered behind the cup."},
 {id:"highlands", title:"Green Tea Freeze", tag:"Product promo", alt:"Three green tea freeze drinks with a buy 2 get 1 free offer", desc:"A promo for a green tea freeze, showing nutrition facts and a buy 2 get 1 free offer."}
];
const faith = [
 {id:"sunday-service", title:"Sunday Service", tag:"Church event poster", alt:"Orange worship service poster with three singers and a crowd with raised hands", desc:"A warm orange event poster with three featured singers, service times and a worship crowd."},
 {id:"john-3-16", title:"John 3:16", tag:"Scripture graphic", alt:"Dark night street photo with gold and white John 3:16 text", desc:"The verse set in gold serif type over a moody night photograph."},
 {id:"jeremiah-29-11", title:"Jeremiah 29:11", tag:"Scripture graphic", alt:"Colourful paint texture with Jeremiah 29:11 in cream type", desc:"Bold condensed type over an expressive orange and blue paint background."},
 {id:"john-16-33", title:"John 16:33", tag:"Scripture graphic", alt:"Amber marble texture with John 16:33 in yellow type", desc:"Yellow display type that moves between sizes on a flowing amber texture."},
 {id:"galatians-6-9", title:"Galatians 6:9", tag:"Scripture graphic", alt:"Painted sea and sky with Galatians 6:9 in blue type", desc:"Blue script and italic type over a hand-painted seascape."},
 {id:"psalm-139-23", title:"Psalm 139:23", tag:"Scripture graphic", alt:"Green hill with a lone tree under blue sky and Psalm 139:23 in white type", desc:"Elegant white script over a green hill and clear blue sky."}
];

const $ = s => document.querySelector(s);
const lb = $("#lb"); let list = [], i = 0;
const render = (items, el) => {
  el.innerHTML = items.map((p, n) => `<button class="tile" data-n="${n}"><img src="assets/img/thumb/${p.id}.webp" alt="${p.alt}" loading="lazy"><span>${p.title}<small>${p.tag}</small></span></button>`).join("");
  el.addEventListener("click", e => { const t = e.target.closest(".tile"); if (t) open(items, +t.dataset.n); });
};
const show = () => { const p = list[i]; $("#lb-img").src = `assets/img/full/${p.id}.webp`; $("#lb-img").alt = p.alt; $("#lb-title").textContent = p.title; $("#lb-desc").textContent = `${p.tag}. ${p.desc}`; };
const open = (items, n) => { list = items; i = n; show(); lb.showModal(); };
const step = d => { i = (i + d + list.length) % list.length; show(); };
render(work, $("#grid-work")); render(faith, $("#grid-faith"));
$("#close").onclick = () => lb.close();
$("#prev").onclick = () => step(-1); $("#next").onclick = () => step(1);
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
document.addEventListener("keydown", e => { if (!lb.open) return; if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
$("#yr").textContent = new Date().getFullYear();
$("#social").innerHTML = SOCIALS.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("");
const gmail = (su, body) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(su || "")}&body=${encodeURIComponent(body || "")}`;
$("#form").addEventListener("submit", e => {
  e.preventDefault(); const f = new FormData(e.target);
  const body = `${f.get("msg")}

From: ${f.get("name")} (${f.get("email")})`;
  window.open(gmail("Portfolio inquiry from " + f.get("name"), body), "_blank", "noopener");
});

$("#mail").textContent = CONTACT_EMAIL; $("#mail").href = gmail("Portfolio inquiry"); $("#mail").target = "_blank"; $("#mail").rel = "noopener";
