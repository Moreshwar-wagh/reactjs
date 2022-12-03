import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productsActions'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const ProductListing = () => {
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing