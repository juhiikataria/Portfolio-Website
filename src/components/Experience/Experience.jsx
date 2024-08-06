// import React from "react";
// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from '../../utils';

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//         <h2 className={styles.title}>Experience</h2>
//         <div className={styles.content}>
//             <div className={styles.skills}>{
//                 skills.map((skill, id) =>{
//                     return (
//                         <div key ={id} className={styles.skill}>
//                             <div className={styles.skillImageContainer}>
//                                 <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                             </div>
//                             <p>{skill.title}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//             <ul className={styles.history}>
//                 {
//                     history.map((historyItem , id) => {
//                         return (
//                             <li key={id} className={styles.historyItem}>
//                                 <img src={getImageUrl(historyItem.imageSrc)}
//                                 alt={`${historyItem.organisation} Logo`} />
//                                 <div className={styles.historyItemDetails}>
//                                     <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                                     <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                                     <ul>
//                                         {historyItem.experiences.map((experience, id) => {
//                                             return <li key ={id}>{experience}</li>;
//                                         })}
//                                     </ul>
//                                 </div>
//                             </li>
//                         );
//                     })
//                 }
//             </ul>
//         </div>
//     </section>
//    );
// };

import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((item, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(item.imageSrc)}
                alt={`${item.organisation || item.issuedBy} Logo`}
              />
              <div className={styles.historyItemDetails}>
                {item.role ? (
                  // Display internship information
                  <>
                    <h3>{`${item.role}, ${item.organisation}`}</h3>
                    <p>{`${item.startDate} - ${item.endDate}`}</p>
                    <ul>
                      {item.experiences.map((experience, index) => (
                        <li key={index}>{experience}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // Display certification information
                  <>
                    <h3>{item.certification}</h3>
                    <p>{`Issued by: ${item.issuedBy}`}</p>
                    <p>{`${item.startDate} - ${item.endDate}`}</p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
