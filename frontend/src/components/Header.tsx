import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLegalPage = location.pathname === '/legal';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl md:text-2xl font-bold text-primary">AEXTRECIBER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {!isLegalPage ? (
              <>
                <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Quiénes Somos
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('challenges')} className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Retos
                </button>
                <Link to="/legal" className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Legal
                </Link>
                <Button onClick={() => scrollToSection('join')} className="bg-primary hover:bg-primary/90">
                  Asóciate
                </Button>
              </>
            ) : (
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Volver al Inicio
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {!isLegalPage ? (
              <>
                <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                  Quiénes Somos
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('challenges')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                  Retos
                </button>
                <Link to="/legal" className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                  Legal
                </Link>
                <Button onClick={() => scrollToSection('join')} className="bg-primary hover:bg-primary/90 w-full">
                  Asóciate
                </Button>
              </>
            ) : (
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                Volver al Inicio
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}