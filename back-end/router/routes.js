const express = require ('express')
const router = express.Router()
const {index, accountRegistration} = require ("../controllers/router-controllers")
router.route('/index').get(index)
router.route('/account/registration').post(accountRegistration)
module.exports = router