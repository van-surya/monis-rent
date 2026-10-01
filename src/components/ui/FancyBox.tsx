"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FancyBoxProps {
    children: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    className?: string;
}

export const FancyBox: React.FC<FancyBoxProps> = ({ children, onClick, active = false, className = "" }) => (
    <motion.div
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`
    relative rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300
    shadow-sm border-2
    ${active
                ? 'border-emerald-500 bg-emerald-50 shadow-emerald-500/20'
                : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md'}
    ${className}
`}
    >
        {active && (
            <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="absolute top-2 right-2 text-emerald-500 bg-white rounded-full"
            >
                <CheckCircle2 size={18} className="fill-emerald-100" />
            </motion.div>
        )}
        {children}
    </motion.div>
);