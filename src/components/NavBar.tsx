function NavBar(){

    return(
        <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
                <img src="../../public/img/logo.png" alt="logo" className="max-w-5"/>

                <a href="#design" className="text-gray-300 hover:text-white transition-all duration-300">Design</a>
                <a href="#performance" className="text-gray-300 hover:text-white transition-all duration-300">Performance</a>
                <a href="#camera" className="text-gray-300 hover:text-white transition-all duration-300">Camera</a>
                <a href="#colors" className="text-gray-300 hover:text-white transition-all duration-300">Colors</a>
                <a href="#models" className="text-gray-300 hover:text-white transition-all duration-300">Models</a>
                <a href="#footer" className="text-gray-300 hover:text-white transition-all duration-300">About</a>

                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all duration-300 cursor-pointer">Buy</button>

                <a href="#" className="text-gray-300 hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                </a>
            </div>
        </nav>
    )
}

export default NavBar