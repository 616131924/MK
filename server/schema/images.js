/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('follow', {
    image_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imagename: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    youji_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'images'
  });
};
