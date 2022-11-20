import React, { useState } from 'react'

import { Form, Modal, Button, Dropdown } from 'react-bootstrap'
import { Context } from '../..'
import { createCategory } from '../../http/productAPI'

const CreateCategory = ({show, onHide}) => {

	const [value, setValue] = useState('')

  const addCategory = () => {
    createCategory(value).then(data => {
      setValue('')
      onHide()
      
    }) 
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
              value={value}
							className='mt-2'
              placeholder='Название категории'
              onChange={e => setValue(e.target.value)}
            />
						<hr/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={addCategory}>Добавить</Button>
          <Button variant="danger" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CreateCategory
