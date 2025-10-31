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
        <Body className="bg-[#f4f6fb] font-sans text-gray-900">
          <Container className="max-w-[600px] mx-auto my-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Header */}
            <Section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-center py-10">
              <Img
                src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
                alt="Verification"
                width="70"
                height="70"
                className="mx-auto mb-4"
              />
              <Text className="text-3xl font-bold text-white tracking-wide">
                Verify Your Email
              </Text>
              <Text className="text-sm text-gray-100 mt-1 opacity-80">
                Powered by <span className="font-semibold">MS ECOMMERCE</span>
              </Text>
            </Section>

            {/* Main Body */}
            <Section className="px-10 py-8 text-center">
              <Text className="text-lg mb-3">
                Hi <span className="font-semibold text-indigo-600">{username}</span> 👋,
              </Text>

              <Text className="text-gray-700 mb-6 leading-relaxed">
                Use the One-Time Password (OTP) below to verify your email address.
                This code will expire in <strong>10 minutes</strong>.
              </Text>

              {/* OTP Boxes (now in a single row across all devices) */}
              <Section className="mb-6">
                <table
                  align="center"
                  style={{
                    margin: "0 auto",
                    background: "linear-gradient(to right, #eef2ff, #f0f5ff)",
                    borderRadius: "12px",
                    padding: "16px 24px",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
                    border: "1px solid #e0e7ff",
                  }}
                >
                  <tbody>
                    <tr>
                      {otp.split("").map((digit, index) => (
                        <td
                          key={index}
                          style={{
                            width: "44px",
                            height: "56px",
                            textAlign: "center",
                            fontSize: "22px",
                            fontWeight: "700",
                            color: "#4f46e5",
                            backgroundColor: "#ffffff",
                            border: "1px solid #c7d2fe",
                            borderRadius: "8px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                            margin: "0 4px",
                          }}
                        >
                          {digit}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </Section>

              <Text className="text-sm text-gray-500">
                🔒 Don’t share this code with anyone.  
                If you didn’t request this, please ignore this email.
              </Text>
            </Section>

            {/* Divider */}
            <Section className="border-t border-gray-100 mx-10"></Section>

            {/* Footer */}
            <Section className="py-6 text-center text-xs text-gray-500 bg-gray-50">
              <Text>
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-indigo-600">MS ECOMMERCE</span>.  
                All rights reserved.
              </Text>
              <Text>Made with ❤️ by MS</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerifyOtpEmail;
