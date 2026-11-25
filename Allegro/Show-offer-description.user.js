// ==UserScript==
// @name        Show offer description
// @namespace   https://github.com/SylwesterZarebski/UserScripts
// @version     1.1.0
//
// @match       https://*.allegro.pl/produkt/*
// @match       https://*.allegro.pl/oferta/*
// @grant       none
//
// @author      Sylwester Zarębski
// @description Show offer description
// @copyright   2026, Sylwester Zarębski (https://github.com/SylwesterZarebski)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @homepage    https://github.com/SylwesterZarebski/UserScripts/tree/main/Allegro
// @homepageURL https://github.com/SylwesterZarebski/UserScripts/tree/main/Allegro
// @downloadURL https://raw.githubusercontent.com/SylwesterZarebski/UserScripts/main/Allegro/Show-offer-description.user.js
// @updateURL   https://raw.githubusercontent.com/SylwesterZarebski/UserScripts/main/Allegro/Show-offer-description.user.js
// @supportURL  https://github.com/SylwesterZarebski/UserScripts/issues
// ==/UserScript==

(() => {
  // Document root
  const root = document.body || document.documentElement;

  // Collapsed description section toggle
  const selector = 'div[data-box-name="allegro.showoffer.descriptionSection"] button[data-analytics-interaction-value="descriptionExpandBottom"][aria-expanded="false"]';

  // Button declaration
  let button = null;

  // Click once per frame until the section is expanded, then stop observing
  const expand = () => {
    if (!button.isConnected) {
      button = null; // Button was re-rendered, let the observer find the new one
      return;
    }
    if (button.getAttribute("aria-expanded") === "true") {
      observer.disconnect();
      return;
    }
    button.click();
    requestAnimationFrame(expand);
  };

  // Find button, start expanding if found
  const findButton = target => {
    if (button)
      return;
    button = target.querySelector(selector);
    if (button)
      requestAnimationFrame(expand);
  };

  // Check DOM for changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => findButton(mutation.target));
  });
  observer.observe(root, { childList: true, subtree: true });

  // Check document
  findButton(root);
})();
