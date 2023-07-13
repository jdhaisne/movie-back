import express from "express";
// import { connect } from 'mongoose';
import { connectDb } from "./db";

const usersRouter = require("./routes/RUser");

// import movieRoutes from "./routes/movie";
const movieRoutes = require("./routes/movie");

// const cors = require("cors");
const app = express();
const port = 3000;

const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // app.use(
  //   cors({
  //     origin: "http://localhost:5173",
  //   })
  // );

  connectDb();

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });

  // app.use("/movie", movieRoutes); à décommenter
  app.use("/", usersRouter);
  // app.use("/users", usersRouter);
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
