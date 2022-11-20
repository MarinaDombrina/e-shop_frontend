import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '..'
import CategoryBar from '../components/CategoryBar'
import ProductList from '../components/ProductList'
import { fetchCategories, fetchProducts } from '../http/productAPI'

const Shop = observer(() => {

  const {product} = useContext(Context)

  useEffect(() => {
    fetchCategories().then(data => product.setCategories(data))
    fetchProducts(product.selectedCategory._id).then(data => product.setProducts(data))
  }, [product.selectedCategory])

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={3}>
          <CategoryBar />
        </Col>
        <Col md={9}>
          <ProductList/>
        </Col>
      </Row>
    </Container>
  )
})

export default Shop
