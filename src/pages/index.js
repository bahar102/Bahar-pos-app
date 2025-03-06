import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>
      <header>
        <h1>My POS</h1>
        {/* Add logo or navigation links here later */}
      </header>
      <main className={styles.main}>
        <section className={styles.product-list}>
          {/* Products will go here */}
          <div className={styles.product}>Product 1</div>
          <div className={styles.product}>Product 2</div>
          <div className={styles.product}>Product 3</div>
        </section>
        <aside className={styles.cart}>
          <h2>Cart</h2>
          <p>Cart is empty.</p>
        </aside>
      </main>
      <footer>
        <p>&copy; 2023 My POS</p>
      </footer>
    </div>
  );
}