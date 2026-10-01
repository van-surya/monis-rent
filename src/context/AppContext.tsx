"use client";
import React, { useState, useMemo, createContext, useContext, ReactNode } from 'react';
import { AppContextType } from '@/types';
import { INVENTORY } from '@/data/inventory';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within an AppProvider');
    return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<'chairs' | 'desks' | 'accessories'>('chairs');
    const [desk, setDesk] = useState<string>('d1');
    const [chair, setChair] = useState<string>('c1');
    const [monitors, setMonitors] = useState<number>(1);
    const [hasPlant, setHasPlant] = useState<boolean>(true);
    const [hasLamp, setHasLamp] = useState<boolean>(true);
    const [extras, setExtras] = useState<string[]>([]);
    const [isCheckout, setIsCheckout] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const toggleExtra = (id: string) => {
        setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
    };

    const cycleMonitors = () => {
        setMonitors(prev => prev >= 3 ? 0 : prev + 1);
    };

    const currentTotal = useMemo(() => {
        let total = 0;
        total += INVENTORY.desks.find(d => d.id === desk)?.price || 0;
        total += INVENTORY.chairs.find(c => c.id === chair)?.price || 0;
        total += monitors * (INVENTORY.accessories.find(a => a.id === 'a1')?.price || 0);
        if (hasPlant) total += INVENTORY.accessories.find(a => a.id === 'a2')?.price || 0;
        if (hasLamp) total += INVENTORY.accessories.find(a => a.id === 'a3')?.price || 0;
        extras.forEach(eId => {
            total += INVENTORY.extras.find(e => e.id === eId)?.price || 0;
        });
        return total;
    }, [desk, chair, monitors, hasPlant, hasLamp, extras]);

    return (
        <AppContext.Provider value={{
            activeTab, setActiveTab, desk, setDesk, chair, setChair,
            monitors, cycleMonitors, hasPlant, setHasPlant, hasLamp, setHasLamp,
            extras, toggleExtra, isCheckout, setIsCheckout, orderComplete, setOrderComplete,
            currentTotal
        }}>
            {children}
        </AppContext.Provider>
    );
};