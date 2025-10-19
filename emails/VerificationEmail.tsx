import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
  Img,
} from "@react-email/components";

interface VerifyOtpEmailProps {
  username: string;
  otp: string;
}

export const VerifyOtpEmail = ({ username, otp }: VerifyOtpEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans text-gray-900">
          <Container className="bg-white max-w-[600px] mx-auto my-10 rounded-2xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <Section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-center py-8">
              <Img
                src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
                alt="Verification"
                width="60"
                height="60"
                className="mx-auto mb-4"
              />
              <Text className="text-2xl font-semibold text-white">
                Email Verification Code
              </Text>
            </Section>

            {/* Body Section */}
            <Section className="p-8 text-center">
              <Text className="text-lg mb-4">
                Hi <span className="font-semibold">{username}</span>,
              </Text>

              <Text className="text-gray-700 mb-6">
                Use the following One-Time Password (OTP) to verify your email
                address. This code is valid for the next <strong>10 minutes</strong>.
              </Text>

              {/* OTP Display */}
              <Section className="bg-gray-50 rounded-xl inline-block px-8 py-5 mb-6 shadow-inner">
                <Text className="text-3xl tracking-widest font-bold text-blue-600">
                  {otp}
                </Text>
              </Section>

              <Text className="text-sm text-gray-500">
                Please do not share this code with anyone. If you didn’t request
                this, you can safely ignore this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-50 py-5 text-center text-xs text-gray-500">
              <Text>© {new Date().getFullYear()} Company ka Achar Dalega</Text>
              <Text>All rights reserved.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerifyOtpEmail;
