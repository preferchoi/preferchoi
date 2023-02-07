# node.js 로 만드는 websocket
- 사용 lib: express, ws
- 
```
    npm init

    npm install ws express

    또는

    clone 한 뒤에
    npm i
```

- app.js 코드
    ```
    const { WebSocketServer } = require("ws");
    
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

    ```
    - 과정
        1. WS 인스턴스 생성
        2. connection 동작 제작
        3. 추가로 close, message 함수 제작
        4. 한 클라이언트에서 받은 데이터를 다른 클라이언트에게 보내주기 위해서는 message함수에서 모든 접속한 클라이언트에게 send하는 과정이 필요함.
        
    - html code
    ```
    <form action="" onsubmit="pressBtn(event)">
        <input type="text" id="text" autocomplete="off" />
        <button>Send</button>
    </form>

    <ul id='receive'>
    </ul>

    <script>
        const ws = new WebSocket("ws://localhost:8002/test")

        function pressBtn(params) {
            var input = document.getElementById("text")
            ws.send(input.value)
            input.value = ''
            event.preventDefault()
        }

        function tele(event) {
            var receive = document.getElementById('receive')
            var message = document.createElement('li')
            message.innerText = event.data
            receive.appendChild(message)

        }
        ws.onmessage = tele;

    </script>
    ```
    - 과정
        1. ws 인스턴스 생성으로 접속
        2. onmessage 함수 생성해서 데이터 받을 수 있게 함
        3. 필요할 경우 ws.send(data)로 서버에 데이터 전송
