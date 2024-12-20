// src/globals.d.ts (or navigator.d.ts)
interface NavigatorConnection {
    downlink: number;
    effectiveType: string;
    saveData: boolean;
    type: string;
    addEventListener(type: string, listener: (event: Event) => void): void;
    removeEventListener(type: string, listener: (event: Event) => void): void;
  }
  
  interface Navigator {
    connection?: NavigatorConnection;
  }
  