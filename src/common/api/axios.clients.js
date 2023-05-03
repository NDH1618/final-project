import axios from 'axios';

const BASE_URL = 'http://vtiblog-api.foxcode.site'


const axiosClient = axios.create({
    baseURL: BASE_URL

})
export default axiosClient