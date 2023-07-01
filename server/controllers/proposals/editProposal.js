const expressAsyncHandler = require('express-async-handler');
const Proposal = require('../../model/ProposalModel');

const editProposal = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const proposal = await Proposal.findOneAndUpdate({ id: data.id }, { $set: data }, { returnDocument: 'after' });

    res.status(200).send(proposal);
});

module.exports = editProposal;
