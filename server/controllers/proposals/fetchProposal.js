const expressAsyncHandler = require('express-async-handler');
const Proposal = require('../../model/ProposalModel');

const fetchProposal = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    const proposal = await Proposal.findOne({ id });

    res.status(200).send(proposal);
});

module.exports = fetchProposal;
