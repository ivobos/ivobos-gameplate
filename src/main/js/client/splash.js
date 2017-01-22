import "../../css/client.css";
import "../../css/splash.css";
import "../../../../node_modules/material-design-lite/material.css";
import "../../../../node_modules/material-design-lite/material.js";

var splash = document.createElement('div');
splash.id = "splash";
document.body.appendChild(splash);

var spinner = document.createElement('div');
spinner.className = "mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active";
componentHandler.upgradeElement(spinner);
splash.appendChild(spinner);

requestAnimationFrame(function() {
    require.ensure([], function() {
        let main = require("./main.jsx");
        main.run();
    });
});

