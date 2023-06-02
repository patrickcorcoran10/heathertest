const Madlibz = require('./Madlibz');
const UserCreds = require('./UserCreds');
const UserLibz = require('./UserLibz');


UserLibz.belongsTo(UserCreds, {
  foreignKey: "usercreds_id",
  onDelete: "CASCADE"
});

UserCreds.hasMany(UserLibz, {
  foreignKey: "usercreds_id",
  onDelete: "CASCADE"
});

UserLibz.belongsTo(Madlibz, {
  foreignKey: "madlibz_id",
  onDelete: "CASCADE"
});

module.exports = { UserCreds, Madlibz, UserLibz};