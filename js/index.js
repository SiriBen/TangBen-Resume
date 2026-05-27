// 页面交互：语言切换、主题切换、移动端菜单、滚动动效
const translations={en:{brandName:"Tang Ben",navAbout:"About",navSkills:"Skills",navProjects:"Projects",navExperience:"Experience",navEducation:"Education",navServices:"Services",navContact:"Contact",heroEyebrow:"PMP Certified PM · Internet Product Manager · Technical Delivery Lead",heroTitle:"Hi, I am Tang Ben.",heroSubtitle:"A technical project manager with 19 years of experience across software development, system integration, and end-to-end delivery. I turn complex business goals into executable technical plans.",heroCtaPrimary:"View Projects",heroCtaSecondary:"Contact Me",metaYears:"Years",metaCert:"Certified",metaLocation:"Available in 1-3 days",heroCardRole:"IT Project Manager",heroCardTitle:"Business goals → Technical plans → Stable delivery",aboutEyebrow:"About Me",aboutTitle:"From code to delivery, I understand how technical teams get work done.",aboutText1:"My career spans Java/Python development, internet product design, and IT project management. I can understand architecture, data flows, and technical risks while producing PRDs, high-fidelity interactive prototypes, and controlled delivery plans.",aboutText2:"I am experienced in cross-department and multi-system projects, including local-life O2O, mental health platforms, manufacturing SCADA, smart tourism, smart construction sites, corporate portals, marketing systems, and financial systems.",factRoleLabel:"Target Role",factRole:"IT Project Manager / Product Manager / Technical PM",factEducationLabel:"Education",factEducation:"Open University of China · Business Administration · Associate Degree",factCertLabel:"Certifications",factCert:"PMP, CSPM",skillsEyebrow:"Skills",skillsTitle:"Technology foundation + project management + business delivery",skillPmTitle:"Project Management",skillPmText:"Requirements analysis, scope control, WBS, milestones, cost control, risk register, quality review, change control, and acceptance delivery.",skillBackendTitle:"Backend & Systems",skillBackendText:"Java EE, Spring, Spring MVC, SSM, SSH, Hibernate, Python, Django, with architecture and deployment experience.",skillDbTitle:"Database & Deployment",skillDbText:"MySQL, SQL Server, PostgreSQL, Linux, Nginx, uWSGI, data modeling, environment setup, release, and operations.",skillAutoTitle:"Automation Tools",skillAutoText:"Python automation, Selenium, Scrapy, data collection, batch scripts, and lightweight tools for reducing repetitive business work.",projectsEyebrow:"Projects",projectsTitle:"Selected Projects",projectRolePm:"IT Project Manager",projectMentalTitle:"Mental Health Cloud Assessment Platform",projectMentalText:"An integrated platform for schools and medical institutions, covering assessments, analytics, AI alerts, multi-party collaboration, and medical-grade data security. I led planning, change control, quality, risk, and delivery, with one-pass acceptance.",projectMentalPoint1:"Built a CCB process, handled 50+ change requests, and kept scope creep under 3%.",projectMentalPoint2:"Tracked progress with WBS, Gantt charts, and critical path methods, reaching 98% on-time milestone delivery and schedule variance under 3%.",projectMentalPoint3:"Reduced defect density to 0.2/KLOC and accumulated 20,000+ mental health records for AI research and publications.",projectScadaTitle:"Manufacturing SCADA System",projectScadaText:"Built a real-time data acquisition and monitoring system for an automotive manufacturing workshop, making equipment status and operating parameters visible and manageable.",projectSystemIntegration:"Integration",projectScenicTitle:"Smart Tourism Operations Platform",projectScenicText:"Integrated ticketing, gates, parking, monitoring, broadcasting, alarms, Wi-Fi, public opinion, and emergency command systems while connecting data to the culture and tourism regulator platform.",projectSiteTitle:"Smart Construction Site Solution",projectSiteText:"Delivered safety helmet recognition, tower crane anti-collision, lift monitoring, dust/noise monitoring, remote monitoring, and government data integration.",projectProgram:"Program Management",projectDecorationTitle:"Corporate Portals + Engineering + Marketing Systems",projectDecorationText:"Led a digital transformation program for a decoration enterprise, including company portals, an engineering management system, and a WeChat referral marketing system.",projectFinanceTitle:"Southwest Securities Asset Management System",projectFinanceText:"Developed modules for a financial asset lifecycle management platform, including registration, workflow conversion, query, data initialization, and migration validation.",experienceEyebrow:"Experience",experienceTitle:"Work Experience",expJieluTitle:"Chongqing Jielu Technology · Project Manager",expJieluText:"Managed the full lifecycle of the mental health platform, including planning, change, cost, compliance, quality, release, and operation.",expWanxianTitle:"Chongqing Wanxiansheng Energy Saving · IT Project Manager",expWanxianText:"Led SCADA planning and implementation from zero to one, covering technology selection, architecture, and full-lifecycle management.",expHuiyuTitle:"Chongqing Huiyu Zhisheng · Project Manager",expHuiyuText:"Delivered smart tourism platforms by coordinating scenic areas, regulators, hardware suppliers, and software teams.",expDajiaTitle:"Chongqing Dajia Industrial · ERP Project Manager",expDajiaText:"Managed smart construction site initiation, requirements, scope, integration, municipal data interfaces, and acceptance.",expMeidiTitle:"Chongqing Meidi Home Decoration · IT Technical Manager",expMeidiText:"Built a digital business department from scratch and managed portals, engineering systems, and WeChat marketing systems.",expDevTitle:"Founder / Technical Manager / Java Developer",expDevText:"Worked across community e-commerce, auto trading platform management, and Java development for financial and banking systems.",educationEyebrow:"Education & Certifications",educationTitle:"Education & Certifications",eduSchool:"Open University of China",eduMajor:"Business Administration · Associate Degree",certPmp:"Project Management Professional",certCspm:"Project Management Capability Certification",servicesEyebrow:"Services",servicesTitle:"Business Directions I Can Support",service1Title:"Enterprise Digital Project Delivery",service1Text:"From research and solution design to planning, launch, and acceptance, I help digital projects land in the real world.",service2Title:"System Integration & Platform Building",service2Text:"A fit for smart tourism, smart construction, manufacturing monitoring, enterprise management systems, and multi-interface environments.",service3Title:"Technical Team Coordination",service3Text:"Set up planning, review, quality, change, risk, and communication mechanisms for smoother collaboration.",service4Title:"Python Automation & Efficiency Tools",service4Text:"Build lightweight tools for data collection, batch processing, business entry, reporting, and repetitive workflows.",contactEyebrow:"Contact",contactTitle:"Let us talk about project management, system delivery, or digital transformation.",contactText:"Based in Nan'an District, Chongqing. I am open to IT Project Manager / Product Manager / Technical PM roles and project-based collaboration.",backToTop:"Back to top"}};
const langToggle=document.querySelector("#langToggle"),themeToggle=document.querySelector("#themeToggle"),navToggle=document.querySelector(".nav-toggle"),navLinks=document.querySelector("#navLinks");let currentLang=localStorage.getItem("resume-lang")||"zh";document.querySelectorAll("[data-i18n]").forEach(n=>{n.dataset.zh=n.textContent});function applyLanguage(lang){document.documentElement.lang=lang==="en"?"en":"zh-CN";document.querySelectorAll("[data-i18n]").forEach(n=>{const k=n.dataset.i18n;if(lang==="en"&&translations.en[k])n.textContent=translations.en[k];if(lang==="zh"&&n.dataset.zh)n.textContent=n.dataset.zh});langToggle.textContent=lang==="en"?"中":"EN";localStorage.setItem("resume-lang",lang)}applyLanguage(currentLang);langToggle.addEventListener("click",()=>{currentLang=currentLang==="zh"?"en":"zh";applyLanguage(currentLang)});document.documentElement.dataset.theme=localStorage.getItem("resume-theme")||"light";themeToggle.addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;localStorage.setItem("resume-theme",next)});navToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(open))});navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");navToggle.setAttribute("aria-expanded","false")}));const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll(".reveal").forEach(item=>observer.observe(item));document.querySelector("#year").textContent=new Date().getFullYear();

// 修复顶部 Logo 与底部“返回顶部”在 hash 状态不变化时无法触发滚动的问题。
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });
});

// 追加英文文案：案例展示、导航和加载动画。
Object.assign(translations.en, {
  skipLink: "Skip to main content",
  navCases: "Cases",
  loaderText: "Loading portfolio",
  heroStatusOne: "Open to IT Project Manager / Product Manager / Technical PM opportunities",
  heroStatusTwo: "Chongqing · Available in 1-3 days · Project-based collaboration welcome",
  projectEvidenceOnTime: "On-time delivery",
  projectEvidenceChanges: "Closed changes",
  projectEvidenceData: "Data records",
  casesEyebrow: "Portfolio",
  casesTitle: "Real Case Gallery",
  casesSubtitle: "Screenshots from previous work and personal projects, grouped by business type for quick filtering.",
  caseAll: "All",
  caseWeb: "Web Systems",
  caseManagement: "Management Systems",
  caseTools: "Tools",
  caseAxure: "Axure Prototypes",
  caseResearch: "Security Research"
});
applyLanguage(currentLang);

// 启动加载动画：页面资源加载完成后淡出。
const pageLoader = document.querySelector('#pageLoader');
function hidePageLoader() {
  if (pageLoader) pageLoader.classList.add('hidden');
}
window.addEventListener('load', () => setTimeout(hidePageLoader, 420));
setTimeout(hidePageLoader, 1800);

// 案例展示分类切换与预览。
const caseTabs = document.querySelectorAll('.case-tab');
const caseCards = document.querySelectorAll('.case-card');
let activeFilter = 'all';
let currentCaseIndex = 0;
const caseFilterTimers = new WeakMap();

function getVisibleCases() {
  return [...caseCards].filter((card) => {
    const groups = (card.dataset.case || '').split(' ');
    return activeFilter === 'all' || groups.includes(activeFilter);
  });
}

function applyCaseFilter(filter) {
  activeFilter = filter;
  caseCards.forEach((card, index) => {
    const groups = (card.dataset.case || '').split(' ');
    const visible = filter === 'all' || groups.includes(filter);
    const delay = visible ? Math.min(index % 6, 5) * 42 : 0;
    window.clearTimeout(caseFilterTimers.get(card));
    card.style.transitionDelay = `${delay}ms`;
    if (visible) {
      card.classList.add('is-filtered-out');
      card.classList.toggle('is-hidden', !visible);
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('is-filtered-out')));
      return;
    }
    card.classList.add('is-filtered-out');
    const timer = window.setTimeout(() => card.classList.add('is-hidden'), 260);
    caseFilterTimers.set(card, timer);
  });
}

caseTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    caseTabs.forEach((item) => item.classList.toggle('active', item === tab));
    applyCaseFilter(filter);
  });
});

const caseModal = document.querySelector('#caseModal');
const caseModalImage = document.querySelector('#caseModalImage');
const caseModalCaption = document.querySelector('#caseModalCaption');
const caseModalClose = document.querySelector('.case-modal-close');
const caseModalPrev = document.querySelector('.case-modal-prev');
const caseModalNext = document.querySelector('.case-modal-next');
let touchStartX = 0;

function setCaseModalImage(card, direction = 'next') {
  if (!caseModal || !caseModalImage || !caseModalCaption || !card) return;
  const image = card.querySelector('img');
  const title = card.querySelector('h3')?.textContent || image?.alt || '';
  caseModalImage.classList.remove('slide-next', 'slide-prev');
  void caseModalImage.offsetWidth;
  caseModalImage.src = image.src;
  caseModalImage.alt = image.alt || title;
  caseModalCaption.textContent = title;
  caseModalImage.classList.add(direction === 'prev' ? 'slide-prev' : 'slide-next');
}

function openCaseModal(card) {
  const visibleCases = getVisibleCases();
  currentCaseIndex = Math.max(0, visibleCases.indexOf(card));
  setCaseModalImage(card);
  caseModal.classList.add('open');
  caseModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  caseModalClose?.focus();
}

function closeCaseModal() {
  caseModal?.classList.remove('open');
  caseModal?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function showCaseOffset(offset) {
  const visibleCases = getVisibleCases();
  if (!visibleCases.length) return;
  currentCaseIndex = (currentCaseIndex + offset + visibleCases.length) % visibleCases.length;
  setCaseModalImage(visibleCases[currentCaseIndex], offset < 0 ? 'prev' : 'next');
}

caseCards.forEach((card) => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('click', () => openCaseModal(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCaseModal(card);
    }
  });
});

caseModalClose?.addEventListener('click', closeCaseModal);
caseModalPrev?.addEventListener('click', () => showCaseOffset(-1));
caseModalNext?.addEventListener('click', () => showCaseOffset(1));
caseModal?.addEventListener('click', (event) => {
  if (event.target === caseModal) closeCaseModal();
});
caseModal?.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });
caseModal?.addEventListener('touchend', (event) => {
  const deltaX = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(deltaX) > 46) showCaseOffset(deltaX > 0 ? -1 : 1);
}, { passive: true });
document.addEventListener('keydown', (event) => {
  if (!caseModal?.classList.contains('open')) return;
  if (event.key === 'Escape') closeCaseModal();
  if (event.key === 'ArrowLeft') showCaseOffset(-1);
  if (event.key === 'ArrowRight') showCaseOffset(1);
});
