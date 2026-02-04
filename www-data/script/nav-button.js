/*
#########################################
# part of almost minimal HTML5: default # 
# Javascript: hamburger & bottom-to-top #
#########################################
*/

function setupMenu(buttonId, menuId) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;

    if (!expanded) {
      // Fokus auf erstes fokussierbares Element im Menü
      const first = menu.querySelector("a, button, select, input");
      first?.focus();
    } else {
      // Fokus zurück auf Button
      button.focus();
    }
  });

  // ESC close menu
  menu.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.focus();
    }
  });
}

setupMenu("btn-top", "nav-main-top");
setupMenu("btn-bottom", "nav-main-bottom");
