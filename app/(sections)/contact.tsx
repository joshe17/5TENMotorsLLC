import * as React from 'react';
import EmailForm from '../../components/emailForm';
import styles from '../../styles/contact.module.css'
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className={styles.container} id='contact'>
            <h2 className={styles.header}>Contact Us</h2>
            <div className={styles.content}>
                <EmailForm />
                <div className={styles.listContainer}>
                    <ul className={styles.contactList}>
                        <li key='company' className={styles.contactItem}>
                            <p>5TEN MOTORS LLC</p>
                            <Link
                                className={styles.contactLink}
                                href='https://www.google.com/maps/place/5TEN+Motors+LLC/@37.4961219,-121.9370714,17z/data=!3m1!4b1!4m6!3m5!1s0x808fc7457726c0a5:0x61db9639d218fb26!8m2!3d37.4961177!4d-121.9344965!16s%2Fg%2F11sy_gpw30'
                                target='_blank'
                            >
                                2060 Warm Springs Ct. Unit 2 <br />
                                Fremont, CA 94539
                            </Link>
                        </li>
                        <li key='thanh' className={styles.contactItem}>
                            <p>Thanh Ho</p>
                            <Link className={styles.contactLink} href='mailto:thanh@5tenmotors.com'>thanh@5tenmotors.com</Link>
                            <br />
                            <a className={styles.contactLink} href='tel:510-224-5611'>(510) 224-5611</a>
                        </li>
                        <li key='peter' className={styles.contactItem}>
                            <p>Peter Nguyen</p>
                            <Link className={styles.contactLink} href='mailto:peter@5tenmotors.com'>peter@5tenmotors.com</Link>
                            <br />
                            <a className={styles.contactLink} href='tel:510-224-5615'>(510) 224-5615</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}