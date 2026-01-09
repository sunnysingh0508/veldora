'use client';

import { useEffect, useState } from 'react';

interface DashboardData {
    message: string;
    timestamp: string;
    stats: {
        users: number;
        active: number;
    };
}

export default function Dashboard() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/data')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ padding: '2rem' }}>Loading dashboard...</div>;

    return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
            <h1>Dashboard</h1>
            <p>Welcome to the Veldora Cloud Dashboard.</p>

            {data && (
                <div style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    background: '#f9f9f9',
                    color: '#333'
                }}>
                    <h2>Backend Data</h2>
                    <p><strong>Message:</strong> {data.message}</p>
                    <p><strong>Timestamp:</strong> {data.timestamp}</p>
                    <p><strong>Users:</strong> {data.stats.users}</p>
                    <p><strong>Active:</strong> {data.stats.active}</p>
                </div>
            )}
        </div>
    );
}
