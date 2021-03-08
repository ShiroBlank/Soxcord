/**
 * @name SpotifyDiscovery
 * @authorId 497555706073841671
 * @donate https://www.paypal.me/knees0x
 * @website https://github.com/ShiroBlank/Soxcord/blob/main/SpotifyDiscovery.plugin.js
 * @source https://raw.githubusercontent.com/ShiroBlank/Soxcord/main/SpotifyDiscovery.plugin.js
 * @updateUrl https://raw.githubusercontent.com/ShiroBlank/Soxcord/main/SpotifyDiscovery.plugin.js
 */
function SpotifyDiscovery() {
    this.initiated = false;
    this.oSettings = {};

}
SpotifyDiscovery.prototype.getName = function () {
    return "SpotifyDiscovery";
};
SpotifyDiscovery.prototype.getDescription = function () {
    return "Enabled logging spotify tracks so you can find new music.";
};
SpotifyDiscovery.prototype.getVersion = function () {
    return "0.1.1";
};
SpotifyDiscovery.prototype.getAuthor = function () {
    return "KeafyIsHere & Kneesox";
};
SpotifyDiscovery.prototype.getSettingsPanel = function () {};

SpotifyDiscovery.prototype.load = function () {};
SpotifyDiscovery.prototype.unload = function () {};
SpotifyDiscovery.prototype.start = function () {};
SpotifyDiscovery.prototype.stop = function () {};
SpotifyDiscovery.prototype.onMessage = function () {};
SpotifyDiscovery.prototype.onSwitch = function () {
    if (document.getElementById("-zinx-spotify"))
        return;

    var refElement = document.querySelector('[aria-label="Pinned Messages"]');
    if (!refElement)
        return;

    var toolbar = refElement.parentElement;
    if (!toolbar)
        return;

    var HTML = `<style>#-zinx-spotify {position: relative;height: 45px;width: auto;-webkit-box-flex: 0;-ms-flex: 0 0 auto;flex: 0 0 auto;margin: 0 8px;cursor:pointer;}}</style>
						<div tabindex="0" role="button" aria-label="Spotify" aria-roledescription="Spotify" id="-zinx-spotify">
						<svg height="100%" style="transform: scale(.5);" viewBox="0 0 167.5 167.5">
						<path fill="currentColor" style="fill:lime;" d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"></path>
						</svg></div>`;
    var tool = document.createElement("span");
    tool.innerHTML = HTML;
    tool.addEventListener("click", () => {
        var pp = BdApi.findModuleByProps('getApplicationActivity', 'getState').getState().activities;
        var oof = Object.keys(pp).filter(user => pp[user].some(activity => activity.name === 'Spotify')).map(listener => {
                const a = pp[listener].find(activity => activity.name === 'Spotify');
                return [a.details, a.state, a.sync_id];
            });
        var temp = [];
        oof.forEach(function (details) {
            temp.push(BdApi.React.createElement("a", {
                    href: "spotify:track:" + details[2],
                    target: "_blank"
                }, details[0] + " by " + details[1] + "\r\n"));
        });
        var pre = BdApi.React.createElement("pre", {
                class: "defaultColor-1_ajX0"
            }, temp);
        BdApi.alert("Spotify Song Discovery", pre)
    });
    toolbar.prepend(tool)
};
