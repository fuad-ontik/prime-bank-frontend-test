"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import ContentArea from "@/components/common/ContentArea";
import KpiCards from "./KpiCards";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("sentiment");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onToggle={setSidebarOpen}
        />

        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
            sidebarOpen ? "lg:ml-64" : "lg:ml-0"
          }`}
        >
          {/* Top Navigation Bar */}
          {!sidebarOpen && (
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-3">
              <Button
                onClick={() => setSidebarOpen(true)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Menu className="h-4 w-4" />
                Navigation
              </Button>
            </div>
          )}

          <div className="p-3 sm:p-4 lg:p-6 overflow-auto">
            <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
              <Header />

              <KpiCards />

              <ContentArea activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
