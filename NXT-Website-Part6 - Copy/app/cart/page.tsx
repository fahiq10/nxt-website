'use client';
import {useCart} from '../../context/CartContext';

export default function CartPage(){
 const {cart,removeFromCart}=useCart();
 const total=cart.reduce((a:any,b:any)=>a+(b.price||0),0);
 return(
 <main className="max-w-5xl mx-auto p-8">
 <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
 {cart.length===0?<p>Your cart is empty.</p>:cart.map((item:any,i:number)=>(
 <div key={i} className="flex justify-between border-b py-4">
 <div><h2>{item.name}</h2><p>₦{item.price}</p></div>
 <button onClick={()=>removeFromCart(i)}>Remove</button>
 </div>
 ))}
 <h2 className="text-2xl mt-8">Total: ₦{total.toLocaleString()}</h2>
 <a href="/checkout" className="inline-block border px-6 py-3 mt-6">Proceed to Checkout</a>
 </main>);
}
