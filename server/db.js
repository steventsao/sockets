var mysql = require('mysql'),
    async = require('async');

var PRODUCTION_DB = 'app_prod_database',
    TEST_DB = 'tubeviz';

var state = {
    pool: null,
    mode: null,
};

exports.get = function() {
    return state.pool
};

exports.connect = function(mode, done) {
    state.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
    });

    state.mode = mode;
    done()
};

exports.fixtures = function(data) {
    var pool = state.pool;
    if (!pool) return done(new Error('Missing database connection.'));

    var names = Object.keys(data.tables);
    async.each(names, function(name, cb) {
        async.each(data.tables[name], function(row, cb) {
            var keys = Object.keys(row)
                , values = keys.map(function(key) { return "'" + row[key] + "'" });

            pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
        }, cb)
    }, done)
};

exports.drop = function(tables, done) {
    var pool = state.pool;
    if (!pool) return done(new Error('Missing database connection.'));

    async.each(tables, function(name, cb) {
        pool.query('DELETE * FROM ' + name, cb)
    }, done)
};

exports.createUserTable = (done)=> {
    var pool = state.pool;
    if (!pool) return done(new Error('Missing database connection.'));
    
    pool.query('SHOW TABLES LIKE "user"', (err, result)=> {
        //table exist
        if(!result || result.length < 1) {
            pool.query('CREATE TABLE user (id int(11) NOT NULL AUTO_INCREMENT, name varchar(50), location varchar(50), PRIMARY KEY (id))',
                function(err, result) {
                    if (err) return done(err);
                    done(null, result.insertId)
                })
        }
    })
};