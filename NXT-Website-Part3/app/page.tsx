import Hero from "../components/Hero";
export default function Home(){
return (
<main>
<Hero/>
<section className="px-8 py-16">
<h2 className="text-3xl font-bold mb-8">Featured Collection</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{["Signature Tee","Trend Setters Tee","Blessed Long Sleeve","Discipline Tee","Trend Setters Polo"].map((p)=>(
<div key={p} className="border border-white/10 p-4 rounded-xl">
<div className="bg-neutral-900 h-64 rounded mb-4 flex items-center justify-center text-gray-500">Product Image</div>
<h3 className="text-xl">{p}</h3>
<p className="text-gray-400">Premium NXT Collection</p>
<button className="mt-4 border border-white px-4 py-2">View Product</button>
</div>
))}
</div>
</section>
</main>
)}
