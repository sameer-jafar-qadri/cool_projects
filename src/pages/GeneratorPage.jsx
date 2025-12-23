import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import ResultDisplay from "../components/ResultDisplay";

export default function GeneratorPage() {
    const [min, setMin] = useState(2);
    const [max, setMax] = useState(50);
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    const generateRandom = () => {
        if (Number(min) > Number(max)) {
            alert("Min should be less than Max!");
            return;
        }
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + Number(min);
        setResult(randomNum);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-purple-400 via-pink-400 to-red-400 p-4">
            <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96 text-gray-800">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
                    🎲 Random Number Generator
                </h1>
                <ResultDisplay result={result} />
                <div className="flex flex-col gap-4 mb-6">
                    <Input value={min} onChange={setMin} placeholder="Min" />
                    <Input value={max} onChange={setMax} placeholder="Max" />
                </div>

                <button
                    onClick={generateRandom}
                    className="w-full py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
                >
                    Generate
                </button>

               

                <button
                    onClick={() => navigate("/")}
                    className="mt-6 w-full py-2 text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                    ← Back to Home
                </button>
            </div>
        </div>
    );
}
