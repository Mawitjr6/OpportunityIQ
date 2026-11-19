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
        summary: text.substring(0, 300),
        requirements,
        risks,
        questions
    };
}

module.exports = {
    analyzeText
};