const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shashank:shashank@cluster0.eidtw.mongodb.net/aceddb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log("There is some error while connect to database"+err));
