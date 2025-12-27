import  { useState } from 'react';

const AddMedicine = () => {
    const [formData, setFormData] = useState({
        tabletName: '',
        boxCode: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (message.text) setMessage({ text: '', type: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.tabletName.trim() || !formData.boxCode.trim()) {
            setMessage({ text: 'Please fill in all fields', type: 'error' });
            return;
        }

        setLoading(true);
        setMessage({ text: '', type: '' });

        try {
            const response = await fetch('http://localhost:5000/api/medicine/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ text: 'Medicine added successfully!', type: 'success' });
                setFormData({ tabletName: '', boxCode: '' });
            } else {
                setMessage({ text: data.message || 'Failed to add medicine', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Network error. Please try again.', type: 'error' });
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-medicine-container">
            <div className="add-medicine-card">
                <div className="card-header">
                    <div className="icon-wrapper">
                        <svg className="medicine-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </div>
                    <h1 className="card-title">Add New Medicine</h1>
                    <p className="card-subtitle">Enter medicine details to add to inventory</p>
                </div>

                <div className="medicine-form">
                    <div className="form-group">
                        <label htmlFor="tabletName" className="form-label">
                            Medicine Name
                        </label>
                        <input
                            type="text"
                            id="tabletName"
                            name="tabletName"
                            value={formData.tabletName}
                            onChange={handleChange}
                            placeholder="e.g., Paracetamol"
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="boxCode" className="form-label">
                            Box Code
                        </label>
                        <input
                            type="text"
                            id="boxCode"
                            name="boxCode"
                            value={formData.boxCode}
                            onChange={handleChange}
                            placeholder="e.g., A3"
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    {message.text && (
                        <div className={`message ${message.type}`}>
                            <span className="message-icon">
                                {message.type === 'success' ? '✓' : '⚠'}
                            </span>
                            <span>{message.text}</span>
                        </div>
                    )}

                    <button
                        onClick={handleSubmit}
                        className={`submit-button ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                Adding...
                            </>
                        ) : (
                            <>
                                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Medicine
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddMedicine;