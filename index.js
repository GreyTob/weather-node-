//создаем простой сервер на nodejs

//подключаю пакет express в скрипт
const { response } = require('express')
const express = require('express')
const { request } = require('http')

const bodyParser = require('body-parser')

const app = express()

//файлы ejs по умолчанию
app.set('view engine', 'ejs')
//укажем статические файлы(напр.: чтобы подключить css)
app.use(express.static('public'))
//для получения данных в request.body
app.use(bodyParser.urlencoded({ extends: true }))

app.get('/', (request, response) => {
  response.render('index')
})

// app.get('/about', (request, response) => {
//   response.end('about page')
// })

app.post('/', (request, response) => {
  console.log(request.body)
  const { city } = request.body
  console.log(city)
  response.render('index')
})

//port 3000, callback
app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})
