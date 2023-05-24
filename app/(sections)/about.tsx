import * as React from 'react';
import styles from '../../styles/about.module.css';


const services = [
    'Brake Repair & Changes', 'Oil Change', 'Steering & Suspension', 'Mufflers and Exhaust', 'Interior', 'Regular Maintenance', 'Transmission Repair',
    'Engine Repair', 'Check Engine Light',  'Custom Builds', 'And More!'
];

export default function AboutPage() {
    return (
        <div id='about'>
            <section className={styles.container}>

                <div className={styles.textWrapper}>
                    <p>
                        Thanks for visiting our site! We're a team of two who can help solve all your automotive needs,
                        whether it be regular maintenance or classic restoration. We are Datsun owners ourselves and
                        specialize in Datsun automotive repairs. Feel free to contact us for any work you need done on
                        your vehicle! Below are some services that we offer:
                    </p>
                </div>
                <div className={styles.servicesWrappers }>
                    <ul className={styles.services}>
                        {services.map((item, index) => (
                            <li key={index} className={styles.serviceItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>  
    );
}