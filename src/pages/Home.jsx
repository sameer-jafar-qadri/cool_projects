
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Utility App</h1>
            <p className="mb-6 text-center text-lg max-w-md">
                Click the button below to go to the Random Number Generator.
            </p>
            <button
                onClick={() => navigate("/random")}
                className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
            >
                Go to Random Number Generator
            </button>
        </div>
    );
}
