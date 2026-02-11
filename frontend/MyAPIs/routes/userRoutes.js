const express =  require('express')
const router =  express.Router()

const userController = require('../controllers/userController')

// http://localhost:8000/api/user
router.get('/',userController.userDefault)

// http://localhost:8000/api/user/home
router.get('/home',userController.userHome)

router.post('/form',userController.formHandler)


module.exports = router