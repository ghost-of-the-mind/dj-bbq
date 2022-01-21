
//* To restrict the route to admins only, we need to check that the JWT access token has the admin role.
//* So we want to check that the payload.authorization[tenantId].roles array contains the admin role.
//* As with the protected route, our server should read the authorization header for the request, 
//* then verify the JWT access token with the account's public key before responding. We are using the open source jsonwebtoken 
//* (opens new window)library to verify the token.

//* If the JWT access token is invalid, expired, or missing the admin role, we throw an error and return Unauthorized.

const jwt = require("jsonwebtoken");

require('dotenv').config();
const usersrontJWTPublicKey = process.env.REACT_APP_userfront_jwt_public_key;
const userfrontTenantKey = process.env.REACT_APP_userfront_tenant_key;

const userAdmin = async (req, res, next) => {
    try {
        //* Read the JWT access token from the authorization header
            const accessToken = req.headers.authorization.replace("Bearer ", "");
    
        //* Verify the token using the RSA public key
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
    
        //* Respond to the request
            res.send({
                data: `Data for admins only. Requestor has roles: ${roles.join(" & ")}.`,
                timestamp: new Date(),
            })
            next();

      } catch (error) {
            res.status(401).send({
                message: "Unauthorized",
                status: 401,
            });
      }
};

/*
// Node.js example (Express.js)

app.get("/users", (req, res) => {
  const authorization = req.auth.authorization["demo1234"] || {};

  if (authorization.roles.includes("admin")) {
    // Allow access
  } else {
    // Deny access
  }
});
*/

/*
function authenticateToken(req, res, next) {
  // Read the JWT access token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // Return 401 if no token

  // Verify the token using the Userfront public key
  jwt.verify(token, usersrontJWTPublicKey, (err, auth) => {
    if (err) return res.sendStatus(403); // Return 403 if there is an error verifying
    req.auth = auth;
    next();
  });
}
*/

module.exports = userAdmin;