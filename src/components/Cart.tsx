import React,{useContext} from "react";
import { CartContext } from "./CartContext";
import styles from '../styles/Home.module.css'



function Cart(){
    //We use useContext(CartContext) to access the state from the CartContext.
    const {state} = useContext(CartContext );

    const totalPrice = state.items.reduce((total, item) =>{
     return total + item.price * item.quantity ;
    },0);

    return (
        <div className={styles.cart}>
            <h2>Cart</h2>
            {state.items.length === 0 ?(
                <p>Cart is empty.</p>
            ):(
              <div>
                <ul>
                    {state.items.map(item =>(
                        <li key={item.id}>
                            {item.name} - ${item.price} * {item.quantity}
                        </li>
                    ))}
                </ul>
                <p> Total: ${totalPrice.toFixed(2)}</p>
              </div>
            )}

        </div>
    )
}
export default Cart
