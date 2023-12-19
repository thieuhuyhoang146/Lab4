import axios from 'axios'

const baseURL = "http://localhost:4000/dating/cards";
const instance = axios.create({
    baseURL: baseURL
})

export default instance;