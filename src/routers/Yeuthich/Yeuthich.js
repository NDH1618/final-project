import { useDispatch, useSelector } from "react-redux"
import { Hero } from "../../components/Hero"
import Navbar from "../../components/Navbar"
import './Yeuthich.css'
import { useEffect, useState } from "react"
import { fetchFavorites } from "../Redux/FavoriteSlice"
import { useNavigate } from "react-router-dom"
import ListFv from "./listFv"

export const Yeuthich = () => {
    const favorte = useSelector(state => state.favorite)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLogin, Setlonin] = useState(false)
    const token = localStorage.getItem('token')

    console.log(favorte.data.content)

    useEffect(() => {
        dispatch(fetchFavorites())
    },[])

    useEffect(() => {
        if (!token) {
            alert('mời bạn dăng nhập để xem các tác giả')
            navigate('/login')
        } else {
            Setlonin(true)
        }
    },[])

    let newfavorite = favorte.data.content

    return(
        <>
        { 
            isLogin &&
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="yeuthich">
                    <h3 style={{color:'#425061'}}>'RẤT TIẾC' bạn đã bị lừa haha!@<br></br>
                        đùa vậy thôi mình không có lừa đâu ạ!<br></br>
                        trang này để bạn Click đăng ký thành viên @@<br></br>
                        Cảm ơn bạn đã quan tâm đến cái xó này !!!
                    </h3>
                    {
                        newfavorite !== undefined &&
                        newfavorite.map(item =>{
                            return(
                                <img className="favo-img" src={item.coverImageUrl} />
                            )
                        })
                    }
                </div>
            </div>

        }
        </>
    )
}