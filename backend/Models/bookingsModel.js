const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    user_name:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true

    },
    service_type:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
   
},{timestamps:true})

module.exports = mongoose.model('bookings_info', bookingSchema)
