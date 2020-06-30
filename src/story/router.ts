import * as Joi from 'joi';
import * as Router from 'koa-router';
import {
    createStory,
    deleteStory,
    getStory
} from './controller';
import { authenticateUser } from '../utils/auth';
import { validateBodyPayload, validateQueryPayload, validateParamsPayload } from '../utils/validator';

const router: Router = new Router();

router.get("/user", async (ctx) => {
    ctx.body = { msg: "Hello world!" }
})

router.post(
    "/story",
    validateBodyPayload({
        title: Joi.string().required(),
        description: Joi.string().optional().allow(null).allow(''),
        storyTypeId: Joi.number().required()
    }),
    authenticateUser,
    createStory
)

router.delete(
    "/story",
    validateQueryPayload({
        id: Joi.number().required()
    }),
    authenticateUser,
    deleteStory
)

router.get(
    "/story/:id",
    validateParamsPayload({
        id: Joi.number()
    }),
    getStory
)

export default router.routes();