
//* No authentication or access controls are needed for the public route. Thus, the server code is straightforward:

const userPublic = async (req, res) => {
    try {
        res.send({
            data: "Public data",
            timestamp: new Date(),
        });
    } catch(error) {
        // console.error(error);
        res.status(400).send(error);
    }
};

module.exports = userPublic;