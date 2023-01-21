const express = require('express');
const router = express.Router();

const controller = require('../controllers/contacts');

//Week 2
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

//Week 3
router.post('/', controller.createContact);
router.put('/:id', controller.updateContact);
router.delete('/:id', controller.deleteContact);

module.exports = router;