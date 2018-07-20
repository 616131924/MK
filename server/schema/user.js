/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    password: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(90),
      allowNull: false,
      defaultValue: '0'
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'user'
  });
};
