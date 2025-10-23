import express, { response } from "express";
import bookRoutes from "./routes/book.routes.js";

const app = express();
const PORT = 3000;

app.get("/welcome", (request, response) => {
  response.send("Welcome to the server");
});

app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
