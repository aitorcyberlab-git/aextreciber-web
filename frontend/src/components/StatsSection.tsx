import { useEffect, useState } from 'react';
import { Leaf, Users, Truck, Award } from 'lucide-react';

const stats = [
  {
    icon: Leaf,
    value: 150000,
    suffix: '+',
    label: 'Toneladas Recicladas',
    color: 'text-green-600',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Empresas Atendidas',
    color: 'text-blue-600',
  },
  {
    icon: Truck,
    value: 50,
    suffix: '',
    label: 'Vehículos de Recolección',
    color: 'text-orange-600',
  },
  {
    icon: Award,
    value: 15,
    suffix: '',
    label: 'Años de Experiencia',
    color: 'text-purple-600',
  },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Impacto</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Cifras que demuestran nuestro compromiso con el medio ambiente</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-bold mb-2">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}