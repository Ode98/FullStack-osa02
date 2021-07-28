import Weather from "./Weather"

const Country = (props) => {
  const country = props.country
  return (
    <>
      <h1>{country.name}</h1>
      <p>Capital {country.capital}</p>
      <p>Population {country.population}</p>
      <h2> Spoken languages</h2>
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      <img src={country.flag} width="200" alt="flag of the country"/>
      <Weather capital={country.capital}/>
    </>
  )
}

export default Country