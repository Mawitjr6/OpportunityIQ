function generateBrief(analysis, scoring) {

    return {
        executiveSummary:
            `${analysis.problemStatement} Opportunity score is ${scoring.score}%.`,

        recommendation:
            scoring.score >= 80
                ? "Proceed immediately"
                : scoring.score >= 60
                ? "Proceed with caution"
                : "Further investigation required",

        nextSteps: [
            "Review requirements",
            "Confirm budget",
            "Confirm timeline",
            "Prepare proposal"
        ]
    };
}

module.exports = {
    generateBrief
};