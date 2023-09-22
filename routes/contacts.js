const router = require("express").Router();
const contactController = require("../controllers/contacts");

router.get("/:id", contactController.getContactById);

router.get("/", contactController.getAllContacts);

module.exports = router;
