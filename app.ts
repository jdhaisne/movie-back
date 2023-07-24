import express from "express";
const bodyParser = require('body-parser')
// import { connect } from 'mongoose';
import { connectDb } from "./db";

const usersRoutes = require("./routes/RUser");
const movieRoutes = require("./routes/RMovie")
const topicRoutes = require("./routes/RTopic")
const commentRoutes = require("./routes/RComment")
const ratingRoutes = require("./routes/RRating")
const likeRoutes = require("./routes/RLike")
// const index = require("./routes/index")

const cors = require("cors");
const app = express();
const port = 3000;

const main = async () => {
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.urlencoded({ extended: false }))
  
  app.use(bodyParser.json())

  app.use(
    cors()
  );

  connectDb();

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });

  // app.use("/", index)

  app.use("/user", usersRoutes);
  app.use("/movie", movieRoutes);
  app.use("/topic", topicRoutes);
  app.use("/comment", commentRoutes);
  app.use("/rating", ratingRoutes)
  app.use("/like", likeRoutes)


};

main();

module.exports = app;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');

// });
