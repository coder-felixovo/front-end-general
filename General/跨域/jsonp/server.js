const express = require('express')
const app = express()

app.get('/jsonp', (req, res) => {
  var data = {
    code: 200,
    msg: '使用jsonp跨域请求',
    data: { name: 'jsonp' }
  }
  const fnName = req.query.callback // 获取回调函数名称
  // 将函数名和返回数据拼接
  res.send(fnName + "(" + JSON.stringify(data) + ")")
})

app.listen(8080, () => {
  console.log('Server started, running at http://localhost:8080')
})