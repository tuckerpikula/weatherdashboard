let index = 0

document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()

  let cityName = document.getElementById('search').value
  index++
  let today = new Date().toLocaleDateString()
  let tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString();
  let d2 = new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString();
  let d3 = new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString();
  let d4 = new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString();
  let d5 = new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString();


  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=6fefb9638e06563380186564cc975fce`)
    .then(res => {
      let location = res.data
      console.log(location)

      let theCityName = document.createElement('li')
      theCityName.className = 'list-group-item'
      theCityName.textContent = document.getElementById('search').value
      document.getElementById('cityList').append(theCityName)

      document.getElementById('weatherCity').innerHTML = `
    <h1>${location.name}, ${today}</h1>
    <p>Temperature: ${location.main.temp}
    <p>Humidity: ${location.main.humidity}
    <p>Wind Speed: ${location.wind.speed}
    `
      localStorage.setItem(JSON.stringify(index), JSON.stringify(cityName))

      let itemElem = document.createElement('li')
      itemElem.textContent = cityName
      itemElem.classList.add('list-group-item')
      
      document.getElementById('list').append(itemElem)

    })
    .catch(err => console.error(err))


  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=6fefb9638e06563380186564cc975fce`)
    .then(res => {
      let location = res.data
      console.log(location)
      let d1w = location.list[3].main.temp
      let d2w = location.list[11].main.temp
      let d3w = location.list[19].main.temp
      let d4w = location.list[27].main.temp
      let d5w = location.list[35].main.temp
      let d1h = location.list[3].main.humidity
      let d2h = location.list[11].main.humidity
      let d3h = location.list[19].main.humidity
      let d4h = location.list[27].main.humidity
      let d5h = location.list[35].main.humidity

      document.getElementById('day1info').innerHTML = `
      <p>${tomorrow}</p>
      <p>Temp: ${d1w} °F</p> 
      <p>Humidity: ${d1h}%</p>
      `
      document.getElementById('day2info').innerHTML = `
      <p>${d2}</p>
      <p>Temp: ${d2w} °F</p> 
      <p>Humidity: ${d2h}%</p>
      `
      document.getElementById('day3info').innerHTML = `
      <p>${d3}</p>
      <p>Temp: ${d3w} °F</p> 
      <p>Humidity: ${d3h}%</p>
      `
      document.getElementById('day4info').innerHTML = `
      <p>${d4}</p>
      <p>Temp: ${d4w} °F</p> 
      <p>Humidity: ${d4h}%</p>
      `
      document.getElementById('day5info').innerHTML = `
      <p>${d5}</p>
      <p>Temp: ${d5w} °F</p> 
      <p>Humidity: ${d5h}%</p>
      `

    })
    .catch(err => console.error(err))
})




