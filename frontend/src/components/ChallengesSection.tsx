import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const challenges = [
  'Fomentar el uso seguro de las nuevas tecnologías entre la ciudadanía extremeña',
  'Promover la igualdad de género en el ámbito de la ciberseguridad',
  'Impulsar la digitalización segura del medio rural extremeño',
  'Formar a profesionales especializados en ciberseguridad',
  'Crear una red de expertos en seguridad digital en Extremadura',
  'Concienciar sobre los riesgos del ciberbullying y la violencia digital',
  'Apoyar a empresas e instituciones en la protección de sus sistemas',
  'Desarrollar programas educativos adaptados a diferentes edades',
  'Colaborar con centros educativos en formación en seguridad digital',
  'Promover la investigación en ciberseguridad aplicada',
  'Facilitar el acceso a recursos y herramientas de protección digital',
  'Organizar eventos y conferencias sobre ciberseguridad',
  'Establecer protocolos de actuación ante incidentes de seguridad',
];

const challengeImages = [
  'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/5677cb82-c8bf-4bc5-99d7-ffc76b782b38.png',
  'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/3bb68950-2c20-45e8-9a3b-cc13a0a26983.png',
  'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/7e357bb6-e725-4790-85c1-68f6ec7a3a3b.png',
];

export default function ChallengesSection() {
  return (
    <section id="challenges" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros 13 Retos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Objetivos que guían nuestra labor diaria para hacer de Extremadura una región más segura digitalmente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {challengeImages.map((image, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={image} alt={`Reto ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}