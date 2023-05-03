import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import './Admin.css'
import { useNavigate } from "react-router-dom"
import Admifoder from "./Adminfoder"
import { AdminSearch } from "./AdminSearch/AdminSearch"
import AdminUp from "./AdminUpImg"




export const Admin = () => {
    const usenavigate = useNavigate()
    const [isLogin, Setlonin] = useState(false)
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            alert('mời bạn dăng nhập để vào trang')
            usenavigate('/login')
        } else {
            Setlonin(true)
        }
    },[])
    return(
        <>
        {isLogin && 
            <div>
                <Navbar />
                <div className="admin-product">
                    <div>
                        <AdminSearch />
                    </div>
                    <div className="handle-product">
                        <h2>Thêm bài viết</h2>
                        <AdminUp />
                    </div>
                </div>
            </div>
        }
        </>
    )
}