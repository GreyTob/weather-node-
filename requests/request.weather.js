const requestPromise = require('request-promise')

//экспорт функции
module.exports = async function (city = '') {
  if (!city) {
    throw new Error('Имя города не может быть пустой строкой')
  }

  console.log('Сity:', city)
}
