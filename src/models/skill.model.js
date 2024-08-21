import mongoose from "mongoose";


const skillSchema = new mongoose.Schema({
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    skillName: { type: String, required: true },
    proficiency: { type: String, required: true }
});

const SkillModel = mongoose.model('Skill', skillSchema);

export default SkillModel;
