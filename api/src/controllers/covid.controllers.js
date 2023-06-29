const {Countries, Vaccinations} = require('../db.js');
const {Op} = require('sequelize');

const insertData = async (req, res) => {
}

const reportByCountry = async (req, res) => {
    const {param} = req.params;
    try {
        const query = await Countries.findAll({
            attributes: ['country'],
            where: {
                country: param
            },
            include: {
                model: Vaccinations,
                attributes: ['date', 'people_vaccinated'
                , 'new_deaths']
            }
        })
        const data = query.sort((a, b) => {
            a.vaccinations.date - b.vaccinations.date
        })
        if (data.length === 0) throw new Error('No se encontraron datos')
        res.status(200).json(data)
    } catch (error) {
        res.status(403).json({message: error.message})
    }
}

const reportByYear = async (req, res) => {
    const {param} = req.params;
    try {
        const query = await Countries.findAll({
            attributes: ['country'],
            include: {
              model: Vaccinations,
              attributes: ['date', 'people_vaccinated', 'new_deaths'],
              where: {date: {[Op.iLike]: `${param}%`}}
            }
          });
          
          const data = query.sort((a, b) => {
            return a.vaccinations.date - b.vaccinations.date;
          });
          
          res.status(200).json(data);
    } catch (error) {
        res.status(403).json({message: 'No se encontraron datos'})
    }
}

module.exports = {
    insertData,
    reportByCountry,
    reportByYear
}