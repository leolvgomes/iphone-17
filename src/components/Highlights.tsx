function Highlights(){

    return(
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Revolutionary Design</h2>
                    <p className="text-xl text-gray-400">Each detail has been carefully considered to create the best experience.</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-zinc-950 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="iphone-titanium" />
                        <h3 className="font-bold mb-2 text-3xl">Titanium Premium</h3>
                        <p className="text-gray-300">Aerospace-grade titanium structure. The strongest and lightest smartphone.</p>
                    </div>

                    <div className="bg-zinc-950 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="ios-26" />
                        <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
                        <p className="text-gray-300">The world's most advanced operating system with integrated AI.</p>
                    </div>
                </div>

                <div className="bg-zinc-950 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">The most powerful chip in a smartphone.</p>
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg" alt="chip-a18"></img>

                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% Faster</li>
                        <li>GPU 25% More Efficient</li>
                        <li>Neural Engine with 16 Cores</li>
                        <li>Hardware-accelerated Ray Tracing</li>
                    </ul>
                </div>

                <div className="text-center" id="camera">
                    <h3 className="text-4xl font-bold mb-10">Advanced Pro Camera System</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-zinc-950 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Quad-pixel Sensor with Automatic Focus</p>
                        </div>

                        <div className="bg-zinc-950 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">120° Field of View with Night Mode</p>
                        </div>

                        <div className="bg-zinc-950 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">5x Optic Zoom with Estabilization</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Highlights