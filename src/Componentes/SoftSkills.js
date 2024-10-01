import React from 'react';
import styles from '../Styles/SoftSkills.module.css';

const SoftSkills = ({ textos, skillKey, index }) => {
    if (!textos.softSkills || !textos.softSkills[skillKey]) {
        return null;
    }
    const skills = textos.softSkills[skillKey];
    return (
        <div className={styles.skills}>
          <div className={styles.entry}>
            <h3>{skills.title}</h3>
            <p>{skills.description}</p>
            
          </div>
        </div>
      );
};

export default SoftSkills;
