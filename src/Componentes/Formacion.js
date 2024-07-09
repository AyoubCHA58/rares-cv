import React from "react";
import styles from "../Styles/Formacion.module.css";

const Formacion = ({ textos, fromacionKey, index }) => {
    if (!textos.titles || !textos.titles[fromacionKey]) {
        return null;
    }
  const formacion = textos.titles[fromacionKey];
  return (
    <div className={styles.formacion}>
      <div className={styles.entry}>
        <h3>{formacion.title}</h3>
        <p>{formacion.center}</p>
        <p>{formacion.date}</p>
      </div>
    </div>
  );
};

export default Formacion;
