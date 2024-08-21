import mongoose from "mongoose";

const { Schema } = mongoose;

const hobbySchema = new Schema({
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    hobby: { type: String, required: true }
});

const HobbyModel = mongoose.model('Hobby', hobbySchema);

export default HobbyModel;
