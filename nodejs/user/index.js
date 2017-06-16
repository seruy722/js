let phreses = require('./ru');

class User {
    constructor(name) {
        this.name = name;
    }

    hello(who) {
        console.log(`${phreses.Hello} ${who.name}`);
    }
}


exports.User = User;