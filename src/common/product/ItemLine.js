import React from 'react'
import anh5 from './anh5.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import { ItemNew } from './ItemNew'
import './Itemline.css'
import { useNavigate } from 'react-router-dom'

const ItemLine = ({tittle, content, coverImageUrl, id}) => {
  const navigate = useNavigate()

  const Gotoarticle = () => {
      //   navigate('Gotoarticle',{
      //     state: {
      //       id: id
      //   }
      // })
      navigate(`/Gotoarticle/${id}`)
  }

  return (
    <div className='t-card'>
        <div className='t-img'>
            <img src={coverImageUrl}></img>
        </div>
        <div className='content-card'>
          <h4 onClick={Gotoarticle}>{tittle}</h4>
          <p dangerouslySetInnerHTML={{__html: content}}></p>
          {/* <p>{content}</p> */}
        </div>
    </div>
  )
}
export default ItemLine