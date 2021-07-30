'use strict';
const db = require('./db');
const bcrypt = require('bcryptjs');

// Manage the login procedure

exports.getUserByCredentials = (email, pwd) => {
    return new Promise ((resolve, reject) => {
        const query =  'SELECT * FROM users WHERE email = ?';
        db.get(query, [email], (err, row) => {
            if (err)
                reject(err);    // DB error
            else if (row === undefined)
                resolve(false);     // user not found
            else {
                // Favourable case
                bcrypt.compare(pwd, row.pwd_hash).then(result => {
                    if(result){ // Password Matches
                        const user = { id: row.id, username: row.email, name: row.name };
                        resolve(user);
                    }
                    else // Password doesn't match
                        resolve(false); 
                })
            }
        });
    });
};

exports.getUserByID = (id) => {
    return new Promise ( (resolve, reject) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.get(query, [id], (err, row) => {
            if(err) // an error means reject
                reject(err);
            else if (row === undefined)
                resolve({error: 'User not found'});
            else {
                // Favourable case: the user is found, we have to send it
                const user = { id: row.id, username: row.email, name: row.name };
                resolve(user);
            }
        });
    });
}

// Manage the Signup Procedure

exports.signUpNewUser = (user) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO users(email, pwd_hash, name) VALUES(?,?,?)';
      db.run(sql, [user.email, user.pwd_hash, user.name], function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(this.lastID); 
        });
    });
};