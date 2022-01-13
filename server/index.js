const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

app.use(express.json());
app.use(cors());

const db = require('./models');

// routers
const postRouter = require('./routes/Post');
app.use('/posts', postRouter);

db.sequelize
	.sync()
	.then(() => {
		app.listen(port, () => {
			console.log(`server is running on port ${port}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
