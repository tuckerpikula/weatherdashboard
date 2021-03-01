let cityAPI = JSON.parse(localStorage.getItem('saveCity')) || []
cityAPI.className = 'grouplist'
cityAPI.textContent = document.getElementById('search').value

for (let i = 0; i<cityAPI.length; i++) {
  let cityAPI = document.createElement('li')
  cityAPI.className = 'grouplist'
  cityAPI.textContent = cityAPI[i]
  document.getElementById('cityList').append(cityAPI)
}

document.getElementById('searchBTN').addEventListener('click', event => {
  event.preventDefault()

  let name = document.getElementById('search').value
  let time = new Date()


axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=imperial&appid=a0facbfa14a51a09cfa5af1f8db212b0`)
  .then(res => {
    let location = res.data
    console.log(location)
  })
  .catch(err => console.error(err))
})

