import { sequelize } from "./db";
import { app } from "./routes/products";
import "./routes/products.ts";

async function main() {
  //Probando si la base de datos funciona
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Escuchando en puerto ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  //Sincronización de modelos con la BD => No olvidarse del await de sequelize
  await sequelize.sync({ alter: true });
}
main();
