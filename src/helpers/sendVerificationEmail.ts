import { resend } from "@/lib/resend";
import { VerifyOtpEmail } from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/apiResponse";


export const sendVerificationEmail = async (
    email : string,
    username : string,
    verifyCode : string
) : Promise<ApiResponse> => {
    try {
        await resend.emails.send({
            from : 'Messages <onboarding@resend.dev>',
            to : email,
            subject : "Verify Your Email Address !",
            react : VerifyOtpEmail({username, otp : verifyCode}),
        });

        return { success: true, message: "Verification email sent successfully" };
    } catch (error) {
        console.error("Error sending verification email:", error);
        return { success: false, message: "Failed to send verification email" };
    }
}

