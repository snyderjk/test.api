import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('truckiedb', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const TruckModel = db.define('trucks', {
    id: { type: Sequelize.UUID, primaryKey: true },
    name: { type: Sequelize.STRING },
});

const Truck = db.models.trucks;

export { Truck };