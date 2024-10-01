import React from "react";
import styles from "../Styles/Tecnologias.module.css";

const Tecnologias = ({ textos, tecnologiasKey, index }) => {
    if (!textos.tecnologies || !textos.tecnologies[tecnologiasKey]) {
        return null;
    }
  
    const tecnologia = textos.tecnologies[tecnologiasKey];

    return (
        <div className={styles.tecnologias}>
            {textos.tecnologies.list.map((tecnologia, index) => (
                <div key={index} className={styles.entry}>
                    <h3>{tecnologia}</h3>
                </div>
            ))}
        </div>
    );
};

export default Tecnologias;