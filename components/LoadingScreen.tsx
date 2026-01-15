"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f14] text-white overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] via-[#0e1625] to-[#0b0f14] opacity-90" />

            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center gap-8"
            >
                {/* Logo Wrapper with Glow */}
                <div className="relative group">
                    {/* Outer Glow */}
                    <motion.div
                        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl"
                    />
                    {/* Inner Glow */}
                    <div className="absolute -inset-1 bg-cyan-400/10 rounded-full blur-md" />

                    <Image
                        src="/logo.png"
                        alt="Veldora Cloud"
                        width={180}
                        height={180}
                        className="relative"
                        priority
                    />
                </div>

                {/* Loading Indicator */}
                <div className="flex flex-col items-center gap-4">
                    {/* Custom Spinner */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="relative w-12 h-12"
                    >
                        <div className="absolute w-full h-full border-2 border-transparent border-t-blue-500 border-r-cyan-400 rounded-full" />
                        <div className="absolute w-full h-full border-2 border-transparent border-b-blue-900/30 border-l-cyan-900/30 rounded-full opacity-30" />
                    </motion.div>

                    {/* Status Text */}
                    <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gray-400 text-sm font-medium tracking-wide"
                    >
                        Initializing cloud environment...
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
}
