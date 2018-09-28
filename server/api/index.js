import { Router } from 'express';
import axios from 'axios';
import qs from 'qs';
import { serverMockOption } from '../../common/sendOption';

const router = Router();
const { error: logError } = console;

async function proxyRouter (req, res, next) {
  const { method = 'get', url, query, body } = req;
  try {
    const response = await axios(Object.assign({}, serverMockOption, {
      method,
      url: `${url}?${qs.stringify(query)}`,
      data: body,
    }));
    res.status(response.status).json(response.data);
  } catch (error) {
    logError(error);
    next(error);
  }
}

router.use(proxyRouter);

export default router;
