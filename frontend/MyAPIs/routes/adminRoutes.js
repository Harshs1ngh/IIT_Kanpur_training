const express =  require('express')
const router =  express.Router()

const { 
  adminDefault , 
  adminHome , 
  adminAbout , 
  createUser,
  getUsers,
  getUserById , 
  updateUser,
  deleteuser
 }  = require('../controllers/adminController')


// http://localhost:8000/api/admin/addNew
router.post('/addNew' , createUser )

// http://localhost:8000/api/admin/users
router.get('/users',getUsers)


// http://localhost:8000/api/admin/user/1001
router.get('/user/:id',getUserById)


// http://localhost:8000/api/admin/update/1001
router.patch('/update/:id',updateUser)

router.delete('/delete/:id',deleteuser)

module.exports = router