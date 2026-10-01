"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Table, Armchair, Monitor, Leaf, LampDesk } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { INVENTORY } from '@/data/inventory';

export const CheckoutModal = () => {
    const {
        isCheckout, setIsCheckout, orderComplete, setOrderComplete,
        desk, chair, monitors, hasPlant, hasLamp, extras, currentTotal
    } = useAppContext();

    return (
        <AnimatePresence>
            {isCheckout && (
                <motion.div
                    key="checkout-modal-overlay"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={() => { if (!orderComplete) setIsCheckout(false) }}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        onClick={e => e.stopPropagation()}
                        className="bg-white rounded-4xl max-w-lg w-full shadow-2xl flex flex-col overflow-hidden border border-slate-100"
                    >
                        {orderComplete ? (
                            <div className="p-12 text-center flex flex-col items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                                    className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6"
                                >
                                    <CheckCircle2 size={48} />
                                </motion.div>
                                <h2 className="text-3xl font-black text-slate-900 mb-2">You're All Set!</h2>
                                <p className="text-slate-500 mb-8">Your dream workspace is being prepared. We'll contact you shortly for delivery details in Bali.</p>
                                <button
                                    onClick={() => { setOrderComplete(false); setIsCheckout(false); }}
                                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-8 rounded-xl transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900">Order Summary</h2>
                                        <p className="text-sm text-slate-500">Your personalized Bali setup.</p>
                                    </div>
                                    <button onClick={() => setIsCheckout(false)} className="p-2 bg-white rounded-full hover:bg-slate-200 transition-colors shadow-sm">
                                        <X size={20} className="text-slate-500" />
                                    </button>
                                </div>

                                <div className="p-6 md:p-8 flex-1 overflow-y-auto max-h-[60vh]">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors"><Table size={18} className="text-slate-600" /></div>
                                                <span className="font-bold text-slate-700">{INVENTORY.desks.find(d => d.id === desk)?.name}</span>
                                            </div>
                                            <span className="font-black text-slate-900">${INVENTORY.desks.find(d => d.id === desk)?.price}/mo</span>
                                        </div>
                                        <div className="flex justify-between items-center group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors"><Armchair size={18} className="text-slate-600" /></div>
                                                <span className="font-bold text-slate-700">{INVENTORY.chairs.find(c => c.id === chair)?.name}</span>
                                            </div>
                                            <span className="font-black text-slate-900">${INVENTORY.chairs.find(c => c.id === chair)?.price}/mo</span>
                                        </div>
                                        {monitors > 0 && (
                                            <div className="flex justify-between items-center group">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors"><Monitor size={18} className="text-slate-600" /></div>
                                                    <span className="font-bold text-slate-700">{monitors}x 4K Monitor</span>
                                                </div>
                                                <span className="font-black text-slate-900">${monitors * (INVENTORY.accessories.find(a => a.id === 'a1')?.price || 15)}/mo</span>
                                            </div>
                                        )}
                                        {hasPlant && (
                                            <div className="flex justify-between items-center group">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors"><Leaf size={18} className="text-emerald-600" /></div>
                                                    <span className="font-bold text-slate-700">Monstera Plant</span>
                                                </div>
                                                <span className="font-black text-slate-900">${INVENTORY.accessories.find(a => a.id === 'a2')?.price}/mo</span>
                                            </div>
                                        )}
                                        {hasLamp && (
                                            <div className="flex justify-between items-center group">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors"><LampDesk size={18} className="text-amber-600" /></div>
                                                    <span className="font-bold text-slate-700">Studio Lamp</span>
                                                </div>
                                                <span className="font-black text-slate-900">${INVENTORY.accessories.find(a => a.id === 'a3')?.price}/mo</span>
                                            </div>
                                        )}
                                        {extras.length > 0 && <div className="h-px bg-slate-100 my-4" />}
                                        {extras.map(eId => {
                                            const item = INVENTORY.extras.find(e => e.id === eId);
                                            if (!item) return null;
                                            const Icon = item.icon;
                                            return (
                                                <div key={eId} className="flex justify-between items-center group">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors"><Icon size={18} className="text-slate-600" /></div>
                                                        <span className="font-bold text-slate-700">{item.name}</span>
                                                    </div>
                                                    <span className="font-black text-slate-900">${item.price}/mo</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-slate-900 text-white rounded-b-4xl">
                                    <div className="flex justify-between items-end mb-6">
                                        <span className="text-slate-400 font-medium">Total Monthly Rent</span>
                                        <div className="text-right">
                                            <span className="text-4xl font-black">${currentTotal}</span>
                                            <span className="text-slate-400 font-medium ml-1">/mo</span>
                                        </div>
                                    </div>
                                    <button
                                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 py-4 rounded-xl font-black text-lg transition-all shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
                                        onClick={() => { setOrderComplete(true); }}
                                    >
                                        Confirm Checkout <CheckCircle2 size={20} />
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};