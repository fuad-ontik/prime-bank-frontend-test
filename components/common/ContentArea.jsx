"use client";

import ActionItems from "@/components/pages/home/ActionItems";
import AiOverview from "@/components/pages/home/AiOverview";
import DataView from "@/components/pages/home/DataView";
import Emotion from "@/components/pages/home/Emotion";
import SentimentDistribution from "@/components/pages/home/SentimentDistribution";
import TopVirtualPosts from "@/components/pages/home/TopVirtualPosts";

const ContentArea = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "sentiment":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              <SentimentDistribution />
              <TopVirtualPosts />
            </div>
          </div>
        );
      case "emotions":
        return (
          <div className="space-y-4 sm:space-y-6">
            <Emotion />
          </div>
        );
      case "actions":
        return (
          <div className="space-y-4 sm:space-y-6">
            <ActionItems />
          </div>
        );
      case "ai_overview":
        return (
          <div className="space-y-4 sm:space-y-6">
            <AiOverview />
          </div>
        );
      case "data":
        return (
          <div className="space-y-4 sm:space-y-6">
            <DataView />
          </div>
        );
      default:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              <SentimentDistribution />
              <TopVirtualPosts />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 min-h-0">
      {renderContent()}
    </div>
  );
};

export default ContentArea;
