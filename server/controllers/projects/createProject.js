const expressAsyncHandler = require('express-async-handler');
const Project = require('../../model/ProjectModel');
const { v4: uuidv4 } = require('uuid');

const createProject = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/-/g, ''), 16);

    const project = await Project.create({ ...data, id: numericId });

    res.status(201).send(project);
});

module.exports = createProject;
