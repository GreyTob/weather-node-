const requestPromise = require('request-promise')

//экспорт функции
module.exports = async function (city = '') {
  if (!city) {
    throw new Error('Имя города не может быть пустой строкой')
  }

  //api key 3a7f5ac07520aa2feac726b007a9eaf4 from openweathermap
  const KEY = '3a7f5ac07520aa2feac726b007a9eaf4'
  const uri = 'http://api.openweathermap.org/data/2.5/weather'

  //создаем запрос на сервер с погодой
  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'metric',
    },
    json: true,
  }

  try {
    const data = await requestPromise(options)
    console.log(data)

    return {
      weather: `${data.name}, ${data.main.temp}, ${data.weather[0].icon}`,
      error: null,
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.messsage,
    }
  }
}
