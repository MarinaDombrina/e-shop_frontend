import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateCategory from '../components/modals/CreateCategory'
import CreateProduct from '../components/modals/CreateProduct'

const Admin = () => {

  const [categoryVisible, setCategoryVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)

  return (
    <Container className='d-flex flex-column'>
      <Button
        onClick={() => setCategoryVisible(true)}
        variant={'outline-dark'}
        className='mt-2'
      >
        Добавить категорию
      </Button>
      <Button
        onClick={() => setProductVisible(true)}
        variant={'outline-dark'} 
        className='mt-2'
      >
        Добавить товар
      </Button>
      <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
    </Container>
  )
}

export default Admin
