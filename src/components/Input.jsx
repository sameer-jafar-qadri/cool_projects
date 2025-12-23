export default function Input({ value, onChange, placeholder }) {
    return (
        <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder={placeholder}
        />
    );
}
