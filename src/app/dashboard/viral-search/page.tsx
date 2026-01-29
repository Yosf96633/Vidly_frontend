import { Metadata } from 'next'
import {
  AdvancedViralSearch
} from './_components/viral-search-client'

export const metadata: Metadata = {
  title: 'Viral Search',
  description: 'Search and analyze viral YouTube videos in your niche. Discover what makes videos go viral, analyze engagement patterns, and replicate success strategies.',
  keywords: [
    'viral video search',
    'YouTube viral analysis',
    'viral video finder',
    'engagement analysis',
    'viral success patterns',
    'YouTube trends',
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Viral Search - Vidly',
    description: 'Search and analyze viral YouTube videos to replicate success strategies.',
  },
}

export default function ViralSearchPage() {
  return <AdvancedViralSearch />
}