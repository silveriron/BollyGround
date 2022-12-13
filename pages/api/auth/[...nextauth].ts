import mongoose from "mongoose";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import Admin from "../../../models/Admin";
import { connect } from "../../../lib/mongoose/dbConnect.js";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "eamil" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          return null;
        }

        if (!connect.mongoose) {
          try {
            connect.mongoose = await mongoose.connect(process.env.MONGODB_URL!);
          } catch (e: any) {
            console.log(e.message);
          }
        }

        const admin = await Admin.findOne({ email });

        if (!admin) {
          return null;
        }

        const compare = await bcrypt.compare(password, admin.password);

        if (compare) {
          const user = {
            email: admin.email,
            id: admin._id,
          };
          return user;
        } else {
          throw new Error("계정 정보를 확인하세요.");
        }
      },
    }),
  ],
  pages: {
    error: "/",
  },
};
export default NextAuth(authOptions);
