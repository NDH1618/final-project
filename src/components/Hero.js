import './hero.css'
import anh10 from './anh10.jpg'
export const Hero = () => {
    return(
        <div className='imgHome'>
           <div>
                <img src={anh10} />
           </div>
           <div className='hero-text'>
                <h1>Blog thư viện của mình</h1>
                <p>Chào mừng bạn đã ghé qua thăm !<br></br>
                    mời bạn cuộn xuống đọc blog để tiến vào kỷ nguyên không gian và tri thức
                 </p>
           </div>
        </div>
        
    )
}