import * as React from 'react';
import styles from '../../styles/gallery.module.css';
import EmblaCarousel from '../../components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import '../../styles/base.css'
import '../../styles/sandbox.css'
import '../../styles/embla.css'


const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const photos = [];

export default function GalleryPage() {
    return (
        <section className={styles.container} id='gallery'>
            <h2 className={styles.header}>Gallery</h2>
            <main className="sandbox">
                <section className="sandbox__carousel">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </section>
            </main>
        </section>
    );
}