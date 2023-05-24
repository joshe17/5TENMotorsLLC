'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navBar.module.css';

const navLinks = [
    { href: "#home", title: "Home" }, 
    { href: "#about", title: "About Us" },
    { href: "#gallery", title: "Gallery" },
    { href: "#contact", title: "Contact Us" }
];

export default function NavBar() {
    const [colorChange, setColorchange] = React.useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= document.documentElement.clientHeight) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    }, []);
    

    return (
        <nav className={colorChange ? styles.navContainerColor : styles.navContainer}>
            <div className={styles.logo}>
                <Link href='#'>
                    <Image
                        src={'/images/logo.svg'}
                        alt='5TEN Motors logo'
                        width={80}
                        height= {60}
                    />
                </Link>
            </div>
            <ul className={styles.navList}>
                
                {navLinks.map((item, index) => (
                    <li key={index} className={styles.navItem }>
                        <Link href={item.href} passHref={true} className={styles.navText} scroll={false}>
                            { item.title }
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}