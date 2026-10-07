var menu = document.querySelector(".menu-btn");
var nav = document.getElementById("site-nav");
menu.addEventListener("click", function () {
  var open = nav.classList.toggle("is-open");
  menu.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.addEventListener("click", function () { nav.classList.remove("is-open"); });


(function () {
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));
  var where = document.getElementById("where");
  var index = 0;
  var lock = false;
  var files = {
    investigations: ["Financial Investigations", "Follow the money until the discrepancy has a name."],
    compliance: ["Corporate Compliance", "Checked against the rule, not only the story."],
    risk: ["Risk Management", "See the exposure before it becomes the matter."],
    disputes: ["Dispute Resolution", "Negotiations, mediations, and settlements."],
    litigation: ["Litigation Support", "Analysis and expert testimony."],
    assurance: ["Assurance", "A conclusion another professional can examine."],
    tax: ["Tax", "The tax question, read with a forensic eye."],
    advisory: ["Advisory Services", "The next move for a middle-market leader."]
  };
  function go(next) {
    index = Math.max(0, Math.min(panels.length - 1, next));
    panels[index].scrollIntoView({ behavior: "smooth", block: "start" });
    where.textContent = panels[index].getAttribute("data-label");
  }
  function step(dir) {
    if (lock) return;
    lock = true;
    go(index + dir);
    setTimeout(function () { lock = false; }, 700);
  }
  window.addEventListener("wheel", function (event) {
    if (window.innerWidth < 900) return;
    event.preventDefault();
    if (Math.abs(event.deltaY) < 8) return;
    step(event.deltaY > 0 ? 1 : -1);
  }, { passive: false });
  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") step(1);
    if (event.key === "ArrowUp") step(-1);
  });
  document.querySelectorAll("[data-go]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      go(Number(link.getAttribute("data-go")));
    });
  });
  document.querySelectorAll("#chooser button").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll("#chooser button").forEach(function (item) { item.classList.remove("is-on"); });
      button.classList.add("is-on");
      var file = files[button.getAttribute("data-service")];
      document.getElementById("picked-title").textContent = file[0];
      document.getElementById("picked-copy").textContent = file[1];
    });
  });
  document.getElementById("intake").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("thanks").classList.add("is-on");
    event.target.reset();
  });
  go(0);
})();