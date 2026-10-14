// ==UserScript==
// @name        Show offer description
// @namespace   https://github.com/SylwesterZarebski/UserScripts
// @version     1.0.1
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

(function () {
  new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        mutation.target.querySelectorAll('div[data-box-name="Container Description"] button[data-analytics-interaction-value="descriptionExpandBottom"][aria-expanded="false"]').forEach((link) => {
          link.click();
        });
      }
    }
  }).observe(
    document,
    { subtree: true, characterData: true, childList: true }
  );
})();
