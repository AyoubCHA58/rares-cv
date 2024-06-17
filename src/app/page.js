'use client';

import React, { useContext } from 'react';
import NavLateral from '@/Componentes/NavLateral';
import Portada from '@/Componentes/Portada';
import Experiencia from '@/Componentes/Experiencia';
import Proyectos from '@/Componentes/Proyectos';
import Footer from '@/Componentes/Footer';
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
      <h2 className={styles.encabezado}>{textos.experience?.info?.title}</h2>
      <Experiencia textos={textos} />
      <h2 className={styles.encabezado}>{textos.projects?.info?.title}</h2>
      {projectKeys.map((key, index) => (
        <Proyectos key={key} textos={textos} projectKey={key} index={index} />
      ))}
      {projectKeys.map((key, index) => (
        <Proyectos key={key} textos={textos} projectKey={key} index={index} />
      ))}
      {/* <Footer /> */}
    </main>
  );
};

export default Home;