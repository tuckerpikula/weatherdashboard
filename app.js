let cityAPI = JSON.parse(localStorage.getItem('saveCity')) || []
cityAPI.className = 'grouplist'
cityAPI.textContent = document.getElementById('search').value

for (let i = 0; i < cityAPI.length; i++) {
  let cityAPI = document.createElement('li')
  cityAPI.className = 'grouplist'
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

      // let cityName = document.createElement('li')
      // cityName.className = 'grouplist'
      // cityName.textContent = document.getElementById('search').value
      // document.getElementById('theCity').append(cityName)

    //   document.getElementById('theCity').innerHTML = `
    // <h2>${location.city.name}, ${currentTime.toDateString()}
    // `

    })
    .catch(err => console.error(err))
})

// 6fefb9638e06563380186564cc975fce