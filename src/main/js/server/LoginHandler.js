import * as Moniker from 'moniker';
import * as socketServer from './socketServer';
import * as userRegistry from './userRegistry';

const LOGIN_TYPE = "login";

class LoginHandler {
    constructor(transportHandler, onLoginSuccessHandler) {
        this.transportHandler = transportHandler;
        this.username = undefined;
        this.transportHandler.setRxCallback(LOGIN_TYPE, this.rxCallback.bind(this));
        this.onLoginSuccessHandler = onLoginSuccessHandler;
    }

    getUsername() {
        return this.username;
    }

    rxCallback(message) {
        console.log("rx "+JSON.stringify(message));
        if (message.username) {
            if (socketServer.isUserConnected(message.username)) {
                console.log("user already logged in");
                this.transportHandler.send(LOGIN_TYPE, { success: false, message: "User already logged in" });
                return;
            }
        }
        if (message.username === undefined) {
            this.username = Moniker.choose();
            console.log("Generating new user name");
        } else {
            this.username = message.username;
        }
        userRegistry.setUserUuid(this.username, message.uuid);
        console.log("User "+this.username+" connected, uuid:"+message.uuid);
        this.transportHandler.send(LOGIN_TYPE, {
            success: true,
            username: this.username,
            uuid: userRegistry.getUuid()
        });
        this.onLoginSuccessHandler();
    }
}

export default LoginHandler;