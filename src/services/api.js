import axios from 'axios'

const api = axios.create({
  baseURL: 'https://aws-upload-frontend.herokuapp.com'
})

export default api
