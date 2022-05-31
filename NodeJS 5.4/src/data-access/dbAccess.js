import { user, op } from '../model/user';

class Db {
    getUserById(id) {
        return user.findOne({
            where: {
                id,
                isDeleted: false
            }
        });
    }

    getUsers() {
        return user.findAll({
            where: {
                isDeleted: false
            }
        });
    }

    createUser(login, password, age) {
        return user.create({
            login,
            password,
            age
        });
    }

    updateUser(id, login, password, age) {
        return user.update({
            login,
            password,
            age
        }, {
            where: {
                id
            }
        });
    }

    removeUser(id) {
        return user.update({
            isDeleted: true
        }, {
            where: {
                id,
                isDeleted: false
            }
        });
    }

    autoSuggest(loginSubstring, limit) {
        return user.findAll({
            where: {
                login: {
                    [op.like]: `%${loginSubstring}%`
                },
                isDeleted: false
            },
            limit,
            order: [
                ['login', 'ASC']
            ]
        });
    }
}

export default new Db();
