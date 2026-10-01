import { Monitor, Coffee, LampDesk, Table, Armchair, Sofa, Wrench, Bike, Waves, Leaf } from 'lucide-react';
import { InventoryItem } from '@/types';

export const INVENTORY: Record<string, InventoryItem[]> = {
    desks: [
        { id: 'd1', type: 'desk', name: 'Nomad Wood Desk', desc: 'Warm teak finish', icon: Table, price: 30, color: 'bg-[#8B5A2B]' },
        { id: 'd2', type: 'desk', name: 'Ergo Stand Desk', desc: 'Motorized black frame', icon: Table, price: 50, color: 'bg-slate-800' },
    ],
    chairs: [
        { id: 'c1', type: 'chair', name: 'Aeron Mesh', desc: 'Breathable comfort', icon: Armchair, price: 25 },
        { id: 'c2', type: 'chair', name: 'Exec Leather', desc: 'Premium support', icon: Armchair, price: 35 },
        { id: 'c3', type: 'chair', name: 'Task Chair', desc: 'Simple & effective', icon: Armchair, price: 15 },
    ],
    accessories: [
        { id: 'a1', type: 'monitor', name: '4K Monitor', icon: Monitor, price: 20 },
        { id: 'a2', type: 'plant', name: 'Monstera', icon: Leaf, price: 5 },
        { id: 'a3', type: 'lamp', name: 'Studio Lamp', icon: LampDesk, price: 10 },
    ],
    extras: [
        { id: 'e1', type: 'coffee', name: 'Espresso Machine', icon: Coffee, price: 20 },
        { id: 'e2', type: 'surfboard', name: 'Shortboard', icon: Waves, price: 15 },
        { id: 'e3', type: 'motorcycle', name: 'Custom Cafe Racer', icon: Bike, price: 150 },
        { id: 'e4', type: 'beanbag', name: 'Lounge Bean Bag', icon: Sofa, price: 10 },
        { id: 'e5', type: 'tools', name: 'Maker Tool Shelf', icon: Wrench, price: 25 },
    ]
};