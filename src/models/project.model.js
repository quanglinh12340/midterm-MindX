import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }
});

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
