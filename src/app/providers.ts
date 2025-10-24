import http from "node:http";
import Koa from 'koa';
import Router, {RouterOptions} from '@koa/router';
import { CONFIG } from './config.js';

export function createKoa(): Koa {
  return new Koa({
    env: CONFIG.APP_ENV,
  });
}

export function createHttpServer(koa: Koa): http.Server {
  return http.createServer(koa.callback());
}
