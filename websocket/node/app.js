const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();

app.listen(8000);

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/test.html')
})

const websocketServer = new WebSocketServer({ port: 8002 });
websocketServer.on("connection", (ws, request) => {
    console.log("connect!")
    console.log(websocketServer.clients.size)
    ws.on("close", () => {
        console.log("close!")
        console.log(websocketServer.clients.size)
    });

    ws.on("message", data => {
        websocketServer.clients.forEach(client => {
            console.log("message!")
            client.send(data.toString())
        })
    });
});