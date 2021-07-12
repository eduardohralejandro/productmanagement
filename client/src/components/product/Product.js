import './product.css';


const Product = ({ product, description, price }) => {
  return (
    <div className='products'>
      <h2 className='element'>{product}</h2>
      <p className='element'>{description}</p>
      <h3 className='element'>{price} €</h3>
    </div>
  )
}


export default Product;