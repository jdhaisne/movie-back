import express from "express";
// import { connect } from 'mongoose';
import { connectDb } from "./db";
import path from "path";


// var indexRouter = require('./routes/index');
var usersRouter = require("./routes/user");

// import movieRoutes from "./routes/movie";
const movieRoutes = require("./routes/movie")

<<<<<<< HEAD
const cors = require("cors");
=======

// const cors = require("cors");
>>>>>>> 9e691c4e99d60c5c5829c37a304ff3011ab9e39b
const app = express();
const port = 3000;


const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

<<<<<<< HEAD
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
=======

  

  // app.use(
  //   cors({
  //     origin: "http://localhost:5173",
  //   })
  // );
>>>>>>> 9e691c4e99d60c5c5829c37a304ff3011ab9e39b
  
  connectDb();
  
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });

  app.use("/movie", movieRoutes);
  app.use("/", usersRouter);
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

