const mongoose = require( 'mongoose');
const  autoIncrement =('mongoose-auto-increment');


const userSchema = mongoose.Schema({
    email: {
        type: String,
        
    },
    Nom_station: {
        type: String,
        
       
    },
    type_lavage: {
        type:String,
       
       
    },
    latitude: {
        type:String,
       
       
    },
    longitude: {
        type:String,
        
    },
    password:{
        type: String,
      
    },
    statut :{ type:Boolean,
    default :false,
    },
    Role :{ type:String
    
    }
} , {
    toJSON : {
        transform :  (doc, obj) => {
            delete obj.password
        }
    }
});



 module.exports = mongoose.model('station', userSchema);
