/*
#########################################
# part of almost minimal HTML5: default # 
# Javascript for active CSS change      #
#########################################
*/

document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const selects = document.querySelectorAll(".theme-select");

  function enableCSS() {
  document.querySelectorAll('link[rel="stylesheet"]').forEach(l => l.disabled = false);
  }

  function enableThemeCSS() {
    document.querySelectorAll('link[data-theme-css]').forEach(l => l.disabled = false);
  }

  function disableCSS() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(l => l.disabled = true);
  }

function disableThemeCSS() {
  document.querySelectorAll('link[data-theme-css]').forEach(l => l.disabled = true);
}


  function applyTheme(theme) {

    /* Debug 
      console.log("%cTheme change:", "color:lime", theme);
      console.log("HTML:", document.documentElement.getAttribute("data-theme"));
      console.log("Selects:", [...selects].map(s => s.value));
      console.log("applyTheme:", theme);
      */

    if (theme === "none") {
        // Modus: pures HTML, kein CSS
        disableCSS();
        root.removeAttribute("data-theme");

      } else if (theme.startsWith("external:")) {
        // Modus: externes CSS aktiv, internes Theme aus
        enableCSS();              // icon.css & table.css wieder aktiv
        disableThemeCSS();        // nur default.css aus
        root.removeAttribute("data-theme");
      
      } else {
        // Modus: internes Theme aktiv
        enableCSS();              // alles an
        enableThemeCSS();         // sicherstellen, dass default.css aktiv ist
      
        if (theme === "auto") root.removeAttribute("data-theme");
        else root.setAttribute("data-theme", theme);
      }

    /* Debug
    console.log("data-theme now:", root.getAttribute("data-theme"));
    */
    localStorage.setItem("theme", theme);
  }


  selects.forEach(select => {
    select.addEventListener("change", e => {
      const value = e.target.value;
      selects.forEach(s => s.value = value); // ← sync top and button menu
      applyTheme(value);
    });
  });


  enableCSS();
  const saved = localStorage.getItem("theme") || "auto";
  selects.forEach(select => select.value = saved);
  applyTheme(saved);

});

