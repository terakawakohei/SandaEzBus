import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
      CredentialsProvider({
        name: "Credentials",
          credentials: {
            username: {
              label: "Username",
              type: "text",
            },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            if (
                credentials.username === process.env.USER_ID &&
                credentials.password === process.env.USER_PASSWORD
              ) {
                return true
              } else {
                return null
              }
          },
      }),
    ],
  })