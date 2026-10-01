"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { INVENTORY } from '@/data/inventory';
import { RealisticMonitor } from './RealisticMonitor';
import { RealisticLamp } from './RealisticLamp';
import { RealisticChair } from './RealisticChair';
import { RealisticPlant } from './RealisticPlant';

export const StageDiorama = () => {
    const { desk, chair, monitors, hasPlant, hasLamp, currentTotal } = useAppContext();
    const selectedDeskData = INVENTORY.desks.find(d => d.id === desk);
    const deskColor = selectedDeskData?.color || 'bg-[#8B5A2B]';
    const deskShadow = desk === 'd1' ? 'bg-[#5c3c1c]' : 'bg-slate-950';
    const deskEdge = desk === 'd1' ? 'bg-[#a06832]' : 'bg-slate-700';

    return (
        <div className="relative w-full max-w-4xl h-112.5 mx-auto flex items-end justify-center pb-20 z-0 mt-8 lg:mt-0">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                key={currentTotal}
                className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 z-40"
            >
                <span className="text-sm font-semibold text-slate-500">Monthly Total:</span>
                <span className="text-xl font-black text-emerald-600">${currentTotal}</span>
            </motion.div>

            <div className="absolute bottom-8 w-[80%] max-w-150 h-32 bg-emerald-50/50 rounded-[100%] blur-xl pointer-events-none" />
            <div className="absolute bottom-10 w-[90%] max-w-175 h-16 border-b-2 border-slate-200 rounded-[100%] shadow-[0_20px_40px_rgba(0,0,0,0.1)] pointer-events-none bg-linear-to-brom-transparent to-white" />

            <div className="relative w-125 h-75 flex flex-col items-center justify-end">
                <div className="relative w-full h-32 z-20 flex justify-center items-end px-12 -mb-3">
                    <AnimatePresence>
                        {hasPlant && <RealisticPlant key="plant" />}

                        <div key="monitors-container" className="flex gap-4 items-end mb-3.5 z-20 relative">
                            {Array.from({ length: monitors }).map((_, i) => (
                                <RealisticMonitor key={`mon-${i}`} index={i} />
                            ))}
                        </div>

                        {hasLamp && <RealisticLamp key="lamp" />}

                        <div key="keyboard-mouse" className="absolute bottom-0.5 flex items-center gap-4 z-30 drop-shadow-sm opacity-80">
                            <div className="w-25 h-6.25 bg-slate-200 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.2)] border-b-2 border-slate-300 flex items-center justify-center p-1 transform rotate-x-12 perspective-1000">
                                <div className="w-full h-full border border-slate-300/50 flex flex-wrap gap-px p-px overflow-hidden opacity-50">
                                    {Array.from({ length: 40 }).map((_, i) => <div key={i} className="w-2 h-2 bg-slate-300 rounded-[1px]"></div>)}
                                </div>
                            </div>
                            <div className="w-5 h-7.5 bg-slate-200 rounded-[40%] shadow-[0_2px_4px_rgba(0,0,0,0.2)] border-b border-slate-300 flex justify-center pt-1">
                                <div className="w-px1.5 bg-slate-300"></div>
                            </div>
                        </div>
                    </AnimatePresence>
                </div>

                <div className="w-full z-10 relative">
                    <div className={`w-full h-6 ${deskColor} rounded-t-sm shadow-[0_-5px_15px_rgba(0,0,0,0.1)] relative z-20 transition-colors duration-500 overflow-hidden`}>
                        <div className={`absolute top-0 left-0 w-full h-1 ${deskEdge} opacity-50`}></div>
                    </div>
                    <div className={`w-full h-4 ${deskShadow} rounded-b-sm relative z-20 transition-colors duration-500 flex items-start`}>
                        <div className="w-full h-1 bg-black/20"></div>
                    </div>

                    <div className="w-[85%] mx-auto flex justify-between relative z-10">
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-40 ${deskShadow} transition-colors duration-500 flex border-r border-black/20`}>
                                <div className={`w-6 h-full ${deskColor} transition-colors duration-500`}></div>
                            </div>
                            <div className="w-12 h-2 bg-slate-800 rounded-t-sm -mt-0.5 shadow-lg"></div>
                        </div>

                        <AnimatePresence>
                            {desk === 'd1' && (
                                <motion.div
                                    key="desk-drawers"
                                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    className="w-32 h-36 bg-[#6b4421] rounded-b-sm flex flex-col shadow-[inset_10px_0_20px_rgba(0,0,0,0.3)] overflow-hidden absolute left-[15%]"
                                >
                                    <div className="h-1/2 border-b-2 border-black/30 bg-[#7a4e26] flex items-center justify-center group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent"></div>
                                        <div className="w-10 h-2 bg-[#3d2713] rounded-full shadow-inner z-10" />
                                    </div>
                                    <div className="h-1/2 bg-[#7a4e26] flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent"></div>
                                        <div className="w-10 h-2 bg-[#3d2713] rounded-full shadow-inner z-10" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-40 ${deskShadow} transition-colors duration-500 flex border-l border-white/5`}>
                                <div className={`w-6 h-full ${deskColor} transition-colors duration-500`}></div>
                            </div>
                            <div className="w-12 h-2 bg-slate-800 rounded-t-sm -mt-0.5 shadow-lg"></div>
                        </div>
                    </div>
                </div>

                <RealisticChair type={chair} />
            </div>
        </div>
    );
};