'use strict';
const db = require('./db');

// Retrieve the list of All Memes

exports.getAllMemes = () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM meme';
      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }

        const MemeList = rows.map( (meme) => ({ 
            id: meme.id, 
            title: meme.title, 
            img: meme.img, 
            sentence1: meme.sentence1, 
            sentence2: meme.sentence2, 
            sentence3: meme.sentence3, 
            visibility: meme.visibility,
            font: meme.font, color: meme.color, 
            name: meme.name, 
            creator_id: meme.creator_id
        }));
        resolve(MemeList);
      });
    }); 
};

exports.getPublicMemes = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT M.id, M.title, M.img, M.sentence1, M.sentence2, M.sentence3, M.visibility, M.font, M.color, U.name, M.creator_id FROM meme as M JOIN users as U WHERE M.creator_id = U.id AND visibility = "public"';
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const MemeList = rows.map( (meme) => ({ 
          id: meme.id, 
          title: meme.title, 
          img: meme.img, 
          sentence1: meme.sentence1, 
          sentence2: meme.sentence2,
          sentence3: meme.sentence3, 
          visibility: meme.visibility,
          font: meme.font, 
          color: meme.color, 
          name: meme.name, 
          creator_id: meme.creator_id
      }));
      resolve(MemeList);
    });
  }); 
}

// Retrieve the List of the Memes that satisfy a given filter

exports.getFilteredMemes = (filter) => {
    return new Promise((resolve, reject) => {  
        let query;
    
        switch(filter){
            case 'all':
                query = 'SELECT M.id, M.title, M.img, M.sentence1, M.sentence2, M.sentence3, M.visibility, M.font, M.color, U.name, M.creator_id FROM meme as M JOIN users as U WHERE M.creator_id = U.id';
                break;

            case 'public':
                query = 'SELECT M.id, M.title, M.img, M.sentence1, M.sentence2, M.sentence3, M.visibility, M.font, M.color, U.name, M.creator_id FROM meme as M JOIN users as U WHERE M.creator_id = U.id AND visibility = "public"';
                break;
            
            case 'protected':
                query = 'SELECT M.id, M.title, M.img, M.sentence1, M.sentence2, M.sentence3, M.visibility, M.font, M.color, U.name, M.creator_id FROM meme as M JOIN users as U WHERE M.creator_id = U.id AND visibility = "protected"';
                break;
            }    
    
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            const MemeListFiltered = rows.map( (meme) => ({ 
                id: meme.id, 
                title: meme.title, 
                img: meme.img, 
                sentence1: meme.sentence1, 
                sentence2: meme.sentence2,
                sentence3: meme.sentence3, 
                visibility: meme.visibility,
                font: meme.font,
                color: meme.color,
                name: meme.name,
                creator_id: meme.creator_id
            }));
            resolve(MemeListFiltered);
        });
    });
};

// Retrieve a specific meme given its ID

exports.getMemeById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT id, title, img, sentence1, sentence2, sentence3, visibility, font, color, creator_id FROM meme WHERE id = ?';
        db.get(query, [id], (err, row) => {
            if (err) {
                reject(err);
                return;
            }
            if (row == undefined) {
                reject({error: 'Meme not found.'});
            } else {
            const meme = { id: row.id, title: row.title, img: row.img, sentence1: row.sentence1, 
                sentence2: row.sentence2, sentence3: row.sentence3, visibility: row.visibility,
                font: row.font, color: row.color, creator_id: row.creator_id  };
            resolve(meme);
            }
        });
    });
};

// Create a new meme
exports.createMeme = (meme) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO meme ( title, img, sentence1, sentence2, sentence3, visibility, font, color, creator_id) VALUES(?,?,?,?,?,?,?,?,?)';
      db.run(query, [meme.title, meme.img, meme.sentence1, meme.sentence2, meme.sentence3, meme.visibility, meme.font, meme.color, meme.creator_id], function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(this.lastID); 
      });
    });
  };

/* Copy a meme: 2 ways:
      between the same creator (can change every attribute)
      among two different creators: in this last case I can change title, sentences
      and the attributes (font and color) and we have to distinguish between
        --> PUBLIC meme: in that case, I can also change the visibility
        --> PROTECTED meme: in that case, the meme remains protected
*/

exports.copyTheMeme = (meme) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO meme ( title, img, sentence1, sentence2, sentence3, visibility, font, color, creator_id) VALUES(?,?,?,?,?,?,?,?,?)';
    db.run(query, [meme.title, meme.img, meme.sentence1, meme.sentence2, meme.sentence3, meme.visibility, meme.font, meme.color, meme.creator_id], function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID); 
    });
  });
};

// Delete one of his/her own memes, given the ID of the meme

exports.deleteMeme = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM meme WHERE id = ?;'
        db.run(query, [id], (err) => {
            if (err) {
                reject(err);
                return;
            } 
            resolve("Meme correctly deleted");
        });
    });
};