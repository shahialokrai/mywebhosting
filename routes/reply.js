const express = require("express");
const router = express.Router();

const ReplyController = require("../controllers/replyController");
const authenticate = require("../middleware/authenticate");

router.get("/", ReplyController.index);
router.get("/showbyid", ReplyController.show);
router.post("/showByForum", ReplyController.showByForum);
router.post("/addreply", authenticate, ReplyController.store);
router.post("/updatereply", ReplyController.update);
router.post("/deletereply", ReplyController.deleted);
router.delete("/delete", ReplyController.deletetable);

module.exports = router;
