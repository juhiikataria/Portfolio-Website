import React from 'react';
import styles from "./About.module.css";

import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img 
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Data Analysis</h3>
                    <p>I am an experienced data analyst skilled in Python, machine learning, and data analysis. My expertise includes working with large datasets to extract meaningful insights, building predictive models, and automating data workflows.</p>
                </div>

            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Development </h3>
                    <p>Currently delving into backend development, focusing on building robust and scalable systems. I am expanding my skills by learning FastAPI and Flask to further improve my ability to develop and deploy web applications.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="Design icon" />
                <div className={styles.aboutItemText}>
                    <h3>Generative AI</h3>
                    <p>Focusing on fine-tuning language models to enhance performance and generate high-quality content. My experience includes applying advanced techniques such as LoRA to optimize models for specific tasks.</p>
                </div>
            </li>
        </ul>
    </div>
</section>

  ); 
  
};
