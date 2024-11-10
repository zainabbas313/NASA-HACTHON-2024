const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  minlat: { type: Number, required: true },
  minlon: { type: Number, required: true },
  maxlat: { type: Number, required: true },
  maxlon: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Location', locationSchema);

