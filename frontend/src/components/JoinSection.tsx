import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function JoinSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://tu-backend.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: '¡Solicitud enviada!',
          description: 'Nos pondremos en contacto contigo pronto para completar tu asociación.',
        });
        setFormData({ name: '', email: '', phone: '', type: '', message: '' });
      } else {
        toast({
          title: 'Error al enviar',
          description: 'Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error de conexión',
        description: 'No se pudo conectar con el servidor. Inténtalo más tarde.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-green-700 to-green-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Únete a AEXTRECIBER</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Forma parte de la comunidad de ciberseguridad de Extremadura</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-2xl animate-slide-up">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl text-gray-900">Formulario de Asociación</CardTitle>
              <CardDescription className="text-base">Completa el formulario y nos pondremos en contacto contigo</CardDescription>
            </CardHeader>
            <CardContent className="px-6 md:px-12 pb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre completo" required className="h-12" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="h-12" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+34 600 000 000" required className="h-12" />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de asociado *
                  </label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="profesional">Profesional de ciberseguridad</SelectItem>
                      <SelectItem value="empresa">Empresa</SelectItem>
                      <SelectItem value="institucion">Institución educativa</SelectItem>
                      <SelectItem value="estudiante">Estudiante</SelectItem>
                      <SelectItem value="ciudadano">Ciudadano interesado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje (opcional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos por qué quieres unirte a AEXTRECIBER..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                  {loading ? 'Enviando...' : 'Enviar Solicitud'}
                  <UserPlus className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-white/90">Miembros Activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/90">Eventos Realizados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-white/90">Personas Formadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}