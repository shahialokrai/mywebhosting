const mongodb = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({


    categoryname: {
        type: String, unique: true

    },
    categorydesc: {
        type: String

    }





}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)