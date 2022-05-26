const express = require('express');


const router = express.Router();
const users = require('../db/data').users;

const { rMethod, rUrl, validate } = require('../middlewares/middleware');

const not_found = 404;

const user_get_request_by_id = (req, res) => {
    const uuid = req.params.uuid;
    console.log(req.params);
    const result = users.find((user) => user.uuid === uuid);
    console.log(result);
    if (result && !result.isDeleted) {
        res.send(result);
    } else {
        res.send('User not Found!');
    }
};

const createUser = (req, res) => {
    const data = req.body;
    users.push(data);
    res.send({ message: 'New User created' });
};

const update_user_Request = (req, res) => {
    const uuid = req.params.uuid;
    const data = req.body;
    const position = users.findIndex((user) => user.uuid === uuid);

    if (position !== -1) {
        users[position] = data;
        res.statusCode = 200;
        res.send({ message: 'Successfully Updated the user' });
    } else {
        res.statusCode = 404;
        res.send({ message: 'Unable to find the user' });
    }
};

const delete_user_Request = (req, res) => {
    const uuid = req.params.uuid;
    const position = users.findIndex((user) => user.uuid === uuid);
    if (position !== -1) {
        users[position].isDeleted = true;
        res.statusCode = 200;
        res.send({ message: 'Successfully Deleted User data' });
    } else {
        res.statusCode = 404;
        res.send({ message: 'Unable to find the user' });
    }
};

const user_Get_Req = (req, res) => {
    const result = users.filter(user => !user.isDeleted);
    console.log(result);
    res.send(result);
};

const auto_suggest_users = (req, res) => {
    const TEN = 10;
    const { loginSubstring = '', limit = TEN } = req.query;
    const list = users
        .filter(user => user.login.includes(loginSubstring) && !user.isDeleted)
        .sort((user1, user2) => user1.login.localeCompare(user2.login))
        .slice(0, limit);
    res.send(list);
};

const answerAnyRequest  = (req, res) => {
    res.status(not_found).send('Error');
};


const validation = require('../src/validation');

router.get('/getUser/:uuid', rMethod, rUrl, user_get_request_by_id);
router.get('/fetchusers', rMethod, rUrl, user_Get_Req);
router.post('/createUser', rMethod, rUrl, validate(validation.person), createUser);
router.put('/update/:uuid', rMethod, rUrl, validate(validation.person), update_user_Request);
router.delete('/delete/:uuid', rMethod, rUrl, delete_user_Request);
router.get('/autosuggest', rMethod, rUrl, auto_suggest_users);
// localhost:3001/autosuggest?loginSubstring=R&limit=10

router.use('/*', rMethod, rUrl, answerAnyRequest);

module.exports = {
    router
};
