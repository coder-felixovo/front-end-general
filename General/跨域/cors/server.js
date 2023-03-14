const express = require('express')
const app = express()
const whiteList = ['http://localhost:8001']
app.use(function (req, res, next) {
  const origin = req.headers.origin
  if (whiteList.includes(origin)) {
    // 允许哪个源
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个请求头
    res.setHeader('Access-Control-Allow-headers', 'name')
    // 允许的请求方法
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 60) // 每隔1分钟才会发一次预检请求
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    /* 注意如果Access-Control-Allow-Origin设置了 * ，则不能使用Access-Control-Allow-Credentials */
    // 允许返回的响应头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if (req.menthod === 'OPTIONS') {
      // 预检请求不作处理
      res.send()
    }
  }
  next()
})
app.get('/hello_cors', (req, res) => {
  console.log(req.headers)
  var data = {
    data: { name: 'cors', menthod: 'GET' }
  }
  res.send(data)
})
app.put('/hello_cors', (req, res) => {
  console.log(req.headers)
  var data = {
    data: { name: 'cors', method: 'PUT' }
  }
  res.setHeader('name', 'response headers')
  res.send(data)
})

app.listen(8080, () => {
  console.log('Server started, running at http://localhost:8080')
})