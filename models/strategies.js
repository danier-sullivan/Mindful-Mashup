const mongoose = require('mongoose');

const strategySchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	contributor: { type: String, required: true },
	
});

const Strategy = mongoose.model('Strategy', strategySchema);

module.exports = Strategy;