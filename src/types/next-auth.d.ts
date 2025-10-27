import "next-auth"
import { DefaultSession } from "next-auth"

declare module 'next-auth' {
    interface User {
        _id? : string,
        isVerified? : boolean,
        isAccepting? : boolean,
        username? : string
    }
    interface Session {
        user : {
            _id? : string,
            isVerified? : boolean,
            isAccepting? : boolean,
            username? : string
        } & DefaultSession['user']
    }
}

// Alternative way to Do , We can also do same thing in the top also
// But kya hi jata hai new seekhne main 

declare module 'next-auth/jwt' {
    interface JWT {
        _id? : string,
        isVerified? : boolean,
        isAccepting? : boolean,
        username? : string
    }
}