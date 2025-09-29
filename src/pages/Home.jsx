import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Building, 
  Key, 
  Settings, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Building,
      title: 'Propiedades en Venta',
      description: 'Amplio catálogo de propiedades cuidadosamente seleccionadas para encontrar tu hogar ideal.',
      link: '/propiedades-venta'
    },
    {
      icon: Key,
      title: 'Propiedades en Arriendo',
      description: 'Opciones de arriendo flexibles con contratos transparentes y asesoría personalizada.',
      link: '/propiedades-arriendo'
    },
    {
      icon: Settings,
      title: 'Administración de Propiedades',
      description: 'Gestión integral de tu propiedad con reportes detallados y atención personalizada.',
      link: '/administracion'
    }
  ]

  const testimonials = [
    {
      name: 'María Gladys Rivera',
      text: 'Excelente servicio personalizado. Me ayudaron a encontrar la casa perfecta para mi familia. Un trato personal que revela compromiso',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      text: 'Profesionales confiables. La administración de mi propiedad ha sido impecable. Estan continuamente preocupados de los detalles que a uno a veces se le olvidan',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      text: 'Atención rápida y eficiente. Recomiendo sus servicios sin dudarlo.',
      rating: 5
    }
  ]

  const advantages = [
    'Atención personalizada y directa',
    'Respuesta rápida a tus consultas',
    'Conocimiento profundo del mercado local',
    'Transparencia en todos los procesos',
    'Seguimiento continuo post-venta',
    
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Una empresa <span className="text-yellow-400">pequeña</span>
            <br />
            pero un <span className="text-yellow-400">Gran Servicio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos atención personalizada en cada paso de tu búsqueda inmobiliaria. 
            Nuestro compromiso es brindarte el mejor servicio con la calidez humana que solo una empresa familiar puede ofrecer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              <Link to="/contacto">
                Encuentra tu Propiedad Ideal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              <Link to="/propiedades-venta">
                Ver Propiedades
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra experiencia y dedicación nos distinguen en el mercado inmobiliario. 
              Cada cliente recibe atención exclusiva y personalizada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias, 
              desde la búsqueda hasta la gestión completa de propiedades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={service.link}>
                        Conocer más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para encontrar tu próxima propiedad?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Contáctanos hoy mismo y descubre cómo nuestro servicio personalizado 
            puede hacer la diferencia en tu búsqueda inmobiliaria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+56 9 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>contacto@corretajepremium.cl</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Santiago, Chile</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              <Link to="/contacto">
                Contactar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
