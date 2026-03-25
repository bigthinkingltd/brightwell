'use client';

import { useState } from 'react';
import AboutBrightwell from '../content/AboutBrightwell';
import Tab2 from '../content/Tab2';
import Tab3 from '../content/Tab3';

const tabs = [
  { id: 'AboutBrightwell', title: 'About Brightwell', component: AboutBrightwell },
  { id: 'tab2', title: 'Darkwell', component: Tab2 },
  { id: 'tab3', title: "Arlo's Wonder Compass", component: Tab3 },
];

export default function AboutBrightwellTabs() {
    //stores which tab is currently active 
  const [activeTab, setActiveTab] = useState('AboutBrightwell');

  //finds the component that matches the active tab
  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="flex bg-[#fcfaf6]">
      <div className="sticky top-0 flex h-screen w-[58px] shrink-0 flex-col">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            //the main layout- left tab column + right content
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-1 items-center justify-center border-r border-[#d7d0c5] transition-all duration-300 ${
                isActive
                  ? 'bg-[#f3eee6] text-[#2c241b]' //Active tab styles
                  : 'bg-[#e7e0d5] text-[#6b6258] hover:bg-[#efe8de] hover:text-[#2c241b]' //Inactive tab style
              }`}
            >
              <div className="flex h-full items-center justify-center py-6">
                <span className="-rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em]">
                  {tab.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <main className="min-w-0 flex-1">
        {ActiveComponent ? <ActiveComponent /> : null}
      </main>
    </div>
  );
}