import React from 'react';

export type ItemType = 'desk' | 'chair' | 'monitor' | 'plant' | 'lamp' | 'coffee' | 'surfboard' | 'motorcycle' | 'beanbag' | 'tools';

export interface InventoryItem {
    id: string;
    type: ItemType;
    name: string;
    desc?: string;
    icon: React.ElementType;
    price: number;
    color?: string;
}

export interface AppContextType {
    activeTab: 'chairs' | 'desks' | 'accessories';
    setActiveTab: React.Dispatch<React.SetStateAction<'chairs' | 'desks' | 'accessories'>>;
    desk: string; setDesk: React.Dispatch<React.SetStateAction<string>>;
    chair: string; setChair: React.Dispatch<React.SetStateAction<string>>;
    monitors: number; cycleMonitors: () => void;
    hasPlant: boolean; setHasPlant: React.Dispatch<React.SetStateAction<boolean>>;
    hasLamp: boolean; setHasLamp: React.Dispatch<React.SetStateAction<boolean>>;
    extras: string[]; toggleExtra: (id: string) => void;
    isCheckout: boolean; setIsCheckout: React.Dispatch<React.SetStateAction<boolean>>;
    orderComplete: boolean; setOrderComplete: React.Dispatch<React.SetStateAction<boolean>>;
    currentTotal: number;
}