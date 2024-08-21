import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
