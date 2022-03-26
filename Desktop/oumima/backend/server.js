const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./models/Utilisateurs');

const commentaire = require('./models/Commentaire');

require("dotenv").config();
const cors = require('cors');
const app = express();

const bcrypt = require('bcrypt');
    const connect = async()=>{
try {
     mongoose.connect("mongodb://localhost:27017/station_lavage" ,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  },
    async (err) => {
        if (err) console.log(err);
        else {
            let admin = await users.findOne({
            role: "admin"
            });
            if(!admin){
                let MPass = 'admin'
                const salt = await bcrypt.genSalt(10);
                const hashed = await bcrypt.hash(MPass, salt);
                let new_user = new users({
                    cin:14785236,
                    nom:"asma",
                    prenom: "prenom",
                    Num_tel : "23690396",
                    Adr: "oumaimaAkaichi",
                    MPass: hashed,
                    role: "admin"
                });

await new_user.save();
console.log(`admin account has been added : ${users.Adr}`);
            }else{
                console.log( `{admin account already exist \n admin Adresse : ${admin.Adr}}`);

            }
            
        }

    }
    );
    console.log("database connected");
} catch (error) {
    console.log(error);
    console.log("database not connected");
}
    }
    connect()








app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req,res)=>{
    res.send("hello jwt");
}); 

app.use("/utilisateur", require("./routers/utilisateurRoutes"))
app.use("/comme",require("./routers/commRoutes"))

const PORT = process.env.PORT ||4000 ;
app.listen(4000,  () => {
    console.log("Server runing")
});

