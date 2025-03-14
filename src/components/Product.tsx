import styles from  '../styles/Home.module.css'
// 1-step3 -1 
import { useContext } from 'react';
import { CartContext } from './CartContext';

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
/*function Product({ product }: ProductProps): 
This is the component definition.
 The : ProductProps after the parameter list specifies
  that the props passed to this component must conform
   to the ProductProps interface. The { product } is 
   destructuring – we're extracting the product property 
   from the props object.*/ 

   /********************* */
   /*JSX: The rest is standard JSX, rendering the product
    information using the data from the product prop.
     We use the CSS classes from Home.module.css for styling, 
     as before. */
function Product ({product}: ProductProps){
//START  1-step3 - 2 
    const {dispatch} = useContext(CartContext);
    //END  1-step3 - 2 
    return(
        <div className={styles.product}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button className={styles.detailsButton}>Details</button>
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