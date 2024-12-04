const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./viewHistory/config/database');
const printHistoryRoutes = require('./viewHistory/routes/printHistory'); 

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/print-history', printHistoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
