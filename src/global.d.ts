declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      param1: string,
      param2?: Record<string, unknown>
    ) => void;
  }
}

export {};
