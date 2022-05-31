import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('Users', 'postgres', 'admin@123', {
    host: 'localhost',
    dialect: 'postgres'
});
