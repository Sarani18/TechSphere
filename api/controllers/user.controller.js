import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res. json({ message: 'API is working!' });
} ;

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this user'));
    }
    if (req.body.password) {
        if(req.body.password.length < 6) {
            return next(errorHandler(400, 'Password must be at least 6 characters'));
        }
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    if (req.body.username) {
        if(req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler(400, 'Username must be betweeen 7 and 20 characters'));
        }
        if(req.body.isername.includes(' ')) {
            return next(errorHandler(400, 'Username cannot contain spaces'));
        }
        if(req.body.username !== req.user.username.toLowerCase()) {
            return next(errorHandler(400, 'Username must be in lowercase'));
        }
        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            return next(errorHandler(400, 'Username must contain only letters and numbers'));
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
                $set: {
                    usernaem: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                },
                }, { new: true});
            const { password, ...rest } = updateUser._doc;
            res.status(200).json(rest);
        } catch (err) {
            next(err)
        }   
    }

};