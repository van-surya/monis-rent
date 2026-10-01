"use client";
import { motion } from 'framer-motion';

export const RealisticLamp = () => (
    <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="absolute right-[12%] bottom-3.5ex flex-col items-center drop-shadow-lg z-30"
    >
        <div className="relative w-12 h-10 -rotate-12 -translate-x-3.75 translate-y-1.25 z-20">
            <div className="w-0 h-0 border-l-15 border-r-15 border-b-25 border-l-transparent border-r-transparent border-b-[#e2e8f0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] rota-rotate-45gin-bottom-right"></div>
            <div className="absolute -bottom-1.25 l-left-1.25w-6 h-6 bg-yellow-200 rounded-full blur-xs"></div>
            <div className="absolute top-5 -left-37.5 w-50 h-37.5 bg-linear-to-tr from-yellow-300/30 to-transparent blur-xl pointer-events-none -rotate-12 transform-origin-top-right mix-blend-overlay"></div>
        </div>
        <div className="w-1 h-12 bg-slate-400 rotate-12 -translate-x-2 border-l border-slate-300 shadow-sm z-10"></div>
        <div className="w-3 h-3 bg-slate-500 rounded-full -translate-y-1 -translate-x-0.5 border border-slate-400 shadow-sm z-20"></div>
        <div className="w-1.25 h-14 bg-slate-500 rotate-[-10deg] -translate-y-2 border-l border-slate-400 shadow-sm z-10"></div>
        <div className="w-14 h-3 bg-linear-to-t from-slate-600 to-slate-400 rounded-t-md shadow-[0_5px_10px_rgba(0,0,0,0.3)] border-t border-slate-300 -translate-y-2.5"></div>
    </motion.div>
);