const router = require('express').Router();
const Pie = require('../db').import('../models/pie');
const validateSession = require('../middleware/validate-session');
// use to get this info in other files

router.get('/', (req, res) => {
    Pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({error: err}))
})

router.post('/', validateSession, (req, res) => {
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating,
        owner: req.user.email
        
    }

    Pie.create(pieFromRequest)
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json(req.errors))
    
});



// Broken code:
router.get('/:name', (req, res) => {
    Pie.findOne({ where: { nameOfPie: req.params.name }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({error: err}))
})

router.put('/:id', validateSession, (req, res) => {
    Pie.update(req.body, { where: { id: req.params.id }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({error: err}))
})

router.delete('/:id', validateSession, (req, res) => {
    Pie.destroy({ where: {id: req.params.id} })
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json({error: err}))
})

module.exports = router;
