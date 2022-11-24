const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const config = require("./config.json")
const api = require("./src/api.json");
const ecchi = require("./src/ecchi.json");
const normal = require("./src/normal.json");
const titulos = require("./src/titulos.json");
app.use(cors());

app.use(express.static("public"));

//JSON
app.get("/api", (req, res) => {
    res.json(api);
});

app.get("/", (req, res) => {
    var item = normal[Math.floor(Math.random() * normal.length)];

    res.json(item);
});

app.get("/ecchi", (req, res) => {
    var item = ecchi[Math.floor(Math.random() * ecchi.length)];

    res.json(item);
});

app.get("/normal", (req, res) => {
    var item = normal[Math.floor(Math.random() * normal.length)];

    res.json(item);
});

app.get("/titulos", (req, res) => {
    var item = titulos[Math.floor(Math.random() * titulos.length)];

    res.json(item);
});

//PORT
app.listen(config.port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Corriendo en http://localhost:${config.port}`)
})
