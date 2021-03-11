const express = require('express')
const Forum = require('../models/Forum')

//show the list of forum
const index = (req, res, next) => {
    Forum.find().then(response => {
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

//show an forum by an forumid
const show = (req, res, next) => {

    let forumId = req.body.id
    //et forumname = req.body.forumname
    //console.log(forumname)

    Forum.findById(forumId)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
            console.log(Error)
        })
}


//add a new forum
const store = (req, res, next) => {
    let forum = new Forum({
        forumname: req.body.forumname,
        forumreply: req.body.forumreply,
        forumview: req.body.forumview,
        categoryid: req.body.id

    })


    forum.save()
        .then(response => {
            res.json({
                message: 'forum ' + req.body['forumname'] + ' is Added Successfully!'
            })
            console.log(req.body['forumname'])
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
            console.log(error)
        })
}

//update a forum
const update = (req, res, next) => {
    let forumId = req.body.id


    let updatedData = {
        forumname: req.body.forumname,
    }
    console.log(forumId)

    Forum.findByIdAndUpdate(forumId, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'forum ' + req.body['forumname'] + ' is updated Successfully!'
            })
            console.log(req.body['forumname'])
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

//delete a forum
const deleted = (req, res, next) => {
    let forumId = req.body.id
   // let forumname = req.body.forumname
   // console.log(forumname)
    Forum.findByIdAndRemove(forumId)
        .then(() => {
            res.json({
                message: 'forum  ' + req.body['id'] + ' is deleted Successfully!'
            })

        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

const deletetable = (req, res, next) => {
    Forum.deleteMany()
        .then(() => {
            res.json({
                message: 'forum table deleted successfully',
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

module.exports = {
    index, show, store, update, deleted, deletetable


}