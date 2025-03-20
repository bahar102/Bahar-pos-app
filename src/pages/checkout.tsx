import { useContext } from "react"; // to access cat data
import { CartContext } from "@/components/CartContext";
import styles from "@/styles/Checkout.module.css";
import Link from "next/link";

export default function Checkout(){
    const {state} = useContext(CartContext);

    const totalPrice = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;},0);


    return(<div className={styles.container}>
        <h1>Checkout</h1>
        <Link href="/">
        <button className={styles.backButton}>Back</button>
        </Link>

        {state.items.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <div>
                <h2>Cart Items:</h2>
                <ul>
                    {state.items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} * {item.quantity}
                            </li>                        
                    ))}
                </ul>
                <p>Total : ${totalPrice.toFixed(2)}</p>

                {/* check out form will go here later } */}
                <form className={styles.checkoutForm}>
                    <h2>Checkout Information </h2>
                    <button type='button' className={styles.checkoutButton}>Complete </button>
                </form>
            </div>
        )}
    </div>)
}