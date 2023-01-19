const express = require ("express");
const app = express ();
const path = require ("path");
const port = 3000;

app.use(express.static("public"));

app.listen (port, () => {
    return console.log(`Server listen in ${port}
    http://localhost:${port}`)
});

app.get("/", (req, res) =>{
    return res.sendFile(path.join(__dirname, "views/home.html"))
})
