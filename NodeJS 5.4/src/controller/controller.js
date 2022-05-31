import { statusCode } from '../constants/statusCodes';
import service from '../services/service';

class Controller {
    getAllUsers(req, res) {
        service.getAllUsers().then(users => {
            res.json(users);
        }).catch(err => {
            res.status(statusCode.InternalServerError).json(err);
        });
    }
    getUser(req, res) {
        const { id } = req.params;
        service.getUser(id).then(user => {
            res.status(statusCode.OK).json(user);
        }).catch(err => {
            res.status(statusCode.NotFound).json(err);
        });
    }

    createUser(req, res) {
        const user = req.body;
        service.createUser(user).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(statusCode.NotFound).json(err);
        });
    }

    removeUser(req, res) {
        const { id } = req.params;
        service.removeUser(id).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(statusCode.NotFound).json(err);
        });
    }

    updateUser(req, res) {
        const { id } = req.params;
        const user = req.body;
        service.updateUser(id, user).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(statusCode.NotFound).json(err);
        });
    }

    autoSuggest(req, res) {
        const { loginSubstring, limit } = req.params;
        service.autoSuggest(loginSubstring, limit).then(users => {
            res.json(users);
        }).catch(err => {
            res.status(statusCode.NotFound).json(err);
        });
    }
}

export default new Controller();
