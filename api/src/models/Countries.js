const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('countries', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iso_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    population: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  });
};