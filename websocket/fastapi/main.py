from fastapi import FastAPI, WebSocket
import websockets
from typing import List

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


# 웹소켓용 인스턴스, 하나씩 만들어도 되지만 이렇게 하는 이유는, 채팅방이 다수 필요할 때 사용하기 위함
class WSCon:
    def __init__(self):
        self.connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.connections.append(websocket)
        await websocket.send_text(f'{websocket.client}')

    async def receive(self, data):
        for connection in self.connections:
            await connection.send_text(data)


ws = WSCon()

# ws서버 생성용 코드
@app.websocket("/")
async def wss(websocket: WebSocket):
    await ws.connect(websocket)

    while True:
        data = await websocket.receive_text()
        await ws.receive(f'{data}')
