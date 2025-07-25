import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            return res.json({ success: false, message: "Not Authorized" });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Optional: Improve this check if you want role-based auth later
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized" });
        }

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default adminAuth;
