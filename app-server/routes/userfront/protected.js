
//*Our server route should read the authorization header for the request, then verify the JWT access token with the account's public key before responding. We are using the open source jsonwebtoken (opens new window)library to verify the token.
//* If the JWT access token is invalid or expired, we throw an error and return Unauthorized.

const jwt = require("jsonwebtoken");

require('dotenv').config();
const usersrontJWTPublicKey = process.env.REACT_APP_userfront_jwt_public_key;

//* Protected route
const userProtected = (req, res) => {
    try {
      //* Read the JWT access token from the authorization header
      const accessToken = req.headers.authorization.replace("Bearer ", "");
  
      //* Verify the token using the account's JWT public key
      const verifiedPayload = jwt.verify(
        accessToken,
        usersrontJWTPublicKey,
        { algorithms: ["RS256"] }
      );
  
      //* Respond to the request
      res.send({
        data: `Data specific to user ${verifiedPayload.userId} (${verifiedPayload.userUuid}).`,
        timestamp: new Date(),
      });
    } catch (error) {
      res.status(401).send({
        message: "Unauthorized",
        status: 401,
      });
    }
  };

  module.exports = userProtected;