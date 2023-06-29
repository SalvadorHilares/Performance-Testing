const { Router } = require('express');
const { insertData,
    reportByCountry,
    reportByYear
        } = require('../controllers/covid.controllers')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/covid/insert', insertData)
router.get('/covid/report/:param', (req, res) => {
    const param = req.params.param;
  
    // Verificar si el parámetro es un año (formato YYYY)
    const isYear = /^\d{4}$/.test(param);
    if (isYear) {
      // Lógica para generar informe por año
      reportByYear(req, res);
    } else {
      // Lógica para generar informe por país
      console.log(param)
      reportByCountry(req, res);
    }
  });

module.exports = router;