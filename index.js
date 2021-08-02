//создаем простой сервер на nodejs

//подключаю пакет express в скрипт
const { response } = require('express')
const express = require('express')
const { request } = require('http')

const app = express()

app.get('/', (request, response) => {
  response.end('Hello from NodeJS')
})

app.get('/about', (request, response) => {
  response.end('about page')
})

//port 3000, callback
app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})
