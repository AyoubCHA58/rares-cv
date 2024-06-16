'use client';
import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [textos, setTextos] = useState({});
  const [language, setLanguage] = useState('es'); // Estado para almacenar el idioma seleccionado

  const changeLanguage = async (language) => {
    try {
      const response = await fetch(`/Json/${language}.json`);
      const data = await response.json();
      setTextos(data);
      setLanguage(language); // Guardar el idioma seleccionado en el estado
      sessionStorage.setItem('language', language); // Guardar el idioma en sessionStorage
    } catch (error) {
      console.error('Error cargando archivos de idioma:', error);
    }
  };

  useEffect(() => {
    // Intentar obtener el idioma almacenado en sessionStorage
    const storedLanguage = sessionStorage.getItem('language');
    if (storedLanguage) {
      // Si hay un idioma almacenado, cargar los textos en ese idioma
      changeLanguage(storedLanguage);
    } else {
      // Si no hay idioma almacenado, cargar el idioma por defecto (español en este caso)
      changeLanguage('es');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ textos, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};