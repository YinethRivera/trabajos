const os = require("os");
const express = require("express");
const { uptime } = require("process");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  res.send("Yineth Rivera Guerrero!");
});

app.get("/platform", (req, res) => {
  const platform = os.platform();
  console.log(platform);
  res.send(platform);
});

app.get("/type", (req, res) => {
const nameOs = os.type();

console.log(nameOs);
  res.send(nameOs);
});

app.get("/arch", (req, res) => {
const cpuArchitecture = os.arch();

console.log(cpuArchitecture);
  res.send(cpuArchitecture);
});

app.get("/uptime", (req, res) => {
const uptimeOS = os.uptime();

console.log(uptimeOS);
  res.send(uptimeOS);
});

app.get("/totalmem", (req, res) => {
const totalMemory = os.totalmem();

console.log(totalMemory);
  res.send(totalMemory);
});

app.get("/cpus", (req, res) => {
const cpusCoreLogic = os.cpus();

console.log(cpusCoreLogic);
  res.send(cpusCoreLogic);
});

app.get("/networkInterfaces", (req, res) => {
const networkInfo = os.networkInterfaces();

console.log(networkInfo);
  res.send(networkInfo);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
