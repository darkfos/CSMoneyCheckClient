import axios from "axios";

class authService {

    async registerUser(userData) {
        const req = await axios.post("http://localhost:8000/api/v1/auth/register", userData, {
            withCredentials: true
        });
        return req.status === 201 ? true : false
    }

    async authUser(userData) {
        const req = await axios.post("http://localhost:8000/api/v1/auth/login", userData, {
            withCredentials: true
        });
        return req.status === 200 ? true : false
    }

}


export default authService;