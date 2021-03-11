const mongodb = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
    userid: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    forumid: {

        type: mongoose.Schema.ObjectId,
        ref: 'Forum'
    },
    forumreply: {
        type: String
    }
}, { timestamps: true })

const reply = mongoose.model('Reply', replySchema)
module.exports = reply