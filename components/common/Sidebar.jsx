"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3, Heart, Target, Brain, Database } from "lucide-react";

const Sidebar = ({ activeSection, onSectionChange, isOpen, onToggle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    {
      id: "sentiment",
      label: "Sentiment & Virality",
      icon: BarChart3,
    },
    {
      id: "emotions",
      label: "Emotions & Categories",
      icon: Heart,
    },
    {
      id: "actions",
      label: "Action Items",
      icon: Target,
    },
    {
      id: "ai_overview",
      label: "AI Overview",
      icon: Brain,
    },
    {
      id: "data",
      label: "Full Data View",
      icon: Database,
    },
  ];

  const handleToggle = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      onToggle();
    }
  };

  const handleItemClick = (sectionId) => {
    onSectionChange(sectionId);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const sidebarVisible = isMobile ? mobileMenuOpen : isOpen;

  return (
    <>
      {/* Mobile menu button - only for mobile */}
      {isMobile && !mobileMenuOpen && (
        <Button
          onClick={handleToggle}
          variant="outline"
          size="sm"
          className="fixed top-4 left-4 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </Button>
      )}

      {/* Mobile Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-40 transition-transform duration-300 ease-in-out w-64 shadow-lg
          ${sidebarVisible ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Navigation
          </h2>
          <Button
            onClick={handleToggle}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${
                        activeSection === item.id
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
