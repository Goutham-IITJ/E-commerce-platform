import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const {token} = req.headers;

    if (!token) {
        return res.json({success: false, message: 'Unauthorized access Login Again'});
    }

    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;
        next();// call next middleware or route handler
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export default authUser;    