const dbConnection = require("../lib/conn");

// read product item list
exports.getIndexPage = (req, res, next) => {
  let dataCashier = [];
  let dataCategory = [];

  dbConnection.query("SELECT * FROM cashier", (err, data) => {
    dataCashier = data;
  });
  dbConnection.query("SELECT * FROM category", (err, data) => {
    dataCategory = data;
  });

  dbConnection.query(
    "SELECT p.*, k.name as category, c.name as cashier FROM product p INNER JOIN category k ON p.id_category = k.id INNER JOIN cashier c ON p.id_cashier = c.id",
    (err, data) => {
      res.render("index", {
        pageTitle: "Coffee Shop",
        dataProduct: data,
        dataCashier,
        dataCategory
      });
    }
  );
};

// create product item
exports.addProductItem = (req, res, next) => {
  const id_category = req.body.id_category;
  const id_cashier = req.body.id_cashier;
  const price = req.body.price;
  const name = req.body.name;
  dbConnection.query(
    "INSERT INTO product SET?",
    {
      name,
      price,
      id_category,
      id_cashier
    },
    (err, result) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
};

// edit product item
exports.editProductItem = (req, res, next) => {
  const id = req.body.id;
  const product_name = req.body.name;
  const price = req.body.price;
  const category = req.body.id_category;
  const cashier = req.body.id_cashier;
  const updateQuery = `UPDATE product SET name=?, price=?, id_category=?, id_cashier=? WHERE id=?`;
  const data = [product_name, price, category, cashier, id];
  dbConnection.query(updateQuery, data, (err, result) => {
    if (err) throw err;
    res.redirect("/");
    console.log("Product is updated");
  });
};

// delete product item
exports.deleteProductItem = (req, res, next) => {
  const id = req.body.id;
  dbConnection.query(
    "DELETE FROM product WHERE ?",
    {
      id
    },
    (err, result) => {
      if (err) throw err;
      res.redirect("/");
      console.log("One product item is deleted!");
    }
  );
};
