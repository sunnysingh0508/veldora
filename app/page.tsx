import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 73px)',
      fontFamily: 'system-ui, sans-serif',
      gap: '1rem'
    }}>
      <h1>Veldora Cloud</h1>
      <p>Welcome to your new project.</p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link
          href="/dashboard"
          style={{
            padding: '10px 20px',
            background: '#0070f3',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none'
          }}
        >
          Go to Dashboard
        </Link>
        <Link
          href="/api/data"
          style={{
            padding: '10px 20px',
            border: '1px solid #333',
            color: '#333',
            borderRadius: '5px',
            textDecoration: 'none'
          }}
        >
          Test API
        </Link>
      </div>
    </div>
  );
}
