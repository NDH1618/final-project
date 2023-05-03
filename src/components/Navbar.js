import './Navbar.css';
import React, { useState } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import {TbMenuOrder} from 'react-icons/tb'
import { MenuItem } from './menuItem';
import {SiIconify} from 'react-icons/si'


const Navbar = () =>{

    const usenavigate = useNavigate()
    const [clicked, Setclicked] = useState(false)

    const handleClick = () => {
        Setclicked(!clicked)
    }

    const isLoggedIn = localStorage.getItem('token')
    const userloggedIn = localStorage.getItem('user')
    const logingoto = () => {
        usenavigate('/login')
    }
    const handlelogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        usenavigate('/')      
    }
    const reginer = () => {
        usenavigate('/dangky')
    }

    return(
        <nav className='NavbarItem'>
                <h1 className='Navbar-logo'>NDH.1618 Blog</h1>
                <div className='menu-icons' onClick={handleClick}>
                    {clicked ? <TbMenuOrder /> : <AiOutlineMenu />}
                </div>
                <ul className={clicked ? 'Navbar-menu active' : 'Navbar-menu'}>
                    {MenuItem.map((item, index) => 
                    <li key={index}>
                        <Link to={item.Url} className={item.class}>
                            {item.cName}
                            {item.Title}
                        </Link>
                    </li>
                    )}
                    <div>
                        {
                        !userloggedIn &&
                        <button className='button' onClick={reginer}>Đăng ký</button> 
                        }
                        {
                        userloggedIn &&
                        <p id='hello-user'>Xin chào {userloggedIn}<SiIconify /></p> 
                        }
                    </div>
                    <div>
                        {
                        !isLoggedIn &&
                        <button className='button' onClick={logingoto}>Đăng nhập</button>
                        }
                        {
                        isLoggedIn &&
                        <button className='button' onClick={handlelogOut}>Đăng xuất</button>
                        }
                    </div>
                </ul>
        </nav>
    )
}
export default Navbar




// class Navbar extends React.Component {
//     constructor(props) {
//         super(props) 
//             this.state = {clicked: false }
        
//     }

//     handleClick = () => {
//         this.setState({clicked: !this.state.clicked})
//     }
//     render() {
//         return (
//             <nav className='NavbarItem'>
//                 <h1 className='Navbar-logo'>NDH.1618 Blog</h1>
//                 <div className='menu-icons' onClick={this.handleClick}>
//                     {this.state.clicked ? <TbMenuOrder /> : <AiOutlineMenu />}
//                 </div>
//                 <ul className={this.state.clicked ? 'Navbar-menu active' : 'Navbar-menu'}>
//                     {MenuItem.map((item, index) => 
//                     <li key={index}>
//                         <Link to={item.Url} className={item.class}>
//                             {item.cName}
//                             {item.Title}
//                         </Link>
//                     </li>
//                     )}
//                     <button className='button'>Đăng nhập</button>
//                 </ul>
//             </nav>
//         )
//     }
// }
// export default Navbar