const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8001 })

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log(data.toString('utf-8'))
    ws.send('Server sent data to Client')
  })
})
