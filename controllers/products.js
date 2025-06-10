// Importar json data
const { products } = require("../db.json");

module.exports = {
  getProducts: (req, res) => {
    const { products } = require("../db.json");
    res.json({ products });
  },

  addProduct: (req, res) => {
    const { products } = require("../db.json");
    const { name, price, category } = req.body;
    products.push({
      id: products.length + 1,
      name,
      price,
      category,
    });

    res.json({
      success: true,
      message: "Product added successfully",
    });
  },
    updateProduct: (req, res) => {
        const { id } = req.params;
        const { name, price, category } = req.body;
    
        products.forEach((product, i) => {
            if (product.id === parseInt(id)) {
                product.name = name;
                product.price = price;
                product.category = category;
            }
        });
        res.json({
            success: true,
            message: "Product updated successfully",
        });
    },
    deleteProduct: (req, res) => {
        const { id } = req.params;
        products.forEach((product, i) => {
            if (product.id === parseInt(id)) {
                products.splice(i, 1);
            }
        });
        res.json({
            success: true,
            message: "Product deleted successfully",
        });
    }
};
