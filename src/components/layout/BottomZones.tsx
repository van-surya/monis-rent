"use client";
import { useAppContext } from '@/context/AppContext';
import { INVENTORY } from '@/data/inventory';
import { FancyBox } from '@/components/ui/FancyBox';

export const BottomZones = () => {
    const { extras, toggleExtra } = useAppContext();
    const zones = [
        { id: 'zone-1', title: 'Coffee Station', desc: 'Fuel your focus', items: [INVENTORY.extras[0]] },
        { id: 'zone-2', title: 'Outdoor Gear', desc: 'For the weekend', items: [INVENTORY.extras[1], INVENTORY.extras[2]] },
        { id: 'zone-3', title: 'Relax Zone', desc: 'Take a break', items: [INVENTORY.extras[3]] },
        { id: 'zone-4', title: 'Garage Space', desc: 'Tinker & build', items: [INVENTORY.extras[4]] },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12 relative z-10 pb-32">
            {zones.map((zone) => (
                <div key={zone.id} className="flex flex-col bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-4">
                        <h3 className="font-black text-slate-800 text-lg">{zone.title}</h3>
                        <p className="text-xs text-slate-400 font-medium">{zone.desc}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                        {zone.items.map(item => {
                            const Icon = item.icon;
                            const isAdded = extras.includes(item.id);
                            return (
                                <FancyBox
                                    key={item.id}
                                    active={isAdded}
                                    onClick={() => toggleExtra(item.id)}
                                    className={`h-24 ${zone.items.length === 1 ? 'col-span-2' : ''}`}
                                >
                                    <Icon size={28} strokeWidth={1.5} className={`mb-2 ${isAdded ? 'text-emerald-600' : 'text-slate-400'}`} />
                                    <span className="text-[11px] font-bold text-slate-700 text-center leading-tight">
                                        {item.name}
                                    </span>
                                </FancyBox>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};