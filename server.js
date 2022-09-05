const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://myapp:rpOwS68EgL8kpji4@cluster0.cmtvyfu.mongodb.net/myapp');

app.use('/', require('./routes/bookRoute'));

app.listen(3001, function() {
	console.log('express server is running ~');
});
