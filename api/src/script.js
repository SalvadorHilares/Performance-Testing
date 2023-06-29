const { Vaccinations, Countries, conn } = require('./db.js');
const fs = require('fs');
const insertionDatabase = async () => {
try {
    await conn.sync();
    
    // Ruta y nombre del archivo CSV
    const csvFilePath = './data.csv';
  
    // Leer el archivo CSV
    const fileData = fs.readFileSync(csvFilePath, 'utf-8');
  
    // Separar las líneas del archivo CSV
    const rows = fileData.trim().split('\n');
  
    // Recorrer las filas y realizar la inserción en las tablas
    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',');
  
      const country = await Countries.create({
        country: values[1],
        iso_code: values[2],
        population: values[8],
      });
      if(values[3] === "PSE"){
        await Vaccinations.create({
          total_vaccinations: values[4],
          people_vaccinated: values[5],
          people_fully_vaccinated: values[6],
          new_deaths: values[7],
          ratio: values[9],
          country_id: country.id,
        });
      }else{
        await Vaccinations.create({
          date: values[3],
          total_vaccinations: values[4],
          people_vaccinated: values[5],
          people_fully_vaccinated: values[6],
          new_deaths: values[7],
          ratio: values[9],
          country_id: country.id,
        });
      }
    }
  
    console.log('La inserción se ha completado correctamente.');
  } catch (error) {
    console.log('Ha ocurrido un error durante la inserción.', error);
  }
};

module.exports = insertionDatabase;