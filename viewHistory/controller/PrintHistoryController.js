const PrintHistory = require('../models/PrintHistory');

exports.getPrintHistory = async (req, res) => {
    try {
        const userName = req.query.userName.trim();
        const history = await PrintHistory.find({ userName }).sort({ printedAt: -1 });
        res.status(200).json({ data: history });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error retrieving print history', error });
    }
};

exports.addPrintHistory = async (req, res) => {
    try {
        const { printerId, printerName, userName, fileName, pages, paperSize, fileType, printedAt } = req.body;

        const newHistory = new PrintHistory({
            printerId,
            printerName,
            userName,
            fileName,
            pages,
            paperSize,
            fileType,
            printedAt: printedAt || new Date(), // Nếu không có, mặc định là ngày hiện tại
        });

        // Lưu vào database
        await newHistory.save();

        // Trả về kết quả
        res.status(201).json({
            message: 'Print history added successfully',
            data: newHistory,
        });
    } catch (error) {
        console.error('Error adding print history:', error);
        res.status(500).json({
            message: 'Error adding print history',
            error,
        });
    }
};

