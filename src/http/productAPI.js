import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category/add', {category})
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product/add', product)
    return data
}

export const fetchProducts = async (categoryId) => {
    const {data} = await $host.get('api/product', {params: {
        categoryId
    }})
    return data
}

export const fetchProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    console.log(data);
    return data
}


