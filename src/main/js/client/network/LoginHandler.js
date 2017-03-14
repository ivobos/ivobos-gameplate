import * as userAccount from '../userAccount';

const LOGIN_TYPE = "login";

class LoginHandler {
    constructor(transportHandler, onLoginSuccessHandler) {
        this.transportHandler = transportHandler;
        this.loggedIn = false;
        this.error = undefined;
        this.transportHandler.setRxCallback(LOGIN_TYPE, this.rxCallback.bind(this));
        this.onLoginSuccessHandler = onLoginSuccessHandler;
        this.transportHandler.send(LOGIN_TYPE, {
            username: userAccount.getUsername(),
            uuid: userAccount.getUuid(),
            appVersion: navigator.appVersion
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    rxCallback(message) {
        console.log("LoginHandler rx "+JSON.stringify(message));
        if (!message.success) {
            console.log("failed to login: "+message.message);
            this.loggedIn = false;
            this.error = message.message;
            return;
        }
        if (userAccount.getUsername() !== message.username) {
            console.log("Setting username to "+message.username);
            userAccount.setUsername(message.username);
        }
        if (message.uuid) {
            userAccount.setUuid(message.uuid);
        }
        this.loggedIn = true;
        this.error = undefined;
        this.onLoginSuccessHandler();
    }
}

export default LoginHandler;