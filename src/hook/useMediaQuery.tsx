'use client'

import { useEffect, useState } from 'react';

export function useMediaQuery(targetSize: number = 960) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
        window.removeEventListener(
        'resize',
        () => window?.innerWidth >= targetSize
        );
    });
    if (typeof window !== 'undefined' && ready) {
        const currentWidth = window?.innerWidth;

        return currentWidth >= targetSize;
    }
}