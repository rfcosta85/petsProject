import React from 'react'
import { useNavigate } from 'react-router-dom'
import { postPet } from '../../services/pets'

import '../petForm/petform.scss'

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
        <h1>Cadastrando PET</h1>
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
            placeholder="insira um link com a imagem do seu pet"
          />
          <button>Create</button>
        </form>
      </div>
    </main>
  )
}

export default Petform
