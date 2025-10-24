import { CONFIG } from "@/app/config.js";
import { koa } from "@/app/dependency.js";
import Router from "@koa/router";

const router = new Router();

router.get("/static/health", async (ctx) => {
  ctx.body = {
    ...ctx.body || {},
    status: "ok",
    APP_ENV: CONFIG.APP_ENV,
  };
});

koa.use(router.routes()).use(router.allowedMethods());
export default router;
