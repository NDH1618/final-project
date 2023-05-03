import React from 'react'
import './CommentItem.css'

export const CommentItem = ({username, avatarUrl, content ,commentAt }) => {
  return (
    <div className='comment-comment'>
        <div className='comment-name'>
            <div className='comment-img'>
                <img src={avatarUrl} />
            </div>
            <div>
                <h6>{username}</h6>
                <p>{commentAt}</p>
            </div>
        </div>
        <p className='content-content'>{content}</p>
    </div>
  )
}
