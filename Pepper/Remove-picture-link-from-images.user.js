// ==UserScript==
// @name        Remove picture link from images
// @namespace   https://github.com/SylwesterZarebski/UserScripts
// @version     1.0.1
//
// @match       https://www.pepper.pl/*
// @grant       none
//
// @author      Sylwester Zarębski
// @description Remove picture link from images
// @copyright   2021, Sylwester Zarębski (https://github.com/SylwesterZarebski)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @homepage    https://github.com/SylwesterZarebski/UserScripts/tree/main/Pepper
// @homepageURL https://github.com/SylwesterZarebski/UserScripts/tree/main/Pepper
// @downloadURL https://raw.githubusercontent.com/SylwesterZarebski/UserScripts/main/Pepper/Remove-picture-link-from-images.user.js
// @updateURL   https://raw.githubusercontent.com/SylwesterZarebski/UserScripts/main/Pepper/Remove-picture-link-from-images.user.js
// @supportURL  https://github.com/SylwesterZarebski/UserScripts/issues
// ==/UserScript==

(function () {
  new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        mutation.target.querySelectorAll('a.clickable-external').forEach((link) => {
          link.removeAttribute('href');
        });
        mutation.target.querySelectorAll('button.carousel-air-arrow').forEach((button) => {
          button.style.zIndex = '1';
        });
        mutation.target.querySelectorAll('button.threadItemCard-gallery-expand').forEach((button) => {
          button.style.top = '0';
          button.style.left = '0';
          button.style.width = '100%';
          button.style.height = '100%';
          button.style.background = 'transparent';
          button.style.border = 'none';
          button.style.borderRadius = '0';
          button.style.zIndex = '0';
          button.querySelector('span').style.display = 'none';
        });
        mutation.target.querySelectorAll('div.threadItemCard-gallery-link').forEach((button) => {
          button.style.display = 'none';
        });
      }
    }
  }).observe(
    document,
    { subtree: true, characterData: true, childList: true }
  );
})();
