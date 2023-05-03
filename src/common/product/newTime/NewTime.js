import React from 'react'
import './NewTime.css'
import {SiChakraui} from 'react-icons/si'

export const NewTime = ({tittle, content, coverImageUrl}) => {
    return (
        <div className='product_product'>
            <h3><SiChakraui />Tin mục nổi bật</h3>
            <div className='timeproduct'>
                <h4>{tittle}</h4>
                <div className='timebottom'>
                    <div className='imgproduct'>
                        <img src={coverImageUrl}></img>
                    </div>
                    <div className='contentproduct'>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
