import {products} from '../../../lib/products';

export default async function ProductPage({params}:{params:{id:string}}){
const product=products.find(p=>p.id===params.id);
if(!product) return <main className="p-8">Product not found.</main>;
return (
<main className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
<div className="h-[550px] rounded-2xl bg-neutral-900 flex items-center justify-center text-gray-500">
Product Image
</div>

<div>
<h1 className="text-5xl font-bold">{product.name}</h1>
<p className="text-2xl mt-4">₦{product.price.toLocaleString()}</p>

<div className="mt-8">
<p className="mb-3">Select Size</p>
<div className="flex gap-2">
{["S","M","L","XL","XXL"].map(s=><button key={s} className="border px-4 py-2">{s}</button>)}
</div>
</div>

<div className="mt-8">
<p className="mb-3">Quantity</p>
<input type="number" min="1" defaultValue="1" className="bg-black border p-3 w-24"/>
</div>

<div className="flex gap-4 mt-10">
<button className="border px-8 py-4">Add to Cart</button>
<button className="border px-8 py-4">♡ Wishlist</button>
</div>

<p className="mt-10 text-gray-400">
Premium NXT apparel designed for everyday confidence and limited-edition drops.
</p>

</div>
</main>
)}
