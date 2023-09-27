const router = require('express').Router();
const contactController = require('../controllers/contacts');

router.get('/:id', contactController.getContactById);

router.get('/', contactController.getAllContacts);

router.post('/', contactController.createContact);

router.put('/:id', contactController.updateContact);

router.delete('/:id', contactController.deleteContact);

module.exports = router;
