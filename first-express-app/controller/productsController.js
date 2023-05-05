export function getProducts(req, res) {
  // on récupére l'id du paramétre
  let paramId = req.params.id;

  // On récupére le query search
  let query = req.query.search;

  console.log(query);
  //   on check si l'id est pas plus grand que la taille de la liste des produits
  if (paramId > products.length) {
    // On retourne une réponse d'erreur que le produit n'éxiste pas
    res.status(404).json({
      success: false,
      error: "This product can't be found",
      errorCode: 404,
    });
  } else {
    let selectedProduct = products[paramId - 1];

    // On retourne le produit selectionné
    res.json(selectedProduct);
  }
}

export function addProducts(req, res) {
  console.log("test");
}
export function deleteProducts(req, res) {
  console.log("test");
}
export function editProducts(req, res) {
  console.log("test");
}
