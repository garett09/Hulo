const express = require('express');
const router = express.Router()

const { getAllForms, newForm, getSingleForm} = require('../controllers/formCtrl');

router.route('/forms').get(getAllForms);

router.route('/forms/:id').get(getSingleForm);

router.route('/forms/new').post(newForm);


module.exports = router;