const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/stringGeneratorDB';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connection established successfully.'))
  .catch((err) => console.error('Database connection failure:', err));
const TokenSchema = new mongoose.Schema({
  value: { type: String, required: true },
  length: { type: Number, required: true },
  config: {
    upper: Boolean,
    lower: Boolean,
    number: Boolean,
    symbol: Boolean
  },
  createdAt: { type: Date, default: Date.now, expires: 300 } // Auto-deletes from DB after 5 minutes
});
const Token = mongoose.model('Token', TokenSchema);
/**
 * @route   POST /api/tokens
 * @desc    Save a newly generated string token to the persistent store
 */
app.post('/api/tokens', async (req, res) => {
  try {
    const { value, length, config } = req.body;
    if (!value) return res.status(400).json({ error: 'Token contents cannot be null' });

    const newToken = new Token({ value, length, config });
    await newToken.save();
    res.status(201).json(newToken);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error while saving record' });
  }
});
/**
 * @route   
 * @desc    
 */
app.get('/api/tokens', async (req, res) => {
  try {
    const tokens = await Token.find().sort({ createdAt: -1 }).limit(10);
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error while pulling record logs' });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server processing configurations on port ${PORT}`));