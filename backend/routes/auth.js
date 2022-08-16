const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
require('dotenv').config()

//REGISTER
router.post("/register", async (req, res) => {
    const username = req.body.username
    const email = req.body.email

    if(!username){
        return res.status(403).json({ msg: "Campo username requerido!"})
    }
    if(!email){
        return res.status(403).json({ msg: "Campo username requerido!"})
    }

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
    
        //save user and respond
        await newUser.save();
        res.status(200).json({msg: 'Usuário inserido com sucesso!'});
        } catch (err) {
        res.status(500).json(err)
        }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("Não encontrado");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Erro ao logar. Tente novamente")

        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;