import * as userAccount from '../userAccount';
import * as serverConnection from './serverConnection';

const LOGIN_TYPE = "login";

class LoginHandler {
    constructor(transportHandler, onLoginSuccessHandler) {
        this.transportHandler = transportHandler;
        this.loggedIn = false;
        this.transportHandler.setRxCallback(LOGIN_TYPE, this.rxCallback.bind(this));
        this.onLoginSuccessHandler = onLoginSuccessHandler;
        this.transportHandler.send(LOGIN_TYPE, {
            username: userAccount.getUsername(),
            uuid: userAccount.getUuid(),
            appVersion: navigator.appVersion,
            version: VERSION
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    rxCallback(message) {
        if (!message.success) {
            console.log("failed to login: "+message.message);
            this.loggedIn = false;
            if (message.action === "Update") {
                document.querySelector('.mdl-js-snackbar').MaterialSnackbar.showSnackbar({
                    message: message.message,
                    actionHandler: function (event) {
                        if (typeof cordova !== 'undefined') {
                            cordova.plugins.market.open('com.gameplate');
                        } else {
                            location.reload();
                        }
                    },
                    actionText: 'Update',
                    timeout: 30000
                });
            } else if (message.action === "Disable") {
                document.querySelector('.mdl-js-snackbar').MaterialSnackbar.showSnackbar({
                    message: message.message,
                    timeout: 30000
                });
                serverConnection.setEnabled(false);
            } else {
                document.querySelector('.mdl-js-snackbar').MaterialSnackbar.showSnackbar({
                    message: message.message,
                    timeout: 30000
                });
            }
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
        this.onLoginSuccessHandler();
    }
}

export default LoginHandler;