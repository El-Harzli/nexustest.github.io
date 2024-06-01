import express from 'express';


const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/test", (req, res) => {
    res.render("test.ejs");
});


app.listen(PORT, (req, res) => {
    console.log(`AYMAN IPTV1 Listening on port : ${PORT}`);
});