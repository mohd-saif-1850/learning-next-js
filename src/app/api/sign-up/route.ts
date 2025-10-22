import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export const POST = async ( request : Request) => {
    await dbConnect();

    try {
        const {username, email, password} = await request.json()

        const existingUserByUsername = await UserModel.findOne({
            username,
            isVerified: true
        })

        if (existingUserByUsername) {
            return Response.json({
                success : false,
                message : "Username Already Exist !"
            },{ status : 400 })
        }

        const existingUserByEmail = await UserModel.findOne({
            email
        })

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return Response.json({
                success : false,
                message : `User Already Exist With ${email} Email !`
            },{ status : 400 })
            } else {
                const hashedPassword = await bcrypt.hash(password,10)
                const expiryDate = new Date()
                expiryDate.setMinutes(expiryDate.getMinutes() + 10)

                existingUserByEmail.password = hashedPassword
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExp = expiryDate;

                await existingUserByEmail.save()
            }
        } else {
            // Agar Uper ke dono se nahi mila yani ki User Pahli Bar hi login Kar Rha Hai
            const hashedPassword = await bcrypt.hash(password,10)
            const expiryDate = new Date()
            expiryDate.setMinutes(expiryDate.getMinutes() + 10)

            const createUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExp: expiryDate,
                isVerified: false,
                isAccepting: true,
                messages: []
            })

            await createUser.save()
        }

        const emailResponse = await sendVerificationEmail(
            email,
            username,
            verifyCode
        )

        if (!emailResponse) {
            return Response.json({
                success : false,
                message : "Server Error While Sending Verification Email !"
            },{ status : 500 })
        }

        return Response.json({
                success : true,
                message : "User Registerd Successfully -- Please Verify Your Email !"
            },{ status : 200 })

    } catch (error) {
        console.error("Error While Creating User in Sign-Up Route !",error);
        return Response.json({
            success: false,
            message : "Error While Creating the User !"
        },{
            status: 500
        })
    }
}