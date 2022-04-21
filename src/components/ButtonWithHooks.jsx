import React, { useEffect, useState} from 'react'

function ButtonWithHooks() {
  const [key1, setKey1] = useState("This is the default state of a hook component")
  const [key2, setKey2] = useState(0)
  const [countries, setCountries] = useState([])

  //usestate két elem hosszúságú tömbbel jön vissza (1. default érték, 2. metódus)



  
  //useeffect két argumentum: 1. arrow func 2. egy tömb
  //ha üres tömböt teszünk, akkor nem fut többször 
  useEffect( 
    () => {
      console.log("render");
      fetch('https://restcountries.com/v3.1/all')
            .then( (res) => res.json())
            .then(countriesData => setCountries(countriesData))
    
    
    }, 
    []
  )

  //(useeffect nélkül rengetegszer lefut)


  return (
    <div>
      <button onClick={() => setKey1("Clicked")}>{key1}</button>
      <button onClick={() => setKey2(1)}>{key2}</button>

      <div className='countries'>
          {countries.map((country, index) => <div key={index}>  {country.name.common}  </div>)}
      </div>
    </div>
  )
}

export default ButtonWithHooks