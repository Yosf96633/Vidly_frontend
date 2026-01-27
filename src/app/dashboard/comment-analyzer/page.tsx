import React, { Suspense } from "react";
import { VideoAnalysisContent } from "./_components/videoAnalysis";

const VideoAnalysisPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-[#000000]">
          <div className="animate-pulse text-neutral-600 dark:text-neutral-400">
            Loading comment analyzer...
          </div>
        </div>
      }
    >
      <VideoAnalysisContent />
    </Suspense>
  );
};

export default VideoAnalysisPage;
