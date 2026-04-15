import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cookie, FileText, Lock } from 'lucide-react';

export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Información Legal</h1>
              <p className="text-xl text-gray-600">Aviso Legal, Política de Privacidad y Cookies</p>
            </div>

            {/* Aviso Legal */}
            <Card className="mb-8 border-none shadow-lg animate-slide-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl">Aviso Legal</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Datos Identificativos</h3>
                  <p>
                    En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa a los usuarios de los datos identificativos de la entidad titular del sitio web:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li><strong>Denominación social:</strong> Asociación Extremeña de Ciberseguridad (AEXTRECIBER)</li>
                    <li><strong>Domicilio:</strong> Extremadura, España</li>
                    <li><strong>Correo electrónico:</strong> info@aextreciber.com</li>
                    <li><strong>Sitio web:</strong> https://aextreciber.com</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Objeto</h3>
                  <p>
                    AEXTRECIBER es una asociación sin ánimo de lucro cuyo objeto es promover la ciberseguridad en Extremadura mediante formación, concienciación y apoyo profesional en seguridad informática.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Condiciones de Uso</h3>
                  <p>
                    El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación plena de todas las condiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que AEXTRECIBER ofrece a través de su sitio web.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Propiedad Intelectual e Industrial</h3>
                  <p>
                    Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad intelectual de AEXTRECIBER, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsabilidad</h3>
                  <p>
                    AEXTRECIBER no se hace responsable de los daños y perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo de este sistema electrónico, motivadas por causas ajenas a AEXTRECIBER.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Política de Privacidad */}
            <Card className="mb-8 border-none shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl">Política de Privacidad</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsable del Tratamiento</h3>
                  <p>
                    El responsable del tratamiento de los datos personales recogidos en este sitio web es AEXTRECIBER (Asociación Extremeña de Ciberseguridad), con domicilio en Extremadura, España, y correo electrónico info@aextreciber.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Finalidad del Tratamiento</h3>
                  <p>Los datos personales que nos proporcione serán utilizados para:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>Gestionar su solicitud de asociación a AEXTRECIBER</li>
                    <li>Mantener contacto con los asociados y usuarios interesados</li>
                    <li>Enviar información sobre actividades, eventos y formaciones</li>
                    <li>Gestionar consultas y solicitudes de información</li>
                    <li>Cumplir con obligaciones legales</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legitimación</h3>
                  <p>
                    La base legal para el tratamiento de sus datos es el consentimiento del interesado al enviar el formulario de contacto o asociación, así como el interés legítimo de AEXTRECIBER en mantener relaciones con sus asociados y usuarios.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conservación de Datos</h3>
                  <p>
                    Los datos personales se conservarán mientras se mantenga la relación con AEXTRECIBER y, posteriormente, durante el plazo legalmente establecido para atender posibles responsabilidades.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Derechos del Usuario</h3>
                  <p>Los usuarios tienen derecho a:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li><strong>Acceso:</strong> Conocer qué datos personales estamos tratando</li>
                    <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</li>
                    <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                    <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                    <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                    <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                  </ul>
                  <p className="mt-3">
                    Para ejercer estos derechos, puede contactar con nosotros en info@aextreciber.com, adjuntando copia de su DNI o documento identificativo equivalente.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Seguridad</h3>
                  <p>
                    AEXTRECIBER ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales que trata, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Política de Cookies */}
            <Card className="mb-8 border-none shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Cookie className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl">Política de Cookies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Qué son las cookies?</h3>
                  <p>
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Tipos de Cookies que Utilizamos</h3>
                  
                  <div className="space-y-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Cookies Técnicas (Necesarias)</h4>
                      <p>
                        Son imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes opciones y servicios. Sin estas cookies, el sitio web no puede funcionar correctamente.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Cookies de Preferencias</h4>
                      <p>
                        Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios, como el idioma o el número de resultados a mostrar.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Cookies de Análisis</h4>
                      <p>
                        Permiten cuantificar el número de usuarios y realizar análisis estadísticos de cómo los usuarios utilizan el sitio web. Para ello se analiza su navegación con el fin de mejorar la oferta de productos o servicios.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de Terceros</h3>
                  <p>
                    Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos y de análisis del uso del sitio web. Estos servicios pueden establecer sus propias cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestión de Cookies</h3>
                  <p>
                    Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de Internet. En caso de que no permita la instalación de cookies en su navegador, es posible que no pueda acceder a algunos de los servicios y que su experiencia en nuestro sitio web pueda resultar menos satisfactoria.
                  </p>
                  <p className="mt-3">
                    Para más información sobre cómo gestionar las cookies en los navegadores más comunes:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Actualización de la Política de Cookies</h3>
                  <p>
                    AEXTRECIBER puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Se recomienda a los usuarios que la visiten periódicamente.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-none shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes alguna duda?</h3>
                <p className="text-gray-600 mb-6">
                  Si tienes alguna pregunta sobre nuestra política de privacidad, cookies o cualquier aspecto legal, no dudes en contactarnos.
                </p>
                <a href="mailto:info@aextreciber.com" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                  <Shield className="w-5 h-5" />
                  info@aextreciber.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}