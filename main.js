import express from "express";
import connectDb from "./db/db.js";
import router from "./routes/index.js";
import ejs from "ejs";

const app = express();

connectDb();

app.use(express.json());

//set the view engine to ejs
app.use(express.static("views"));
app.set("view engine", "ejs");

app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.render("index");
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});