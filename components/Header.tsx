
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monitora o scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Planos', href: '#planos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Contato', href: '#contato' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMenuOpen
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/80 backdrop-blur-md py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Meloi em Verde, Pet em Azul */}
          <a href="#" className="text-2xl md:text-3xl font-extrabold flex items-center tracking-tight z-[110]">
            <span className="text-[#6ecf99]">Meloi</span>
            <span className="text-[#5aa3e7]">Pet</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-meloi font-semibold text-sm uppercase tracking-wider transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-[110]">
            <a
              href="#planos"
              className="hidden sm:inline-flex bg-meloi text-white px-8 py-3 rounded-full font-bold hover:bg-[#5bb883] transition-all shadow-md hover:shadow-xl transform active:scale-95"
            >
              Assinar agora
            </a>

            {/* Mobile Burger Button */}
            <button
              className="md:hidden p-3 text-gray-700 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'translate-x-10 opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-[100] transition-all duration-500 md:hidden flex flex-col items-center justify-center px-8 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
        >
          <nav className="w-full flex flex-col items-center space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`w-full text-center py-6 text-3xl font-extrabold text-gray-900 border-b border-gray-50 hover:text-meloi transition-all active:bg-gray-50 transform duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}

            <div className={`w-full pt-10 transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <a
                href="#planos"
                onClick={closeMenu}
                className="block w-full text-center bg-meloi text-white px-10 py-6 rounded-3xl text-2xl font-bold shadow-2xl active:scale-95 transition-transform"
              >
                Assinar agora
              </a>
              <div className="mt-12 flex flex-col items-center gap-2 text-gray-400 font-medium">
                <span>Siga-nos: @meloipet</span>
                <div className="w-12 h-1 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* Spacer to prevent content jump when header is absolute/fixed if needed, 
          though Hero section padding usually handles this. */}
    </>
  );
};

export default Header;
