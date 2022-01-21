// Provides access to variables from the .env file by using process.env.REACT_APP_variable_name
const jwt = require('jsonwebtoken'); 

require('dotenv').config();
const usersrontJWTPublicKey = process.env.REACT_APP_userfront_jwt_public_key;
const userfrontTenantKey = process.env.REACT_APP_userfront_tenant_key;

//* Backend should read the JWT from the Authorization header and verify that it is valid using the public key.
//* Verify the JWT access token

const userfrontAdminAuth = async (req, res, next) => {
    try {
        //* Read the JWT access token from the request authorization header
            const accessToken = req.headers.authorization;
        // Authorization: Bearer token
            const accesstoken = accessToken && accessToken.split(' ')[1];

        //* Return 401 if no token
            if(!accesstoken) {
                return res.status(401).send('Bad token'); 
            }

        //* Verify the token using the Userfront public key
        // The JWT access token is a JSON Web Token (JWT) signed with the RSA algorithm (RS256), using a signing key specific to your account.
        // To verify a JWT access token, use a JWT library along with your account's JWT public key (found in your dashboard under Settings).
            const verifiedPayload = jwt.verify(
                accessToken,
                usersrontJWTPublicKey,
                { 
                    algorithms: ["RS256"] 
                }
            );

        //* Make sure the token has the 'admin' role
            const roles = verifiedPayload.authorization[userfrontTenantKey].roles;
            
            if (!roles.includes("admin")) { 
                throw new Error("Unauthorized");
            }

        //* If the access token passes verification, your server can trust that it was signed by Userfront and contains accurate information.
            req.auth = verifiedPayload;

        next();
    } catch(error) {
        // console.error(error);
        res.status(401).send({
            message: "Unauthorized",
            status: 401,
        });
    }
};

module.exports = userfrontAdminAuth;

