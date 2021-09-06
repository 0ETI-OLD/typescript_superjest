import { app } from "./app";

const bootstrap = async () => {
  app.listen(3001, () => {
    console.log("SERVER STARTED");
  });
};

bootstrap();
