"use client";
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { AppProvider, useAppContext } from '@/context/AppContext';
import { StageDiorama } from '@/components/diorama/StageDiorama';
import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import { BottomZones } from '@/components/layout/BottomZones';
import { CheckoutModal } from '@/components/layout/CheckoutModal';

const MainLayout = () => {
  const { setIsCheckout } = useAppContext();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-emerald-200">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[50%] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center pt-12 pb-6 relative z-10 px-4">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 font-bold text-xs tracking-wider uppercase rounded-full mb-4">
            monis.rent
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            Design Your Workspace
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            Build your perfect setup visually. We'll deliver and install it directly to your villa or office in Bali.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full min-h-[500px] flex flex-col lg:block mt-8">
        <LeftPanel />
        <RightPanel />
        <StageDiorama />

        <div className="lg:absolute bottom-[-40px] left-1/2 lg:-translate-x-1/2 z-30 flex flex-col items-center mt-8 lg:mt-0 pb-8 lg:pb-0 px-6">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCheckout(true)}
            className="group relative w-full lg:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-2xl px-12 py-5 font-black text-xl shadow-[0_20px_40px_rgba(15,23,42,0.3)] transition-all overflow-hidden flex items-center justify-center gap-3"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span>Review & Rent Setup</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      <BottomZones />
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}