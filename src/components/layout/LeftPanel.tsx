"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { INVENTORY } from '@/data/inventory';
import { FancyBox } from '@/components/ui/FancyBox';

export const LeftPanel = () => {
    const { activeTab, setActiveTab, chair, setChair, desk, setDesk, monitors, cycleMonitors, hasPlant, setHasPlant, hasLamp, setHasLamp } = useAppContext();

    return (
        <div className="lg:absolute left-8 top-12 z-20 w-full lg:w-85 px-4 lg:px-0">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-xl shadow-slate-200/50">
                <div className="flex bg-slate-100 p-1 rounded-xl mb-6 relative">
                    {['Chairs', 'Desks', 'Accessories'].map((tab) => {
                        const tabKey = tab.toLowerCase() as typeof activeTab;
                        const isActive = activeTab === tabKey;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tabKey)}
                                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 relative z-10 ${isActive ? 'text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                {isActive && (
                                    <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                                )}
                                {tab}
                            </button>
                        );
                    })}
                </div>

                <div className="min-h-80">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }} className="grid grid-cols-2 gap-4">
                            {INVENTORY[activeTab].map((item) => {
                                const Icon = item.icon;
                                let isActive = false;
                                if (activeTab === 'chairs') isActive = chair === item.id;
                                if (activeTab === 'desks') isActive = desk === item.id;
                                if (activeTab === 'accessories') {
                                    if (item.id === 'a1') isActive = monitors > 0;
                                    if (item.id === 'a2') isActive = hasPlant;
                                    if (item.id === 'a3') isActive = hasLamp;
                                }

                                return (
                                    <FancyBox
                                        key={item.id}
                                        active={isActive}
                                        onClick={() => {
                                            if (item.type === 'chair') setChair(item.id);
                                            if (item.type === 'desk') setDesk(item.id);
                                            if (item.type === 'monitor') cycleMonitors();
                                            if (item.type === 'plant') setHasPlant(!hasPlant);
                                            if (item.type === 'lamp') setHasLamp(!hasLamp);
                                        }}
                                        className="h-36"
                                    >
                                        <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                                            <Icon size={24} className={isActive ? "text-emerald-600" : "text-slate-600"} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 text-center mb-1">{item.name}</span>
                                        <span className="text-xs text-emerald-600 font-semibold">+${item.price}<span className="text-slate-400">/mo</span></span>
                                    </FancyBox>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};