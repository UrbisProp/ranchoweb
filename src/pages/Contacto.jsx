import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertCircle,
  User,
  Home
} from 'lucide-react'

const Contacto = () => {
  const [formData, setFormData] = useState({
    // Información personal
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    
    // Tipo de servicio
    tipoServicio: '',
    
    // Información de búsqueda
    tipoBusqueda: '',
    ubicacionPreferida: '',
    presupuestoMin: '',
    presupuestoMax: '',
    
    // Características deseadas
    dormitorios: '',
    banos: '',
    estacionamientos: '',
    caracteristicas: [],
    
    // Información financiera
    creditoPreaprobado: '',
    montoPreaprobado: '',
    
    // Tiempo
    tiempoLimite: '',
    fechaDisponibilidad: '',
    
    // Comentarios
    comentarios: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (feature, checked) => {
    setFormData(prev => ({
      ...prev,
      caracteristicas: checked 
        ? [...prev.caracteristicas, feature]
        : prev.caracteristicas.filter(f => f !== feature)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset form
      setFormData({
        nombre: '', apellido: '', email: '', telefono: '',
        tipoServicio: '', tipoBusqueda: '', ubicacionPreferida: '',
        presupuestoMin: '', presupuestoMax: '', dormitorios: '',
        banos: '', estacionamientos: '', caracteristicas: [],
        creditoPreaprobado: '', montoPreaprobado: '', tiempoLimite: '',
        fechaDisponibilidad: '', comentarios: ''
      })
    }, 2000)
  }

  const caracteristicasDisponibles = [
    'Jardín', 'Terraza', 'Balcón', 'Piscina', 'Gimnasio', 'Quincho',
    'Bodega', 'Calefacción Central', 'Aire Acondicionado', 'Cocina Equipada',
    'Walk-in Closet', 'Portón Automático', 'Seguridad 24/7', 'Ascensor'
  ]

  const ubicaciones = [
    'Valparaiso', 'Viña del Mar', 'Quilpue', 'Villa Alemana', 'Santiago Centro',
    'La Reina', 'Macul', 'San Miguel', 'Maipú', 'Limache',
    'Valparaíso', 'Concón', 'Reñaca'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-orange-100">
            Cuéntanos qué buscas y te ayudaremos a encontrar la propiedad perfecta
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-6 w-6 text-orange-600" />
                  <span>Información de Contacto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+56 9 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">urbisrealtor@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">Santa Ana 835 <br/>Villa Alemana, Region de Valparaiso</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 18:00<br />Sáb: 10:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Por qué elegirnos?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Atención Personalizada</p>
                      <p className="text-sm text-gray-600">Cada cliente recibe atención exclusiva y dedicada.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Respuesta Rápida</p>
                      <p className="text-sm text-gray-600">Respondemos todas las consultas en menos de 24 horas.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Experiencia Local</p>
                      <p className="text-sm text-gray-600">Conocimiento profundo del mercado inmobiliario local.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-6 w-6 text-orange-600" />
                  <span>Formulario de Contacto</span>
                </CardTitle>
                <CardDescription>
                  Completa este formulario con la mayor información posible para brindarte el mejor servicio
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800">¡Gracias! Hemos recibido tu consulta. Te contactaremos pronto.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <User className="h-5 w-5 text-orange-600" />
                      <span>Información Personal</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="apellido">Apellido *</Label>
                        <Input
                          id="apellido"
                          value={formData.apellido}
                          onChange={(e) => handleInputChange('apellido', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tipo de Servicio */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <Building className="h-5 w-5 text-orange-600" />
                      <span>Tipo de Servicio</span>
                    </h3>
                    <Select value={formData.tipoServicio} onValueChange={(value) => handleInputChange('tipoServicio', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el servicio que necesitas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compra">Compra de Propiedad</SelectItem>
                        <SelectItem value="arriendo">Arriendo de Propiedad</SelectItem>
                        <SelectItem value="administracion">Administración de Propiedad</SelectItem>
                        <SelectItem value="venta">Venta de mi Propiedad</SelectItem>
                        <SelectItem value="consultoria">Consultoría Inmobiliaria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Información de Búsqueda */}
                  {(formData.tipoServicio === 'compra' || formData.tipoServicio === 'arriendo') && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                        <Home className="h-5 w-5 text-orange-600" />
                        <span>Detalles de Búsqueda</span>
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="tipoBusqueda">Tipo de Propiedad</Label>
                          <Select value={formData.tipoBusqueda} onValueChange={(value) => handleInputChange('tipoBusqueda', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="¿Qué tipo de propiedad buscas?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="casa">Casa</SelectItem>
                              <SelectItem value="departamento">Departamento</SelectItem>
                              <SelectItem value="townhouse">Townhouse</SelectItem>
                              <SelectItem value="penthouse">Penthouse</SelectItem>
                              <SelectItem value="loft">Loft</SelectItem>
                              <SelectItem value="estudio">Estudio</SelectItem>
                              <SelectItem value="oficina">Oficina</SelectItem>
                              <SelectItem value="local">Local Comercial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="ubicacionPreferida">Ubicación Preferida</Label>
                          <Select value={formData.ubicacionPreferida} onValueChange={(value) => handleInputChange('ubicacionPreferida', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="¿En qué zona te gustaría vivir?" />
                            </SelectTrigger>
                            <SelectContent>
                              {ubicaciones.map((ubicacion) => (
                                <SelectItem key={ubicacion} value={ubicacion.toLowerCase()}>
                                  {ubicacion}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="presupuestoMin">
                              {formData.tipoServicio === 'compra' ? 'Presupuesto Mínimo' : 'Arriendo Mínimo'}
                            </Label>
                            <Input
                              id="presupuestoMin"
                              type="number"
                              placeholder={formData.tipoServicio === 'compra' ? '200000000' : '500000'}
                              value={formData.presupuestoMin}
                              onChange={(e) => handleInputChange('presupuestoMin', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="presupuestoMax">
                              {formData.tipoServicio === 'compra' ? 'Presupuesto Máximo' : 'Arriendo Máximo'}
                            </Label>
                            <Input
                              id="presupuestoMax"
                              type="number"
                              placeholder={formData.tipoServicio === 'compra' ? '500000000' : '1200000'}
                              value={formData.presupuestoMax}
                              onChange={(e) => handleInputChange('presupuestoMax', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="dormitorios">Dormitorios</Label>
                            <Select value={formData.dormitorios} onValueChange={(value) => handleInputChange('dormitorios', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Cantidad" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 dormitorio</SelectItem>
                                <SelectItem value="2">2 dormitorios</SelectItem>
                                <SelectItem value="3">3 dormitorios</SelectItem>
                                <SelectItem value="4">4 dormitorios</SelectItem>
                                <SelectItem value="5+">5+ dormitorios</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="banos">Baños</Label>
                            <Select value={formData.banos} onValueChange={(value) => handleInputChange('banos', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Cantidad" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 baño</SelectItem>
                                <SelectItem value="2">2 baños</SelectItem>
                                <SelectItem value="3">3 baños</SelectItem>
                                <SelectItem value="4+">4+ baños</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="estacionamientos">Estacionamientos</Label>
                            <Select value={formData.estacionamientos} onValueChange={(value) => handleInputChange('estacionamientos', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Cantidad" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0">Sin estacionamiento</SelectItem>
                                <SelectItem value="1">1 estacionamiento</SelectItem>
                                <SelectItem value="2">2 estacionamientos</SelectItem>
                                <SelectItem value="3+">3+ estacionamientos</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label>Características Deseadas</Label>
                          <div className="grid md:grid-cols-3 gap-3 mt-2">
                            {caracteristicasDisponibles.map((caracteristica) => (
                              <div key={caracteristica} className="flex items-center space-x-2">
                                <Checkbox
                                  id={caracteristica}
                                  checked={formData.caracteristicas.includes(caracteristica)}
                                  onCheckedChange={(checked) => handleCheckboxChange(caracteristica, checked)}
                                />
                                <Label htmlFor={caracteristica} className="text-sm">
                                  {caracteristica}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Información Financiera */}
                  {formData.tipoServicio === 'compra' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-orange-600" />
                        <span>Información Financiera</span>
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label>¿Tienes crédito hipotecario pre-aprobado?</Label>
                          <RadioGroup
                            value={formData.creditoPreaprobado}
                            onValueChange={(value) => handleInputChange('creditoPreaprobado', value)}
                            className="flex space-x-6 mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="si" id="credito-si" />
                              <Label htmlFor="credito-si">Sí</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="credito-no" />
                              <Label htmlFor="credito-no">No</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="proceso" id="credito-proceso" />
                              <Label htmlFor="credito-proceso">En proceso</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {formData.creditoPreaprobado === 'si' && (
                          <div>
                            <Label htmlFor="montoPreaprobado">Monto Pre-aprobado</Label>
                            <Input
                              id="montoPreaprobado"
                              type="number"
                              placeholder="300000000"
                              value={formData.montoPreaprobado}
                              onChange={(e) => handleInputChange('montoPreaprobado', e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tiempo */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-orange-600" />
                      <span>Tiempo</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="tiempoLimite">¿Hasta cuándo necesitas encontrar la propiedad?</Label>
                        <Select value={formData.tiempoLimite} onValueChange={(value) => handleInputChange('tiempoLimite', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un plazo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inmediato">Inmediatamente</SelectItem>
                            <SelectItem value="1mes">En 1 mes</SelectItem>
                            <SelectItem value="3meses">En 3 meses</SelectItem>
                            <SelectItem value="6meses">En 6 meses</SelectItem>
                            <SelectItem value="1ano">En 1 año</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="fechaDisponibilidad">¿Cuándo estarías disponible para mudarte?</Label>
                        <Input
                          id="fechaDisponibilidad"
                          type="date"
                          value={formData.fechaDisponibilidad}
                          onChange={(e) => handleInputChange('fechaDisponibilidad', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Comentarios */}
                  <div>
                    <Label htmlFor="comentarios">Comentarios Adicionales</Label>
                    <Textarea
                      id="comentarios"
                      placeholder="Cuéntanos cualquier detalle adicional que consideres importante..."
                      value={formData.comentarios}
                      onChange={(e) => handleInputChange('comentarios', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Consulta
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
