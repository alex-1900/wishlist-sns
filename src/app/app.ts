import staticRouter from '@/http/routes/static.js';
import { koa, server } from './dependency.js';

export class App {
  prepareRoutes(): void {
    koa.use(staticRouter.routes()).use(staticRouter.allowedMethods());
  }

  listen(port: number): void {
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
}
