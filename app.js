let cityAPI = JSON.parse(localStorage.getItem('saveCity')) || []
cityAPI.className = 'list-group-item'
cityAPI.textContent = document.getElementById('search').value

for (let i = 0; i < cityAPI.length; i++) {
  let cityAPI = document.createElement('li')
  cityAPI.className = 'list-group-item'
  cityAPI.textContent = cityAPI[i]
  document.getElementById('cityList').append(cityAPI)
}

document.getElementById('searchBtn').addEventListener('click', event => {
    event.preventDefault()

  let cityName = document.getElementById('search').value
  let time = new Date()


  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=cde25f400fd71f13ed4e7af5635b553d`)
    .then(res => {
      let location = res.data
      console.log(location)

      let cityName = document.createElement('li')
      cityName.className = 'list-group-item'
      cityName.textContent = document.getElementById('search').value
      document.getElementById('cityList').append(cityName)

      document.getElementById('theCity').innerHTML = `
    <h1>${location.name}, ${time.toDateString()}</h1>
    `

    })
    .catch(err => console.error(err))
})


  // < h2 > ${ location.city.name }, ${ currentTime.toDateString() } <img src="http://openweathermap.org/img/wn/${location.list[0].weather[0].icon}@2x.png"></h2>
  //           <p>Temperature: ${location.list[0].main.temp} °F</p>
  //           <p>Humidity: ${location.list[0].main.humidity}%</P>
  //           <p>Wind speed: ${location.list[0].wind.speed} MPH</P>
  //           <p>UV index: </P>
  //           <hr>