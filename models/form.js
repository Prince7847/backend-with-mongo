const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type :Number
    },
    mobile:{
        type:String,
        required:true
    }
})

const Form = mongoose.model('Form', formSchema)
module.exports = Form;