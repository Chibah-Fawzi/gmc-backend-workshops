const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

let products = [
  { name: "coca", color: "yellow", prix: "10" },
  { name: "hamoud", color: "yellow", prix: "300" },
  { name: "pepsi", color: "purple", prix: "300" },
  { name: "sprite", color: "yellow", prix: "400" },
  { name: "fanta", color: "red", prix: "50" },
];

app.use(bodyParser());

app.post("/products", (req, res) => {
  let body = req.body;

  if (body == undefined) {
    res
      .status(404)
      .json({ success: false, errorMessage: "Vous devez envoyez un body" });
  } else {
    products.push(body);
    res.status(200).json({
      success: "BEL BARAKA AJOUTIT PRODUIT",
      addedData: body,
      newData: products,
    });
  }
});

// On crée un chemin qui s'attend à une requête GET
// On définie un paramétre "id"
// app.get("/products/:id/", (req, res) => {
//   // on récupére l'id du paramétre
//   let paramId = req.params.id;

//   // On récupére le query search
//   let query = req.query.search;

//   console.log(query);
//   //   on check si l'id est pas plus grand que la taille de la liste des produits
//   if (paramId > products.length) {
//     // On retourne une réponse d'erreur que le produit n'éxiste pas
//     res.status(404).json({
//       success: false,
//       error: "This product can't be found",
//       errorCode: 404,
//     });
//   } else {
//     let selectedProduct = products[paramId - 1];

//     // On retourne le produit selectionné
//     res.json(selectedProduct);
//   }
// });

app.listen(port, () =>
  console.log(`Our first app is listening on port ${port}!`)
);
