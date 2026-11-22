const {
    generateBrief
} = require("../services/briefService");
const {
    calculateScore
} = require("../services/scoringService");
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

const scoring =
    calculateScore(analysis);

const brief =
    generateBrief(
        analysis,
        scoring
    );

res.json({
    success: true,
    analysis,
    scoring,
    brief
});

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;