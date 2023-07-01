const expressAsyncHandler = require('express-async-handler');
const Project = require('../../model/ProjectModel');

const fetchProjects = expressAsyncHandler(async (req, res) => {
    const projects = await Project.find();

    res.status(200).send(projects);
});

module.exports = fetchProjects;
