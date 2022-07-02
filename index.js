// Imports
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require('./router');
const app = new Koa();
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;
const db = process.env.MONGO_URI;

const connect = async () => {
  return mongoose.connect(db);
};

// Middlewares
app.use(bodyParser());
app.use(router.routes());

(async () => {
  try {
    await connect();
    console.log("DB Connected!");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
