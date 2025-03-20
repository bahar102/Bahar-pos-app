import styles from  '../styles/Home.module.css'
// 1-step3 -1 
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Link from 'next/link';

/*
this defines the type of the props that the Product component will 
receive. It specifies that the product prop must be an object 
with id (number), name (string), and price (number) properties.
*/
interface ProductProps{
    product:{
        id: number;
        name: string;
        price: number;
    }
}
function Product ({product}: ProductProps){
//START  1-step3 - 2 
    const {dispatch} = useContext(CartContext);
    //END  1-step3 - 2 
    return(
        <div className={styles.product}>
            <Link href={`/products/${product.id}`}>
          <h3>{product.name}</h3></Link>
          <p>${product.price}</p>
          <Link href={`/products/${product.id}`}>
          <button className={styles.detailsButton}>Details</button>
          </Link>
          <button className={styles.addToCartButton}
          onClick={() =>{
            dispatch({
                type: 'ADD_ITEM',
                item:{
                    id: product.id,
                    name: product.name,
                    price:product.price,
                    quantity:1 // Start with a quantity of 1 
                }
            })
          }}
          >Add to Cart</button>
        </div>
    )
}

export default Product