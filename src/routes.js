import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/*
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'teste nome',
    email: 'teste email',
    password_hash: 'pw_hash',
  });
  return res.json(user);
});
*/

routes.post('/newuser', UserController.store);
routes.post('/login', SessionController.store);
routes.use(authMiddleware);
routes.put('/updateuser', UserController.update);

export default routes;
