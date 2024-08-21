import mongoose from "mongoose";


const workExperienceSchema = new mongoose.Schema({
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }
});

const WorkExperienceModel = mongoose.model('WorkExperience', workExperienceSchema);

export default WorkExperienceModel;
