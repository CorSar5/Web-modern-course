import axios from 'axios'

const succes = res => res
const error = err=> {
    if(401 == err.response.status) {
        window.location='/'
    }else{
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(succes, error)