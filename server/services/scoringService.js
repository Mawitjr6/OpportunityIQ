function calculateScore(analysis) {

    let score = 50;

    score += analysis.requirements.length * 10;

    score += analysis.objectives.length * 5;

    score -= analysis.risks.length * 10;

    score -= analysis.questions.length * 5;

    if (score > 100) {
        score = 100;
    }

    if (score < 0) {
        score = 0;
    }

    let status = "Low Potential";

    if (score >= 80) {
        status = "High Potential";
    }
    else if (score >= 60) {
        status = "Medium Potential";
    }

    return {
        score,
        status
    };
}

module.exports = {
    calculateScore
};
