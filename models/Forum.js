const mongodb = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const forumschema = new Schema(
  {
    forumname: {
      type: String,
    },
    forumreply: {
      type: String,
    },
    forumview: {
      type: Number,
    },
    replycount: {
      type: Number,
    },
    categoryid: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Forum", forumschema);
