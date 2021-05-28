const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignupModels')

router.post('/signup',(request, response) =>{
    const signUpUser = new signUpTemplateCopy({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })   
})


module.exports = router