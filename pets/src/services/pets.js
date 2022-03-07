import client from '../providers/client'

export const getPets = () => {
  const api_code = process.env.REACT_APP_API_CODE

  const response = client.get(`/pets/${'01ihgws'}`)

  return response
}

export const postPet = (data) => {
  const api_code = process.env.REACT_APP_API_CODE

  const response = client.post(`/pets/${'01ihgws'}`, data)

  return response
}
