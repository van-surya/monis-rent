"use client";
import { motion } from 'framer-motion';

export const RealisticMonitor = ({ index }: { index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", bounce: 0.4, delay: index * 0.1 }}
        className="relative flex flex-col items-center justify-end h-full drop-shadow-xl"
    >
        <div className="w-30 h-20 bg-[#1a1a1a] rounded-lg border-2 border-[#2a2a2a] p-1.5 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_5px_15px_rgba(0,0,0,0.5)] relative flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-[#0f172a] overflow-hidden relative rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                <div className="absolute top-1 left-1 right-1 h-2 bg-slate-800/50 rounded-sm"></div>
                <div className="absolute top-4 left-1 w-1/3 h-full bg-slate-800/30 rounded-sm"></div>
                <div className="absolute inset-0 bg-blue-500/10 blur-[10px]"></div>
                <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] bg-linear-to-br from-white/10 to-transparent rotate-12 pointer-events-none"></div>
            </div>
            <div className="absolute bottom-0.5-4 h-0.5 bg-[#333] rounded-full"></div>
        </div>
        <div className="w-3 h-8 bg-linear-to-rrom-[#222] via-[#444] to-[#222] border-x border-[#111]"></div>
        <div className="w-15 h-2 bg-linear-to-b from-[#333] to-[#111] rounded-t-sm shadow-[0_4px_6px_rgba(0,0,0,0.3)] border-t border-[#444]"></div>
    </motion.div>
);