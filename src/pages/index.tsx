import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'; // or '@/components/ProductList';
import Cart from '@/components/Cart'

export default function Home() {
  const dummyProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My POS</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.productList}>
          <ProductList products={dummyProducts} />
        </section>
        <aside className={styles.cart}>
        <Cart />
        </aside>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 My POS</p>
      </footer>
    </div>
  );
}