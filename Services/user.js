const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user').User_db;
const ecrire = require('../Models/user').ecrire;
const { ajouter } = require('./historique');


exports.signup = (req, res, next) => {
    if (User({ "email": req.body.email }).get().length === 0) {
        bcrypt.hash(req.body.password, 10)
            .then((hash) => {
                const user = User.insert({
                    "nom": req.body.nom,
                    "prenom": req.body.prenom,
                    "email": req.body.email,
                    "password": hash
                });
                ecrire(process.env.User_file, User().get());
                res.status(201).json({ message: 'Etudiant créé !' });
            })
            .catch(error => res.status(500).json({ error }));
    } else {
        console.log(User().get());
        res.json({
            "Error": "Etudiant already exists "
        });
    }
};

exports.login = (req, res, next) => {
    if (User({ "email": req.body.email }).get().length === 1) {
        bcrypt.compare(req.body.password, User({ "email": req.body.email }).select('password')[0]).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            'Error': 'Mot de passe incorrect!'
                        });
                    }
                    //mot de passe correcte, on genere donc notre token a base de profil de l'utilisateur
                    var email1=req.body.email;
                    var donnee="L'Etudiant "+req.body.email+" est connecté(e).";
                    ajouter(email1,donnee);
                    res.status(200).json({
                        token: jwt.sign({ profil: User({ "email": req.body.email }),
                    email : req.body.email },
                            'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                        )
                    });
                  
                })
            .catch(err => {
                res.status(500).json({
                    "Error": err
                });  
                   
                next();
            });
    } else {
        res.status(400).json({
            "Error": "User n'existe pas "
        });
        next();
    }
};

