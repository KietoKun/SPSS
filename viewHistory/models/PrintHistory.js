const mongoose = require('mongoose');

const PrintHistorySchema = new mongoose.Schema({
    printerId: { type: String, required: true },
    printerName: { type: String, required: true },
    printedAt: { type: Date, default: Date.now },
    userName: { type: String, required: true },
    fileName: { type: String, required: true },
    pages: { type: Number, required: true },
    paperSize: { type: String, required: true },
    fileType: { type: String, required: true },
});

module.exports = mongoose.model('PrintHistory', PrintHistorySchema, 'printHistories');
