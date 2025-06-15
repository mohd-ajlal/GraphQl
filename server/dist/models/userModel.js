import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
        required: true,
        sparse: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    avatar: { type: String },
    verified: {
        type: String,
        default: false,
    },
    watching: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    watched: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    saved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    role: {
        type: String,
        enum: ["user", "admin", "instructor"],
        default: "user",
    },
    verificationToken: { type: String },
    verificationExpire: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpire: { type: Date },
}, { timestamps: true });
export const User = mongoose.models?.User || mongoose.model("User", schema);
