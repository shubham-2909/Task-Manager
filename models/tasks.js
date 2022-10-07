const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name property is rewuired'],
        trim: true,
        maxlength: [20, 'Cant exceed more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports= mongoose.model('Task', taskSchema)
