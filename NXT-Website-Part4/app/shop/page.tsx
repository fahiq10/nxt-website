import {products} from '../../lib/products';
export default function Shop(){
return <main className="p-8">
<h1 className="text-4xl font-bold mb-8">Shop</h1>
<div className="grid md:grid-cols-3 gap-6">
{products.map(p=>(
<div key={p.id} className="border border-white/10 rounded-xl p-4">
<div className="h-64 bg-neutral-900 rounded flex items-center justify-center">Image</div>
<h2 className="mt-4 text-xl">{p.name}</h2>
<p className="text-gray-400">₦{p.price.toLocaleString()}</p>
<select className="w-full mt-3 bg-black border p-2">
<option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option>
</select>
<button className="w-full mt-4 border border-white py-2">Add to Cart</button>
</div>))}
</div></main>}
