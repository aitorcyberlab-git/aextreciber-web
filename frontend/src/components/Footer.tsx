import { Shield, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const OFFSET = 80;

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.getElementById(section);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      navigate('/#' + section);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const OFFSET = 80;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">AEXTRECIBER</span>
            </div>
            <p className="text-gray-400 mb-6">Asociación Extremeña de Ciberseguridad. Promoviendo la seguridad digital en nuestra región.</p>
            <div className="flex gap-4">
              <a href="https://m.facebook.com/profile.php?id=61568175575282&name=xhp_nt__fb__action__open_user" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/aextreciber/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#challenges" onClick={(e) => handleNavClick(e, 'challenges')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Nuestros Retos
                </a>
              </li>
              <li>
                <a href="/#join" onClick={(e) => handleNavClick(e, 'join')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Asóciate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Formación en Ciberseguridad</li>
              <li>Asesoramiento Técnico</li>
              <li>Concienciación Digital</li>
              <li>Red de Expertos</li>
              <li>Eventos y Conferencias</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Extremadura, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:info@aextreciber.com" className="text-gray-400 hover:text-green-400 transition-colors">
                  info@aextreciber.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">© {currentYear} AEXTRECIBER - Asociación Extremeña de Ciberseguridad. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link to="/legal" className="hover:text-green-400 transition-colors">
                Aviso Legal y Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}