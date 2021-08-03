const mongoose = require("mongoose");
const chalk = require("chalk");
mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.inverse.green("Connected Successfully"));
  })
  .catch((e) => {
    console.error("Error : " + e);
    process.exit(1);
  });
