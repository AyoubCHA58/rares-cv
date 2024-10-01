import React from "react";
import styles from "../Styles/Idiomas.module.css";

const Idiomas = ({ textos, idiomasKey, index }) => {
 // Verifica que la sección de idiomas y la lista existan
 if (!textos.languages || !textos.languages.list) {
    return null;
}

// Convertir el objeto de idiomas en un array para iterar
const idiomas = Object.values(textos.languages.list);

return (
    <div className={styles.idiomas}>
        {idiomas.map((idioma, index) => (
            <div key={index} className={styles.entry}>
                <h3>{idioma.title}</h3>
                <p>{idioma.level}</p>
                {/* <p>⭐ {idioma.stars}</p> Estrellas o puntuación */}
            </div>
        ))}
    </div>
);
};

export default Idiomas;