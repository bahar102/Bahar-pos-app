
import Product from "./Product"

/*interface ProductListProps: Defines the type for the ProductList component's props. It expects a products prop, which is an array of objects, where each object has the same structure as the product object in ProductProps. */

interface ProductListProps{
    products:{
        id: number;
        name: string;
        price: number;
    }[]; // Arrayof product objects
}

/**{ products }: ProductListProps: Specifies the type of the props and destructures the products array.
products.map(...): Iterates over the products array and renders a Product component for each item.
key={product.id}: The key prop is essential when rendering lists in React. It helps React identify which items have changed, been added, or been removed, making updates more efficient. The key should be a unique identifier for each item (in this case, the product's ID). */
function ProductList({products}: ProductListProps){
    return(
        <div>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;