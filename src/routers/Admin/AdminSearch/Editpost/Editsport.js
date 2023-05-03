import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../../../components/Navbar'
import './Edistport.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'
import Upimg from './Upimg'

export const Editsport = () => {

    const [title, setitle] = useState('')
    const [img, setimg] = useState('')
    const [content, setcontent] = useState('')

    const editorRef = useRef(null)
    const navigation = useNavigate()
    
    const location = useLocation()
    console.log(location.state.EditID)

    useEffect(() =>{
        axios.get(`http://contabo.foxcode.site:8085/api/v1/admin/articles/${location.state.EditID}`)
        .then(response => {
            alert('lay bai viet thanh cong')
            console.log(response.data)
            setitle(response.data.title)
            setimg(response.data.coverImageUrl)
            setcontent(response.data.content)
        })
        .catch(error => {
            alert('co van de roi xem lai di')
        })
    },[])


    const getconfig = () => {
        return {
          headers: {
            token: localStorage.getItem('token')
          }
        }
    }

    const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
          let newdata = {
              title: title,
              content: editorRef.current.getContent(),
              coverImageUrl: img
          }
          axios.put(`http://contabo.foxcode.site:8085/api/v1/admin/articles/${location.state.EditID}`,newdata,getconfig())
          .then(response => {
              alert('bạn đã sửa bài viết thành công')
              navigation('/Admin')
          })
          .catch(err => {
              alert('đã có lỗi xảy ra rồi')
          })
        }}

  return (
        <div className='Father-product'>
            <Navbar />
            <div className='EditProduct'>
                <div className='header-edit'><h1>Sửa nội dung bài viết ở đây</h1></div>
                <div className='handle-text'>
                    <div>
                        <span>Tiêu đề bài viết gốc :</span><input className='Editinput' type='text' placeholder='noi dung bai viet goc' value={title}
                            onChange={e => setitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Url ảnh gốc :</span><input className='Editinput' type='text' placeholder='url cua anh goc' value={img}
                            onChange={e => setimg(e.target.value)}
                        />
                    </div>
                    <div><h5>lấy ảnh mới ở đây</h5></div>
                    <Upimg />           
                </div>
                <div>
                    <h5>Nội dung bài viết cũ</h5><br></br>
                    <Editor 
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={content}
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <button onClick={log}>Sửa bài viết</button>
                </div>
            </div>
        </div>
  )
}
