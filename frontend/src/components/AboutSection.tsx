import { CheckCircle2, Target, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    description: 'Promover la ciberseguridad en Extremadura mediante formación, concienciación y apoyo profesional',
  },
  {
    icon: Users,
    title: 'Nuestra Comunidad',
    description: 'Profesionales, empresas, instituciones y ciudadanos comprometidos con la seguridad digital',
  },
  {
    icon: Award,
    title: 'Nuestro Compromiso',
    description: 'Excelencia en formación y servicios de ciberseguridad adaptados a las necesidades de Extremadura',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Quiénes Somos?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AEXTRECIBER es la Asociación Extremeña de Ciberseguridad, una organización sin ánimo de lucro dedicada a fortalecer la seguridad digital en nuestra región
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/c4858c2a-2ba6-4f6c-8e56-6b5c1385c326.png"
              alt="Equipo AEXTRECIBER"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="animate-slide-in-right space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos un colectivo de profesionales de la ciberseguridad comprometidos con la protección digital de empresas, instituciones y ciudadanos de Extremadura. Nuestra
              asociación nace de la necesidad de crear un espacio de colaboración, formación y concienciación en materia de seguridad informática.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trabajamos para que Extremadura sea una región más segura digitalmente, ofreciendo formación especializada, asesoramiento técnico y promoviendo las mejores
              prácticas en ciberseguridad.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Formación continua en ciberseguridad</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Concienciación sobre amenazas digitales</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Apoyo a empresas e instituciones</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Red de profesionales especializados</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-none shadow-lg card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}