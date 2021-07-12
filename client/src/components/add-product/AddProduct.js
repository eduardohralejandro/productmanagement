import React, { useState } from 'react';

import {useMutation, gql} from '@apollo/client';

import {GET_PRODUCTS } from '../get-products/GetProducts';
import './addproduct.css'

export const CREATE_PRODUCT = gql`
  mutation 
    createProduct ($product: String, $price: String , $description: String) {
      createProduct(product: $product, price: $price , description: $description) {
        id price product
      }
    }  
`

const AddProduct = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  
  const [createProduct, {error}] = useMutation(CREATE_PRODUCT);

  const addNewProduct = (e) => {
    e.preventDefault();
    createProduct({
      variables: {
        product,
        description,
        price,
      },
      refetchQueries: [{ query: GET_PRODUCTS }]
    });
  }

return (
  <div className='outer-div'>
    <form  className='form-add-product' onSubmit={(e) => addNewProduct(e)} >
      <input placeholder='product' onChange={(e) => setProduct(e.target.value)}  />
      <input placeholder='description' onChange={(e) => setDescription(e.target.value)}  />
      <input placeholder='price' onChange={(e) =>  setPrice(e.target.value)}  />
      <button className='btn-add'>Add</button>
    </form>
  </div>
)
}


export default AddProduct;