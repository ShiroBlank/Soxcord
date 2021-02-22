/**
 * @name ScanlinesV2
 * @authorId 497555706073841671
 * @donate https://www.paypal.me/knees0x
 * @website https://github.com/ShiroBlank/Soxcord/blob/main/ScanlinesV2.plugin.js
 * @source https://raw.githubusercontent.com/ShiroBlank/Soxcord/main/ScanlinesV2.plugin.js
 * @updateUrl https://raw.githubusercontent.com/ShiroBlank/Soxcord/main/ScanlinesV2.plugin.js
 */
function ScanlinesV2() {
    this.initiated = false;
    this.oSettings = {};
}

var style = `/* Scanlines */

#overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
    background-image: url(https://classic.systemspace.network/res/img/ui/static/overlay.png);
    background-repeat: all;
    background-position: 0px 0px;

    animation-name: Static;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(4);

    box-shadow: inset 0px 0px 10em rgba(0,0,0,0.4);
}

@keyframes Static {
    0% { background-position: 0px 0px; }
    100% { background-position: 0px 4px; }
}

#overlay2 {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
    background-image: url(https://classic.systemspace.network/res/img/ui/static/overlay2.png);
    background-repeat: all;
    background-position: 0px 0px;

    animation-name: Static;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(4);
}`

ScanlinesV2.prototype.getName = function () {
    return "Systemspace Scanlines";
};
ScanlinesV2.prototype.getShortName = function () {
    return "SlV2";
};
ScanlinesV2.prototype.getDescription = function () {
    return "Enables Systemspace Scanlines on BetterDiscord";
};
ScanlinesV2.prototype.getVersion = function () {
    return "0.5";
};
ScanlinesV2.prototype.getAuthor = function () {
    return "Kneesox";
};
ScanlinesV2.prototype.load = function () {
  BdApi.injectCSS(this.getShortName(), style);
}
ScanlinesV2.prototype.start = function () {
  const divs = $(`<div id="overlay"></div><div id="overlay2"></div>`);
  $("body").append(divs);
};
ScanlinesV2.prototype.stop = function () {
  var overlay1 = document.getElementById("overlay");
  var overlay2 = document.getElementById("overlay2");
  overlay1.parentNode.removeChild(overlay1);
  overlay2.parentNode.removeChild(overlay2);
};
