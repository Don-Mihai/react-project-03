const express = require('express');

const createProposal = require('../controllers/proposals/createProposal');
const fetchProposal = require('../controllers/proposals/fetchProposal');
const fetchProposals = require('../controllers/proposals/fetchProposals');
const editProposal = require('../controllers/proposals/editProposal');
const deleteProposal = require('../controllers/proposals/deleteProposal');

const router = express.Router();

router.route('/create').post(createProposal);
router.route('/by-id').post(fetchProposal);
router.route('/all').get(fetchProposals);
router.route('/edit').post(editProposal);
router.route('/delete').post(deleteProposal);

module.exports = router;
