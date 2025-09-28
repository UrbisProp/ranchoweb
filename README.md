# Sitio Web - Corretaje de Propiedades

**"Una empresa pequeña pero un Gran Servicio"**

Sitio web profesional para empresa de corretaje de propiedades desarrollado con React, Tailwind CSS y componentes modernos.

## 🏠 Características

- **Página Principal Persuasiva**: Hero section destacando el mensaje principal de la empresa
- **Catálogo de Propiedades**: Secciones separadas para ventas y arriendos con filtros avanzados
- **Servicios de Administración**: Página completa con planes y servicios de gestión inmobiliaria
- **Formulario de Contacto Completo**: Formulario detallado para capturar necesidades específicas de clientes
- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación Intuitiva**: Menú de navegación claro y accesible

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de interfaz de usuario
- **Lucide Icons** - Iconografía moderna
- **React Router** - Navegación entre páginas
- **Vite** - Herramienta de construcción y desarrollo

## 📱 Páginas Incluidas

1. **Inicio** (`/`) - Página principal con hero section y servicios destacados
2. **Propiedades en Venta** (`/propiedades-venta`) - Catálogo de propiedades para compra
3. **Propiedades en Arriendo** (`/propiedades-arriendo`) - Catálogo de propiedades para arriendo
4. **Administración** (`/administracion`) - Servicios de gestión inmobiliaria
5. **Contacto** (`/contacto`) - Formulario completo de contacto y búsqueda

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd sitio-corretaje-propiedades

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev
```

### Scripts Disponibles
```bash
# Desarrollo
pnpm run dev

# Construcción para producción
pnpm run build

# Vista previa de la construcción
pnpm run preview

# Linting
pnpm run lint
```

## 🌐 Despliegue en Vercel

Este proyecto está optimizado para despliegue en Vercel:

1. **Conectar Repositorio**: Conecta tu repositorio de GitHub a Vercel
2. **Configuración Automática**: Vercel detectará automáticamente que es un proyecto Vite/React
3. **Despliegue**: El sitio se desplegará automáticamente en cada push a la rama principal

### Variables de Entorno (Opcional)
Si necesitas configurar variables de entorno, créalas en el panel de Vercel:
- `VITE_API_URL` - URL de la API backend (si aplica)
- `VITE_CONTACT_EMAIL` - Email de contacto

## 📋 Funcionalidades del Formulario

El formulario de contacto incluye:
- **Información Personal**: Nombre, apellido, email, teléfono
- **Tipo de Servicio**: Compra, arriendo, administración, venta, consultoría
- **Detalles de Búsqueda**: Tipo de propiedad, ubicación, presupuesto
- **Características**: Dormitorios, baños, estacionamientos, amenidades
- **Información Financiera**: Estado del crédito hipotecario
- **Tiempo**: Plazos y disponibilidad
- **Comentarios Adicionales**: Campo libre para detalles específicos

## 🎨 Personalización

### Colores y Branding
Los colores principales se pueden modificar en `src/App.css`:
- Azul corporativo para navegación y elementos principales
- Verde para sección de arriendos
- Púrpura para administración
- Naranja para contacto

### Contenido
- **Propiedades**: Modifica los datos de ejemplo en las páginas de propiedades
- **Servicios**: Actualiza la información de servicios en la página de administración
- **Contacto**: Cambia la información de contacto en el componente Footer y página de Contacto

## 📞 Información de Contacto

- **Teléfono**: +56 9 1234 5678
- **Email**: contacto@corretajepremium.cl
- **Dirección**: Av. Providencia 1234, Oficina 567, Providencia, Santiago

## 📄 Licencia

Este proyecto fue desarrollado para uso comercial de la empresa de corretaje de propiedades.

---

**Desarrollado con ❤️ para brindar el mejor servicio inmobiliario**
