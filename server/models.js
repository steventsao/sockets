var db = require('./db.js')

exports.createTable = function(done) {
    db.get().query('CREATE TABLE tubeviz ( id int(11) NOT NULL AUTO_INCREMENT, name varchar(50), location varchar(50), PRIMARY KEY (id))',
        function(err, result) {
        if (err) return done(err)
        done(null, result.insertId)
    })
}

exports.create = function(id, name, location, done) {
    var values = [id, name, location]

    db.get().query('INSERT INTO tubeviz (id, name, location) VALUES(?, ?, ?)', values, function(err, result) {
        if (err) return done(err)
        done(null, result.insertId)
    })
}

exports.getAll = function(done) {
    db.get().query('SELECT * FROM comments', function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}

exports.getAllByUser = function(userId, done) {
    db.get().query('SELECT * FROM comments WHERE user_id = ?', userId, function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}