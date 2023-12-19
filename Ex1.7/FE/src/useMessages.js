import { useState, useEffect } from 'react';

export const useMessages = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMessages = async (forum) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:6000/messages/${forum}`);
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Unable to read messages for ${forum}: ${text}`);
            }
            const body = await response.json();
            setData(body);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchMessages };
};
