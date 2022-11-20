import { observer } from 'mobx-react-lite'
import React, { useContext, useState }  from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '..'

const CategoryBar = observer(() => {
  
  const {product} = useContext(Context)

  const selectCategory = (category) => {
    if (category._id === product.selectedCategory._id) {
      product.setSelectedCategory({})
    } else {
      product.setSelectedCategory(category)
    }
  }
  
  return (
    <ListGroup>
      {product.categories.map(category => 
        <ListGroup.Item
          style={{cursor: 'pointer'}}
          active={category._id === product.selectedCategory._id}
          onClick={() => selectCategory(category)}
          key={category._id}
        >
          {category.value}
        </ListGroup.Item>
      )}
    </ListGroup>
)})

export default CategoryBar
