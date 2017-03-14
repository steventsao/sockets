const db = require('../db.js');

exports.createUser = (username, location)=> {
    return db.User.create({ username, location })
        .then((user)=> {
            return user;
        })
};

exports.getAllUsers = ()=> {
    return db.User.findAll({
        attributes: ['username', 'id']
    }).then((users)=> {
        return users;
    })
};

exports.getUserById = (userId)=> {
    return db.User.findOne({
        where: {
            id: userId
        },
        attributes: ['username', 'id']
    }).then((user)=> {
        return user.dataValues;
    })
};