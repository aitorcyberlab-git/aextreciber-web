const projects = [
  {
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/bb202834-4944-4111-a52f-533f87ad15a1.png',
    title: 'Planta de Reciclaje Moderna',
    description: 'Instalación de última generación con capacidad para 50,000 toneladas anuales',
  },
  {
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/e4ebed3c-e2de-400a-8a5d-ce821ddf0ff8.png',
    title: 'Flota de Recolección',
    description: 'Vehículos ecológicos para recolección eficiente en toda la región',
  },
  {
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-10/3cc6a3db-05ee-4f7e-929f-b168cfd05844.png',
    title: 'Centro de Clasificación',
    description: 'Tecnología avanzada de separación automática de materiales',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Infraestructura de vanguardia para un reciclaje eficiente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}