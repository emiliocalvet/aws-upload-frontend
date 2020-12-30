import axios from 'axios'

const api = axios.create({
  baseURL: 'https://aws-upload-backend.herokuapp.com'
})

export default api
