import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Juhi</h1>
      <p className={styles.description}>
      I'm an experienced data analyst skilled in Python and machine learning, now diving into backend development with FastAPI and Flask. I also focus on generative AI, fine-tuning models to produce high-quality content. Feel free to connect if you want to chat!
      </p>

        <a href="mailto:juhiik31@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>;
  
}
