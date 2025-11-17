import React, { useState, useEffect } from 'react';
import { InstallIcon } from './icons';

// Extend the Window interface to include the onbeforeinstallprompt property
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}


export const InstallPWAButton: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // Optional: Hide button after app is installed
        const handleAppInstalled = () => {
            setDeferredPrompt(null);
        };
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) {
            return;
        }
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        setDeferredPrompt(null);
    };

    if (!deferredPrompt) {
        return null;
    }
    
    const buttonBaseClasses = "flex items-center justify-center gap-2 font-bold rounded-lg transition-colors duration-200 p-2 sm:py-2 sm:px-4";

    return (
        <button
            onClick={handleInstallClick}
            className={`${buttonBaseClasses} bg-green-600 hover:bg-green-700 text-white`}
        >
            <InstallIcon />
            <span className="hidden sm:inline">Instalar</span>
        </button>
    );
};