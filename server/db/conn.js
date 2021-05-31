const mongoose = require("mongoose");
mongoose
  .connect(
    "input_your_mongodb_link_here",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log("There is some error while connect to database"+err));
