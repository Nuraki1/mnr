import express from "express";
import config, { PORT, HOST, SERVER_URL } from "./config";

console.log(config);

const server = express();

// console.log(server);

// server.use(express.static("dist"));

server.set("view engine", "ejs"); //ejs: templating language

server.use("/", (req, res) => {
  res.render("index", {
    content:
      "<span>Perfecto!!!</span><h1><em>hi </em>there</h1>",
  }); //index: name of the templating file
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `the express is listening at ${config.SERVER_URL}`
  );
});
