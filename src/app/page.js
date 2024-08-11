'use client';

import React, { useContext } from 'react';
import Portada from '@/Componentes/Portada';
import Experiencia from '@/Componentes/Experiencia';
import Proyectos from '@/Componentes/Proyectos';
import { LanguageContext } from '@/Scripts/LanguageContext';
import styles from '@/Styles/Main.module.css';
import Formacion from '@/Componentes/Formacion';

const Home = () => {
  const { textos } = useContext(LanguageContext);

  if (!textos.projects) {
    return null;
  }

  const projectKeys = Object.keys(textos.projects).filter(key => key !== 'info');
  const fromacionKeys = Object.keys(textos.titles).filter(key => key !== 'text');
  return (
    <main className={styles.main}>

      <Portada textos={textos} />
      <h2 id="experience" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.experience?.info?.title}</h2>
      <Experiencia textos={textos} />
      <h2 id="projects" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.projects?.info?.title}</h2>
      {projectKeys.map((key, index) => (
        <Proyectos key={key} textos={textos} projectKey={key} index={index} />
      ))}
      <h2 id="Education" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.titles?.text}</h2>
      {fromacionKeys.map((key, index) => (
        <Formacion key={key} textos={textos} fromacionKey={key} index={index} />
      ))}
      <div className={styles.comming}>COMMING SOON...</div>
    </main>
  );
};

export default Home;
