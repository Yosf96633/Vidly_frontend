import { Metadata } from 'next'
import {
  ViralGapDetector
} from './_components/topic-finder-client'

export const metadata: Metadata = {
  title: 'Topic Finder',
  description: 'Discover trending YouTube topics and viral content opportunities in your niche. Find high-opportunity keywords with low competition and rising search trends.',
  keywords: [
    'YouTube topic finder',
    'trending topics',
    'viral content ideas',
    'YouTube keyword research',
    'content opportunity finder',
    'niche topic discovery',
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Topic Finder - Vidly',
    description: 'Discover trending topics and viral opportunities for your YouTube channel.',
  },
}

export default function TopicFinderPage() {
  return <ViralGapDetector />
}