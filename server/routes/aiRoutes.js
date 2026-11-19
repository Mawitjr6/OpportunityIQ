const {
    analyzeText
} = require("../services/analysisService");
const express = require("express");
const router = express.Router();

const {
    extractPdfText
} = require("../services/aiService");

router.post("/extract", async (req, res) => {

    try {

        const text = await extractPdfText(
            req.body.filePath
        );

        const analysis =
    analyzeText(text);

res.json({
    success: true,
    analysis
});

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;