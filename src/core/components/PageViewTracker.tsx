'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Construct the full URL path with query parameters
    const url = pathname + (searchParams ? `?${searchParams.toString()}` : '');

    // Track page view using gtag
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: pathname,
        page_title: document.title,
      });

      // Also send a page_view event
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.origin + url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
