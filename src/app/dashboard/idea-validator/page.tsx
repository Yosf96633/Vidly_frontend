import { Metadata } from 'next'
import {
  VideoIdeaValidator
} from './_components/idea-validator-client'

export const metadata: Metadata = {
  title: 'Idea Validator',
  description: 'Validate your YouTube video ideas before you create them. Use AI-powered analysis to predict virality, competition, and audience demand for your content ideas.',
  keywords: [
    'YouTube idea validator',
    'video idea analysis',
    'content validation',
    'virality predictor',
    'YouTube content ideas',
    'video performance prediction',
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Idea Validator - Vidly',
    description: 'Validate YouTube video ideas with AI-powered analysis before you create them.',
  },
}

export default function IdeaValidatorPage() {
  return <VideoIdeaValidator />
}