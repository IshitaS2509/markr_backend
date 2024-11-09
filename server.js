// gpa-calculator-backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const gpaCalculatorRoutes = require('./routes/gpaCalculator');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contactRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/gpa', gpaCalculatorRoutes);
app.use('/api/about', aboutRoutes);



mongoose.connect('mongodb://127.0.0.1:27017/mern_website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

mongoose.connect('mongodb://localhost:27017/contactdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/contact', contactRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
