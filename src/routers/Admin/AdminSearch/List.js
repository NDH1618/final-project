import React from 'react'
import './List.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const List = ({title,fullName,createdDate, avatar, id}) => {

  const navigate = useNavigate()

  let ConfigData = () => {
    return{
        headers : {
            token : localStorage.getItem('token'),
        }
    }
}

  const handleEditpost = () => {
    navigate('/Editpost',{
      state : {
        EditID : id
      }
    })
  }

  const handledelete = () => {
    axios.delete(`http://contabo.foxcode.site:8085/api/v1/admin/articles/${id}`,ConfigData())
    .then(response => {
      alert('Xóa bài viết thành công')
    })
    .catch(error => {
      alert('Xóa thất bại')
    })
  }
  return (
    <>
         <tr>
            <td><img src={avatar} style={{width: '30px'}} /></td>
            <td>{title}</td>
            <td>{fullName}</td>
            <td>{createdDate}</td>
            <td>
              <button className='put-button' onClick={handleEditpost}>xửa</button>
              <button className='delete-button' onClick={handledelete}>xóa</button>
            </td>
        </tr>      
    </>
  )
}
