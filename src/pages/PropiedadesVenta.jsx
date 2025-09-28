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
  Eye
} from 'lucide-react'

const PropiedadesVenta = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [bedrooms, setBedrooms] = useState('')

  // Datos de ejemplo de propiedades
  const properties = [
    {
      id: 1,
      title: 'Casa Moderna en Las Condes',
      price: 450000000,
      location: 'Las Condes, Santiago',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      parking: 2,
      type: 'Casa',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      features: ['Jardín', 'Terraza', 'Cocina Equipada', 'Calefacción Central'],
      description: 'Hermosa casa moderna con excelente ubicación y todas las comodidades.'
    },
    {
      id: 2,
      title: 'Departamento Vista al Mar',
      price: 320000000,
      location: 'Viña del Mar, Valparaíso',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      parking: 1,
      type: 'Departamento',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      features: ['Vista al Mar', 'Balcón', 'Gimnasio', 'Piscina'],
      description: 'Departamento con espectacular vista al océano en el corazón de Viña del Mar.'
    },
    {
      id: 3,
      title: 'Townhouse en Providencia',
      price: 380000000,
      location: 'Providencia, Santiago',
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      parking: 2,
      type: 'Townhouse',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      features: ['Patio Privado', 'Bodega', 'Portón Automático', 'Seguridad 24/7'],
      description: 'Townhouse en condominio exclusivo con todas las comodidades modernas.'
    },
    {
      id: 4,
      title: 'Casa Familiar en Ñuñoa',
      price: 280000000,
      location: 'Ñuñoa, Santiago',
      bedrooms: 4,
      bathrooms: 2,
      area: 200,
      parking: 2,
      type: 'Casa',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      features: ['Jardín Amplio', 'Quincho', 'Bodega', 'Cerca Metro'],
      description: 'Amplia casa familiar perfecta para familias grandes con excelente conectividad.'
    },
    {
      id: 5,
      title: 'Penthouse Exclusivo',
      price: 650000000,
      location: 'Las Condes, Santiago',
      bedrooms: 4,
      bathrooms: 4,
      area: 250,
      parking: 3,
      type: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      features: ['Terraza 360°', 'Jacuzzi', 'Walk-in Closet', 'Smart Home'],
      description: 'Penthouse de lujo con tecnología de punta y vistas panorámicas de la ciudad.'
    },
    {
      id: 6,
      title: 'Departamento Céntrico',
      price: 220000000,
      location: 'Santiago Centro, Santiago',
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
      parking: 1,
      type: 'Departamento',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      features: ['Ubicación Central', 'Transporte Público', 'Comercio Cercano', 'Seguridad'],
      description: 'Departamento ideal para profesionales jóvenes en el centro de Santiago.'
    }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = !propertyType || property.type === propertyType
    const matchesBedrooms = !bedrooms || property.bedrooms.toString() === bedrooms
    
    let matchesPrice = true
    if (priceRange) {
      switch (priceRange) {
        case 'under-300':
          matchesPrice = property.price < 300000000
          break
        case '300-500':
          matchesPrice = property.price >= 300000000 && property.price <= 500000000
          break
        case 'over-500':
          matchesPrice = property.price > 500000000
          break
      }
    }
    
    return matchesSearch && matchesType && matchesBedrooms && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Propiedades en Venta</h1>
          <p className="text-xl text-blue-100">
            Encuentra la propiedad perfecta para ti y tu familia
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
                <SelectValue placeholder="Rango de Precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-300">Menos de $300M</SelectItem>
                <SelectItem value="300-500">$300M - $500M</SelectItem>
                <SelectItem value="over-500">Más de $500M</SelectItem>
              </SelectContent>
            </Select>

            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Propiedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Casa">Casa</SelectItem>
                <SelectItem value="Departamento">Departamento</SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
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
            {filteredProperties.length} propiedades encontradas
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
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {property.type}
                  </Badge>
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
                  <span className="text-2xl font-bold text-blue-600">
                    {formatPrice(property.price)}
                  </span>
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
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      <span>{property.parking}</span>
                    </div>
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

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Nuestro equipo puede ayudarte a encontrar la propiedad perfecta según tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Phone className="h-5 w-5 mr-2" />
              Llamar Ahora
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Mail className="h-5 w-5 mr-2" />
              Enviar Consulta
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropiedadesVenta
