import * as Router from 'koa-router';

const router: Router = new Router();

router.get("/user", async (ctx) => {
    ctx.body = { msg: "Hello world!" }
})

export default router.routes();