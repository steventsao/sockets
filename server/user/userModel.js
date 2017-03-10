const db = require('../db.js');

exports.createUser = (name, location, done)=> {
    var values = [name, location];
    db.get().query('INSERT INTO user (name, location) VALUES(?, ?)', values, (err, result)=> {
        if (err) return done(err);
        done(null, result.insertId)
    })
};

exports.getAllUsers = (done)=> {
    db.get().query('SELECT * FROM user', (err, rows)=> {
        if (err) return done(err);
        done(null, rows)
    })
};

exports.getUserById = (userId, done)=> {
    db.get().query('SELECT * FROM user WHERE id = ?', userId, (err, rows)=> {
        if (err) return done(err);
        done(null, rows)
    })
};