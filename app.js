import express from "express";
import product from "./routes/productRoute.js";
import error from "./middlewares/error.js";

const app = express();
app.use(express.json())
app.set("query parser", "extended");
app.use("/api/v1", product)
app.use(error)
export default app;