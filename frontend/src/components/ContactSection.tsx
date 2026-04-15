import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estamos aquí para ayudarte. Ponte en contacto con nosotros</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-lg card-hover">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
              <a href="mailto:info@aextreciber.com" className="text-primary hover:underline">
                info@aextreciber.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg card-hover">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ubicación</h3>
              <p className="text-gray-600">Extremadura, España</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg card-hover">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web</h3>
              <a href="https://aextreciber.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                aextreciber.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}