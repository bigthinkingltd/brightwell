//Controls tab related things - tab buttons, active state, imports all tab components
'use client';
import { useState } from 'react';
import TheRealmWars from '../content/TheRealmWars';
import TheUnderkinUprising from '../content/TheUnderkinUprising';
import Tab3 from '../content/Tab3';

const tabs = [
  {
    id: 'realm-wars',
    title: 'The Realm Wars',
    component: TheRealmWars,
    activeClasses: 'border-[#c08b37] bg-[#2b1d0c] text-[#f0c879]',
    inactiveClasses: 'bg-[#1a140d] text-white/70 hover:bg-[#241b12] hover:text-white',
  },
  {
    id: 'The-Underkin-Uprising',
    title: 'The Underkin Uprising',
    component: TheUnderkinUprising,
    activeClasses: 'border-[#4f8f73] bg-[#11231c] text-[#9ed6bd]',
    inactiveClasses: 'bg-[#101915] text-white/70 hover:bg-[#16221c] hover:text-white',
  },
  {
    id: 'Tab3',
    title: 'Tab3',
    component: Tab3,
    activeClasses: 'border-[#6d5db8] bg-[#171327] text-[#c5bcff]',
    inactiveClasses: 'bg-[#12101d] text-white/70 hover:bg-[#1a1729] hover:text-white',
  },

];

export default function HistoryTabs() {
  const [activeTab, setActiveTab] = useState('realm-wars');

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const ActiveComponent = activeTabData?.component;

  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-5">
      <div className="mb-4 flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-t-xl border px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 md:px-5 md:py-3 md:text-base ${
                isActive
                  ? tab.activeClasses
                  : `border-white/10 ${tab.inactiveClasses}`
              }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div className="min-h-[420px]">
        {ActiveComponent ? <ActiveComponent /> : null}
      </div>
    </section>
  );
}