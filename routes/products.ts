import * as express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/products";
export const app = express();

app.use(express.json());

app.get("/products", getProducts);
app.get("/products/:id", getProduct);
app.post("/products", createProduct);
app.patch("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);
