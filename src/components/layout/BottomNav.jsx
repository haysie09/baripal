import React from 'react';
import { Home, ClipboardCheck, BookOpen, Settings } from 'lucide-react'; // Our icons

const BottomNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'checklist', label: 'Checklist', icon: ClipboardCheck },
    { id: 'journal', label: 'Journal', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-b-dark-blue border-t border-b-teal">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200
                ${isActive ? 'text-b-light-green' : 'text-gray-300 hover:text-white'}`
              }
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  );
};

export default BottomNav;