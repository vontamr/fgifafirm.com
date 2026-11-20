(function () {
  // Always start at the top on refresh
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  var where = document.getElementById("where");

  // ---------- Service content (US) ----------
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
        "<p>FGI firms in key economies are registered with the PCAOB. This enables them, where applicable, to contribute to audits of US-listed companies in accordance with PCAOB requirements.</p>",
        "<h4>Forum of Firms membership</h4>",
        "<p>FGI is a member of the Forum of Firms. Membership obligations include maintaining quality management standards and applying methodologies based on International Standards on Auditing and the IESBA Code of Ethics.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    local: {
      title: "Local statutory audits",
      body: [
        "<p class=\"lead\">A statutory account audit provides users with assurance that financial statements comply with all relevant accounting and regulatory standards.</p>",
        "<p>Throughout the process, FGI collaborates with management to discuss observations and findings, helping the business enhance both its compliance and overall performance.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    other: {
      title: "Other assurance",
      body: [
        "<p class=\"lead\">Our assurance services extend beyond financial statement audits. Independent external assurance can enhance the credibility of other forms of corporate reporting and disclosure.</p>",
        "<p>Using established methodologies, our member firms provide assurance and related services tailored to your organisation’s reporting needs.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    ifrs: {
      title: "International Financial Reporting Standards",
      body: [
        "<p class=\"lead\">Is your understanding of IFRS fully integrated?</p>",
        "<p>FGI can help you understand and address the business implications of International Financial Reporting Standards (IFRS), including conversion and implementation projects, due diligence, valuations, training and technical support.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    }
  };

  // ---------- Service content (Canada) ----------
  var caFiles = {
    investigations: {
      title: "Financial Investigations",
      body: "<p>Follow the money across Canadian jurisdictions until the discrepancy has a name — from CRA filings to provincial registries.</p>"
    },
    compliance: {
      title: "Corporate Compliance",
      body: "<p>Checked against Canadian corporate law, securities regulation, and provincial standards — not only the story.</p>"
    },
    risk: {
      title: "Risk Management",
      body: "<p>See the exposure before it becomes the matter. Canadian regulatory, cross-border, and operational risks identified early.</p>"
    },
    riskadvisory: {
      title: "Risk Advisory Services",
      body: [
        "<p class=\"lead\">Mitigate Business Risk and Protect Enterprise Value in Canada</p>",
        "<p>We provide risk management services designed to help protect your business under Canadian frameworks.</p>",
        "<p>We identify and assess risks that may affect your operations, financial position, compliance obligations and long-term objectives.</p>"
      ].join("")
    },
    disputes: {
      title: "Dispute Resolution",
      body: "<p>Negotiations, mediations, and settlements under Canadian law and provincial rules.</p>"
    },
    litigation: {
      title: "Litigation Support",
      body: "<p>Analysis and expert testimony for Canadian courts and tribunals.</p>"
    },
    tax: {
      title: "Tax",
      body: "<p>The tax question, read with a forensic eye — CRA, GST/HST, provincial taxes, and cross-border issues.</p>"
    },
    advisory: {
      title: "Advisory Services",
      body: "<p>The next move for a middle-market leader operating in Canada.</p>"
    }
  };

  var caAssuranceSubs = {
    menu: {
      title: "Audit & Assurance Services",
      body: [
        "<p class=\"lead\">Audit and assurance services for Canadian groups and local statutory requirements.</p>",
        "<div class=\"assurance-grid\">",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"global\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">Global and listed company audits</span>",
        "<span class=\"assurance-card-desc\">Canadian Auditing Standards · IFRS · US GAAS where applicable</span>",
        "</button>",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"local\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">Local statutory audits</span>",
        "<span class=\"assurance-card-desc\">Compliance · Sector expertise · Provincial requirements</span>",
        "</button>",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"other\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">Other assurance</span>",
        "<span class=\"assurance-card-desc\">SOC · IS controls · Forensic · Canadian standards</span>",
        "</button>",
        "<button type=\"button\" class=\"assurance-card\" data-sub=\"ifrs\">",
        "<span class=\"assurance-card-kicker\">Service</span>",
        "<span class=\"assurance-card-title\">International Financial Reporting Standards</span>",
        "<span class=\"assurance-card-desc\">IFRS conversion · Due diligence · Training · Canadian application</span>",
        "</button>",
        "</div>"
      ].join("")
    },
    global: {
      title: "Global and listed company audits",
      body: [
        "<p class=\"lead\">We provide audit and assurance services tailored to the needs of internationally active groups with Canadian operations.</p>",
        "<p>Our work is conducted in accordance with relevant assurance standards, including Canadian Auditing Standards and, where applicable, ISAs or US GAAS.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    local: {
      title: "Local statutory audits",
      body: [
        "<p class=\"lead\">A statutory account audit provides users with assurance that financial statements comply with all relevant Canadian accounting and regulatory standards.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    other: {
      title: "Other assurance",
      body: [
        "<p class=\"lead\">Our assurance services extend beyond financial statement audits for Canadian reporting needs.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    },
    ifrs: {
      title: "International Financial Reporting Standards",
      body: [
        "<p class=\"lead\">Our IFRS specialists combine technical knowledge with an understanding of Canadian-market requirements.</p>",
        "<button type=\"button\" class=\"assurance-back\">← Back to Audit & Assurance</button>"
      ].join("")
    }
  };

  var currentLoc = "us";
  var currentServiceKey = "investigations";

  function renderService(key) {
    currentServiceKey = key;
    var data = currentLoc === "ca" ? caFiles : files;
    var file = data[key];
    if (!file) return;
    var titleEl = document.getElementById("picked-title");
    var bodyEl = document.getElementById("picked-body");
    if (titleEl) titleEl.textContent = file.title;
    if (bodyEl) bodyEl.innerHTML = file.body;
  }

  function renderAssurance(subKey) {
    var data = currentLoc === "ca" ? caAssuranceSubs : assuranceSubs;
    var sub = data[subKey] || data.menu;
    var titleEl = document.getElementById("picked-title");
    var bodyEl = document.getElementById("picked-body");
    if (titleEl) titleEl.textContent = sub.title;
    if (bodyEl) bodyEl.innerHTML = sub.body;
  }

  // ---------- Service detail popup ----------
  var modal = document.getElementById("svc-modal");
  var modalTitle = document.getElementById("svc-modal-title");
  var modalBody = document.getElementById("svc-modal-body");
  var modalKicker = document.getElementById("svc-modal-kicker");

  function openServiceModal(title, bodyHtml, kicker) {
    if (!modal || !modalTitle || !modalBody) return;
    modalTitle.textContent = title || "";
    var clean = (bodyHtml || "").replace(/<button[^>]*class="assurance-back"[^>]*>[\s\S]*?<\/button>/gi, "");
    clean += '<div class="svc-modal-footer"><a class="btn gold" href="#contact">Talk to the firm</a></div>';
    modalBody.innerHTML = clean;
    if (modalKicker) modalKicker.textContent = kicker || "Services";
    modal.removeAttribute("hidden");
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
  }

  function closeServiceModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("hidden", "");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  if (modal) {
    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        closeServiceModal();
      });
    });
    modal.addEventListener("click", function (event) {
      var card = event.target.closest(".assurance-card");
      if (card) {
        event.preventDefault();
        event.stopPropagation();
        openAssuranceDetail(card.getAttribute("data-sub"));
        return;
      }
      var cta = event.target.closest(".svc-modal-footer a");
      if (cta) closeServiceModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeServiceModal();
    });
  }

  function openAssuranceDetail(subKey) {
    var data = currentLoc === "ca" ? caAssuranceSubs : assuranceSubs;
    var sub = data[subKey];
    if (!sub || subKey === "menu") return;
    openServiceModal(sub.title, sub.body, "Audit & Assurance");
  }

  function openServiceDetail(key) {
    currentServiceKey = key;
    if (key === "assurance") {
      renderAssurance("menu");
      var data = currentLoc === "ca" ? caAssuranceSubs : assuranceSubs;
      openServiceModal(data.menu.title, data.menu.body, "Services");
      return;
    }
    var data = currentLoc === "ca" ? caFiles : files;
    var file = data[key];
    if (!file) return;
    renderService(key);
    openServiceModal(file.title, file.body, "Services");
  }

  // Float-card click
  document.querySelectorAll(".float-card").forEach(function (card) {
    card.addEventListener("click", function () {
      document.querySelectorAll(".float-card").forEach(function (item) { item.classList.remove("is-open"); });
      card.classList.add("is-open");
      if (where && card.dataset.label) where.textContent = card.dataset.label;
    });
  });

  // Service chooser → popup
  document.querySelectorAll("#chooser button").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      document.querySelectorAll("#chooser button").forEach(function (item) { item.classList.remove("is-on"); });
      button.classList.add("is-on");
      var key = button.getAttribute("data-service");
      var body = document.getElementById("picked-body");
      if (body) body.classList.add("fade");
      setTimeout(function () {
        openServiceDetail(key);
        if (body) body.classList.remove("fade");
      }, 80);
    });
  });

  // Assurance cards on page stage
  var picked = document.getElementById("picked");
  if (picked) {
    picked.addEventListener("click", function (event) {
      var card = event.target.closest(".assurance-card");
      if (card) {
        event.stopPropagation();
        openAssuranceDetail(card.getAttribute("data-sub"));
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

  // ---------- Mobile hamburger menu ----------
  var menu = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");

  function closeMobileNav() {
    if (!nav || !menu) return;
    nav.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
  }

  function toggleMobileNav(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!nav || !menu) return;
    var open = nav.classList.toggle("is-open");
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (menu && nav) {
    menu.addEventListener("click", toggleMobileNav);
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { closeMobileNav(); });
    });
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || menu.contains(e.target)) return;
      closeMobileNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileNav();
    });
  }

  // Contact form
  var form = document.getElementById("intake");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var thanks = document.getElementById("thanks");
      if (thanks) thanks.classList.add("is-on");
      event.target.reset();
    });
  }

  // Privacy / terms sheets
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

  // Typewriter
  var typewriterText = "Clarity on the numbers. Confidence in the finding. A team that stays with the matter until it is resolved.";
  var typeTimer = null;
  var typeIndex = 0;
  var isTyping = false;

  function stopTypewriter() {
    if (typeTimer) clearTimeout(typeTimer);
    typeTimer = null;
    isTyping = false;
    typeIndex = 0;
    var el = document.getElementById("point-typewriter");
    if (el) el.textContent = "";
  }

  function startTypewriter() {
    var el = document.getElementById("point-typewriter");
    if (!el || isTyping) return;
    stopTypewriter();
    isTyping = true;
    typeIndex = 0;
    el.textContent = "";
    function type() {
      if (!isTyping) return;
      if (typeIndex < typewriterText.length) {
        el.textContent += typewriterText.charAt(typeIndex);
        typeIndex++;
        typeTimer = setTimeout(type, 18);
      } else {
        isTyping = false;
      }
    }
    typeTimer = setTimeout(type, 120);
  }

  var pointCard = document.querySelector(".point-upgrade");
  if (pointCard && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) startTypewriter();
        else stopTypewriter();
      });
    }, { threshold: 0.35 });
    obs.observe(pointCard);
  }

  // Header color shifts
  var header = document.querySelector(".site-header");
  var point = document.querySelector(".point-upgrade");
  var leadership = document.getElementById("leadership");
  var contact = document.getElementById("contact");

  function updateHeader() {
    if (!header) return;
    var gold = false;
    var white = false;
    var vh = window.innerHeight;
    if (point) {
      var r = point.getBoundingClientRect();
      if (r.top < vh * 0.5 && r.bottom > 100) gold = true;
    }
    if (leadership) {
      var rp = leadership.getBoundingClientRect();
      if (rp.top < vh * 0.7) white = true;
    }
    if (contact) {
      var rc = contact.getBoundingClientRect();
      if (rc.top < vh * 0.7) white = true;
    }
    header.classList.remove("is-gold", "is-white");
    if (white) header.classList.add("is-white");
    else if (gold) header.classList.add("is-gold");
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateHeader);
  updateHeader();

  
    // ---------- Language switcher ----------
    var translations = {
      en: {
        "menu-btn": "Menu",
        "nav-services": "Services",
        "nav-tech": "Tech & AI",
        "nav-industries": "Industries",
        "nav-leadership": "Leadership",
        "nav-offices": "Offices",
        "nav-contact": "Contact",
        "hero-kicker": "F.G.I. Forensic Accounting",
        "hero-title": "Where integrity,<br>transparency & credibility count.",
        "hero-sub": "Global audit · Forensic investigation · Assurance",
        "btn-explore": "Explore services",
        "btn-call": "Call 1-877-426-4718",
        "point-kicker": "The point",
        "point-h2": "The power of being understood.",
        "btn-see": "See the work",
        "point-gold": "Take charge of change and shape what’s next, with the team behind you.",
        "point-sub": "Global audit. Forensic investigation. Assurance that holds up.",
        "services-kicker": "Services",
        "services-h2": "The work.",
        "services-intro": "Specialized forensic accounting, audit and advisory capabilities delivered with precision and discretion.",
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
        "tech-kicker": "Tech Meets AI",
        "tech-h2": "The right alliance for every next move.",
        "tech-lead": "Building a resilient, intelligent business takes more than technology. It requires financial insight, professional judgment and the ability to translate evidence into measurable outcomes. FGI brings these capabilities together across the business lifecycle—helping you strengthen financial performance, improve controls, support sound decision-making and identify opportunities to create lasting value.",
        "tech-alliance": "Our alliance ecosystem combines carefully selected technology providers to address your accounting, reporting, risk and investigation priorities. As AI, regulatory expectations and data complexity reshape the business environment, we help you assess the risks, evaluate the options and select fit-for-purpose capabilities—with clear governance, reliable evidence and a path to implementation.",
        "tech-closing": "Together, we’re not just responding to change — we’re leading it. Where transparency meets industry standards. By combining FGI’s deep consulting capabilities with leading technology and engineering from our alliances, we build AI-powered solutions so you can get custom-fit results for your business for growth across your competitive landscape in your industry-driven needs.",
        "tech-video-note": "Video coming soon — portraying how FGI + technology alliances deliver clarity.",
        "industries-kicker": "Industries",
        "industries-h2": "Industry insight that travels with the numbers.",
        "industries-intro": "We bring forensic discipline and assurance rigor to the sectors where complexity, regulation and capital intensity demand more than a generic approach.",
        "industries-note": "Detailed industry pages and sector playbooks are being refined. Speak with the firm for current experience in your sector.",
        "leadership-kicker": "Leadership Center",
        "leadership-h2": "The people who stand behind the finding.",
        "leadership-intro": "Credentials, judgment and continuity — the combination that turns a complex matter into a clear record.",
        "offices-kicker": "Offices",
        "offices-h2": "Where we meet the work.",
        "offices-intro": "FGI serves clients across the United States and Canada. Reach the team through our secure central line or the intake form — we route every matter to the right professionals.",
        "office-us-title": "United States",
        "office-us-body": "Nationwide coverage for forensic investigations, audit, assurance and advisory engagements. Central intake routes matters to the appropriate engagement team.",
        "office-ca-title": "Canada",
        "office-ca-body": "Canadian operations supported with local regulatory fluency, provincial awareness and cross-border coordination with U.S. teams.",
        "offices-map-note": "Interactive office directory and detailed location pages are in development. For the fastest response, use the secure line or the contact form below.",
        "contact-kicker": "Contact",
        "contact-h2": "Speak to the firm.",
        "contact-intro": "Start with a secure call on our RingCentral line, then submit the intake form. We review every matter for fit before engagement.",
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
        "nav-tech": "Tech e IA",
        "nav-industries": "Industrias",
        "nav-leadership": "Liderazgo",
        "nav-offices": "Oficinas",
        "nav-contact": "Contacto",
        "hero-kicker": "F.G.I. Contabilidad Forense",
        "hero-title": "Donde la integridad,<br>la transparencia y la credibilidad cuentan.",
        "hero-sub": "Auditoría global · Investigación forense · Aseguramiento",
        "btn-explore": "Explorar servicios",
        "btn-call": "Llamar 1-877-426-4718",
        "point-kicker": "El punto",
        "point-h2": "El poder de ser comprendido.",
        "btn-see": "Ver el trabajo",
        "point-gold": "Tome el control del cambio y dé forma a lo que sigue, con el equipo detrás de usted.",
        "point-sub": "Auditoría global. Investigación forense. Aseguramiento que se sostiene.",
        "services-kicker": "Servicios",
        "services-h2": "El trabajo.",
        "services-intro": "Capacidades especializadas de contabilidad forense, auditoría y asesoría, con precisión y discreción.",
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
        "tech-kicker": "Tech e IA",
        "tech-h2": "La alianza correcta para cada próximo paso.",
        "tech-lead": "Construir un negocio resiliente e inteligente requiere más que tecnología. Exige visión financiera, juicio profesional y la capacidad de traducir evidencia en resultados medibles.",
        "tech-alliance": "Nuestro ecosistema de alianzas combina proveedores de tecnología cuidadosamente seleccionados para abordar sus prioridades de contabilidad, reporting, riesgo e investigación.",
        "tech-closing": "Juntos no solo respondemos al cambio — lo lideramos.",
        "tech-video-note": "Video próximamente.",
        "industries-kicker": "Industrias",
        "industries-h2": "Perspectiva sectorial que acompaña a los números.",
        "industries-intro": "Aportamos disciplina forense y rigor de aseguramiento a los sectores donde la complejidad y la regulación exigen más que un enfoque genérico.",
        "industries-note": "Las páginas detalladas por industria se están refinando.",
        "leadership-kicker": "Centro de liderazgo",
        "leadership-h2": "Las personas que respaldan el hallazgo.",
        "leadership-intro": "Credenciales, juicio y continuidad.",
        "offices-kicker": "Oficinas",
        "offices-h2": "Donde encontramos el trabajo.",
        "offices-intro": "FGI atiende clientes en Estados Unidos y Canadá.",
        "office-us-title": "Estados Unidos",
        "office-us-body": "Cobertura nacional para investigaciones forenses, auditoría, aseguramiento y asesoría.",
        "office-ca-title": "Canadá",
        "office-ca-body": "Operaciones canadienses con fluidez regulatoria local y coordinación transfronteriza.",
        "offices-map-note": "Use la línea segura o el formulario de contacto.",
        "contact-kicker": "Contacto",
        "contact-h2": "Hable con la firma.",
        "contact-intro": "Comience con una llamada segura y luego envíe el formulario.",
        "form-name": "Su nombre",
        "form-company": "Nombre de la empresa",
        "form-phone": "Número de teléfono",
        "form-email": "Correo electrónico",
        "form-message": "Mensaje — describa el asunto",
        "btn-send": "Enviar mensaje",
        "thanks": "Mensaje recibido. Nos pondremos en contacto."
      },
      fr: {
        "menu-btn": "Menu",
        "nav-services": "Services",
        "nav-tech": "Tech & IA",
        "nav-industries": "Secteurs",
        "nav-leadership": "Leadership",
        "nav-offices": "Bureaux",
        "nav-contact": "Contact",
        "hero-kicker": "F.G.I. Comptabilité judiciaire",
        "hero-title": "Là où l’intégrité,<br>la transparence et la crédibilité comptent.",
        "hero-sub": "Audit mondial · Investigation judiciaire · Assurance",
        "btn-explore": "Explorer les services",
        "btn-call": "Appeler 1-877-426-4718",
        "point-kicker": "Le point",
        "point-h2": "Le pouvoir d’être compris.",
        "btn-see": "Voir le travail",
        "point-gold": "Prenez le contrôle du changement et façonnez la suite, avec l’équipe derrière vous.",
        "point-sub": "Audit mondial. Investigation judiciaire. Assurance qui tient.",
        "services-kicker": "Services",
        "services-h2": "Le travail.",
        "services-intro": "Des capacités spécialisées en comptabilité judiciaire, audit et conseil.",
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
        "tech-kicker": "Tech & IA",
        "tech-h2": "La bonne alliance pour chaque prochain pas.",
        "tech-lead": "Bâtir une entreprise résiliente et intelligente exige plus que de la technologie.",
        "tech-alliance": "Notre écosystème d’alliances combine des fournisseurs technologiques soigneusement sélectionnés.",
        "tech-closing": "Ensemble, nous ne répondons pas seulement au changement — nous le menons.",
        "tech-video-note": "Vidéo à venir.",
        "industries-kicker": "Secteurs",
        "industries-h2": "Une lecture sectorielle qui accompagne les chiffres.",
        "industries-intro": "Nous apportons la discipline forensique et la rigueur d’assurance aux secteurs complexes.",
        "industries-note": "Les pages sectorielles détaillées sont en cours de raffinement.",
        "leadership-kicker": "Centre de leadership",
        "leadership-h2": "Les personnes qui soutiennent la conclusion.",
        "leadership-intro": "Credentials, jugement et continuité.",
        "offices-kicker": "Bureaux",
        "offices-h2": "Là où nous rencontrons le travail.",
        "offices-intro": "FGI sert des clients aux États-Unis et au Canada.",
        "office-us-title": "États-Unis",
        "office-us-body": "Couverture nationale pour les investigations forensiques, l’audit, l’assurance et le conseil.",
        "office-ca-title": "Canada",
        "office-ca-body": "Opérations canadiennes avec fluidité réglementaire locale.",
        "offices-map-note": "Utilisez la ligne sécurisée ou le formulaire.",
        "contact-kicker": "Contact",
        "contact-h2": "Parlez à la firme.",
        "contact-intro": "Commencez par un appel sécurisé, puis soumettez le formulaire.",
        "form-name": "Votre nom",
        "form-company": "Nom de l’entreprise",
        "form-phone": "Numéro de téléphone",
        "form-email": "E-mail",
        "form-message": "Message — décrivez le dossier",
        "btn-send": "Envoyer le message",
        "thanks": "Message reçu. Nous vous contacterons."
      }
    };
  
    function applyLang(lang) {
      var dict = translations[lang] || translations.en;
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (!dict[key]) return;
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      });
      document.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.classList.toggle("is-on", btn.getAttribute("data-lang") === lang);
      });
      try { localStorage.setItem("fgi-lang", lang); } catch (e) {}
      if (lang === "es") typewriterText = "Claridad en los números. Confianza en el hallazgo. Un equipo que permanece con el asunto hasta resolverlo.";
      else if (lang === "fr") typewriterText = "Clarté sur les chiffres. Confiance dans la conclusion. Une équipe qui reste avec le dossier jusqu’à sa résolution.";
      else typewriterText = "Clarity on the numbers. Confidence in the finding. A team that stays with the matter until it is resolved.";
      stopTypewriter();
    }
  
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      function handleLang(e) {
        e.preventDefault();
        e.stopPropagation();
        var lang = btn.getAttribute("data-lang");
        if (lang) applyLang(lang);
      }
      btn.addEventListener("click", handleLang);
      btn.addEventListener("touchend", handleLang, { passive: false });
    });
  
    try {
      var saved = localStorage.getItem("fgi-lang");
      if (saved && translations[saved]) applyLang(saved);
    } catch (e) {}
  
    // ---------- Location switcher (US / Canada) ----------
    var mapContainer = document.querySelector(".hero-map-lines");
  
    var maps = {
      us: '<svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice"><ellipse cx="720" cy="380" rx="480" ry="200" fill="none" stroke="#9d1830" stroke-width="1.8" opacity="0.5"/><ellipse cx="720" cy="380" rx="360" ry="150" fill="none" stroke="#c4233d" stroke-width="1.3" opacity="0.38"/><ellipse cx="720" cy="380" rx="240" ry="100" fill="none" stroke="#e0b85a" stroke-width="1.1" opacity="0.32"/><path d="M0 520 Q 360 480 720 500 T 1440 520" fill="none" stroke="#9d1830" stroke-width="1.8" opacity="0.45"/><circle cx="420" cy="320" r="3.5" fill="#e0b85a" opacity="0.7"/><circle cx="780" cy="290" r="3.5" fill="#e0b85a" opacity="0.7"/><circle cx="1050" cy="380" r="3.5" fill="#e0b85a" opacity="0.7"/></svg>',
      ca: '<svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice"><ellipse cx="720" cy="340" rx="520" ry="230" fill="none" stroke="#9d1830" stroke-width="1.8" opacity="0.5"/><ellipse cx="720" cy="340" rx="390" ry="170" fill="none" stroke="#c4233d" stroke-width="1.3" opacity="0.38"/><ellipse cx="720" cy="340" rx="260" ry="110" fill="none" stroke="#e0b85a" stroke-width="1.1" opacity="0.32"/><path d="M0 480 Q 360 440 720 460 T 1440 480" fill="none" stroke="#9d1830" stroke-width="1.8" opacity="0.45"/><circle cx="380" cy="260" r="3.5" fill="#e0b85a" opacity="0.7"/><circle cx="720" cy="220" r="3.5" fill="#e0b85a" opacity="0.7"/><circle cx="1020" cy="300" r="3.5" fill="#e0b85a" opacity="0.7"/></svg>'
    };
  
    function updateMap(loc) {
      if (mapContainer && maps[loc]) mapContainer.innerHTML = maps[loc];
    }
  
    var locTexts = {
      us: {
        "point-gold": "Take charge of change and shape what’s next, with the team behind you.",
        "point-sub": "Global audit. Forensic investigation. Assurance that holds up.",
        "hero-sub": "Global audit · Forensic investigation · Assurance",
        "cred-1-title": "CPA",
        "cred-1-sub": "Certified Public Accountant",
        "cred-1-desc": "The license the finding stands on.",
        "cred-2-title": "CFE",
        "cred-2-sub": "Certified Fraud Examiner",
        "cred-2-desc": "The fraud examination.",
        "cred-3-title": "Forensic accountant",
        "cred-3-sub": "The records, rebuilt",
        "cred-3-desc": "The file, rebuilt from the records.",
        "cred-4-title": "Supporting staff",
        "cred-4-sub": "The firm behind the experts",
        "cred-4-desc": "The matter, kept moving.",
        "contact-intro": "Start with a secure call on our RingCentral line, then submit the intake form. We review every matter for fit before engagement."
      },
      ca: {
        "point-gold": "Take charge of change and shape what’s next, with the Canadian team behind you.",
        "point-sub": "Canadian audit. Forensic investigation. Assurance that holds up under Canadian standards.",
        "hero-sub": "Canadian audit · Forensic investigation · Assurance",
        "cred-1-title": "CPA",
        "cred-1-sub": "Chartered Professional Accountant",
        "cred-1-desc": "The Canadian designation the finding stands on.",
        "cred-2-title": "CFE",
        "cred-2-sub": "Certified Fraud Examiner",
        "cred-2-desc": "The fraud examination across Canadian jurisdictions.",
        "cred-3-title": "Forensic accountant",
        "cred-3-sub": "The records, rebuilt",
        "cred-3-desc": "The file, rebuilt from Canadian records and filings.",
        "cred-4-title": "Supporting staff",
        "cred-4-sub": "The firm behind the experts",
        "cred-4-desc": "The matter, kept moving across provinces.",
        "contact-intro": "Start with a secure call on our RingCentral line, then submit the intake form. We review every Canadian matter for fit before engagement."
      }
    };
  
    function applyLocationTexts(loc) {
      var texts = locTexts[loc] || locTexts.us;
      document.querySelectorAll("[data-loc-text]").forEach(function (el) {
        var key = el.getAttribute("data-loc-text");
        if (texts[key]) el.textContent = texts[key];
      });
    }
  
    function setLocation(loc) {
      if (loc !== "us" && loc !== "ca") return;
      var main = document.querySelector(".page-content");
      if (main) main.classList.add("is-switching");
      setTimeout(function () {
        currentLoc = loc;
        document.querySelectorAll(".loc-btn").forEach(function (btn) {
          btn.classList.toggle("is-on", btn.getAttribute("data-loc") === loc);
        });
        updateMap(loc);
        applyLocationTexts(loc);
        if (currentServiceKey === "assurance") renderAssurance("menu");
        else renderService(currentServiceKey);
        if (main) main.classList.remove("is-switching");
      }, 180);
      try { localStorage.setItem("fgi-loc", loc); } catch (e) {}
    }
  
    document.querySelectorAll(".loc-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var loc = btn.getAttribute("data-loc");
        if (loc) setLocation(loc);
      });
    });
  
    try {
      var savedLoc = localStorage.getItem("fgi-loc");
      if (savedLoc === "ca" || savedLoc === "us") setLocation(savedLoc);
      else updateMap("us");
    } catch (e) {
      updateMap("us");
    }
  
  })();