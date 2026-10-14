(function () {
  var where = document.getElementById("where");

  var files = {
    investigations: {
      title: "Financial Investigations",
      body: "<p>Follow the money until the discrepancy has a name.</p>"
    },
    compliance: {
      title: "Corporate Compliance",
      body: "<p>Checked against the rule, not only the story.</p>"
    },
    risk: {
      title: "Risk Management",
      body: "<p>See the exposure before it becomes the matter.</p>"
    },
    riskadvisory: {
      title: "Risk Advisory Services",
      body: [
        "<p class=\"lead\">Mitigate Business Risk and Protect Enterprise Value</p>",
        "<p>We provide risk management services designed to help protect your business, support its continuity and enhance the value delivered to stakeholders.</p>",
        "<p>We identify and assess risks that may affect your operations, financial position, compliance obligations and long-term objectives. Lessons from events such as the global banking crisis and the growth of cybercrime underscore the importance of timely risk identification, robust controls and appropriate mitigation measures.</p>",
        "<p>Our approach is proactive. We provide ongoing support and guidance as your systems of internal control, governance and business processes evolve, helping you respond to emerging risks and changing requirements.</p>",
        "<p>Drawing on our technical expertise and practical experience, we apply current methodologies and sound professional judgement to strengthen risk management and support informed decision-making.</p>"
      ].join("")
    },
    disputes: {
      title: "Dispute Resolution",
      body: "<p>Negotiations, mediations, and settlements.</p>"
    },
    litigation: {
      title: "Litigation Support",
      body: "<p>Analysis and expert testimony.</p>"
    },
    tax: {
      title: "Tax",
      body: "<p>The tax question, read with a forensic eye.</p>"
    },
    advisory: {
      title: "Advisory Services",
      body: "<p>The next move for a middle-market leader.</p>"
    }
  };

  var assuranceSubs = {
    menu: {
      title: "Global Audit & Assurance Services",
      body: [
        "<p class=\"lead\">Audit and assurance services for internationally active groups and local statutory requirements.</p>",
        "<div class=\"assurance-grid\">",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"global\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">Global and listed company audits</span>",
        "<span class=\"assurance-card-desc\">ISAs · US GAAS · PCAOB · Forum of Firms</span>",
        "</button>",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"local\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">Local statutory audits</span>",
        "<span class=\"assurance-card-desc\">Compliance · Sector expertise · Site-based approach</span>",
        "</button>",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"other\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">Other assurance</span>",
        "<span class=\"assurance-card-desc\">SOC · IS controls · Forensic · ISREs · ISAEs · ISRSs</span>",
        "</button>",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"ifrs\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">International Financial Reporting Standards</span>",
        "<span class=\"assurance-card-desc\">IFRS conversion · Due diligence · Training · Illustrative statements</span>",
        "</button>",
        "</div>"
      ].join("")
    },
    global: {
      title: "Global and listed company audits",
      body: [
        "<p class=\"lead\">We provide audit and assurance services tailored to the needs of internationally active groups.</p>",
        "<p>Depending on the engagement and applicable requirements, our work is conducted in accordance with relevant assurance standards, including:</p>",
        "<ul>",
        "<li>International Standards on Auditing (ISAs)</li>",
        "<li>Auditing standards generally accepted in the United States (US GAAS)</li>",
        "<li>Public Company Accounting Oversight Board (PCAOB) auditing standards</li>",
        "</ul>",
        "<p>FGI firms in key economies are registered with the PCAOB. This enables them, where applicable, to contribute to audits of US-listed companies in accordance with PCAOB requirements. Our firms apply a consistent global audit methodology while taking account of relevant local laws, regulations and professional requirements.</p>",
        "<h4>Forum of Firms membership</h4>",
        "<p>FGI is a member of the Forum of Firms. Membership obligations include:</p>",
        "<ul>",
        "<li>Maintaining quality management standards in accordance with applicable international and national requirements. These include the IAASB’s International Standard on Quality Control 1 (ISQC 1), where relevant.</li>",
        "<li>Conducting regular, globally coordinated internal quality assurance reviews, to the extent permitted by national regulation.</li>",
        "<li>Maintaining policies and methodologies for transnational audits based, to the extent practicable, on the IAASB’s International Standards on Auditing.</li>",
        "<li>Maintaining policies and methodologies that conform to the IESBA Code of Ethics for Professional Accountants and applicable national ethical requirements.</li>",
        "</ul>",
        "<h4>Coordinated global delivery</h4>",
        "<p>Our Global Engagement Leaders coordinate or support audit teams across jurisdictions. They help facilitate consistent engagement delivery and coordination, with the aim of providing high-quality services to global clients.</p>",
        "<h4>How we can help</h4>",
        "<p>We can support your organisation with audit and assurance services designed to address its reporting obligations, operational footprint and applicable regulatory requirements.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    local: {
      title: "Local statutory audits",
      body: [
        "<p class=\"lead\">A statutory account audit provides users with assurance that financial statements comply with all relevant accounting and regulatory standards.</p>",
        "<p>Throughout the process, FGI collaborates with management to discuss observations and findings, helping the business enhance both its compliance and overall performance. Our professionals possess deep sector-specific expertise, allowing them to better understand the unique challenges your industry faces. To ensure an effective, high-quality audit, our teams begin with a site visit to understand your business operations and identify key risks.</p>",
        "<p>Our audit methodology is designed by leading firms with a commitment to the public interest. While we adhere strictly to international and national standards, our flexible process allows our teams to tailor their approach to your specific needs and circumstances.</p>",
        "<h4>How we can help</h4>",
        "<p>We can support your organisation with a local statutory audit that meets reporting obligations while delivering practical observations that help improve compliance and performance.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    other: {
      title: "Other assurance",
      body: [
        "<p class=\"lead\">Our assurance services extend beyond financial statement audits. Independent external assurance can enhance the credibility of other forms of corporate reporting and disclosure.</p>",
        "<p>Using established methodologies, our member firms provide assurance and related services tailored to your organisation’s reporting needs, including:</p>",
        "<ul>",
        "<li>Service organisation control attestation engagements</li>",
        "<li>Information systems and controls assurance</li>",
        "<li>Forensic audits and investigations</li>",
        "<li>Engagements conducted in accordance with applicable international standards, including:</li>",
        "<ul>",
        "<li>International Standards on Review Engagements (ISREs)</li>",
        "<li>International Standards on Assurance Engagements (ISAEs)</li>",
        "<li>International Standards on Related Services (ISRSs)</li>",
        "</ul>",
        "</ul>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    ifrs: {
      title: "International Financial Reporting Standards",
      body: [
        "<p class=\"lead\">Is your understanding of IFRS fully integrated?</p>",
        "<p>FGI can help you understand and address the business implications of International Financial Reporting Standards (IFRS).</p>",
        "<p>As IFRS is adopted across an increasing number of jurisdictions, internationally active organisations need advice tailored to their reporting requirements, markets and growth plans. This is particularly important when considering cross-border acquisitions or joint ventures, international debt financing, private equity investment, or raising capital in domestic or overseas markets.</p>",
        "<p>Our IFRS specialists combine technical knowledge with an understanding of local-market requirements. They can help your organisation assess and manage complex IFRS matters, including the application of full IFRS and the IFRS for SMEs, where applicable.</p>",
        "<h4>Our services include:</h4>",
        "<ul>",
        "<li>IFRS conversion and implementation projects</li>",
        "<li>Due diligence in an IFRS reporting environment</li>",
        "<li>Business-combination valuations and support with applying the acquisition method</li>",
        "<li>Advice on share-option plans and other share-based payment arrangements</li>",
        "<li>Audits of IFRS financial statements</li>",
        "<li>Reconciliations between IFRS and other accounting frameworks, including US GAAP and local GAAP</li>",
        "<li>IFRS training and technical support</li>",
        "<li>Assistance with preparing and implementing IFRS accounting manuals</li>",
        "</ul>",
        "<h4>IFRS illustrative financial statements</h4>",
        "<p>FGI’s illustrative financial statements demonstrate consolidated financial reporting for entities with a range of organisational structures. Prepared in accordance with IFRS, they are a practical reference for those involved in preparing or auditing IFRS financial statements.</p>",
        "<h4>FGI comment letters</h4>",
        "<p>This section provides access to FGI comment letters on public consultations issued by the International Accounting Standards Board, the IFRS Interpretations Committee and the IFRS Foundation.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    }
  };

  function renderService(key) {
    var file = files[key];
    if (!file) return;
    var titleEl = document.getElementById("picked-title");
    var bodyEl = document.getElementById("picked-body");
    if (titleEl) titleEl.textContent = file.title;
    if (bodyEl) bodyEl.innerHTML = file.body;
  }

  function renderAssurance(subKey) {
    var sub = assuranceSubs[subKey] || assuranceSubs.menu;
    var titleEl = document.getElementById("picked-title");
    var bodyEl = document.getElementById("picked-body");
    if (titleEl) titleEl.textContent = sub.title;
    if (bodyEl) bodyEl.innerHTML = sub.body;
  }

  document.querySelectorAll(".float-card").forEach(function (card) {
    card.addEventListener("click", function () {
      document.querySelectorAll(".float-card").forEach(function (item) { item.classList.remove("is-open"); });
      card.classList.add("is-open");
      if (where && card.dataset.label) where.textContent = card.dataset.label;
    });
  });

  document.querySelectorAll("#chooser button").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      document.querySelectorAll("#chooser button").forEach(function (item) { item.classList.remove("is-on"); });
      button.classList.add("is-on");
      var key = button.getAttribute("data-service");
      if (key === "assurance") {
        renderAssurance("menu");
      } else {
        renderService(key);
      }
    });
  });

  var picked = document.getElementById("picked");
  if (picked) {
    picked.addEventListener("click", function (event) {
      var card = event.target.closest(".assurance-card");
      if (card) {
        event.stopPropagation();
        renderAssurance(card.getAttribute("data-sub"));
        return;
      }
      var backBtn = event.target.closest(".assurance-back");
      if (backBtn) {
        event.stopPropagation();
        renderAssurance("menu");
      }
    });
  }

  renderService("investigations");

  var menu = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("intake");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var thanks = document.getElementById("thanks");
      if (thanks) thanks.classList.add("is-on");
      event.target.reset();
    });
  }

  document.querySelectorAll("[data-sheet]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var sheet = document.getElementById(link.getAttribute("data-sheet"));
      if (sheet) sheet.hidden = false;
    });
  });
  document.querySelectorAll("[data-close]").forEach(function (button) {
    button.addEventListener("click", function () {
      var sheet = button.closest(".sheet");
      if (sheet) sheet.hidden = true;
    });
  });

  function runTypewriter() {
    var el = document.getElementById("point-typewriter");
    if (!el) return;
    var full = (el.getAttribute("data-full") || el.textContent || "").trim();
    if (!full) return;
    el.setAttribute("data-full", full);
    el.textContent = "";
    var i = 0;
    function type() {
      if (i < full.length) {
        el.textContent += full.charAt(i);
        i++;
        setTimeout(type, 12);
      }
    }
    setTimeout(type, 150);
  }
  setTimeout(runTypewriter, 150);

  // ========== Language switcher ==========
var translations = {
  en: {
    "menu-btn": "Menu",
    "nav-services": "Services",
    "nav-people": "People",
    "nav-contact": "Contact",
    "hero-kicker": "F.G.I. Forensic Accounting",
    "hero-title": "Where integrity,<br>transparency & credibility count.",
    "hero-sub": "Global audit · Forensic investigation · Assurance",
    "btn-explore": "Explore services",
    "btn-call": "Call 1-877-426-4718",
    "point-kicker": "The point",
    "point-h2": "The power of being understood.",
    "point-lead": "Clarity on the numbers. Confidence in the finding. A team that stays with the matter until it is resolved.",
    "btn-see": "See the work",
    "point-gold": "Take charge of change and shape what’s next, with the team behind you.",
    "point-sub": "Global audit. Forensic investigation. Assurance that holds up.",
    "services-kicker": "Services",
    "services-h2": "The work.",
    "svc-investigations": "Financial Investigations",
    "svc-compliance": "Corporate Compliance",
    "svc-risk": "Risk Management",
    "svc-riskadvisory": "Risk Advisory Services",
    "svc-disputes": "Dispute Resolution",
    "svc-litigation": "Litigation Support",
    "svc-assurance": "Global Audit & Assurance",
    "svc-tax": "Tax",
    "svc-advisory": "Advisory Services",
    "btn-talk": "Talk to the firm",
    "people-kicker": "The people",
    "people-h2": "Meet the people behind FGI.",
    "contact-kicker": "Contact",
    "contact-h2": "Speak to the firm.",
    "contact-intro": "Tell us about the matter. We respond with the clarity the numbers require.",
    "form-name": "Your name",
    "form-company": "Company name",
    "form-phone": "Phone number",
    "form-email": "Email",
    "form-message": "Message — describe the matter or what you need",
    "btn-send": "Send message",
    "thanks": "Message received. We will be in touch."
  },
  es: {
    "menu-btn": "Menú",
    "nav-services": "Servicios",
    "nav-people": "Personas",
    "nav-contact": "Contacto",
    "hero-kicker": "F.G.I. Contabilidad Forense",
    "hero-title": "Donde la integridad,<br>la transparencia y la credibilidad cuentan.",
    "hero-sub": "Auditoría global · Investigación forense · Aseguramiento",
    "btn-explore": "Explorar servicios",
    "btn-call": "Llamar 1-877-426-4718",
    "point-kicker": "El punto",
    "point-h2": "El poder de ser comprendido.",
    "point-lead": "Claridad en los números. Confianza en el hallazgo. Un equipo que permanece con el asunto hasta resolverlo.",
    "btn-see": "Ver el trabajo",
    "point-gold": "Tome el control del cambio y dé forma a lo que sigue, con el equipo detrás de usted.",
    "point-sub": "Auditoría global. Investigación forense. Aseguramiento que se sostiene.",
    "services-kicker": "Servicios",
    "services-h2": "El trabajo.",
    "svc-investigations": "Investigaciones financieras",
    "svc-compliance": "Cumplimiento corporativo",
    "svc-risk": "Gestión de riesgos",
    "svc-riskadvisory": "Servicios de asesoría de riesgos",
    "svc-disputes": "Resolución de disputas",
    "svc-litigation": "Soporte en litigios",
    "svc-assurance": "Auditoría y aseguramiento global",
    "svc-tax": "Impuestos",
    "svc-advisory": "Servicios de asesoría",
    "btn-talk": "Hablar con la firma",
    "people-kicker": "Las personas",
    "people-h2": "Conozca a las personas detrás de FGI.",
    "contact-kicker": "Contacto",
    "contact-h2": "Hable con la firma.",
    "contact-intro": "Cuéntenos sobre el asunto. Respondemos con la claridad que los números requieren.",
    "form-name": "Su nombre",
    "form-company": "Nombre de la empresa",
    "form-phone": "Número de teléfono",
    "form-email": "Correo electrónico",
    "form-message": "Mensaje — describa el asunto o lo que necesita",
    "btn-send": "Enviar mensaje",
    "thanks": "Mensaje recibido. Nos pondremos en contacto."
  },
  fr: {
    "menu-btn": "Menu",
    "nav-services": "Services",
    "nav-people": "Équipe",
    "nav-contact": "Contact",
    "hero-kicker": "F.G.I. Comptabilité judiciaire",
    "hero-title": "Là où l’intégrité,<br>la transparence et la crédibilité comptent.",
    "hero-sub": "Audit mondial · Investigation judiciaire · Assurance",
    "btn-explore": "Explorer les services",
    "btn-call": "Appeler 1-877-426-4718",
    "point-kicker": "Le point",
    "point-h2": "Le pouvoir d’être compris.",
    "point-lead": "Clarté sur les chiffres. Confiance dans la conclusion. Une équipe qui reste avec le dossier jusqu’à sa résolution.",
    "btn-see": "Voir le travail",
    "point-gold": "Prenez le contrôle du changement et façonnez la suite, avec l’équipe derrière vous.",
    "point-sub": "Audit mondial. Investigation judiciaire. Assurance qui tient.",
    "services-kicker": "Services",
    "services-h2": "Le travail.",
    "svc-investigations": "Investigations financières",
    "svc-compliance": "Conformité d’entreprise",
    "svc-risk": "Gestion des risques",
    "svc-riskadvisory": "Services de conseil en risques",
    "svc-disputes": "Résolution des litiges",
    "svc-litigation": "Soutien aux litiges",
    "svc-assurance": "Audit et assurance mondiaux",
    "svc-tax": "Fiscalité",
    "svc-advisory": "Services de conseil",
    "btn-talk": "Parler à la firme",
    "people-kicker": "Les personnes",
    "people-h2": "Rencontrez les personnes derrière FGI.",
    "contact-kicker": "Contact",
    "contact-h2": "Parlez à la firme.",
    "contact-intro": "Parlez-nous du dossier. Nous répondons avec la clarté que les chiffres exigent.",
    "form-name": "Votre nom",
    "form-company": "Nom de l’entreprise",
    "form-phone": "Numéro de téléphone",
    "form-email": "E-mail",
    "form-message": "Message — décrivez le dossier ou ce dont vous avez besoin",
    "btn-send": "Envoyer le message",
    "thanks": "Message reçu. Nous vous contacterons."
  }
};

function applyLang(lang) {
  var dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.classList.toggle("is-on", btn.getAttribute("data-lang") === lang);
  });
  try { localStorage.setItem("fgi-lang", lang); } catch (e) {}
  var tw = document.getElementById("point-typewriter");
  if (tw) {
    tw.removeAttribute("data-full");
    setTimeout(runTypewriter, 50);
  }
}

document.querySelectorAll(".lang-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLang(btn.getAttribute("data-lang"));
  });
});

try {
  var saved = localStorage.getItem("fgi-lang");
  if (saved && translations[saved]) applyLang(saved);
} catch (e) {}

// ========== Header color shift on The point ==========
var header = document.querySelector(".site-header");
var point = document.querySelector(".point-upgrade");
if (header && point) {
  function onScroll() {
    var rect = point.getBoundingClientRect();
    var trigger = rect.top < window.innerHeight * 0.45 && rect.bottom > 80;
    header.classList.toggle("is-gold", trigger);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
})();