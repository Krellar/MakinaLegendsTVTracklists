// ==UserScript==
// @name         MakinaLegends Tracklists
// @namespace    https://www.makinalegends.com
// @version      0.1
// @description  try to take over the world!
// @author       Jordi Rosa
// @match        https://www.makinalegends.com/makina-legends-tv-area-personal/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var sheet = window.document.styleSheets[0];
    sheet.insertRule(
`/* Style the button that is used to open and close the collapsible content */
.collapsibleScripted {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}`, sheet.cssRules.length);

    sheet.insertRule(
`/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  width: 100%;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}`, sheet.cssRules.length);

    var script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/gh/jordirosa/MakinaLegendsTVTracklists/MakinaLegends.github.js";
    script.type = "text/javascript";

    document.head.appendChild(script);
})();