/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like0', {
    like_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    youji_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'youji',
        key: 'youji_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    tableName: 'like0'
  });
};
