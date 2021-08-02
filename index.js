//создаем простой сервер на nodejs

//подключаю пакет express в скрипт
const { response } = require('express')
const express = require('express')
const { request } = require('http')

const app = express()

//файлы ejs по умолчанию
app.set('view engine', 'ejs')

//укажем ститические файлы(напр чтобы подключить css)
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index')
})

// app.get('/about', (request, response) => {
//   response.end('about page')
// })

//port 3000, callback
app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})
