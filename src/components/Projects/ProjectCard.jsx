import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            <img
              src={getImageUrl(skill.imageSrc)}
              alt={skill.alt}
              className={styles.skillImage}
            />
            <div className={styles.tooltip}>{skill.alt}</div>
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          <img src="/assets/projects/external-link.png" alt="" />
          Demo
        </a> */}
        <a href={source} className={styles.link}>
          <img src="/assets/projects/github.png" alt="" />
          Source
        </a>
      </div>
    </div>
  );
};
