import { useEffect, useState } from 'react'

import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar'
function Register() {
    
    const navigate = useNavigate()

    const [isRegister, SetRegister] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            alert('bạn đã đăng ký tài khoản rồi. hihi!')
            navigate('/')
        }
        else{
            SetRegister(true)
        }
    },[])
    

    const [data, setData] = useState({
        username: "",
        password: "",
        avatarUrl: "",
        fullName: ""
    })

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
    const avatarUrl = (e) => {
        setData({
            ...data,
            avatarUrl: e.target.value
        })
    }
    const fullName = (e) => {
        setData({
            ...data,
            fullName: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userdata = {
            username: data.username,
            password: data.password,
            avatarUrl: data.avatarUrl,
            fullName: data.fullName

        };
        axios.post('http://vtiblog-api.foxcode.site/api/v1/auth/register', userdata )
        // const username = data.username
        // const password = data.password
        // const {username, password} = data
        // authService.login(username, password)
            .then(response => {
                console.log(response.data)
                alert('chúc mừng bạn đăng ký thành công, mời đăng nhập')
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
                alert('đăng ký lỗi rồi')
            })
        setData({
            username: "",
            password: "",
            avatarUrl: "",
            fullName: ""
        })
    }

    return (
        <>
            {isRegister && 
                <div>
                    <Navbar />
                    <div className="Admin_product">
                        <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
                        <form onSubmit={handleSubmit}>
                            <input placeholder="nhập vào username" name='username' onChange={Changeusername}>
                            </input><br></br>
                            <input placeholder="Nhập vào password" name='password' onChange={Changepassword}>
                            </input><br></br>
                            <input placeholder="Nhập vào avatarUrl" name='avatarUrl' onChange={avatarUrl}>
                            </input><br></br>
                            <input placeholder="Nhập vào fullName" name='fullName' onChange={fullName}>
                            </input><br></br>
                            <button type='submit'>Register</button>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}
export default Register