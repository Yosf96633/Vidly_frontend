import { Metadata } from 'next'
import React, { Suspense } from "react";
import { VideoAnalysisContent } from "./_components/videoAnalysis";

// ========================================
// METADATA EXPORT (Server Component Only)
// ========================================
export const metadata: Metadata = {
  title: 'Comment Analyzer',
  description: 'Analyze YouTube comments with AI to discover what your audience wants, identify trending topics, and extract actionable insights from viewer feedback.',
  keywords: [
    'YouTube comment analysis',
    'comment analyzer',
    'YouTube audience insights',
    'comment sentiment analysis',
    'video feedback analysis',
    'AI comment analysis',
    'YouTube engagement analysis',
  ],
  
  // Open Graph for social sharing (even though it's a dashboard page)
  openGraph: {
    title: 'Comment Analyzer - Vidly',
    description: 'AI-powered YouTube comment analysis to understand what your audience really wants.',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary',
    title: 'Comment Analyzer - Vidly',
    description: 'AI-powered YouTube comment analysis to understand what your audience really wants.',
  },
  
  // Prevent indexing (this is a dashboard page, should not appear in Google)
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

// ========================================
// PAGE COMPONENT
// ========================================
const VideoAnalysisPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
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

/*
 * ========================================
 * IMPORTANT NOTES
 * ========================================
 * 
 * WHY THIS WORKS:
 * - This page.tsx file is a SERVER COMPONENT (no "use client")
 * - The metadata export works in server components
 * - The VideoAnalysisContent is a client component (imported)
 * - This is the correct pattern for dashboard pages
 * 
 * METADATA STRATEGY FOR DASHBOARD:
 * - title: Short, descriptive (shown in browser tab)
 * - description: Explains what the tool does
 * - robots: index=false (keeps it out of Google search)
 * - keywords: Relevant for internal site search (if you add it later)
 * 
 * WHY robots.index = false?
 * - Dashboard pages require authentication
 * - Google can't access them anyway
 * - No SEO value (not public content)
 * - Prevents crawl errors in Search Console
 * 
 * OPEN GRAPH INCLUDED:
 * - Even though it's a dashboard page
 * - Useful if users share dashboard links internally
 * - Keeps metadata consistent across the app
 */