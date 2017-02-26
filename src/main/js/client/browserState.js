
let visible = false;
let focused = false;

export function init() {
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.onfocus = onFocus;
    window.onblur = onBlur;
}

function setVisible(newState) {
    if (visible != newState) {
        visible = newState;
        // console.log("visible="+visible);
    }
}

function setFocused(newState) {
    if (focused != newState) {
        focused = newState;
        // console.log("focused="+focused);
    }
}

function onVisibilityChange() {
    setVisible(!document.hidden);
}

function onFocus() {
    setFocused(true);
}

function onBlur() {
    setFocused(false);
}
