
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold">MyWebsite</h1>
                    <p className="text-sm">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
                </div>

                {/* Center Section */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Services</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>

                {/* Right Section */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
