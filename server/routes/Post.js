const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

// For Data Get
router.get('/', async (req, res) => {
	const listOfPost = await Posts.findAll();
	res.json(listOfPost);
});

// For Data Insert/Post
router.post('/', async (req, res) => {
	const post = req.body;
	await Posts.create(post);

	res.json(post);
});

// For Data Delete
router.post('/delete', async (req, res) => {
	const postId = req.body.postId;
	await Posts.destroy({
		where: {
			id: postId,
		},
	});

	res.json('Deleted Successfully!');
});

// For Update Delete
router.put('/update', async (req, res) => {
	const postId = req.body;
	const record = await Posts.findOne({
		where: {
			id: postId.id,
		},
	});
	await record.update({
		title: postId.title,
		postText: postId.postText,
		userName: postId.userName,
	});

	res.json('update Successfully!');
});

// const jane = await User.create({ name: "Jane" });
// console.log(jane.name); // "Jane"
// jane.name = "Ada";
// // the name is still "Jane" in the database
// await jane.save();
// // Now the name was updated to "Ada" in the database!

module.exports = router;
