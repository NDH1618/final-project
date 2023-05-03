import { useState } from 'react'
import axios from 'axios'
import './Login.css'
import authService from '../../common/api/authService'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import {GiClick} from 'react-icons/gi'
function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    const Changeusername = (e) => {
        setData({
            ...data,
            username: e.target.value
        })
    }
    const Changepassword = (e) => {
        setData({
            ...data,
            password: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userdata = {
            username: data.username,
            password: data.password
        };
        axios.post('http://contabo.foxcode.site:8085/api/v1/auth/login', userdata )
        // const username = data.username
        // const password = data.password
        // const {username, password} = data
        // authService.login(username, password)
            .then(response => {
                console.log(response.data)
                console.log(response.data.token)
                
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.username)
                navigate('/')
                alert('dang nhap thanh cong')
            })
            .catch(error => {
                console.log(error)
                alert('dang nhap sai thong tin')
                navigate('/dangky')
            })
        setData({
            username: "",
            password: ""
        })

    }

    const reginner = () => {
        navigate('/dangky')
    }

    return (
        <>
            <Navbar />
            <div className="Admin_product">
                <h3>MỜI BẠN ĐĂNG NHẬP</h3>
                <form onSubmit={handleSubmit}>
                    <input placeholder="nhập vào username" name='username' onChange={Changeusername}>
                    </input><br></br>
                    <input placeholder="Nhập vào password" name='password' onChange={Changepassword}>
                    </input><br></br>
                    <button type='submit'>Login</button>
                </form>
                <div className='admin-reginer'>
                    <h5>Bạn chưa có tài khoản ? </h5>
                    <p onClick={reginner}>Click <GiClick /> để đăng ký</p>
                </div>
            </div>

        </>
    )
}
export default Login