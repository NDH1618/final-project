import React from 'react'
import {FaFacebookF, FaTiktok,} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import './Footer.css'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1></h1>
                <h1>VlogNDH</h1>
                <p>không phải một mà cũng không phải khác</p>
            </div>
            <div>
                <a href=''><FaFacebookF /></a>
                <a href=''><FaTiktok /></a>
                <a href=''><AiFillTwitterCircle /></a>
                <a href=''><BsInstagram /></a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href=''>ChangeLog</a>
                <a href=''>Status</a>
                <a href=''>License</a>
                <a href=''>All version</a>
            </div>
            <div>
                <h4>Cộng đồng</h4>
                <a href=''>ChangeLog</a>
                <a href=''>Status</a>
                <a href=''>License</a>
                <a href=''>All version</a>
            </div><div>
                <h4>Tài khoản</h4>
                <a href=''>ChangeLog</a>
                <a href=''>Status</a>
                <a href=''>License</a>
                <a href=''>All version</a>
            </div><div>
                <h4>Hỗ trợ khách hàng</h4>
                <a href=''>ChangeLog</a>
                <a href=''>Status</a>
                <a href=''>License</a>
                <a href=''>All version</a>
            </div>
        </div>
    </div>
  )
}
