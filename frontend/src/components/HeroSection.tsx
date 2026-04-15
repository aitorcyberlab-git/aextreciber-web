import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export default function HeroSection() {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/3e28be35-3436-4100-ab75-ad2443a839a8.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <Shield className="w-20 h-20 text-green-300" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asociación Extremeña de Ciberseguridad
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Promoviendo la seguridad digital en Extremadura a través de formación, concienciación y apoyo profesional en ciberseguridad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToJoin} size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Únete a Nosotros
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="!bg-transparent border-2 border-white text-white hover:!bg-white hover:text-primary text-lg px-8 py-6"
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}