const router = require('express').Router();

//http:lovalhost:3001/profileRoutes/admin
router.get("/admin", (req,res)=>{
    res.render('admin',{user:'Phil',role:"administrator"})

})
module.exports = router;