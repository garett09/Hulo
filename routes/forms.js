const express = require('express');
const router = express.Router()

const { getAllForms, newForm, getSingleForm, updateForm} = require('../controllers/formCtrl');

router.route('/forms').get(getAllForms);

router.route('/forms/:id').get(getSingleForm);

router.route('/admin/forms/new').post(newForm);

router.route('/admin/forms/:id').put(updateForm);


module.exports = router;