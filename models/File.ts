import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFile extends Document {
    name: string;
    size: number;
    mimeType: string;
    telegramFileId: string;
    uploadDate: Date;
    owner?: string; // Optional for now until Auth is fully implemented
}

const FileSchema: Schema = new Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    mimeType: { type: String, required: true },
    telegramFileId: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    owner: { type: String }, // Store User ID here later
});

// Check if model exists to prevent overwrite error during hot reload
const File: Model<IFile> = mongoose.models.File || mongoose.model<IFile>('File', FileSchema);

export default File;
