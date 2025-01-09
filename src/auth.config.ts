import type { NextAuthConfig } from "next-auth"
import Resend from "next-auth/providers/resend";
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Resend({
    from: "hello@onboarding.reuh.pro"
  })],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Example: Redirect to a specific URL after sign-in
      return baseUrl + '/'; // Replace with your desired path
    }
    
  },
} satisfies NextAuthConfig