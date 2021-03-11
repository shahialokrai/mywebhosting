const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fname: {
        type: String
    },
    email: {
        type: String, unique: true
    },
    phone: {
        type: Number, unique: true
    },
    password: {
        type: String
    },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true })

const tokenSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    token: { type: String, required: true },
    createAt: { type: Date, required: true, default: Date.now, expires: 43200 }
})

const Users = mongoose.model('User', userSchema)
module.exports = Users