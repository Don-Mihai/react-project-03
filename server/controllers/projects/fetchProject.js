const expressAsyncHandler = require('express-async-handler');
const Project = require('../../model/ProjectModel');

const fetchProject = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    const project = await Project.findOne({ id });

    res.status(200).send(project);
});

module.exports = fetchProject;
