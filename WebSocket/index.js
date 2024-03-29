const express = require('express')
const app = express()
const port = 3000

// 웹소켓 모듈(ws) 로드
const { WebSocketServer } = require('ws')
// 웹소켓 서버 열기 (포트: 8001)
// 변수명 wss: websocket server
const wss = new WebSocketServer({ port: 8001 })

// view
app.use(express.static('public'))

// 브로드캐스트 코드 중복 개선을 위한 메서드 생성
wss.broadcast = (message) => {
    wss.clients.forEach(client => {
        client.send(message)
    })
}

// 웹소켓 서버 연결 후 실행될 이벤트
wss.on('connection', (ws, request) => {
    // 1. 클라이언트가 접속하면 서버가 메세지 보내줌
    wss.broadcast(`새로운 유저가 접속했습니다. 현재유저 ${wss.clients.size}명`)

    console.log(`새로운 유저 접속: ${request.socket.remoteAddress}`)

    // 2. 클라이언트가 나가면 보내주는 메세지
    ws.on('close', ()=>{
        wss.broadcast(`유저 한 명이 떠났습니다. 현재 유저 ${wss.clients.size}명`)
    })

    /* 3. 클라이언트가 보낸 채팅메세지를 받아
          연결된 모든 클라이언트에게 브로드캐스트 */
    ws.on('message', data => {
        wss.broadcast(data.toString())
    })

})

// wss.on('connection', ws => {
//     // ws: 연결된 클라이언트
    
//     // 데이터 수신 이벤트
//     ws.on('message', data => {
//         console.log(`유저의 응답: ${data}`)
//         ws.send(`서버의 답장: ${data}`)
//     })
// })

app.listen(port, ()=>console.log(`Server Start !! port: ${port}`))