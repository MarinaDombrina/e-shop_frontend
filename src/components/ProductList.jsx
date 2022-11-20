import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { Context } from '..'
import ProductItem from './ProductItem'

const ProductList = observer(() => {
	const {product} = useContext(Context)

  return (
    <Form className='d-flex flex-wrap'>
			{product.products.map(product => 
				<ProductItem key={product._id} product={product}/>
			)}
		</Form>
  )
})

export default ProductList
