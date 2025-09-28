import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Settings, 
  DollarSign, 
  FileText, 
  Users, 
  Wrench, 
  Shield, 
  Clock, 
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Home,
  Calendar,
  AlertTriangle,
  Star
} from 'lucide-react'

const Administracion = () => {
  const services = [
    {
      icon: DollarSign,
      title: 'Gestión de Arriendos',
      description: 'Cobranza puntual de arriendos, gestión de garantías y depósitos, control de morosidad y seguimiento de pagos.',
      features: ['Cobranza automatizada', 'Reportes mensuales', 'Control de morosidad', 'Gestión de garantías']
    },
    {
      icon: Wrench,
      title: 'Mantención y Reparaciones',
      description: 'Coordinación de mantenciones preventivas y correctivas, supervisión de trabajos y control de calidad.',
      features: ['Red de proveedores', 'Supervisión de trabajos', 'Presupuestos competitivos', 'Garantía de trabajos']
    },
    {
      icon: Users,
      title: 'Gestión de Inquilinos',
      description: 'Selección rigurosa de inquilinos, gestión de contratos, atención de reclamos y mediación de conflictos.',
      features: ['Evaluación crediticia', 'Contratos legales', 'Atención 24/7', 'Mediación de conflictos']
    },
    {
      icon: FileText,
      title: 'Reportes y Documentación',
      description: 'Informes detallados de ingresos y gastos, documentación legal actualizada y reportes de estado de la propiedad.',
      features: ['Informes mensuales', 'Documentación legal', 'Estados financieros', 'Fotografías de inspección']
    },
    {
      icon: Shield,
      title: 'Seguros y Protección',
      description: 'Gestión de seguros de la propiedad, cobertura de responsabilidad civil y protección contra daños.',
      features: ['Seguros integrales', 'Cobertura de daños', 'Responsabilidad civil', 'Asesoría legal']
    },
    {
      icon: BarChart3,
      title: 'Análisis de Mercado',
      description: 'Evaluación periódica del valor de arriendo, análisis de mercado local y recomendaciones de mejoras.',
      features: ['Valuación periódica', 'Análisis de mercado', 'Recomendaciones', 'Optimización de ingresos']
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Evaluación Inicial',
      description: 'Visitamos tu propiedad para evaluar su estado actual y potencial de arriendo.'
    },
    {
      step: 2,
      title: 'Propuesta Personalizada',
      description: 'Desarrollamos un plan de administración adaptado a tus necesidades específicas.'
    },
    {
      step: 3,
      title: 'Búsqueda de Inquilinos',
      description: 'Promocionamos tu propiedad y seleccionamos inquilinos calificados.'
    },
    {
      step: 4,
      title: 'Gestión Continua',
      description: 'Administramos todos los aspectos de tu propiedad con reportes regulares.'
    }
  ]

  const benefits = [
    'Ingresos pasivos garantizados',
    'Reducción de vacancia',
    'Mantención profesional',
    'Tranquilidad total',
    'Valorización de la propiedad',
    'Cumplimiento legal'
  ]

  const testimonials = [
    {
      name: 'Roberto Silva',
      property: 'Departamento en Providencia',
      text: 'Excelente servicio. Mi propiedad siempre está ocupada y recibo los pagos puntualmente.',
      rating: 5,
      years: 3
    },
    {
      name: 'Carmen López',
      property: 'Casa en Las Condes',
      text: 'Profesionales confiables. Me mantienen informada de todo y resuelven cualquier problema rápidamente.',
      rating: 5,
      years: 2
    },
    {
      name: 'Miguel Torres',
      property: 'Oficina Comercial',
      text: 'La mejor decisión fue confiarles la administración. Los reportes son detallados y transparentes.',
      rating: 5,
      years: 4
    }
  ]

  const pricing = [
    {
      name: 'Básico',
      percentage: '8%',
      description: 'Ideal para propiedades residenciales simples',
      features: [
        'Gestión de arriendos',
        'Cobranza mensual',
        'Reporte básico',
        'Atención telefónica'
      ]
    },
    {
      name: 'Completo',
      percentage: '10%',
      description: 'Servicio integral para máxima tranquilidad',
      features: [
        'Todos los servicios básicos',
        'Mantención y reparaciones',
        'Gestión de inquilinos',
        'Reportes detallados',
        'Seguros incluidos',
        'Atención 24/7'
      ],
      popular: true
    },
    {
      name: 'Premium',
      percentage: '12%',
      description: 'Para propiedades de alto valor y exigencia',
      features: [
        'Todos los servicios completos',
        'Análisis de mercado',
        'Mejoras sugeridas',
        'Gestión de proyectos',
        'Asesoría legal especializada',
        'Concierge service'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Administración de Propiedades</h1>
          <p className="text-xl text-purple-100">
            Maximiza el rendimiento de tu inversión inmobiliaria con nuestro servicio integral
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Deja que nosotros nos encarguemos de todo
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nuestro servicio de administración de propiedades te permite generar ingresos pasivos 
                mientras nosotros nos ocupamos de todos los detalles. Desde la búsqueda de inquilinos 
                hasta el mantenimiento, te ofrecemos tranquilidad total.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Solicitar Evaluación Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="Administración de propiedades"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rentabilidad promedio</p>
                    <p className="text-2xl font-bold text-gray-900">+15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicios Integrales de Administración
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un servicio completo que abarca todos los aspectos de la administración inmobiliaria, 
              desde la gestión financiera hasta el mantenimiento físico de tu propiedad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-purple-100 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600">
              Un proceso estructurado para garantizar el mejor servicio desde el primer día
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-purple-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planes de Administración
            </h2>
            <p className="text-xl text-gray-600">
              Comisiones transparentes basadas en el arriendo mensual de tu propiedad
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-1">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 my-4">
                    {plan.percentage}
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                  >
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros propietarios
            </h2>
            <p className="text-xl text-gray-600">
              La confianza de nuestros clientes es nuestro mayor activo
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
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.property}</p>
                    <p className="text-sm text-purple-600">{testimonial.years} años con nosotros</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para maximizar el rendimiento de tu propiedad?
          </h2>
          <p className="text-xl mb-8 text-purple-100 leading-relaxed">
            Solicita una evaluación gratuita y descubre cómo podemos ayudarte a generar 
            ingresos pasivos con total tranquilidad.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-purple-100">Propiedades administradas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <p className="text-purple-100">Satisfacción del cliente</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <p className="text-purple-100">Años de experiencia</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Llamar para Evaluación
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
              <Mail className="h-5 w-5 mr-2" />
              Solicitar Información
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Administracion
