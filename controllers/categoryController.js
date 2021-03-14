const express = require('express')
const categories = require('../models/Category')

//show the list of category
const index = (req, res, next) => {
    categories.find().then(response => {
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

//
//const show = (req, res, next) =>{

//    let userId = req.body.userid
// console.log(userId)

//  categories.findById(userId)
// categories.find({categoryname: userName})
//  .then(response=>{
//      res.json({
//         response
//     })
//     console.log(response)
// })
// .catch(error => {
//    res.json({
//        message: 'An Error Occured'
//   })
//   console.log(Error)
//})
//}


//add a new category
const store = (req, res, next) => {
    let category = new categories({

        categoryname: req.body.categoryname,
        categorydesc: req.body.categorydesc

    })
        

        category.save()
            .then(response => {
                res.json({
                    message: 'category ' + req.body['categoryname'] + ' is Added Successfully!'
                })
                console.log(req.body['categoryname'])
            })
            .catch(error => {
                res.json({
                    message: 'An Error Occured'
                })
                console.log(error)
            })
}

//update a category
const update = (req, res, next) => {
    let categoryupdate = req.body.categoryid


    let updatedData = {
        categoryname: req.body.categoryname,
        categorydesc: req.body.categorydesc

    }
    console.log(categoryupdate)

    categories.findByIdAndUpdate(categoryupdate, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'category ' + req.body['categoryname'] + ' is updated Successfully!'
            })
            console.log(req.body['categoryname'])
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

//delete a category
const deleted = (req, res, next) => {
    let categoryname = req.body.categoryname
    console.log(categoryname)
    categories.findOneAndRemove(categoryname)
        .then(() => {
            res.json({
                message: 'category ' + req.body['categoryname'] + ' is deleted Successfully!'
            })

        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
            console.log(error)
        })
}

const deletetable = (req, res, next) => {
    categories.deleteMany()
        .then(() => {
            res.json({
                message: 'category table is deleted',
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

module.exports = {
    index, store, update, deleted, deletetable


}