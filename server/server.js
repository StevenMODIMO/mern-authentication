require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const dataRoutes = require("./routes/data");

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/data", dataRoutes);

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`http://localhost:${process.env.PORT}`)
    );
  })
  .catch((error) => console.error(error));
