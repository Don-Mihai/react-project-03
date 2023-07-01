const expressAsyncHandler = require('express-async-handler');
const Proposal = require('../../model/ProposalModel');

const deleteProposal = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const proposal = await Proposal.findOneAndDelete({ id: data.id });

    res.status(200).send(proposal);
});

module.exports = deleteProposal;
