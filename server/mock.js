import { Router } from 'express';
import users from '../common/mock/users';

const router = Router();
const { log } = console;

router.use('/users', function (req, res) {
  log(JSON.stringify(req.query));
  res.status(200).json({ users, count: 7 });
});

export default router;
