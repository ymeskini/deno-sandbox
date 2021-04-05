import { Application, Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";

const v1Router = new Router();

v1Router.get("/", (context) => {
  context.response.body = "We're up yeaah and running";
});

const app = new Application();

app.use(v1Router.routes());
await app.listen({ port: 8000 });
