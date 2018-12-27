import express from "express";
import "babel-polyfill";

const consola = require("consola");
const {Nuxt, Builder} = require("nuxt");
const app: express.Application = express();
const host: string = process.env.HOST || "127.0.0.1";
const port: any = process.env.PORT || 3000;

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start (): Promise<void> {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `服务器正在监听：\" http://${host}:${port}\"`,
    badge: true
  });
}

void start();
