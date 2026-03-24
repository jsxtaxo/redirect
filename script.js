const express = require("express");
const app = express()
const http = require("http");
const server = http.createServer(app);
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
let port = 3000;
server.listen(port, ()=>{
    console.log(`server listening at [http://localhost:${port}]`)
})