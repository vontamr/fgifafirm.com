(function () {
    var header = document.getElementById("site-header");
    var nav = document.getElementById("site-nav");
    var menu = document.querySelector(".menu-btn");
    if (header) {
      window.addEventListener("scroll", function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
      }, { passive: true });
    }
    if (menu && nav) {
      menu.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        menu.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    function openPlace(id) {
      var root = document.getElementById("open");
      if (!root) return;
      root.className = "docket is-" + id;
      var closed = document.getElementById("closed");
      if (closed) closed.hidden = true;
      ["about", "services", "contact"].forEach(function (name) {
        var panel = document.getElementById("panel-" + name);
        var tab = document.getElementById("tab-" + name);
        if (panel) panel.hidden = name !== id;
        if (tab) {
          tab.classList.toggle("is-on", name === id);
          tab.setAttribute("aria-selected", name === id ? "true" : "false");
        }
      });
      if (nav) nav.classList.remove("is-open");
    }
    document.querySelectorAll("[data-place]").forEach(function (el) {
      el.addEventListener("click", function () {
        openPlace(el.getAttribute("data-place"));
      });
    });
    var form = document.getElementById("intake");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var data = new FormData(form);
        var name = String(data.get("name") || "").trim();
        var email = String(data.get("email") || "").trim();
        if (!name || email.indexOf("@") === -1) return;
        var list = [];
        try { list = JSON.parse(localStorage.getItem("fgi-intake-list") || "[]"); } catch (e) {}
        list.push({
          name: name,
          email: email,
          organization: String(data.get("organization") || "").trim(),
          role: String(data.get("role") || "").trim(),
          note: String(data.get("note") || "").trim(),
          at: new Date().toISOString()
        });
        localStorage.setItem("fgi-intake-list", JSON.stringify(list));
        form.hidden = true;
        var thanks = document.getElementById("thanks");
        if (thanks) thanks.classList.add("is-on");
      });
    }
  })();