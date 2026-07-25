'use client';

export default function OrderSuccess(){
const order='NXT-'+Math.floor(Math.random()*900000+100000);

return(
<main className="min-h-screen flex items-center justify-center p-8">
<div className="max-w-xl w-full border border-white/10 rounded-2xl p-10 text-center">
<div className="text-6xl">✓</div>

<h1 className="text-4xl font-bold mt-6">
ORDER RECEIVED
</h1>

<p className="mt-4 text-gray-400">
Thank you for shopping with NXT.
Your payment will be verified shortly.
</p>

<div className="border border-white/10 rounded-xl mt-8 p-6">
<p className="text-gray-400">Order Number</p>
<h2 className="text-2xl font-bold">{order}</h2>
</div>

<div className="mt-8 space-y-3">
<a href="/" className="block border border-white py-3 rounded">
Continue Shopping
</a>

<a href="https://wa.me/2349133358306"
target="_blank"
className="block border border-white py-3 rounded">
Contact NXT
</a>
</div>

</div>
</main>
)}
