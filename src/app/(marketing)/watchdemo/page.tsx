"use client";

import React, { useState } from "react";
import {
  Play,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Target,
  MessageSquare,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { Space_Grotesk, Outfit } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", // This defines the CSS variable name
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit", // This defines the CSS variable name
  display: "swap",
});

export default function WatchDemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingFeature, setPlayingFeature] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Comment Analyzer",
      description:
        "Watch how AI analyzes thousands of comments to extract viral triggers, retention killers, and audience desires in seconds.",
      videoUrl: "https://www.youtube.com/embed/Bum-Z3CA00o?autoplay=1",
      duration: "0:45",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Viral Search",
      description:
        "Discover the exact search strategy that finds videos outperforming their channel size by 200%+.",
      videoUrl: "https://www.youtube.com/embed/FoWvBzCNzvY?autoplay=1",
      duration: "0:47",
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Idea Validator",
      description:
        "See our AI analyze competition, audience demand, and viral potential to give your ideas a real success score.",
      videoUrl: "https://www.youtube.com/embed/mQVcW3zYlHw?autoplay=1",
      duration: "2:10",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B02E2B]/20 via-black to-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#B02E2B]/10 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-black border border-[#B02E2B] rounded-full backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-[#B02E2B] rounded-full animate-pulse"></span>
          <span
            className={`text-sm ${spaceGrotesk.className} font-medium tracking-wide`}
          >
            Product Demo
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-5xl ${spaceGrotesk.className} sm:text-6xl lg:text-7xl font-black text-center mb-2 leading-tight`}
        >
          See{" "}
          <span className="bg-gradient-to-r from-[#E55A52] via-[#C83E3A] to-[#B02E2B] bg-clip-text text-transparent">
            Vidly
          </span>{" "}
          in Action
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-lg ${outfit.className} sm:text-xl text-neutral-400 text-center max-w-3xl mb-12 leading-relaxed`}
        >
          Watch how Vidly transforms the way creators analyze comments, discover
          viral topics, and validate video ideas with AI-powered intelligence.
        </motion.p>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-5xl relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl shadow-[#B02E2B]/20 group">
            {!isPlaying ? (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-neutral-900 to-black transition-all duration-300 group-hover:from-neutral-800 group-hover:to-neutral-900"
                onClick={() => setIsPlaying(true)}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#B02E2B] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-[#E55A52] via-[#C83E3A] to-[#B02E2B] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-[#B02E2B]/50">
                    <Play
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-2"
                      fill="white"
                    />
                  </div>
                </div>

                {/* Duration badge */}
                <div
                  className={`absolute ${spaceGrotesk.className} bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-sm font-semibold`}
                >
                  ⏱️ 1:01
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/xtNcMcWEgnA?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#B02E2B]/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-[#E55A52]/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-neutral-500" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-11 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center  gap-2 px-4 py-2 mb-6 rounded-full backdrop-blur-sm"
            >
              <span
                className={`text-sm ${spaceGrotesk.className} text-[#B02E2B] font-medium`}
              >
                What You'll Discover
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-4xl ${spaceGrotesk.className} sm:text-5xl lg:text-6xl font-black mb-1`}
            >
              Powerful Features
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg ${outfit.className} text-neutral-400 max-w-2xl mx-auto`}
            >
              See firsthand how Vidly's AI-powered features revolutionize your
              content creation workflow
            </motion.p>
          </div>

          {/* Features Bento Grid - 2026 Interactive Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-max">
            {features.map((feature, index) => {
              const isWide = index === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${isWide ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Glassmorphism Background with Soft UI */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl border border-white/10 group-hover:border-[#B02E2B]/50 transition-all duration-500 opacity-100 group-hover:opacity-110"></div>

                  {/* Soft Shadow - 2026 Depth Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#B02E2B]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  {/* Dynamic Background Shift on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B02E2B]/0 via-transparent to-[#E55A52]/0 opacity-0 group-hover:opacity-20 transition-all duration-500 mix-blend-overlay"></div>

                  <div className="relative p-8 h-full flex flex-col">
                    {/* Video Container - Interactive */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-neutral-800/50 to-black/50 border border-white/10 group-hover:border-[#B02E2B]/30 transition-all duration-500 shadow-2xl shadow-[#B02E2B]/20 group-hover:shadow-[#B02E2B]/40">
                      {/* Interactive Depth Layer */}
                      <div className="absolute inset-0 bg-radial-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                      {playingFeature !== index ? (
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-neutral-900/60 to-black/80 group-hover:from-neutral-800/80 group-hover:to-black/90 transition-all duration-500"
                          onClick={() => setSelectedFeature(index)}
                        >
                          <div className="relative">
                            {/* Pulsing Glow - 2026 Cyberpunk Era */}
                            <div className="absolute inset-0 bg-[#B02E2B] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>

                            {/* Soft UI Play Button */}
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#E55A52] via-[#C83E3A] to-[#B02E2B] rounded-full flex items-center justify-center transform group-hover:scale-125 transition-all duration-500 shadow-2xl shadow-[#B02E2B]/60 group-hover:shadow-[#B02E2B]/80 group-hover:-translate-y-1">
                              <Play
                                className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2"
                                fill="white"
                              />
                            </div>
                          </div>

                          {/* Interactive Duration Badge */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={`absolute ${spaceGrotesk.className} bottom-4 right-4 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-[#B02E2B]/30 text-sm font-semibold group-hover:border-[#B02E2B]/60 group-hover:bg-black/80 transition-all duration-500 hover:scale-110`}
                          >
                            ⏱️ {feature.duration}
                          </motion.div>
                        </div>
                      ) : (
                        <iframe
                          className="w-full h-full"
                          src={feature.videoUrl}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>

                    {/* Content Section - Scrollytelling Ready */}
                    <div className="flex-1 flex flex-col">
                      {/* Icon with Soft UI - 2026 Tactile Feel */}
                      <div className="w-14 h-14 text-[#B02E2B] rounded-xl flex items-center justify-center mb-5 backdrop-blur-sm  group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#B02E2B]/20">
                        {feature.icon}
                      </div>

                      {/* Title - Kinetic Typography Ready */}
                      <h3
                        className={`text-2xl ${spaceGrotesk.className} font-bold mb-3 group-hover:text-[#E55A52] transition-all duration-500 group-hover:translate-x-1`}
                      >
                        {feature.title}
                      </h3>

                      {/* Description - Scannable Content First */}
                      <p
                        className={`text-neutral-400 ${outfit.className} text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-500`}
                      >
                        {feature.description}
                      </p>

                      {/* Interactive CTA Indicator */}
                      <motion.div
                        className="mt-4 inline-flex items-center gap-2 text-[#B02E2B] opacity-0 group-hover:opacity-100 transition-all duration-500"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span
                          className={`text-sm ${spaceGrotesk.className} font-semibold`}
                        >
                          Play Demo
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Accent Elements - 2026 Sensory Design */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#B02E2B]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-[#E55A52]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Popup for Feature Videos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedFeature !== null ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${selectedFeature !== null ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => setSelectedFeature(null)}
      >
        {/* Backdrop with blur */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{
            opacity: selectedFeature !== null ? 1 : 0,
            scale: selectedFeature !== null ? 1 : 0.9,
            y: selectedFeature !== null ? 0 : 20,
          }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="relative w-full max-w-6xl bg-black rounded-3xl overflow-hidden border border-[#B02E2B]/30 shadow-2xl shadow-[#B02E2B]/40"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glassmorphic Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#B02E2B]/20 to-transparent rounded-3xl pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={() => setSelectedFeature(null)}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video Container */}
          <div className="relative w-full aspect-video bg-black">
            {selectedFeature !== null && (
              <>
                <iframe
                  className="w-full h-full"
                  src={features[selectedFeature]?.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className={`text-3xl ${spaceGrotesk.className} font-bold text-white mb-2`}
                      >
                        {features[selectedFeature]?.title}
                      </h3>
                      <p
                        className={`text-neutral-300 ${outfit.className} max-w-2xl`}
                      >
                        {features[selectedFeature]?.description}
                      </p>
                    </div>
                    <div
                      className={`${spaceGrotesk.className} text-neutral-400 text-lg font-semibold`}
                    >
                      ⏱️ {features[selectedFeature]?.duration}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
