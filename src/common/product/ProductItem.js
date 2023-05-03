import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ItemNew, ItemNewDrama } from './ItemNew'
import ItemLine from './ItemLine'
import './productitem.css'
import { NewTime } from './newTime/NewTime'
import axios from 'axios'
import Paging from '../Pagination/paging'

export const ProductItem = () => {
    const [page, setPage] = useState(0)
    const [totalPages, settotalPages] = useState(0)
    const [product, setproduct] = useState([])
    useEffect(() => {
        axios.get(`http://contabo.foxcode.site:8085/api/v1/articles?page=${page}&size=6`)
        .then(response =>{
            const data = response.data
            const newdata = data.content 
            setproduct([...newdata])
            settotalPages(data.totalPages)
            console.log(product)
        })
    }, [page])

    const handlePageChange = (page) => {
        setPage(page - 1)
    }
    return (
        <div>
            <Container>
                <div className='trip'>
                    <h1>Chi tiết các bài viết được cập nhật mời bạn đón đọc</h1>
                    <h5>đây là các nội dung cơ bản cho một sức khỏe để tạo tiền đề cho các bước sau</h5>
                </div>
                <Row>
                    <Col sm={6} md={8} lg={8} xl={8} xs={12}>
                        {
                            product.map(Item => {
                                return (
                                    <ItemLine
                                        key={Item.id}
                                        id={Item.id}
                                        tittle={Item.title}
                                        content={Item.content}
                                        coverImageUrl={Item.coverImageUrl}
                                    />

                                )
                            })
                        }
                    </Col>
                    <Col sm={4} md={4} lg={4} xl={4} xs={4}>
                        {
                            ItemNewDrama.map(Item => {
                                return (
                                    <NewTime
                                        key={Item.id}
                                        tittle={Item.tittle}
                                        content={Item.content}
                                        coverImageUrl={Item.coverImageUrl}
                                    />

                                )
                            })
                        }
                    </Col>

                </Row>
                <h3 className='pagination_nana'>
                    <Paging onPageClick={handlePageChange} page={page + 1} totalPage={totalPages}></Paging>
                </h3>
            </Container>
        </div>
    )
}
