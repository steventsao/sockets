const userModel = require('./userModeL');

module.exports.createUser = (req, res)=> {
    userModel.createUser(req.body.username, 'Sunnyvale', (err)=> {
        if (err) {
            console.log(err);
            process.exit(1)
        } else {
            console.log('new user created');
        }
    });
};

module.exports.getAllUsers = (req, res)=> {
    userModel.getAllUsers((err, users)=> {
        if (err) {
            console.log(err);
            process.exit(1)
        } else {
            console.log('users:' + users);
        }
    });
};

module.exports.getUserById = (req, res)=> {
    userModel.getUserById(userId, (err, user)=> {
        if(err) {
            console.log(err);
            process.exit(1)
        } else {
            console.log('newUsers:' + user)
        }
    })
};