function analyzeText(text) {

    const requirements = [];
    const risks = [];
    const questions = [];

    const lowerText = text.toLowerCase();

    if (lowerText.includes("dashboard")) {
        requirements.push(
            "Dashboard functionality"
        );
    }

    if (lowerText.includes("database")) {
        requirements.push(
            "Database integration"
        );
    }

    if (lowerText.includes("upload")) {
        requirements.push(
            "Document upload capability"
        );
    }

    if (lowerText.includes("budget")) {
        questions.push(
            "Budget clarification required"
        );
    }

    if (text.length < 200) {
        risks.push(
            "Document may contain limited information"
        );
    }

    return {

        problemStatement:
            "The document describes business requirements that require further analysis.",

        objectives: [
            "Understand client needs",
            "Document business requirements"
        ],

        summary:
            text.substring(0, 300),

        requirements,

        constraints: [
            "Budget and timeline not yet confirmed"
        ],

        risks,

        questions,

        recommendations: [
            "Conduct requirements workshop",
            "Confirm scope and budget",
            "Validate stakeholder expectations"
        ]

    };

}

module.exports = {
    analyzeText
};