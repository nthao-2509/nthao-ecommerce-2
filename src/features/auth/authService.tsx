import axios from 'axios'

const register = async (userData: any) => {
  const response = await axios.post('/sign-up', userData)
  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data))
    window.location.href = '/sign-in'
  }
  return response.data
}
const login = async (userData: any) => {
  const response = await axios.post('/sign-in', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}
export default authService
