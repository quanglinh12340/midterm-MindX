import jwt from "jsonwebtoken"

const token = {
    generateToken: (userData, timeExpiresIn) => {
        return jwt.sign(userData, process.env.SECRET_TOKEN, {
            expiresIn: timeExpiresIn ?? 1000 * 60 * 60
        })
    },
    verifyToken: token => {
        return jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Access token is invalid' });
            } else {
                console.log('Decoded JWT:');
                return decoded
            }
        })
    }
}
export { token }