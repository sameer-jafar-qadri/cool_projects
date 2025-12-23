export default function ResultDisplay({ result }) {
    if (result === null) return null;

    return (
        <p className="mt-6 text-center text-4xl font-extrabold text-purple-700 animate-pulse">
            {result}
        </p>
    );
}
