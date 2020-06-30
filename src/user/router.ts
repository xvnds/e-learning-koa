import * as Joi from 'joi';
import * as Router from 'koa-router';
import {
    createUser,
    deleteUser,
    login
} from './controller';
import { authenticateUser } from '../utils/auth';
import { validateBodyPayload, validateQueryPayload } from '../utils/validator';

const router: Router = new Router();

router.get("/user", async (ctx) => {
    ctx.body = { msg: "Hello world!" }
})

router.post(
    "/user",
    validateBodyPayload({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().optional(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        phoneNumber: Joi.string(),
        userType: Joi.number().required()
    }),
    createUser
)

router.post(
    "/login",
    validateBodyPayload({
        email: Joi.string().required(),
        password: Joi.string().required()
    }),
    login
)

router.delete(
    "/user",
    validateQueryPayload({
        id: Joi.number().required()
    }),
    authenticateUser,
    deleteUser
)

export default router.routes();