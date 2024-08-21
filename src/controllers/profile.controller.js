import ProfileModel from "../models/profile.model.js"
import UserModel from "../models/user.model.js"

const profileController = {
    createProfile: async (req, res) => {
        try {
            const { fullName, birthDate, birthPlace, nationality, education } = req.body;

            if (!fullName) throw new Error("fullName is required");
            if (!birthDate) throw new Error("birthDate is required");
            if (!birthPlace) throw new Error("birthPlace is required");
            if (!nationality) throw new Error("nationality is required");
            if (!education) throw new Error("education is required");

            const userId = req.user.userId;
            const newProfile = await ProfileModel.create({
                ...req.body,
                userId
            });

            await UserModel.findByIdAndUpdate(userId, { profileId: newProfile._id });

            res.status(201).send({
                message: "Profile created successfully",
                data: newProfile
            });
        } catch (error) {
            res.status(400).send({
                message: error.message || "Error occurred while creating profile."
            });
        }
    },

    getProfile: async (req, res) => {
        try {
            const profileId = req.params.id;

            const profile = await ProfileModel.findById(profileId);
            if (!profile) throw new Error("Profile not found!");

            if (profile.userId.toString() !== req.user.userId) {
                return res.status(403).json({ message: "You do not have permission to view this profile." });
            }

            res.status(200).send({
                message: "Profile retrieved successfully",
                data: profile
            });
        } catch (error) {
            res.status(400).send({
                message: error.message || "Error occurred while retrieving profile."
            });
        }
    },

    updateProfile: async (req, res) => {
        try {
            const profileId = req.params.id;
            const { fullName, birthDate, birthPlace, nationality, education } = req.body;

            const profile = await ProfileModel.findById(profileId);
            if (!profile) throw new Error("Profile not found!");

            if (profile.userId.toString() !== req.user.userId) {
                return res.status(403).json({ message: "You do not have permission to edit this profile." });
            }

            const updatedProfile = await ProfileModel.findByIdAndUpdate(
                profileId,
                { fullName, birthDate, birthPlace, nationality, education },
                { new: true }
            );

            res.status(200).send({
                message: "Profile updated successfully",
                data: updatedProfile
            });
        } catch (error) {
            res.status(400).send({
                message: error.message || "Error occurred while updating profile."
            });
        }
    },

    deleteProfile: async (req, res) => {
        try {
            const profileId = req.params.id;

            const profile = await ProfileModel.findById(profileId);
            if (!profile) throw new Error("Profile not found!");

            if (profile.userId.toString() !== req.user.userId) {
                return res.status(403).json({ message: "You do not have permission to delete this profile." });
            }

            await ProfileModel.findByIdAndDelete(profileId);

            await UserModel.findByIdAndUpdate(req.user.userId, { profileId: null });

            res.status(200).send({
                message: "Profile deleted successfully"
            });
        } catch (error) {
            res.status(400).send({
                message: error.message || "Error occurred while deleting profile."
            });
        }
    }

}

export default profileController