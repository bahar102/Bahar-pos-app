import styles from '../styles/Home.module.css'; // Or  '@/styles/Home.module.css';
import React from 'react'; // Import React

export default function Home() {
  

// Add this useEffect hook
React.useEffect(() => {
  const modal = document.getElementById('productModal');
  const closeModalButton = document.getElementById('closeModalButton');
  const detailButtons = document.querySelectorAll(`.${styles.detailsButton}`);

  detailButtons.forEach(button => {
      button.addEventListener('click', () => {
          modal.style.display = 'block';
      });
  });

  closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  // Prevent clicks inside the modal from closing it
  modal.addEventListener('click', (event) => {
      event.stopPropagation();
  });
}, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My POS</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.productList}>
          <div className={styles.product}>Product 1 <button className={styles.detailsButton}>Details</button></div>
          <div className={styles.product}>Product 2 <button className={styles.detailsButton}>Details</button></div>
          <div className={styles.product}>Product 3 <button className={styles.detailsButton}>Details</button></div>
        </section>
        <aside className={styles.cart}>
          <h2>Cart</h2>
          <p>Cart is empty.</p>
        </aside>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 My POS</p>
      </footer>

      <div id="productModal" className={styles.productModal} style={{ display: 'none', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '2rem', border: '1px solid #ddd' }}>
        <h2>Product Details</h2>
        <p>This is some information about the product.</p>
        <button id="closeModalButton" className={styles.closeModalButton}>Close</button>
      </div>
    </div>
  );
}