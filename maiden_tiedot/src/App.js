import Filter from './Filter'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './Countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
 

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const showCountryInformation = (name) => {
    setFilter(name.toLowerCase())
  }

  const countriesToShow = false
    ? countries
    : countries.filter(country => country.name.toLowerCase().includes(filter))

  return(
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <Countries list = {countriesToShow} showCountryInformation={showCountryInformation}/>
    </div>
  )
}

export default App;
