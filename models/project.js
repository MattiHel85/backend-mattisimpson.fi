const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    gitHubUrl: {
        type: String,
        required: false
    },
    deploymentUrl: {
        type: String,
        required: false
    },
    madeWith: {
        type: String,
        required: false
    },
    completionDate: {
        type: Date,
        required: false
    },

})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project