var db = require('./db.js');

exports.createUserTable = (done)=> {
    db.get().query('SHOW TABLES LIKE "user"', (err, result)=> {
        //table exist
        if(result.length < 1) {
            db.get().query('CREATE TABLE user (id int(11) NOT NULL AUTO_INCREMENT, name varchar(50), location varchar(50), PRIMARY KEY (id))',
                function(err, result) {
                    if (err) return done(err);
                    done(null, result.insertId)
                })
        }
    })
};

exports.create = (name, location, done)=> {
    var values = [name, location];

    db.get().query('INSERT INTO user (name, location) VALUES(?, ?)', values, (err, result)=> {
        if (err) return done(err);
        done(null, result.insertId)
    })
};

exports.getAll = (done)=> {
    db.get().query('SELECT * FROM user', (err, rows)=> {
        if (err) return done(err);
        done(null, rows)
    })
};

exports.getAllByUser = (userId, done)=> {
    db.get().query('SELECT * FROM user WHERE id = ?', userId, (err, rows)=> {
        if (err) return done(err);
        done(null, rows)
    })
};