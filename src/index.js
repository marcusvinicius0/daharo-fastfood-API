import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.application = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.application.use(express.json());
  }

  routes() {
    this.application.use(routes);
  }
}

export default new App().application;
