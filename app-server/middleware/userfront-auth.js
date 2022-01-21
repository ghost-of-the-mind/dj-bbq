// Provides access to variables from the .env file by using process.env.REACT_APP_variable_name
const jwt = require('jsonwebtoken'); 

require('dotenv').config();

const usersrontJWTPublicKey = process.env.REACT_APP_userfront_jwt_public_key;

//* Backend should read the JWT from the Authorization header and verify that it is valid using the public key.
//* Verify the JWT access token

const userfrontAuth = async (req, res, next) => {
    try {
        //* Read the JWT access token from the request header
            const authHeader = req.headers.authorization;
        // Authorization: Bearer token
            const token = authHeader && authHeader.split(' ')[1];

        //* Return 401 if no token
            if(!token) {
                return res.status(401).send('Bad token'); 
            }

        //* Verify the token using the Userfront public key
        // The JWT access token is a JSON Web Token (JWT) signed with the RSA algorithm (RS256), using a signing key specific to your account.
        // To verify a JWT access token, use a JWT library along with your account's JWT public key (found in your dashboard under Settings).
            const verifiedPayload  = await jwt.verify(
                token, 
                usersrontJWTPublicKey, 
                {
                    algorithms: ["RS256"],
                }
            );

        //* If the access token passes verification, your server can trust that it was signed by Userfront and contains accurate information.
            req.auth = verifiedPayload;

        next();
    } catch(error) {
        // console.error(error);
        res.status(401).send(error);
    }
};

module.exports = userfrontAuth;

