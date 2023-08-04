const express = require('express')
const app = express()
const port = 3000

// 웹소켓 모듈(ws) 로드
const { WebSocketServer } = require('ws')
// 웹소켓 서버 열기 (포트: 8001)
// wss(websocket server)
const wss = new WebSocketServer({ port: 8001 })

// view
app.use(express.static('public'))

// 웹소켓 서버 연결 후 실행될 이벤트
// 클라이언트가 접속하면 서버가 환영 메세지 보내줄 것
wss.on('connection', (ws, request) => {
    wss.clients.forEach(client => {
        client.send(`새로운 유저가 접속했습니다. 현재유저 ${wss.clients.size}명`)
    })

    console.log(`새로운 유저 접속: ${request.socket.remoteAddress}`)

    ws.on('close', ()=>{
        wss.clients.forEach(client =>{
            client.send(`유저 한 명이 떠났습니다. 현재 유저 ${wss.clients.size}명`)
        })
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