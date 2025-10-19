import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date
}

const MessageSchema : Schema <Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type : Date,
        required: true,
        default: Date.now
    }
}) 

export interface User extends Document{
    name: string;
    username : string;
    email: string;
    password: string,
    isVerified: boolean,
    verifyCode: string,
    verifyCodeExp: Date,
    isAccepting: boolean,
    messages: Message[]
}

const UserSchema : Schema <User> = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyCode: {
        type: String,
        required: true
    },
    verifyCodeExp: {
        type: Date

    },
    isAccepting: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User",UserSchema))