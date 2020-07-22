import * as Joi from 'joi';
import * as Router from 'koa-router';
import {
    getConclusion,
} from './controller';
import { authenticateUser } from '../utils/auth';
import { validateBodyPayload, validateParamsPayload } from '../utils/validator';

const router: Router = new Router();

router.get(
    "/conclusion/:id",
    validateParamsPayload({
        id: Joi.number()
    }),
    getConclusion
)

export default router.routes();