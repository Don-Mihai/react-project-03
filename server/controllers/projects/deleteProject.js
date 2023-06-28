const expressAsyncHandler = require('express-async-handler');
const Project = require('../../model/ProjectModel');

const deleteProject = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const project = await Project.findOneAndDelete({ id: data.id });

    res.status(200).send(project);
});

module.exports = deleteProject;
