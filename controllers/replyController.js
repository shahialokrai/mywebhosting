const express = require('express')
const Reply = require('../models/Reply')

//show the list of Reply
const index = (req, res, next) => {
    Reply.find().then(response => {
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

//show a reply by a replyid
const show = (req, res, next) => {

    let replyId = req.body.id

    Reply.findById(replyId)

        .then(response => {
            res.json({
                response
            })
            console.log(response)
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
            console.log(Error)
        })
}


//add a new reply
const store = (req, res, next) => {
    let reply = new Reply({
        userid: req.body.userid,
        forumid: req.body.forumid,
        forumreply: req.body.forumreply

    })

    reply.save()
        .then(response => {
            res.json({
                message: 'forumreply ' + req.body['forumreply'] + ' is Added Successfully!'
            })
            console.log(req.body['forumreply'])
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
            console.log(error)
        })
}

//update a reply
const update = (req, res, next) => {
    let replyId = req.body.id


    let updatedData = {
        forumreply: req.body.forumreply,
    }
    console.log(replyId)

    Reply.findByIdAndUpdate(replyId, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'forumreply  ' + req.body['forumreply'] + ' is updated Successfully!'
            })
            console.log(req.body['forumreply'])
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

//delete a reply
const deleted = (req, res, next) => {
    let forumId = req.body.id
   // let forumreply = req.body.forumreply
 //   console.log(forumreply)
    Reply.findByIdAndRemove(forumId)

        .then(() => {
            res.json({
                message: 'reply  ' + req.body['id'] + ' is deleted Successfully!'

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
    Reply.deleteMany()
        .then(() => {
            res.json({
                message: 'reply table deleted',
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