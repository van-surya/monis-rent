"use client";
import { motion } from 'framer-motion';

export const RealisticChair = ({ type }: { type: string }) => {
    const isLeather = type === 'c2';
    const color = isLeather ? 'bg-[#3e2723]' : 'bg-[#1e293b]';
    const accent = isLeather ? 'bg-[#4e342e]' : 'bg-[#334155]';

    return (
        <motion.div
            key={type}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute -bottom-3.75 z-40 flex flex-col items-center drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]"
        >
            <div className={`w-20 h-25 ${color} rounded-t-3xl rounded-b-sm border-t-2 border-l-2 border-white/10 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.5)] flex flex-col items-center pt-2 relative z-10`}>
                {!isLeather && (
                    <div className="w-[90%] h-[90%] border border-white/5 rounded-t-2xl flex flex-col gap-1 overflow-hidden opacity-30">
                        {Array.from({ length: 15 }).map((_, i) => <div key={i} className="w-full h-0.5 bg-black"></div>)}
                    </div>
                )}
                {isLeather && (
                    <div className="w-full h-full flex flex-col gap-2 p-2">
                        <div className="w-full flex-1 bg-black/20 rounded-md shadow-inner"></div>
                        <div className="w-full flex-1 bg-black/20 rounded-md shadow-inner"></div>
                        <div className="w-full flex-1 bg-black/20 rounded-md shadow-inner"></div>
                    </div>
                )}
            </div>
            <div className="absolute top-15 w-27.5 flex justify-between z-20 pointer-events-none">
                <div className={`w-3 h-16 ${accent} rounded-full shadow-lg border-t border-white/20 transform -rotate-6`}></div>
                <div className={`w-3 h-16 ${accent} rounded-full shadow-lg border-t border-white/20 transform rotate-6`}></div>
            </div>
            <div className={`w-22.5 h-6.25 ${color} rounded-2xl -mt-4 shadow-[0_10px_15px_rgba(0,0,0,0.5),inset_0_2px_5px_rgba(255,255,255,0.1)] relative z-20`}></div>
            <div className="w-4 h-10 bg-linear-to-r from-slate-400 via-slate-200 to-slate-400 border-x border-slate-500 shadow-inner z-10 relative">
                <div className="absolute top-2 w-full h-0.5 bg-black/20"></div>
                <div className="absolute top-4 w-full h-0.5 bg-black/20"></div>
            </div>
            <div className="relative w-30 h-5 justify-center -mt-2 z-0">
                <div className="absolute top-0 w-8 h-4 bg-slate-700 rounded-t-full shadow-md z-10"></div>
                <div className="absolute top-2 w-25 h-2 bg-slate-800 rounded-full transform -rotate-12 shadow-md">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full border-2 border-slate-700"></div>
                    <div className="absolute -right-2 top-0 w-4 h-4 bg-black rounded-full border-2 border-slate-700"></div>
                </div>
                <div className="absolute top-2 w-25 h-2 bg-slate-800 rounded-full transform rotate-12 shadow-md">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full border-2 border-slate-700"></div>
                    <div className="absolute -right-2 top-0 w-4 h-4 bg-black rounded-full border-2 border-slate-700"></div>
                </div>
                <div className="absolute top-3 w-30 h-2 bg-slate-900 rounded-full shadow-md">
                    <div className="absolute -left-2 top-0 w-5 h-5 bg-black rounded-full border-2 border-slate-700"></div>
                    <div className="absolute -right-2 top-0 w-5 h-5 bg-black rounded-full border-2 border-slate-700"></div>
                </div>
            </div>
        </motion.div>
    );
};