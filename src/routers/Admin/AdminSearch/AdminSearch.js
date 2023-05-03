import React, { useEffect, useState } from 'react'
import './adminsearch.css'
import { List } from './List'
import axios from 'axios'
import PagingAdmin from '../PaginationAdmin/paging'


export  const AdminSearch = () => {
    const [page, setPage] = useState(0)
    const [newProduct, setNewProduct] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [newdata, setNewdata] = useState({
        title: '',
        createdDateFrom: '',
        createdDateTo: ''
    })

    let dataConfig = () => {
        return{
            headers : {
                token : localStorage.getItem('token'),
            }
        }
    }

    useEffect(() => {
        Callfilter()
    },[page])

    const Callfilter = () => {
        axios.post(`http://contabo.foxcode.site:8085/api/v1/admin/articles/filter?page=${page}&size=6`, newdata,dataConfig())
        .then(response => {
            const data = response.data
            const product = data.content
            setNewProduct([...product])
            setTotalPages(data.totalPages)
            console.log(data)
        })
        .catch(error => {
            alert('da co loi xay ra')
        })
       
    }

    const handlePageChange = (page) => {
        setPage(page - 1)
    }

  return (
    <>
        <h2>Danh sách bài viết</h2>
        <div className='adminsearch'>
            <div>
                <input placeholder='nhập vào nội dung' onChange={e => setNewdata({
                    ...newdata,
                    title: e.target.value
                })} />
                <input placeholder='ngày đăng bắt đầu từ' onChange={e => setNewdata({
                    ...newdata,
                    createdDateFrom: e.target.value
                })} />
                <input placeholder='ngày đăng đến ngày' onChange={e => setNewdata({
                    ...newdata,
                    createdDateTo: e.target.value
                })} />
            </div>
            <button onClick={Callfilter}>tìm kiếm nội dung</button>
        </div>
        <div className='Adminlist'>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nội dung bài viết</th>
                        <th>Tác giả</th>
                        <th>Ngày đăng</th>
                        <th>Sủa xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newProduct.map(item => {
                           return(
                            <List 
                                key={item.id}
                                id={item.id}
                                title = {item.title}
                                fullName = {item.author.fullName}
                                createdDate = {item.createdDate}
                                avatar = {item.author.avatarUrl}
                            />
                           )
                        })
                    }                  
                </tbody>
            </table>
        </div>
        <h3 className='pagination_nanana'>
            <PagingAdmin onPageClick={handlePageChange} page={page + 1} totalPage={totalPages} />
        </h3>
    </>
  )
  }