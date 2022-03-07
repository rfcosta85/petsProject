import { login } from '../services/auth'

export const authProvider = {
  isAuthenticated: false,
  signIn: async (data, callback) => {
    try {
      const response = await login(data)
      const user = {
        token: response.data.token,
        name: response.data.user.name,
      }
      localStorage.setItem('user', JSON.stringify(user))
      console.log(response)
      callback(user)
    } catch (error) {}
  },
  signOut: (callback) => {
    localStorage.removeItem('user')
    callback()
  },
}
