
let username = undefined;

export function init() {
    if (localStorage.username) {
        username = localStorage.username;
    }
}

export function getUsername() {
    return username;
}

export function setUsername(newUsername) {
    username = newUsername;
    localStorage.username = username;
}
