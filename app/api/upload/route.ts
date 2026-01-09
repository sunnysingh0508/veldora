import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import File from '@/models/File';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
        }

        // Connect to DB
        await connectDB();

        // 1. Upload to Telegram
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        if (!BOT_TOKEN || !CHAT_ID) {
            return NextResponse.json({ success: false, message: 'Server misconfigured (Telegram)' }, { status: 500 });
        }

        const telegramFormData = new FormData();
        telegramFormData.append('chat_id', CHAT_ID);
        telegramFormData.append('document', file);

        const telegramResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
            method: 'POST',
            body: telegramFormData,
        });

        const telegramData = await telegramResponse.json();

        if (!telegramData.ok) {
            console.error('Telegram Error:', telegramData);
            return NextResponse.json({ success: false, message: 'Failed to upload to storage provider' }, { status: 502 });
        }

        // 2. Save Metadata to MongoDB
        const fileId = telegramData.result.document.file_id;

        // Create new file document
        const newFile = await File.create({
            name: file.name,
            size: file.size,
            mimeType: file.type,
            telegramFileId: fileId,
            owner: 'anonymous',
        });

        return NextResponse.json({
            success: true,
            message: 'File uploaded and saved successfully',
            file: newFile,
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
