import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString(),
    stats: {
        users: 105,
        active: 14
    }
  };

  return NextResponse.json(data);
}
