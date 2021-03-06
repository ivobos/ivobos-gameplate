import * as userAccount from '../userAccount';
import * as serverConnection from './serverConnection';
import * as messageTypes from "../../common/messageTypes";

class LoginHandler {
    constructor(transportHandler, onLoginSuccessHandler) {
        this.transportHandler = transportHandler;
        this.loggedIn = false;
        this.transportHandler.setRxCallback(messageTypes.LOGIN_TYPE, this.rxCallback.bind(this));
        this.onLoginSuccessHandler = onLoginSuccessHandler;
        this.transportHandler.send(messageTypes.LOGIN_TYPE, {
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
                    timeout: 10000
                });
            } else if (message.action === "Retry") {
                document.querySelector('.mdl-js-snackbar').MaterialSnackbar.showSnackbar({
                    message: message.message,
                    actionHandler: function (event) {
                        serverConnection.setEnabled(true);
                    },
                    actionText: 'Retry',
                    timeout: 10000
                });
                serverConnection.setEnabled(false);
            } else {
                document.querySelector('.mdl-js-snackbar').MaterialSnackbar.showSnackbar({
                    message: message.message,
                    timeout: 10000
                });
                serverConnection.setEnabled(false);
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