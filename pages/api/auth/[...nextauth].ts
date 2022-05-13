import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId:'566473953086-331geiav4lf3dabc26glhguh0do819q8.apps.googleusercontent.com' || '',
            clientSecret:'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' || "",
        }) ,
       
        // ...add more providers here
    ],
    
    pages: {
        signIn: '/auth/signin',
        
    }
});
