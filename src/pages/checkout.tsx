import React, { useState, useContext } from "react"; // to access cat data
import { CartContext } from "@/components/CartContext";
import styles from "@/styles/Checkout.module.css";
import Link from "next/link";

export default function Checkout(){
    const {state, dispatch} = useContext(CartContext);

        const [name, setName] = useState('');
        const [address, setAddress] = useState('');
        const [cardNumber, setCardNumber] = useState('');
        const [expiryDate, setExpiryDate] = useState('');
        const [cvv, setCvv] = useState('');

const totalPrice = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;},0);

        const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            // Gather the order data (we already have it in state!)
            const orderData ={
                name,
                address,
                cardNumber,
                cvv,
                items: state.items,
                total: totalPrice
            }

            console.log('Order submitted:', orderData );
             alert('order submitted successfullly!(Simulated)');

             dispatch({type:'CLEAR_CART'});
             // Redirect to an order confirmation page (optional - we'll implement this later)
  // router.push('/order-confirmation');
        }
    return(
    <div className={styles.container}>
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
                <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                    <h2>Checkout Information </h2>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} 
                        onChange={(e) => setName(e.target.value)}
                            required 
                            />                        
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea 
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value) }
                        />
                    </div>
                    <div>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value )}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV:</label>
                        <input 
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        />
                    </div>
                    <button type='submit' className={styles.checkoutButton}>Complete Order </button>
                </form>
            </div>
        )}
    </div>)
}