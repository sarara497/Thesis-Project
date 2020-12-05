const mongoose = require('mongoose')


//create the schema 
const Real_Estate = mongoose.Schema({
    location :{
        type: String,
        required :true
      },
    real_type :{
        type: String,
        required :true
      },
    area: {
          type: String,
          required: true,
      },
    price: {
        type: String,
        required: true,
      },
    lowest_price: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    is_sale: {
        type: Boolean,
        required: true,
    },
    is_rent: {
        type: Boolean,
        required: true,
    },
    installment: {
        type: Boolean,
        required: true,
    },
    rent_type: {
        type: String,
        required: true,
      },
    rent_dure: {
        type: String,
        required: true,
      },
    full_Address: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
      },
    
    Owner_phoneNumber: {
          type: String,
          required: true,
      },
     
})

//create the model 

const Real_Estate = mongoose.model('Real_Estate' , Real_Estate)

//export the model

module.exports = Real_Estate


