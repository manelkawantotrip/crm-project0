// AuthenticationService.js : calls the register method 
import Api from '@/services/Api'

export default {
    // we are sending a post request to our server to point on register with some credentials 
    register (credentials){
        return Api().post('register', credentials)
    }
}
