import { useRouter } from "next/router";
import {useState, useEffect} from 'react'
import styles from '../../styles/ProductPage.module.css'

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export default function ProductPage(){
    const router = useRouter();
    const {id} = router.query; //Get the 'id' from the URL

    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProduct() {
          if (!id) return; // Important: Don't fetch if 'id' is not available
    debugger
          try {
            const response = await fetch(`http://localhost:3001/products/${id}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch product: ${response.status}`);
            }
            const data = await response.json();
            setProduct(data);
          } catch (error: any) {
            setError(error.message || 'An error occurred');    
          } finally {
            setLoading(false);
          }
        }
    
        fetchProduct();
      }, [id]); // Re-run the effect when 'id' changes
    
        if(loading){
            return <p>Loading product ... </p>
        }
        if (error) {
            return <p>Error: {error}</p>;
          }
        

        if(!product){
            return <p>Product not found. </p>
        }

        return(
            <div className={styles.container}>
                <h1>{product.name}</h1>
                <img src={product.imageUrl} alt={product.name} className={styles.image} />
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* Add more product details here as needed*/}
            </div>
        );
    
    }
