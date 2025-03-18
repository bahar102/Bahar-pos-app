export async function getProducts(){
    try{
        const response = await fetch('http://localhost:3001/products');
        debugger
        if(!response.ok){
            throw new Error(`Failed to fetch products: ${response.status}`);

        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("Error fetching products", error);
        throw error;
    }
}