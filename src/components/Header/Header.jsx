
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-900 text-gray-300 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo / Branding */}
                <h1 className="text-2xl font-bold">MyWebsite</h1>

                {/* Navigation */}
                <nav className="flex items-center space-x-4">
                    <Link to="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-white transition-colors">
                        About
                    </Link>
                    <Link to="/services" className="hover:text-white transition-colors">
                        Services
                    </Link>

                    {/* Random Number Generator Button */}
                    <Link
                        to="/random"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        Random Number Generator
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
