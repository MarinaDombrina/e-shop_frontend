import React, { useState, useEffect, useContext } from 'react'
import ProductItem from '../components/ProductItem'
import { Container, Form, Spinner } from 'react-bootstrap'
import { getBasket } from '../http/userAPI'

import { Context } from '..'

const Basket = () => {
  const { user } = useContext(Context)
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)

  const calculateTotal = () => {
    let sum = 0
    products.forEach((e) => {
      sum += e.price
    })
    return sum
  }

  useEffect(() => {
    getBasket(user.user.username).then(data => {
      setProducts(data)
      
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className='d-flex justify-content-center'>
        <Spinner style={{ width: '3em', height: '3em', margin: '15% auto' }} animation={'border'} />
      </div>
    )
  }

  return (
    <Container>
      <span style={{fontSize: '2em', marginBottom: '2em'}}>{`Сумма: ${calculateTotal()}р`}</span>
      <Form className='d-flex flex-wrap'>
        {products.map(product =>
          <ProductItem key={product._id} product={product} />
        )}
      </Form>
    </Container>
  )
}

export default Basket
