import * as Joi from 'joi';
import * as Router from 'koa-router';
import {
    createResponse,
    getUserResponse
} from './controller';
import { authenticateUser } from '../utils/auth';
import { validateBodyPayload, validateParamsPayload } from '../utils/validator';

const router: Router = new Router();

router.post(
    "/response",
    validateBodyPayload({
        buttonId: Joi.number().required()
    }),
    authenticateUser,
    createResponse
)

router.get(
    "/response/:storyId",
    validateParamsPayload({
        storyId: Joi.number()
    }),
    authenticateUser,
    getUserResponse
)


export default router.routes();