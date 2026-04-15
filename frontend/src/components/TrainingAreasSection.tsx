import { Shield, Users, AlertTriangle, Smartphone, Lock, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const areas = [
  {
    icon: Shield,
    title: 'Ciberseguridad',
    description: 'Fundamentos de seguridad informática, protección de sistemas y redes',
  },
  {
    icon: AlertTriangle,
    title: 'Violencia Digital',
    description: 'Prevención y actuación ante casos de acoso y violencia en entornos digitales',
  },
  {
    icon: Users,
    title: 'Ciberbullying',
    description: 'Identificación, prevención e intervención en casos de acoso escolar digital',
  },
  {
    icon: Smartphone,
    title: 'Uso Responsable de Tecnología',
    description: 'Buenas prácticas en el uso de dispositivos, redes sociales y aplicaciones',
  },
  {
    icon: Lock,
    title: 'Protección de Datos',
    description: 'RGPD, privacidad digital y gestión segura de información personal',
  },
  {
    icon: Globe,
    title: 'Seguridad en Internet',
    description: 'Navegación segura, identificación de amenazas y protección online',
  },
];

export default function TrainingAreasSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Áreas de Formación</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Programas educativos especializados para diferentes públicos y necesidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="border-none shadow-lg card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}