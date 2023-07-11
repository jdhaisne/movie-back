
import express from 'express';
import path from 'path';

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


const app = express();
const port = 3000;
import {Sequelize} from 'sequelize';


const main = async () => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  
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
  
  
  
  
  const sequelize = new Sequelize('lesrescapes', 'lesrescapes', 'lesrescapes', {
    host: 'edouardclisson.fr',
    dialect: 'mysql',
  });
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });

}

main();


module.exports = app;


