"use client";
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export const RealisticPlant = () => (
    <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="absolute left-[8%] bottom-3 flex flex-col items-center z-20 drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]"
    >
        <div className="text-emerald-600 relative z-10 translate-y-4 filter drop-shadow-[0_4px_3px_rgba(16,185,129,0.3)]">
            <Leaf size={64} className="fill-emerald-400 stroke-emerald-700" strokeWidth={1} />
            <Leaf size={48} className="absolute bottom-0 -left-3.75 fill-emerald-500 stroke-emerald-800 -rotate-45" strokeWidth={1} />
            <Leaf size={40} className="absolute bottom-0 -right-2.5 fill-emerald-300 stroke-emerald-600 rotate-45" strokeWidth={1} />
        </div>
        <div className="relative w-14 h-12 bg-linear-to-b from-orange-300 to-orange-500 rounded-b-xl rounded-t-sm shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3),0_5px_5px_rgba(0,0,0,0.4)] z-0 flex flex-col justify-start items-center overflow-hidden">
            <div className="w-[110%] h-3 bg-linear-to-r from-orange-200 via-orange-400 to-orange-600 rounded-sm shadow-sm mb-1"></div>
            <div className="w-[90%] h-2 bg-[#3e2723] rounded-full -mt-0.5"></div>
        </div>
    </motion.div>
);