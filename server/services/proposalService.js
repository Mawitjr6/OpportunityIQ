function generateProposal(
    analysis,
    scoring,
    brief
) {

    return {

        title:
            "OpportunityIQ Proposal",

        executiveSummary:
            brief.executiveSummary,

        problemStatement:
            analysis.problemStatement,

        objectives:
            analysis.objectives,

        requirements:
            analysis.requirements,

        constraints:
            analysis.constraints,

        risks:
            analysis.risks,

        recommendations:
            analysis.recommendations,

        opportunityScore:
            scoring.score,

        opportunityStatus:
            scoring.status,

        nextSteps:
            brief.nextSteps

    };

}

module.exports = {
    generateProposal
};