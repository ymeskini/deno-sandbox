import { Router } from "https://deno.land/x/oak/mod.ts";

const v1Router = new Router();

v1Router.get("/", (context) => {
  context.response.body = "We're up and running";
});

export { v1Router };
