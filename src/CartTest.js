// import React, {useState, useEffect} from "react";

// export const CartTest = () => {
  
//   let [cart, setCart] = useState([])
//   console.log(cart)
//   let localCart = localStorage.getItem("cart");
  
//   const addItem = (item)  =>   {
//     let cartCopy = [...cart];
    
//     let {ID} = item;
    
//     let existingItem = cartCopy.find(cartItem => cartItem.ID === ID);
    
//     if (existingItem) {
//         existingItem.quantity += item.quantity 
//     } else { 
//       cartCopy.push(item)
//     }
    
//     setCart(cartCopy)
    
//     let stringCart = JSON.stringify(cartCopy);
//     localStorage.setItem("cart", stringCart)
//   }

//   const updateItem = (itemID, amount) => {
//     let cartCopy = [...cart]
      
//       let existentItem = cartCopy.find(item => item.ID === itemID);
      
//       if (!existentItem) return
      
//       existentItem.quantity += amount;
//       if (existentItem.quantity <= 0) {
//         cartCopy = cartCopy.filter(item => item.ID !== itemID)
//       }
      
//       setCart(cartCopy);
      
//       let cartString = JSON.stringify(cartCopy);
//       localStorage.setItem('cart', cartString);
//   }
//   const removeItem = (itemID) => {
//       let cartCopy = [...cart]
//       cartCopy = cartCopy.filter(item => item.ID !== itemID);
//       setCart(cartCopy);
      
//       let cartString = JSON.stringify(cartCopy)
//       localStorage.setItem('cart', cartString)
//   }
  
//   useEffect(() => {
//     localCart = JSON.parse(localCart);
//     if (localCart) setCart(localCart)
    
//   }, []) 


 
  

  
//   return (
//   <>
//   <div>
//     this is a test
//     {cart.map((item) => (
//       <div>
//      <button onClick={() => removeItem(item)} className="remove">
//                 -
//               </button>
//               <button onClick={() => addItem(item)} className="add">
//                 +
//               </button>
//               <button onClick={() => updateItem(item)} className="update">
//                 Update
//               </button>
//               </div>))}
//   </div>
//   </>
//     )
// }

// export default CartTest;