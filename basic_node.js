const now = new Date().toLocaleString()

console.log(now)

const fs = require('fs')

const data = `
  Hello from nodeJS
  i'm randonm text!
  `

//записать данные в файл
fs.writeFileSync('NodeJS.txt', data)

//прочитать из файла
const result = fs.readFileSync('NodeJS.txt', { encoding: 'utf-8' })

console.log(result)

//глобальные пеерменные, чтобы узнать путь до папки/файла
console.log(__dirname)
console.log(__filename)
