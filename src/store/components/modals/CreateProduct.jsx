import React, { useContext, useState, useEffect } from 'react'
import { createProduct, fetchCategories } from '../../http/productAPI'
import { Form, Modal, Button, Dropdown } from 'react-bootstrap'
import { Context } from '../..'

const CreateProduct = ({show, onHide}) => {

	const {product} = useContext(Context)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchCategories().then(data => product.setCategories(data))
  }, [])

  const addProduct = () => {
    createProduct({name, price, category, description})
    setName('')
    setPrice('')
    setCategory('')
    setDescription('')
    onHide()
  }

  return (
    <Modal
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Добавить новый товар</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={name}
              onChange={e => setName(e.target.value)}
							className='mt-2'
              placeholder='Название товара'
            />
						<Dropdown className='mt-2'>
							<Dropdown.Toggle variant={'outline-dark'}>{category.value || 'Выберите категорию'}</Dropdown.Toggle>
							<Dropdown.Menu>
								{product.categories.map(category => 
									<Dropdown.Item
                    onClick={() => setCategory(category)}
                    key={category._id}
                  >
                    {category.value}
                  </Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
						<Form.Control
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
							className='mt-2'
              placeholder='Цена товара'
							type='number'
            />
						<Form.Control
              value={description}
              onChange={e => setDescription(e.target.value)}
							className='mt-2'
              placeholder='Описание товара'
							as="textarea"
            />
						<hr/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={addProduct}>Добавить</Button>
          <Button variant="danger" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CreateProduct
