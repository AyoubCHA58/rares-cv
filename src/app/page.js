'use client';

import React, { useContext } from 'react';
import Portada from '@/Componentes/Portada';
import Experiencia from '@/Componentes/Experiencia';
import Proyectos from '@/Componentes/Proyectos';
import { LanguageContext } from '@/Scripts/LanguageContext';
import styles from '@/Styles/Main.module.css';

const Home = () => {
  const { textos } = useContext(LanguageContext);

  if (!textos.projects) {
    return null;
  }

  const projectKeys = Object.keys(textos.projects).filter(key => key !== 'info');
  return (
    <main className={styles.main}>

      <Portada textos={textos} />
      <h2 id="experience" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.experience?.info?.title}</h2>
      <Experiencia textos={textos} />
      <h2 id="projects" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.projects?.info?.title}</h2>
      {projectKeys.map((key, index) => (
        <Proyectos key={key} textos={textos} projectKey={key} index={index} />
      ))}
    </main>
  );
};

export default Home;