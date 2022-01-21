
const uploadRecipeImg = (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`public/assets/recipe-images/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: err });
        }
        // returing the response with file path and name
        return res.send({
            name: myFile.name, 
            path: `/${myFile.name}`
        });
    });
};

module.exports = uploadRecipeImg;