import ProfileModel from "../models/profile.model.js"
import bcrypt from "bcrypt"
import UserModel from "../models/user.model.js"
import { token } from "../utils/index.js"
const userController = {
    register: async (req, res) => {
        try {
            const { userName, password } = req.body;

            if (!userName) throw new Error("userName is required!");
            if (!password) throw new Error("password is required!");

            const hashedPassword = await bcrypt.hash(password, 10);

            // Tạo người dùng mà không cần profileId
            const newUser = new UserModel({
                userName,
                password: hashedPassword
            });

            // Lưu người dùng mới
            const savedUser = await newUser.save();

            res.status(201).send({
                message: "Success create user",
                data: savedUser
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    },




    login: async (req, res) => {
        try {
            const { userName, password } = req.body

            if (!userName) throw new Error("userName is required!")
            if (!password) throw new Error("password is required!")

            const user = await UserModel.findOne({ userName })
            if (!user) throw new Error("User not found!")

            const hashedPasswordLogin = await bcrypt.compare(password, user.password)
            if (!hashedPasswordLogin) throw new Error("Email or Password is valid!")

            const tk = token.generateToken({
                userId: user._id
            })

            res.status(201).send({
                message: "Success login",
                data: tk
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
}
export default userController