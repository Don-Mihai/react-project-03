const expressAsyncHandler = require('express-async-handler');
const Project = require('../../model/ProjectModel');

const editProject = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const project = await Project.findOneAndUpdate({ id: data.id }, { $set: data }, { returnDocument: 'after' });

    res.status(200).send(project);
});

module.exports = editProject;
