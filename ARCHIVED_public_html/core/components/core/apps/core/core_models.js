/**
 * Sequelize ORM Models
 */
module.exports = function(db) {
    /**
     * @type {Object}
     * All models we have defined over Sequelize, plus the db instance itself
	 * NOTE: as db.client is an instance of Sequelize, 
     * use db.client.Integer instead of Sequelize.INTEGER etc
     */
    var self = {
        Person: db.client.define('person', {
            kp_PersonID: { type: db.client.INTEGER, allowNull: false, validate: { max: 11 }, primaryKey: true, autoIncrement: true},
            PersonFirstName: { type: db.client.STRING, allowNull: false, validate: { max: 255 } },
            PersonLastName: { type: db.client.STRING, allowNull: false, validate: { max: 255 } }
        },
        {
            timestamps: false,
            freezeTableName: true,
            instanceMethods: {
                mapAttributes: db.map
            }
        }),
    };
    return self;
};