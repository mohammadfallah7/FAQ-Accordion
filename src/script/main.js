document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.getElementById("accordion");
  const accordionActions = accordion.getElementsByClassName(
    "accordion__item__action"
  );
  const panels = accordion.getElementsByClassName("accordion__item__panel");

  for (let i = 1; i < panels.length; i++) {
    const panel = panels[i];
    panel.style.display = "none";
  }

  for (let i = 0; i < accordionActions.length; i++) {
    if (i == 0) {
      accordionActions[i].classList.add("active");
    }

    const icon = document.createElement("img");
    const accordionAction = accordionActions[i];
    accordionAction.appendChild(icon);

    if (accordionAction.classList.contains("active")) {
      icon.setAttribute("src", "../../assets/images/icon-minus.svg");
    } else {
      icon.setAttribute("src", "../../assets/images/icon-plus.svg");
    }

    accordionAction.addEventListener("click", function () {
      this.classList.toggle("active");

      if (accordionAction.classList.contains("active")) {
        icon.setAttribute("src", "../../assets/images/icon-minus.svg");
      } else {
        icon.setAttribute("src", "../../assets/images/icon-plus.svg");
      }

      const panel = this.nextElementSibling;
      if (panel.style.display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });
  }
});
