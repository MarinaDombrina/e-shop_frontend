import React, { useEffect, useState } from 'react'
import { Container, Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../http/productAPI';

const Product = () => {

  const[product, setProduct] = useState({})
  const {id} = useParams()
  useEffect(() => {
    fetchProduct(id).then(data => setProduct(data))
  }, [])

  return (
    <Container className='mt-5 Product'>
      <div style={{
        display: 'flex',
      }}>
        <div className='d-flex flex-column'>
          <Image width={300} height={300} src={'https://imgholder.ru/300x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'}/>
          <span style={{fontSize: '3em'}}>{product.name}</span>
          <span className='text-black-50'>{product.category}</span>
          <span style={{ marginBottom: '.25em', fontSize: '2em'}}>{`Цена: ${product.price}р`}</span>
          <Button>Добавить в корзину</Button>
        </div>
        <div style={{margin: '2em', marginRight: '20em', fontSize:'1.1em'}}>
          {product.description}
        </div>
      </div>
    </Container>
  )
}

export default Product;
