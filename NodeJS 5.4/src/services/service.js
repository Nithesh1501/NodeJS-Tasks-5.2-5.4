import Db from '../data-access/dbAccess';
export default class Service {
    static getUser(id) {
        return new Promise((resolve, reject) => {
            Db.getUserById(id).then(u => {
                if (u) {
                    resolve(u);
                } else {
                    reject({ 'message': 'User not found' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static createUser(u) {
        return new Promise((resolve, reject) => {
            const { login, password, age } = u;
            Db.createUser(login, password, age).then(newUser => {
                if (newUser) {
                    resolve(newUser);
                } else {
                    reject({ 'message': 'Failed to create' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static removeUser(id) {
        return new Promise((resolve, reject) => {
            Db.removeUser(id).then(result => {
                if (result[0] === 1) {
                    resolve({ 'message': 'Deleted' });
                } else {
                    reject({ 'message': 'Failed to delete' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static updateUser(id, u) {
        return new Promise((resolve, reject) => {
            const { login, password, age } = u;
            Db.updateUser(id, login, password, age).then(result => {
                if (result[0] === 1) {
                    resolve({ 'message': 'updated' });
                } else {
                    reject({ 'message': 'Failed to update' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static autoSuggest(loginSubstring, limit) {
        return new Promise((resolve, reject) => {
            Db.autoSuggest(loginSubstring, limit).then(users => {
                resolve(users);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static getAllUsers() {
        return new Promise((resolve, reject) => {
            Db.getUsers().then(allUsers => {
                resolve(allUsers);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
