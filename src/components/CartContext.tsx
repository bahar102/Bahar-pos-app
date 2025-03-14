// -- BY BAHAHR  ---  1- Step 1
//  CartContext will hold the state of the shopping cart 
// (the items added, quantities, total price, etc.). 
// It will also provide functions to modify the cart
//  (add items, remove items, update quantities). 
// Context allows us to share this state across multiple components
//  without having to pass props down through many levels (prop drilling).


import React,{createContext, useReducer, ReactNode, Dispatch, Children} from "react";

//---Types---//

//- Define the shape of a single  item in the cart
interface CartItem{
    id: number;
    name: string;
    price: number;
    quantity: number
}

//Define the ovrall shape of the cart state
interface CartState {
    items: CartItem[];
}

// Define actions that can be performed on the cart 
type CartAction = 
| { type: 'ADD_ITEM' ; item: CartItem}
| {type : 'REMOVE_ITEM'; id:number}
| {type:'UPDATE_QUANTITY'; id:number; quantity:number}
| {type:'CLEAR_CART'}

// --- Context and Initial State --- 
// Create the context.  The `!` tells TypeScript we'll initialize it later.
//CartContext: Creates the React Context. We initialize it with null! because we'll be providing the actual value in the CartProvider.
const CartContext = createContext <{
    state : CartState;
    dispatch: Dispatch<CartAction>
} >(null!);

 // Initial state of the cart ( empty)
 const initialCartState: CartState = {
    items:[]
 }

 // --- Reducer ---

 //- The reducer function handles updates to the cart state
 //cartReducer: This is the reducer function. It's responsible for updating the cart state based on actions. It takes the current state and an action as arguments and returns the new state. It uses a switch statement to handle different action types. Crucially, the reducer must always return a new state object, never modify the existing state directly.
 function cartReducer(state:CartState, action:CartAction): CartState{
    switch (action.type){
        case 'ADD_ITEM':
            //Check if item exit
            const existingItemIndex = state.items.findIndex(item =>item.id === action.item.id )
            if(existingItemIndex !== -1){
                // update quantity
                const newState:CartState = {
                    items: [...state.items]
                }
                newState.items[existingItemIndex].quantity += action.item.quantity
                return newState
            }
            return{
            ...state, // Copy the current state
            items:[...state.items, action.item], // Add the new item
            };
            case 'REMOVE_ITEM':
                return{
                    ...state,
                    items:state.items.filter(item => item.id !== action.id)// Remove item by ID
                };
                case 'UPDATE_QUANTITY':
                    return{
                        ...state,// Copy the current state
                        items: state.items.map(item =>
                            item.id === action.id 
                            ? {...item, quantity:action.quantity} // Update the quantity
                            :item // Keep other items as they are
                        ),
                    };
                    case 'CLEAR_CART':
                        return{
                            ...state,
                            items:[], //Empty the cart
                        };
                        default:
                            return state; // Return the current state if the action is unknown

    }
 }
 // ---- Provider Component ---
 interface CartProviderProps{
    children : ReactNode
 }

 // The provider component makes the cart state and dispatch function available to the rest of the app
//  /CartProvider: This is a component that provides the cart state and the dispatch function to its children. It uses the useReducer hook to manage the state and the reducer.
//useReducer(cartReducer, initialCartState): Initializes the state using initialCartState and provides the cartReducer to handle updates. useReducer returns the current state and a dispatch function.
//<CartContext.Provider value={{ state, dispatch }}>: This makes the state and dispatch available to all components that are descendants of CartProvider.
//export { CartContext, CartProvider }: Exports both the context and the provider so we can use them in other components.
 function CartProvider({ children }: CartProviderProps) {
   const [state, dispatch] = useReducer(cartReducer, initialCartState);
 
   return (
     <CartContext.Provider value={{ state, dispatch }}>
       {children}
     </CartContext.Provider>
   );
 }
export {CartContext, CartProvider}
// -- Next Go to src/pages/_app.tsx: