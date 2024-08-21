import { Router } from "express";
import UserRouter from "./user.route.js";
import ProfileRouter from "./profile.route.js"

const RootRouterV1 = Router()

RootRouterV1.use('/users', UserRouter)
RootRouterV1.use('/profiles', ProfileRouter)
export { RootRouterV1 }