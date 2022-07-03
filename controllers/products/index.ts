import { Product } from "../../models/Product";
import { User } from "../../models/User";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id } });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { title, price, description } = req.body;
  try {
    const newProduct = await Product.create({ title, price, description });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, description } = req.body;

  if (title || price || description) {
    try {
      await Product.update({ title, price, description }, { where: { id } });
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.json({
      message: "No hay contenido en el body para actualizar los datos",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.destroy({ where: { id } });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
