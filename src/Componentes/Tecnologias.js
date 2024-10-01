import React from "react";
import styles from "../Styles/Tecnologias.module.css";

const Tecnologias = ({ textos, tecnologiasKey, index }) => {
    if (!textos.technologies || !textos.technologies[tecnologiasKey]) {
        return null;
    }
  
    const tecnologia = textos.technologies[tecnologiasKey];

    return (
        <div className={styles.tecnologias}>
            {textos.technologies.list.map((tecnologia, index) => (
                <div key={index} className={styles.entry}>
                    <h3>{tecnologia}</h3>
                </div>
            ))}
        </div>
    );
};

export default Tecnologias;