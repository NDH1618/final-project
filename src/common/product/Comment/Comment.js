import React, { useEffect, useRef, useState } from 'react'
import './Comment.css'
import axios from 'axios'
import { CommentItem } from './CommentItem'
import { useNavigate } from 'react-router-dom'

export const Comment = ({ArticleID}) => {

    const [comment, setcomment] = useState([])
    const ref = useRef()
    const navigaton = useNavigate()

    useEffect(() => {
        reloadComment()
    },[])

    const reloadComment = () => {
        axios.get(`http://contabo.foxcode.site:8085/api/v1/comments/${ArticleID}?page=0&size=10`)
        .then(response => {
            console.log(response.data)
            const newcomments = response.data.content
            setcomment([...newcomments])
        })
        .catch(err => {
            alert('ban da lay loi roi')
        })
    }


    const DetailComment = () => {
        let ConfigData = () => {
            return{
                headers : {
                    token : localStorage.getItem('token'),
                }
            }
        }
        const newcomment = {
            content : ref.current.innerText
        }
        axios.post(`http://contabo.foxcode.site:8085/api/v1/comments/${ArticleID}`,newcomment,ConfigData())
        .then(res =>{
            alert('bạn đã gửi bình luận thành công')
            reloadComment()
            ref.current.innerText = ''
        })
        .catch((err) =>{
            alert('bạn cần đăng nhập để bình luận bài viết')
            navigaton('/login')
        })
    }
  return (
    <>
        <div className='comment-header'>
            <h3>Cảm nhận của bạn về bài viết</h3>
            <div className='detail-comment'>
                <div contentEditable='true' placeholder='hãy nêu cảm nhận của bạn' ref={ref}></div>
                <button onClick={DetailComment}>Gửi bình luận</button>
            </div>
            {
                comment.map(item => {
                    return(
                        <CommentItem 
                        avatarUrl = {item.commentBy.avatarUrl}
                        username = {item.commentBy.username}
                        content = {item.content}
                        commentAt = {item.commentAt}                  
                        />
                    )
                })
            }
        </div>
    </>
  )
}
