const expressAsyncHandler = require('express-async-handler');
const Proposal = require('../../model/ProposalModel');

const fetchProposals = expressAsyncHandler(async (req, res) => {
    const proposals = await Proposal.find();

    res.status(200).send(proposals);
});

module.exports = fetchProposals;
