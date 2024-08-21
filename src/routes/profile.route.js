import { Router } from "express";
import profileController from "../controllers/profile.controller.js";
import authTokenMiddleware from '../middlewares/authToken.middleware.js'
const ProfileRouter = Router()

ProfileRouter.post('', authTokenMiddleware, profileController.createProfile)
ProfileRouter.get('/:id', authTokenMiddleware, profileController.getProfile)
ProfileRouter.put('/:id', authTokenMiddleware, profileController.updateProfile)
ProfileRouter.delete('/:id', authTokenMiddleware, profileController.deleteProfile)

export default ProfileRouter