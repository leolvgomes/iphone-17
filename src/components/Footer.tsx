function Footer() {

    const sections = [
        {
            title: 'Buy & Know More',
            links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Acessories', 'Buy Models']
        },
        {
            title: 'Specifications',
            links: ['Technical Characteristics', 'Camera', 'Battery', 'Display']
        },
        {
            title: 'Support',
            links: ['iPhone Support', 'AppleCare+', 'iOS 26', 'Contact']
        },
        {
            title: 'Apple',
            links: ['About', 'Newsroom', 'Privacy', 'Careers']
        }
    ];

    const buttonLinks = ['Privacy Policies', 'Terms of Use', 'Sales']

    return (
        <footer className="bg-zinc-900 border-t border-zinc-800" id="footer">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="hover:text-white cursor-pointer transition-all duration-100">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-zinc-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-300 font-bold">Copyright © 2025 Apple Inc. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-gray-400">
                            {buttonLinks.map((link, index) => (
                                <a href="#" key={index} className="hover:text-white transition-all duration-100">{link}</a>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-6">Site created for educational purposes - ND OnBoarding</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer