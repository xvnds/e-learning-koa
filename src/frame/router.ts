import * as Joi from 'joi';
import * as Router from 'koa-router';
import {
    createFrame,
    getFrame
} from './controller';
import { authenticateUser } from '../utils/auth';
import { validateBodyPayload, validateParamsPayload } from '../utils/validator';

const router: Router = new Router();

router.post(
    "/frame",
    validateBodyPayload({
        title: Joi.string().required().allow(null),
        text: Joi.string().required().allow(null),
        buttons: Joi.array().items(Joi.object().keys({
            text: Joi.string().required(),
            score: Joi.number()
        })).required(),
        fromButtonId: Joi.number().required().allow(null),
        storyId: Joi.number().required(),
        frameTypeId: Joi.number().required(),
        bgUri: Joi.string()
    }),
    authenticateUser,
    createFrame
)

router.get(
    "/frame/:id",
    validateParamsPayload({
        id: Joi.number()
    }),
    getFrame
)

export default router.routes();