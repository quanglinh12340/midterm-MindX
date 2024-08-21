import { token } from '../utils/index.js'

const authTokenMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (authHeader) {

            const accessToken = authHeader.split(" ")[1]
            if (!accessToken) throw new Error()

            const decoded = token.verifyToken(accessToken)
            if (!decoded) throw new Error()
            req.user = decoded
            next()
        } else {
            res.status(401).json({ message: 'You are not logged in yet' });
        }
    } catch (error) {
        res.status(401).send({
            message: error.message ?? "You cannot perform this action."

        })
    }
}
export default authTokenMiddleware