import mongoose, {Document, model, Schema, Model} from "mongoose";
import bcrypt, { compare, genSalt, hash } from 'bcrypt'
import validator from 'validator'
import logger from "../utils/logger";

export interface IUser {
    email: string,
    password: string
}

export interface IUserDocument extends IUser, Document {
    createdAt: Date,
    updatedAt: Date
}

interface IUserModel extends Model<IUserDocument> {
    signUp(email: string, password: string): Promise<IUserDocument> ;
    login(email: string, password: string): Promise<IUserDocument> ;
}

const userSchema = new Schema<IUserDocument>(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

userSchema.statics.signUp = async function (email: string, password: string): Promise<IUserDocument>{
    try {
        // validation 
        if (!email|| !password)                     throw Error("All fields must be filled")
        if (!validator.isEmail(email))              throw Error("Email not Valid") 
        if (!validator.isStrongPassword(password))  throw Error("Password not strong enough")
        
        // exists ? 
        const exists = await this.findOne({email})
        if (exists) throw Error("Email already in use")
        
        // hash 
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        
        const user: IUserDocument = await this.create({email, password: hash})
        return user
        
    } catch(e: any) {
        throw Error(e)
    }
    
}

userSchema.statics.login = async function (email: string, password: string): Promise<IUserDocument> {
    try {
        // validation 
        if (!email|| !password) throw Error("All fields must be filled")
        
        // exists ? 
        const user = await this.findOne({email})
        if (!user) throw Error("wrong email")
        
        const match = await compare(password, user.password)
        if (!match) throw Error("wrong password")
        
        return user

    } catch(e: any) {
        throw Error(e)
    }

}

const User = model<IUserDocument, IUserModel>("User", userSchema)


export default User