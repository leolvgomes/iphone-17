function Intro(){

    const specs = [
        { value: '6.3"', label: 'Super Retina XDR Display', color: 'text-blue-600' },
        { value: 'A18 Pro', label: 'Faster Chip', color: 'text-orange-500' },
        { value: '48MP', label: 'Camera System', color: 'text-blue-600' },
        { value: '29h', label: 'Battery', color: 'text-orange-500' }
    ];

    return(
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 ">iPhone 17 Pro</h1>
                <p className="text-2xl md:text-4xl mb-4 text-gradient font-bold">Titanium. Too light. Too strong. Too Pro</p>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">The most refined design we've ever created. Aerospace-grade titanium. Chip A18 Pro. Revoluctionary Pro camera system.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">Learn more</button>
                <button className="border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer">Buy</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl">
                {specs.map((spec, index) => (
                    <div key={index} className="bg-zinc-950 rounded-2xl p-6 hover:bg-zinc-900 transition-all duration-300 hover:scale-105">
                        <p className={`text-3xl font-bold ${spec.color}`}>{spec.value}</p>
                        <p>{spec.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Intro