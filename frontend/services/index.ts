import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:1337',
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' },
})
instance.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})

export default instance
