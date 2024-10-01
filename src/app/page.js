'use client';

import React, { useContext } from 'react';
import Portada from '@/Componentes/Portada';
import Experiencia from '@/Componentes/Experiencia';
import Proyectos from '@/Componentes/Proyectos';
import { LanguageContext } from '@/Scripts/LanguageContext';
import styles from '@/Styles/Main.module.css';
import Formacion from '@/Componentes/Formacion';
import Tecnologias from '@/Componentes/Tecnologias';
import SoftSkills from '@/Componentes/SoftSkills';
import Idiomas from '@/Componentes/Idiomas';

const Home = () => {
  const { textos } = useContext(LanguageContext);

  if (!textos.projects) {
    return null;
  }

  const projectKeys = Object.keys(textos.projects).filter(key => key !== 'info');
  const fromacionKeys = Object.keys(textos.titles).filter(key => key !== 'text');
  const skillsKeys = Object.keys(textos.softSkills).filter(key => key !== 'text');
  const tecnologiasKeys = Object.keys(textos.technologies).filter(key => key !== 'text');
  const idiomasKeys = Object.keys(textos.languages).filter(key => key !== 'text');
  return (
    <main className={styles.main}>

      <Portada textos={textos} />
      <h2 id="experience" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.experience?.info?.title}</h2>
      <Experiencia textos={textos} />
      {/* <h2 id="projects" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.projects?.info?.title}</h2> */}
      {projectKeys.map((key, index) => (
        <Proyectos key={key} textos={textos} projectKey={key} index={index} />
      ))}
      <h2 id="Education" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.titles?.text}</h2>
      {fromacionKeys.map((key, index) => (
        <Formacion key={key} textos={textos} fromacionKey={key} index={index} />
      ))}
      <h2 id="technologies" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.technologies?.text}</h2>
      {tecnologiasKeys.map((key, index) => (
        <Tecnologias key={key} textos={textos} tecnologiasKey={key} index={index} />
      ))}
      <h2 id="skills" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.softSkills?.text}</h2>
      {skillsKeys.map((key, index) => (
        <SoftSkills key={key} textos={textos} skillKey={key} index={index} />
      ))}
      <h2 id="languages" className={styles.encabezado} style={{ scrollMarginTop: '100px' }}>{textos.languages?.text}</h2>
      {idiomasKeys.map((key, index) => (
      <Idiomas key={key} textos={textos} idiomasKey={key} index={index} />
      ))}
      {/* <div className={styles.comming}>COMING SOON...</div> */}

    </main>
  );
};

export default Home;
