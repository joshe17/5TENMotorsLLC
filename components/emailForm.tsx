'use client';

import React from 'react';
import styles from '../styles/emailForm.module.css'
import fetch from "node-fetch";
import FormData  from "form-data";


export default function EmailForm() {
    async function handleSubmit(e: any) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contactAPI', {
                method: 'post',
                body: new URLSearchParams(data),
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            alert('Thanks for contacting us, we will get back to you soon!');
            (document?.getElementById('emailForm') as HTMLFormElement)?.reset();
        } catch (err) {
            console.error(err);
            alert("We can't submit the form, try again later?");
        }

        
    }

    return (
        <div className={styles.body}>
            <form className={styles.container} onSubmit={handleSubmit} id='emailForm'>
                <div className={styles.block} >
                    <label htmlFor="frm-email">Email</label>
                    <input
                        id="frm-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                    />
                </div>
                <div className={styles.block} >
                    <label htmlFor="frm-phone">Phone</label>
                    <input
                        id="frm-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                    />
                </div>
                <div className={styles.nameBlock} >
                    <div>
                        <label htmlFor="frm-first">First Name</label>
                        <input
                            id="frm-first"
                            type="text"
                            name="first"
                            autoComplete="given-name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="frm-last">Last Name</label>
                        <input
                            id="frm-last"
                            type="text"
                            name="last"
                            autoComplete="family-name"
                            required
                        />
                    </div>
                </div>
                <div className={styles.block} >
                    <label htmlFor="frm-message">Message</label>
                    <textarea id="frm-message" className={styles.textarea} rows={6} name="message"></textarea>
                </div>
                <div className={styles.blockButton}>
                    <input type="submit" className={styles.button} id={styles.submitButton}></input>
                </div>
            </form>
        </div>
        
    );

}