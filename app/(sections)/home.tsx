'use client';

import * as React from 'react';
import Image from 'next/image';
import styles from '../../styles/home.module.css'
import { useState, useCallback, useEffect } from 'react';

const { heroContent, heroWrapper, imageWrapper } = styles;


const useMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener("change", updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener("change", updateTarget);
    }, []);

    return targetReached;
};


export default function HomePage() {
    const width = useMediaQuery(768);

    return (
        <div id='home'>
            <div className={heroWrapper}>
                <div className={imageWrapper}>
                    <Image
                        priority={true}
                        src={width ? '/images/heroMobile.JPG' : '/images/hero.JPG'}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        alt="datsun cars hero image"
                    />
                </div>
                <div className={heroContent}>
                    <Image
                        priority={true}
                        src={'/images/logo.svg'}
                        height={700}
                        width={850}
                        className={styles.heroLogo}
                        alt='logo'
                    />
                    <div className={styles.heroText}>
                        <h1>5TEN<span> MOTORS</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}