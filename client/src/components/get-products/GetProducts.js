import React from 'react';
import {useQuery, gql} from '@apollo/client' 

import './getproducts.css';
import Product from '../product/Product';
import AddProduct from '../add-product/AddProduct';
import Logo from '../logo/Logo';

export const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      product 
      description
      price
      } 
    }
`

const GetProducts = () => {
  const {error, loading, data} = useQuery(GET_PRODUCTS);

  if(loading) {
    return <h1>loading...</h1>
  }
  return (
    <div>
      <Logo />
      <AddProduct />
      <div className='product-outer'>
        {data.getAllProducts.map((product) => ( 
        <Product 
                key={product.id} 
                description={product.description} 
                product={product.product} 
                price={product.price} />
        ))}
      </div>
    </div>
  )
}


export default GetProducts;