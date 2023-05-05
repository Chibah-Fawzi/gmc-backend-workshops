// npm i express cors

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Permet d'accepter des réquêtes d'un hôte non sécurisé
app.use(cors());

// Permet d'initialiser le chemin par défaut du serveur
app.get("/", (req, res) => res.status(200).send("Hello world no"));

let database = [
  { id: 1, title: "coca", color: "yellow", prix: "10" },
  { id: 2, title: "hamoud", color: "yellow", prix: "300" },
  { id: 3, title: "pepsi", color: "purple", prix: "300" },
  { id: 4, title: "sprite", color: "yellow", prix: "400" },
  { id: 5, title: "fanta", color: "red", prix: "50" },
];

// On définie le chemin en ajoutant le paramétre :id
app.get("/products/:id", (req, res) => {
  // On récupére l'id et on le store dans une variable
  let productId = req.params.id;
  // On prend l'id récupéré, et on essaye de trouvé le produit qui posséde le même id
  let found = database.find((element) => element.id == productId);

  // Si le produit éxiste
  if (found) {
    res.status(200).json({
      success: true,
      product: found,
    });
  }
  // Si le produit n'éxiste pas
  else {
    res.status(404).json({
      success: false,
      errorMessage: "Product not found. Please check the params that you set.",
    });
  }
});

app.listen(port, () => console.log(`This app is running on port ${port}!`));
