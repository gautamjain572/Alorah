import passport from 'passport';
import Google from 'passport-google-oauth20';
import userModel from "../models/userModel.js";

const GoogleStrategy = Google.Strategy;

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/api/auth/callback/google",
        scope: ['profile', 'email'],
    }),
    function (accessToken, refreshToken, profile, cb) {
        userModel.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
)