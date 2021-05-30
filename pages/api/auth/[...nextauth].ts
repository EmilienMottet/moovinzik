import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.Strava({
            clientId: process.env.STRAVA_ID,
            clientSecret: process.env.STRAVA_SECRET,
        }),
    ],
})
