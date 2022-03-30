const express = require('express');
const router = express.Router()

const { getAllForms, newForm} = require('../controllers/formCtrl');

router.route('/forms').get(getAllForms);

router.route('/forms/new').post(newForm);


module.exports = router;