import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'; // or '@/components/ProductList';
import Cart from '@/components/Cart'
import {useState, useEffect } from 'react';
import { getProducts } from '@/lib/api';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageUrl:string;
}

export default function Home() {
  const [products, setProducts] =useState<Product[]>([]); //State for products
  const [loading, setLoading] = useState(true); //state for loading indicator
  const [error, setError] = useState<string | null>(null); //State for error message

  useEffect(()=>{
    async function fetchData(){
      try{
        const fetchProducts = await getProducts();
        setProducts(fetchProducts);
      }catch(error: any){
        setError(error.message || 'An error occurred');
      } finally{
        setLoading(false)
      }
    }

    fetchData();
  },[]);// Empty dependency array: run only once on mount

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My POS</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.productList}>
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (<p>Error: {error}</p>): (
          <ProductList products={products} />)}
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