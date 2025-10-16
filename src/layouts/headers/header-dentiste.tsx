'use client';
import React, { useEffect } from "react";
// J'ai remplacé les imports spécifiques à Next.js et aux alias locaux
// par des éléments HTML simples et des placeholders pour le fonctionnement de base.

// HAUTEUR ESTIMÉE DE LA BANNEROLE D'OFFRE
// IMPORTANT : Ajustez cette valeur pour qu'elle corresponde à la hauteur exacte de votre banderole.
const BANNER_HEIGHT = '30px'; 
const HEADER_HEIGHT = '60px'; // Hauteur typique du header

// Implémentation simplifiée d'un hook pour simuler le sticky (sans dépendance externe)
const useSticky = () => {
  const [sticky, setSticky] = React.useState(false);
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      // Simule l'activation de 'sticky' après un certain seuil de défilement (par exemple 100px)
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { 
      sticky, 
      headerRef, 
      // Fonctions factices pour éviter les erreurs
      headerFullWidth: () => console.log('headerFullWidth called (placeholder)'), 
      adjustMenuBackground: () => console.log('adjustMenuBackground called (placeholder)') 
    };
};

// Composant HeaderMenus simplifié
const HeaderMenus = () => (
  <ul>
    <li><a href="#accueil">Accueil</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
);

// Composants Offcanvas simplifiés
const CartOffcanvas = ({ openCartMini, setOpenCartMini }) => openCartMini && (<div className="offcanvas-overlay">Mini Panier</div>);
const MobileOffcanvas = ({ openOffcanvas, setOpenOffcanvas }) => openOffcanvas && (<div className="offcanvas-overlay">Menu Mobile</div>);


export default function HeaderFour() {
  const {sticky,headerRef,headerFullWidth,adjustMenuBackground} = useSticky();
  const [openCartMini, setOpenCartMini] = React.useState(false);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  
  useEffect(() => {
    headerFullWidth();
    adjustMenuBackground();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Styles pour forcer le Header à être fixe et décalé
  // J'ajoute 'relative' au conteneur du Header pour garantir que le z-index fonctionne correctement.
  const fixedHeaderStyle = {
    position: 'fixed',
    top: BANNER_HEIGHT, // Décalage sous la banderole d'offre
    zIndex: 9999, // Un z-index très élevé
    width: '100%',
    // Ajout d'une ombre pour qu'il soit visuellement clair qu'il survolle le contenu
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
    backgroundColor: 'white', // Assurer un fond pour qu'il ne soit pas transparent
    height: HEADER_HEIGHT,
  };
  
  // Le 'sticky' de votre hook sera appliqué en plus de ces styles (si le hook ne définit pas sa propre position)
  const headerClasses = `tp-header-3-area z-index-5 ${sticky ? 'header-sticky' : ''}`;

  return (
    <>
      {/* Le Header est enveloppé dans un div fixe pour garantir le survol. */}
      <div style={fixedHeaderStyle}>
        <header ref={headerRef}>
          <div id="header-sticky" className={headerClasses} style={{ height: '100%' }}>
            <span className="menu-bg"></span> 
            <div className="container container-1740">
              <div className="row align-items-center ">
                <div className="col-xl-3 col-lg-6 col-md-6 col-6 ">
                  <div className="tp-header-logo tp-header-3-logo pt-20px">
                    {/* Remplacement de Link par <a> et Image par <img> ou div placeholder */}
                    <a className="logo-1" href="/dentiste" style={{ height: '40px', width: '120px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{color: '#0056b3', fontWeight: 'bold'}}>Logo Dentiste</span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-xl-block ">
                  <div className="tp-header-3-menu-wrap text-center ">
                    <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                      <div className="tp-header-3-menu header-main-menu">
                        <nav className="tp-main-menu-content">
                          <HeaderMenus />
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                  <div className="tp-header-3-right d-flex align-items-center justify-content-end pt-20px">
                    <button onClick={() => setOpenOffCanvas(true)} className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none ">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* cart mini */}
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      {/* cart mini */}

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
