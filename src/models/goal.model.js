import mongoose from "mongoose";

const { Schema } = mongoose;

const goalSchema = new Schema({
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    goal: { type: String, required: true }
});

const GoalModel = mongoose.model('Goal', goalSchema);

export default GoalModel;
