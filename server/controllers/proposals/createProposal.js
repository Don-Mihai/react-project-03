const expressAsyncHandler = require('express-async-handler');
const Proposal = require('../../model/ProposalModel');
const { v4: uuidv4 } = require('uuid');

const createProposal = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/-/g, ''), 16);

    const proposal = await Proposal.create({ ...data, id: numericId });

    res.status(201).send(proposal);
});

module.exports = createProposal;
