const express = require('express');

const createProject = require('../controllers/projects/createProject');
const fetchProject = require('../controllers/projects/fetchProject');
const fetchProjects = require('../controllers/projects/fetchProjects');
const editProject = require('../controllers/projects/editProject');
const deleteProject = require('../controllers/projects/deleteProject');

const router = express.Router();

router.route('/create').post(createProject);
router.route('/by-id').post(fetchProject);
router.route('/all').get(fetchProjects);
router.route('/edit').post(editProject);
router.route('/delete').post(deleteProject);

module.exports = router;
