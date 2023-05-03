import React from 'react'
import ReactPlayer from 'react-player'
import anh11 from './anh11.jpg'
import anh12 from './anh12.jpg'
import {FaCcApplePay, FaAppStoreIos} from 'react-icons/fa'
import {MdOutlineAppShortcut} from 'react-icons/md'
import './omicare.css'
export const OmiCare = () => {
  return (
    <div className='omicare'>
        <div className='omicare-top' >
            <h2>Sự thật về sức khỏe của tôi cũng chính là sự thật về sức khỏe của các bạn</h2>
            <div className='om-top'>
                <div className='video'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=Y8HIFRPU6pM'
                    width="340px"
                    height="160px"            
                    />
                </div>
                <div>
                    <p>
                        nghệ thuật sức khỏe chân thật tức là khám phá ra được
                        sự thật về chính mình và vũ trụ vạn hữu, tức là ta không phải
                        đơn giản chỉ là thân thể vật lý này, sự thật phi cấu tạo nhưng 
                        vẫn tồn tại, là ánh sáng và tuệ quang bất tận                
                    </p>
                    <a href=''><FaCcApplePay /></a>
                    <a href=''><FaAppStoreIos /></a>
                    <a href=''><MdOutlineAppShortcut /></a>
                </div>
            </div>
        </div>
        <div className='om-img'>
            <img src={anh12}></img>
        </div>
    </div>
  )
}
