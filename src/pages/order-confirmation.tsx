import styles from '../styles/orderConfirmation.module.css'
import Link from 'next/link'

export default function OrderConfirmation(){
    return(
        <div className={styles.container}>
            <h1>Order Confirmation</h1>
            <p>Thank you for your order! You order has been placed.</p>
            <Link href="/">
            <button className={styles.backButton}>Back to Products</button>
            </Link>
        </div>
    )
}