import express from "express";
import config, { PORT, HOST, SERVER_URL } from "./config";
import apiRouter from "./api-router"

console.log(config);

const server = express();

// console.log(server);

// server.use(express.static("dist"));

server.set("view engine", "ejs"); //ejs: templating language

server.use("/api",apiRouter)

server.get("/", (req, res) => {
  res.render("index", {
    initialContent:
      "<h1>Loading in the server side...</h1>",
  });  //index: name of the templating file
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `the express is listening at ${config.SERVER_URL}`
  );
});
