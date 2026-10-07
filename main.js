(function () {
  var where = document.getElementById("where");
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
      var file = files[button.getAttribute("data-service")];
      document.getElementById("picked-title").textContent = file[0];
      document.getElementById("picked-copy").textContent = file[1];
    });
  });
  var menu = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var form = document.getElementById("intake");
  if (form) form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("thanks").classList.add("is-on");
    event.target.reset();
  });
})();

document.querySelectorAll("[data-sheet]").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById(link.getAttribute("data-sheet")).hidden = false;
  });
});
document.querySelectorAll("[data-close]").forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".sheet").hidden = true;
  });
});