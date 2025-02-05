// src/app/layout.js
import '../Styles/global.css';
import { LanguageProvider } from '../Scripts/LanguageContext';
import Header from '@/Componentes/Header';
import NavLateral from '@/Componentes/NavLateral';
export const metadata = {
  title: "Rares Andrei Ana",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <LanguageProvider>
        <body>
          <Header />
          <NavLateral />
          {children}
            {/* <div className="maintenance">En mantenimiento</div> */}
        </body>
      </LanguageProvider>
    </html>
  );
}