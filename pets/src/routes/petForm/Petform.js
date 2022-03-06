import React from 'react'
import { useNavigate } from 'react-router-dom'
import { postPet } from '../../services/pets'

function Petform() {
  let navigate = useNavigate()

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      breed: formData.get('breed'),
      age: formData.get('age'),
      species: formData.get('species'),
      gender: formData.get('gender'),
      url: formData.get('image'),
    }

    await postPet(data)
    navigate('/')
  }
  return (
    <main className="c-main__container">
      <div className="c-main__container--title">
        <h1>Create Pet</h1>
      </div>
      <div className="c-main__div-form">
        <form onSubmit={handleSubmitForm} className="c-main__div-form--form">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o nome do seu Pet"
          />
          <label htmlFor="breed">Raça</label>
          <input
            type="text"
            name="breed"
            placeholder="Digite a raça do seu Pet"
          />
          <label htmlFor="age">Idade</label>
          <input
            type="number"
            name="age"
            placeholder="Digite o ano do seu Pet"
          />
          <label htmlFor="species">Espécie</label>
          <select name="species">
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
          <label htmlFor="gender">Gênero</label>
          <select name="gender">
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
          <label htmlFor="image">Imagem</label>
          <input
            type="url"
            name="image"
            placeholder="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fpetcaramelo.com%2Fwp-content%2Fuploads%2F2018%2F12%2Fpitbull.jpg%3Fssl%3D1&f=1&nofb=1"
          />
          <button>Create</button>
        </form>
      </div>
    </main>
  )
}

export default Petform
