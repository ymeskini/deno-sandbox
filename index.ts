import { Application } from "https://deno.land/x/oak/mod.ts";

import { v1Router } from "./infra/http/api/v1/index.ts";

const app = new Application();

app.use(v1Router.routes());
await app.listen({ port: 8000 });
