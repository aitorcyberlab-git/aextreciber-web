import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, HeadphonesIcon, Users, Target } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Formación Especializada',
    description: 'Cursos y talleres de ciberseguridad para profesionales, empresas y ciudadanos. Desde nivel básico hasta avanzado.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/be2dc60a-8a2d-4f93-ae9b-95c7ff48b217.png',
    areas: ['Ciberseguridad básica', 'Protección de datos', 'Seguridad en redes', 'Ethical hacking'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte y Asesoramiento',
    description: 'Asistencia técnica y consultoría en seguridad informática para empresas e instituciones de Extremadura.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/624844fe-4dfb-492b-9715-3618893f1c36.png',
    areas: ['Auditorías de seguridad', 'Planes de contingencia', 'Cumplimiento normativo', 'Respuesta a incidentes'],
  },
  {
    icon: Users,
    title: 'Red de Expertos',
    description: 'Conectamos profesionales de la ciberseguridad en Extremadura para compartir conocimientos y experiencias.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/0b81252b-01ac-45e1-b4ee-3bf94a3df4c9.png',
    areas: ['Networking profesional', 'Eventos y conferencias', 'Grupos de trabajo', 'Proyectos colaborativos'],
  },
  {
    icon: Target,
    title: 'Concienciación Social',
    description: 'Campañas educativas sobre seguridad digital, ciberbullying, violencia digital y uso responsable de la tecnología.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/5677cb82-c8bf-4bc5-99d7-ffc76b782b38.png',
    areas: ['Charlas en centros educativos', 'Talleres para familias', 'Prevención del ciberbullying', 'Seguridad para mayores'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ofrecemos soluciones integrales en ciberseguridad adaptadas a las necesidades de Extremadura</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-hover border-none shadow-lg overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}