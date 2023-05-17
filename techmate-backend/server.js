import app from "./app.js";
import { connectDB } from "./config/database.js";

// connect to mongodb
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});
