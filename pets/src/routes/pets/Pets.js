import { useEffect, useState } from 'react'
import { getPets } from '../../services/pets'

import '../pets/pets.scss'

function Pets() {
  const [PetsList, setPetsList] = useState([])
  useEffect(() => {
    const request = async () => {
      const response = await getPets()
      console.log('response', response)
      setPetsList(response.data.pets)
    }
    request()
  }, [])

  return (
    <main className="c-main">
      {PetsList !== [] ? (
        PetsList.map(
          ({ id, name, breed, age, species, gender, url, adopted }) => (
            <div key={id} className="c-main__card">
              <img src={url} alt={breed} className="c-main__card--card-image" />
              <div className="c-main__card-info">
                <h3>
                  {name} - {age} ano(s)
                </h3>
                <p>
                  {species} - {gender}
                </p>
              </div>
            </div>
          )
        )
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  )
}

export default Pets
