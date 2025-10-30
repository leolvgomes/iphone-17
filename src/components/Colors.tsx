import { useState } from 'react';
import blue from '/img/iphone-blue.jpg'
import silver from '/img/iphone-silver.jpg'
import orange from '/img/iphone-orange.jpg'

function Colors() {
    const colors = [
        { id: 'blue', name: 'Blue Titanium', image: blue, colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Natural Titanium', image: silver, colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Orange Titanium', image: orange, colorClass: 'bg-orange-500' }
    ];

    const models = [
        { name: 'Pro', screen: '6.3-inch display²', storage: '128GB, 256GB or 512GB', battery: '29h of video', weight: '199g' },
        { name: 'Pro Max', screen: '6.9-inch display²', storage: '256GB, 512GB or 1TB', battery: '33h of video', weight: '221g' }
    ];

    const [selectedColor, setSelectedColor] = useState('blue');

    const selected = colors.find(color => color.id === selectedColor) ?? colors[0];

    return (
        <section className="bg-black py-20 px-8" id="colors">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Choose your color</h2>
                    <p className="text-xl text-gray-400">Four Beautiful Titanium Finishes</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center right-[102px] bottom-1 min-h-[500px]">
                            <img src={selected.image} alt={selected.name} className="max-w-full max-h-[600px] mx-auto"></img>
                            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40"></div>
                        </div>

                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold">{selected.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    {colors.map(color => (
                        <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className={`relative transition-all duration-300 cursor-pointer hover:scale-105`}
                        >
                            <div className={`w-16 h-16 rounded-full ring-3 ${color.colorClass} ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white' : 'ring-gray-600'}`}></div>
                            {selectedColor === color.id && (
                                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white mb-2" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 mt-20 md:grid-cols-2" id="models">
                    {models.map((model, index) => (
                        <div key={index} className="bg-linear-to-br from-zinc-900 to-transparent rounded-3xl p-8 border border-zinc-800">
                            <div className="text-4xl mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg></div>
                            <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                            <p className="text-gray-400 mb-4">{model.screen}</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>{model.storage}</li>
                                <li>{model.battery}</li>
                                <li>{model.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 mb-8 shadow-md shadow-blue-500/50 cursor-pointer">From $1099</button>
                    <p className="text-gray-400">or $45.79/month for 24 months</p>
                </div>

            </div>
        </section>
    )
}

export default Colors