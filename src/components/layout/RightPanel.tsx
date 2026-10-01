"use client";
import { motion } from 'framer-motion';
import { Monitor, Leaf, LampDesk, Check, Plus, Sparkles } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

export const RightPanel = () => {
    const { monitors, cycleMonitors, hasPlant, setHasPlant, hasLamp, setHasLamp } = useAppContext();

    return (
        <div className="lg:absolute right-8 top-12 z-20 w-full lg:w-70 px-4 lg:px-0 flex flex-col gap-4 mt-8 lg:mt-0">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-xl shadow-slate-200/50">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-amber-500" /> Quick Add-ons
                </h3>
                <div className="flex flex-col gap-3">
                    <motion.div
                        whileHover={{ scale: 1.02, x: -4 }} whileTap={{ scale: 0.98 }}
                        className={`rounded-xl p-3 flex items-center justify-between cursor-pointer border-2 transition-all ${monitors > 0 ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 bg-slate-50 hover:border-slate-300'}`}
                        onClick={cycleMonitors}
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                <Monitor size={20} className={monitors > 0 ? "text-emerald-600" : "text-slate-600"} />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-slate-800 block">Monitors ({monitors})</span>
                                <span className="text-xs text-slate-500">Click to cycle</span>
                            </div>
                        </div>
                        {monitors > 0 ? <Check size={18} className="text-emerald-600" /> : <Plus size={18} className="text-slate-400" />}
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, x: -4 }} whileTap={{ scale: 0.98 }}
                        className={`rounded-xl p-3 flex items-center justify-between cursor-pointer border-2 transition-all ${hasPlant ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 bg-slate-50 hover:border-slate-300'}`}
                        onClick={() => setHasPlant(!hasPlant)}
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                <Leaf size={20} className={hasPlant ? "text-emerald-600" : "text-slate-600"} />
                            </div>
                            <span className="text-sm font-bold text-slate-800">Add a Plant</span>
                        </div>
                        {hasPlant ? <Check size={18} className="text-emerald-600" /> : <Plus size={18} className="text-slate-400" />}
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, x: -4 }} whileTap={{ scale: 0.98 }}
                        className={`rounded-xl p-3 flex items-center justify-between cursor-pointer border-2 transition-all ${hasLamp ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 bg-slate-50 hover:border-slate-300'}`}
                        onClick={() => setHasLamp(!hasLamp)}
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                <LampDesk size={20} className={hasLamp ? "text-emerald-600" : "text-slate-600"} />
                            </div>
                            <span className="text-sm font-bold text-slate-800">Desk Lamp</span>
                        </div>
                        {hasLamp ? <Check size={18} className="text-emerald-600" /> : <Plus size={18} className="text-slate-400" />}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};