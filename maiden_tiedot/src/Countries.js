import Country from './Country'

const Countries = (props) => {
  if (props.list.length > 10) {
  } else if (props.list.length === 1) {
    return (
      <>
        <Country country = {props.list[0]} weather={props.weather}/>
      </>
    )
  } else {
    return (
      <>
        {props.list.map(country => <li key={country.name}>{country.name} <button onClick={() => props.showCountryInformation(country.name)}>show</button> </li>)}
      </>
    )
  }
  return(
    <>
      Too many matches, specify another filter
    </>
  )
}

export default Countries