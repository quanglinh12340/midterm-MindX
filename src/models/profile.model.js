import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    birthPlace: { type: String, required: true },
    nationality: { type: String, required: true },
    education: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const ProfileModel = mongoose.model('Profile', profileSchema);

export default ProfileModel;
