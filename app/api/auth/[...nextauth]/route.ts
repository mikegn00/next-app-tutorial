import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@email.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                const user = { id: '1', name: 'Michael', email: 'michaelgn00@gmail.com', password: 'password' };
                return user;
            }
        }),
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };