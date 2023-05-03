import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import './Gotoarticle.css'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import { Comment } from '../Comment/Comment'

export const Gotoarticle = () => {
    const [dataContent, setdataContent] = useState({})
    const [author, setauthor] = useState({})

    const usePapa = useParams()
    console.log(usePapa.id)
    // const localtion = useLocation()
    // const id = localtion.state.id
    // console.log(id)
    useEffect(() => {
        axios.get(`http://contabo.foxcode.site:8085/api/v1/admin/articles/${usePapa.id}`)
        .then((response) =>{
            console.log(response.data)
            console.log(response.data.author.avatarUrl)
            const newdata = response.data
            setdataContent(newdata)
            setauthor(response.data.author)
        })
        .catch(error => {
            alert('da co loi xay ra')
        })
    },[])

  return (
    <>
        <Navbar />
        <div className='Gotoarticle'>
            <h3>
                {dataContent.title}
            </h3>
            <div className='Gotoarticleuser'>
                <div>
                    <img src={author.avatarUrl} />
                </div>
                <h6>{author.username}-{author.fullName}</h6>
            </div>
            <div className='img-goto'>
                <img src={dataContent.coverImageUrl} />
            </div>
            <div>
                <p dangerouslySetInnerHTML={{__html: dataContent.content}}></p>
            </div>
        </div>
        <Comment ArticleID = {usePapa.id} />
    </>
  )
}

