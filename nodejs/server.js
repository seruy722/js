const user = require('./user');

function run() {
    let petja = new user.User('Petja');
    let vasja = new user.User('Vasja');

    vasja.hello(petja);
}

run();