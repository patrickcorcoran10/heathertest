const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLibz extends Model {}

UserLibz.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    
    },
    madlibz_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'madlibz',
            key: 'id'
        }

    },
    usercreds_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usercreds',
            key: 'id'
        }
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userlibz',
    }
);
  
  module.exports = UserLibz;