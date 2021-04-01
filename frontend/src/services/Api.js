// Api.js is a file stored inside the frontend folder which returns an axios object that points to our server
import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: `http://localhost:8081`
    })
}