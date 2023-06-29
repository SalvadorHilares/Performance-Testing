const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('vaccinations', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    total_vaccinations: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    people_vaccinated: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    people_fully_vaccinated: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    new_deaths: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ratio: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
};