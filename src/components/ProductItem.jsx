import React from 'react'
import { useNavigate } from "react-router-dom"
import { Card, Col, Image } from 'react-bootstrap'


import { PRODUCT_ROUTE } from '../utils/consts'

const ProductItem = ({product}) => {
  const navigate = useNavigate()

  return (
    <Col style={{flex: '0 0 5%', marginRight: '1em'}} md={3} className='p-2' onClick={() => navigate(`${PRODUCT_ROUTE}/${product._id}`)}>
      <Card
        style={{
          width: '150px',
          cursor: 'pointer',
        }}
        border={'dark'}
        
      >
        <Image style={{display: 'block', height: 'auto', width: '100%'}} src={'https://imgholder.ru/300x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'}/>
        <div className='d-flex flex-column p-2'>
          <span className='text-black-50'>{product.category}</span>
          <span style={{fontSize: '1.5em'}}>{product.name}</span>
          <span>{`Цена: ${product.price}р`}</span>
        </div>

        </Card>
    </Col>
  )
}

export default ProductItem
