const { Router } = require('express');
const { verifyToken } = require('../middlewares');
const controller = require('./entity.controller');
const router = Router();

router.get('/', verifyToken, controller.get.bind(controller));
router.post('/', verifyToken, controller.create.bind(controller));
router.put('/:id', verifyToken, controller.update.bind(controller));
router.delete('/:id', verifyToken, controller.delete.bind(controller));

module.exports = router;