import * as Koa from 'koa';
import * as Router from 'koa-router';
import handleResponse from './utils/handleResponse';

import conclusionRouter from './conclusion/router';
import frameRouter from './frame/router';
import storyRouter from './story/router';
import userRouter from './user/router';
import userResponseRouter from './userResponse/router';

const router: Router = new Router();

router.get('/', async (ctx: Koa.Context) => {
    ctx.body = {
      app: "E-learnng Server",
      version: "1.0.0",
    };
});

router.use(
    '/api',
    conclusionRouter,
    frameRouter,
    storyRouter,
    userRouter,
    userResponseRouter
);

router.all('*', ctx => {
    handleResponse(ctx, `Requested route ${ctx.request.url} does not exist`, 404);
});

export default router;