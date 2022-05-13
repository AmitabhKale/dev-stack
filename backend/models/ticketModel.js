const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: [true, 'Please enter the description']
    },
    assignee: {
        type: String,
        required: true,
        enum: ['Admin', 'IT Service'],
        default: 'IT service'
    },
    status: {
        type: String,
        required: true,
        default: 'Backlog',
        enum: ['Backlog', 'Dev', 'Done']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)