const router = require('express').Router();
const sequelize = require('../db');
const User = sequelize.import('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function createToken(userId) {
    return jwt.sign({id: userId}, { expiresIn: '1d' });
}

const authRequestValidation = (req, res, next) => {
    if (!req.body.username) return res.status(400).json({error: 'username must be specified'})

    if (!req.body.password) {
        return res.status(400).json({
            error: 'password must be specified'
        })
    }
    return next()
}

router.post('/signup', authRequestValidation, (req, res) => {

    User.create({
        username: req.body.username,
        passwordhash: bcrypt.hashSync(req.body.password, 10)
    })
    .then(createdUser => {
        res.json({
            user: createdUser,
            token: createToken(createdUser.id)
        })
    })
})

module.export = router;

// There are 2 errors in this file