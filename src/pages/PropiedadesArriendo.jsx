import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Search, 
  Filter,
  Heart,
  Phone,
  Mail,
  Eye,
  Calendar,
  Shield
} from 'lucide-react'

const PropiedadesArriendo = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [bedrooms, setBedrooms] = useState('')

  // Datos de ejemplo de propiedades en arriendo
  const properties = [
    {
      id: 1,
      title: 'Departamento Moderno en Providencia',
      price: 850000,
      location: 'Providencia, Santiago',
      bedrooms: 2,
      bathrooms: 2,
      area: 90,
      parking: 1,
      type: 'Departamento',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      features: ['Amoblado', 'Gimnasio', 'Terraza', 'Metro Cercano'],
      description: 'Moderno departamento completamente amoblado en el corazón de Providencia.',
      available: '2025-02-01',
      deposit: 2,
      furnished: true
    },
    {
      id: 2,
      title: 'Casa Familiar en Las Condes',
      price: 1200000,
      location: 'Las Condes, Santiago',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      parking: 2,
      type: 'Casa',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      features: ['Jardín', 'Piscina', 'Quincho', 'Seguridad 24/7'],
      description: 'Amplia casa familiar con todas las comodidades en sector exclusivo.',
      available: '2025-01-15',
      deposit: 2,
      furnished: false
    },
    {
      id: 3,
      title: 'Loft Céntrico',
      price: 650000,
      location: 'Santiago Centro, Santiago',
      bedrooms: 1,
      bathrooms: 1,
      area: 60,
      parking: 0,
      type: 'Loft',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      features: ['Diseño Industrial', 'Ubicación Central', 'Transporte Público', 'Comercio'],
      description: 'Loft de diseño en el centro de Santiago, perfecto para profesionales.',
      available: '2025-02-15',
      deposit: 1,
      furnished: true
    },
    {
      id: 4,
      title: 'Departamento Vista al Parque',
      price: 950000,
      location: 'Ñuñoa, Santiago',
      bedrooms: 3,
      bathrooms: 2,
      area: 110,
      parking: 1,
      type: 'Departamento',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      features: ['Vista al Parque', 'Balcón', 'Cocina Equipada', 'Logia'],
      description: 'Hermoso departamento con vista privilegiada al parque y excelente iluminación.',
      available: '2025-01-30',
      deposit: 2,
      furnished: false
    },
    {
      id: 5,
      title: 'Penthouse Exclusivo',
      price: 2500000,
      location: 'Vitacura, Santiago',
      bedrooms: 4,
      bathrooms: 4,
      area: 220,
      parking: 3,
      type: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      features: ['Terraza 360°', 'Jacuzzi', 'Smart Home', 'Conserje'],
      description: 'Penthouse de lujo con tecnología de punta y servicios premium.',
      available: '2025-03-01',
      deposit: 3,
      furnished: true
    },
    {
      id: 6,
      title: 'Estudio Universitario',
      price: 450000,
      location: 'Macul, Santiago',
      bedrooms: 1,
      bathrooms: 1,
      area: 35,
      parking: 0,
      type: 'Estudio',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      features: ['Cerca Universidad', 'Amoblado', 'Internet Incluido', 'Lavandería'],
      description: 'Estudio ideal para estudiantes, completamente equipado y cerca del campus.',
      available: '2025-01-10',
      deposit: 1,
      furnished: true
    }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = !propertyType || property.type === propertyType
    const matchesBedrooms = !bedrooms || property.bedrooms.toString() === bedrooms
    
    let matchesPrice = true
    if (priceRange) {
      switch (priceRange) {
        case 'under-700':
          matchesPrice = property.price < 700000
          break
        case '700-1200':
          matchesPrice = property.price >= 700000 && property.price <= 1200000
          break
        case 'over-1200':
          matchesPrice = property.price > 1200000
          break
      }
    }
    
    return matchesSearch && matchesType && matchesBedrooms && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Propiedades en Arriendo</h1>
          <p className="text-xl text-green-100">
            Encuentra tu próximo hogar con contratos flexibles y transparentes
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por ubicación o título..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Rango de Arriendo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-700">Menos de $700.000</SelectItem>
                <SelectItem value="700-1200">$700.000 - $1.200.000</SelectItem>
                <SelectItem value="over-1200">Más de $1.200.000</SelectItem>
              </SelectContent>
            </Select>

            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Propiedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Casa">Casa</SelectItem>
                <SelectItem value="Departamento">Departamento</SelectItem>
                <SelectItem value="Loft">Loft</SelectItem>
                <SelectItem value="Estudio">Estudio</SelectItem>
                <SelectItem value="Penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>

            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger>
                <SelectValue placeholder="Dormitorios" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Dormitorio</SelectItem>
                <SelectItem value="2">2 Dormitorios</SelectItem>
                <SelectItem value="3">3 Dormitorios</SelectItem>
                <SelectItem value="4">4+ Dormitorios</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {filteredProperties.length} propiedades disponibles
          </h2>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Más Filtros</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Badge className="bg-green-600 text-white">
                    {property.type}
                  </Badge>
                  {property.furnished && (
                    <Badge className="bg-blue-600 text-white">
                      Amoblado
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="secondary" className="rounded-full p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {property.title}
                  </CardTitle>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-600">
                      {formatPrice(property.price)}
                    </span>
                    <p className="text-xs text-gray-500">por mes</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area}m²</span>
                    </div>
                    {property.parking > 0 && (
                      <div className="flex items-center">
                        <Car className="h-4 w-4 mr-1" />
                        <span>{property.parking}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Disponible:</span>
                    </div>
                    <span className="font-medium">{formatDate(property.available)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      <span>Garantía:</span>
                    </div>
                    <span className="font-medium">{property.deposit} meses</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalles
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron propiedades
            </h3>
            <p className="text-gray-600">
              Intenta ajustar tus filtros de búsqueda para encontrar más opciones.
            </p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contratos Transparentes</h3>
              <p className="text-gray-600">
                Todos nuestros contratos son claros y transparentes, sin sorpresas ni costos ocultos.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibilidad</h3>
              <p className="text-gray-600">
                Ofrecemos opciones flexibles de arriendo adaptadas a tus necesidades específicas.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte Continuo</h3>
              <p className="text-gray-600">
                Nuestro equipo está disponible para apoyarte durante todo el proceso de arriendo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas ayuda para encontrar tu próximo hogar?
          </h2>
          <p className="text-xl mb-6 text-green-100">
            Nuestros especialistas en arriendo pueden ayudarte a encontrar la propiedad perfecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Phone className="h-5 w-5 mr-2" />
              Llamar Ahora
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-900">
              <Mail className="h-5 w-5 mr-2" />
              Enviar Consulta
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropiedadesArriendo
