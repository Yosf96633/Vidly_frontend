// src/lib/analytics.ts
// Google Analytics utility functions

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Check if Google Analytics is available
export const isGAAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.gtag !== 'undefined' && 
         !!GA_MEASUREMENT_ID;
};

/**
 * Track page views
 * @param url - The page URL to track
 */
export const trackPageView = (url: string): void => {
  if (!isGAAvailable()) return;

  window.gtag!('config', GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

/**
 * Track custom events
 * @param action - The action being tracked (e.g., 'click', 'submit', 'play')
 * @param category - The category of the event (e.g., 'Video', 'Form', 'Button')
 * @param label - Optional label for more context
 * @param value - Optional numeric value
 */
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Track user engagement time
 * @param engagementTimeMs - Time in milliseconds
 */
export const trackEngagement = (engagementTimeMs: number): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'user_engagement', {
    engagement_time_msec: engagementTimeMs,
  });
};

/**
 * Track search queries
 * @param searchTerm - The search term used
 */
export const trackSearch = (searchTerm: string): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'search', {
    search_term: searchTerm,
  });
};

/**
 * Track video interactions
 * @param action - The video action (play, pause, complete)
 * @param videoTitle - The title of the video
 * @param videoUrl - The URL of the video
 */
export const trackVideo = ({
  action,
  videoTitle,
  videoUrl,
}: {
  action: 'play' | 'pause' | 'complete';
  videoTitle: string;
  videoUrl?: string;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', `video_${action}`, {
    video_title: videoTitle,
    video_url: videoUrl,
  });
};

/**
 * Track feature usage
 * @param featureName - Name of the feature being used
 * @param action - The action performed on the feature
 */
export const trackFeature = ({
  featureName,
  action,
  details,
}: {
  featureName: string;
  action: string;
  details?: string;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'feature_usage', {
    feature_name: featureName,
    feature_action: action,
    feature_details: details,
  });
};

/**
 * Track conversions/goals
 * @param conversionName - Name of the conversion
 * @param value - Optional value of the conversion
 */
export const trackConversion = ({
  conversionName,
  value,
  currency = 'USD',
}: {
  conversionName: string;
  value?: number;
  currency?: string;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'conversion', {
    conversion_name: conversionName,
    value: value,
    currency: currency,
  });
};

/**
 * Track exceptions/errors
 * @param description - Description of the error
 * @param fatal - Whether the error is fatal
 */
export const trackException = ({
  description,
  fatal = false,
}: {
  description: string;
  fatal?: boolean;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'exception', {
    description: description,
    fatal: fatal,
  });
};

/**
 * Track outbound link clicks
 * @param url - The URL being clicked
 * @param label - Optional label for the link
 */
export const trackOutboundLink = (url: string, label?: string): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'click', {
    event_category: 'Outbound Link',
    event_label: label || url,
    transport_type: 'beacon',
  });
};

/**
 * Track file downloads
 * @param fileName - Name of the file being downloaded
 * @param fileType - Type of the file (pdf, csv, etc.)
 */
export const trackDownload = (fileName: string, fileType: string): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'file_download', {
    file_name: fileName,
    file_extension: fileType,
  });
};

/**
 * Track social interactions
 * @param network - The social network (facebook, twitter, etc.)
 * @param action - The action (share, like, etc.)
 * @param target - The target URL or content
 */
export const trackSocial = ({
  network,
  action,
  target,
}: {
  network: string;
  action: string;
  target: string;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'social_interaction', {
    social_network: network,
    social_action: action,
    social_target: target,
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param formId - ID of the form
 */
export const trackFormSubmit = (formName: string, formId?: string): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'form_submit', {
    form_name: formName,
    form_id: formId,
  });
};

/**
 * Set user ID (for authenticated users)
 * @param userId - The user's unique ID
 */
export const setUserId = (userId: string): void => {
  if (!isGAAvailable()) return;

  window.gtag!('config', GA_MEASUREMENT_ID!, {
    user_id: userId,
  });
};

/**
 * Set user properties
 * @param properties - Object containing user properties
 */
export const setUserProperties = (properties: Record<string, any>): void => {
  if (!isGAAvailable()) return;

  window.gtag!('set', 'user_properties', properties);
};

/**
 * Track e-commerce purchase
 * @param transaction - Transaction details
 */
export const trackPurchase = ({
  transaction_id,
  value,
  currency = 'USD',
  items,
}: {
  transaction_id: string;
  value: number;
  currency?: string;
  items: Array<{
    item_id: string;
    item_name: string;
    price: number;
    quantity?: number;
  }>;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'purchase', {
    transaction_id,
    value,
    currency,
    items,
  });
};

/**
 * Set cookie consent
 * @param granted - Whether consent is granted
 */
export const setCookieConsent = (granted: boolean): void => {
  if (!isGAAvailable()) return;

  window.gtag!('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  });
};

/**
 * Track timing/performance
 * @param name - Name of the timing metric
 * @param value - Time value in milliseconds
 * @param category - Category of the timing
 */
export const trackTiming = ({
  name,
  value,
  category = 'Performance',
}: {
  name: string;
  value: number;
  category?: string;
}): void => {
  if (!isGAAvailable()) return;

  window.gtag!('event', 'timing_complete', {
    name: name,
    value: value,
    event_category: category,
  });
};
