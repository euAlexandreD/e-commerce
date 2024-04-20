
import NextAuth from "next-auth"

import { authOptions } from "@/lib/auth"
 
 
const hendler = NextAuth(authOptions);

export { hendler as GET, hendler as POST} 