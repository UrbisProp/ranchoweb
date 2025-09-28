# Guía de Despliegue en Vercel

## 📋 Pasos para Desplegar

### 1. Preparar el Repositorio en GitHub

1. **Crear un nuevo repositorio en GitHub**:
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Nombre sugerido: `sitio-corretaje-propiedades`
   - Mantén el repositorio como público o privado según prefieras

2. **Subir el código al repositorio**:
   ```bash
   # Agregar el repositorio remoto (reemplaza con tu URL)
   git remote add origin https://github.com/tu-usuario/sitio-corretaje-propiedades.git
   
   # Subir el código
   git push -u origin master
   ```

### 2. Configurar Vercel

1. **Crear cuenta en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub

2. **Importar el proyecto**:
   - Haz clic en "New Project"
   - Selecciona "Import Git Repository"
   - Busca y selecciona tu repositorio `sitio-corretaje-propiedades`

3. **Configuración del proyecto**:
   - **Framework Preset**: Vite (se detectará automáticamente)
   - **Root Directory**: `./` (directorio raíz)
   - **Build Command**: `pnpm run build` (se configurará automáticamente)
   - **Output Directory**: `dist` (se configurará automáticamente)

4. **Variables de entorno** (opcional):
   - Si necesitas configurar variables de entorno, agrégalas en la sección "Environment Variables"
   - Ejemplo: `VITE_CONTACT_EMAIL=contacto@corretajepremium.cl`

5. **Desplegar**:
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará tu sitio automáticamente

### 3. Configuración del Dominio (Opcional)

1. **Dominio personalizado**:
   - En el dashboard de Vercel, ve a tu proyecto
   - Haz clic en "Settings" > "Domains"
   - Agrega tu dominio personalizado (ej: `www.corretajepremium.cl`)

2. **Configurar DNS**:
   - En tu proveedor de dominio, configura los registros DNS:
     - Tipo: `CNAME`
     - Nombre: `www`
     - Valor: `cname.vercel-dns.com`

### 4. Actualizaciones Automáticas

Una vez configurado, cada vez que hagas push a la rama `master` de tu repositorio, Vercel desplegará automáticamente los cambios.

```bash
# Para actualizar el sitio
git add .
git commit -m "Descripción de los cambios"
git push origin master
```

## 🔧 Configuraciones Adicionales

### Analytics (Opcional)
- Vercel ofrece analytics integrados
- Ve a "Settings" > "Analytics" para habilitarlos

### Optimización de Performance
El sitio ya está optimizado con:
- ✅ Lazy loading de imágenes
- ✅ Code splitting automático con Vite
- ✅ Compresión de assets
- ✅ Configuración de cache headers

### SEO
Para mejorar el SEO, considera:
- Agregar meta tags específicos en `index.html`
- Implementar structured data para propiedades
- Configurar sitemap.xml
- Agregar Google Analytics

## 🚀 URL de Ejemplo

Una vez desplegado, tu sitio estará disponible en:
- URL temporal de Vercel: `https://sitio-corretaje-propiedades-xxx.vercel.app`
- Dominio personalizado: `https://www.corretajepremium.cl` (si lo configuras)

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa los logs de build en Vercel
2. Verifica que todas las dependencias estén correctamente instaladas
3. Asegúrate de que el archivo `vercel.json` esté en el directorio raíz

## ✅ Checklist de Despliegue

- [ ] Repositorio creado en GitHub
- [ ] Código subido al repositorio
- [ ] Proyecto importado en Vercel
- [ ] Primer despliegue exitoso
- [ ] Sitio web funcionando correctamente
- [ ] Dominio personalizado configurado (opcional)
- [ ] Analytics configurados (opcional)

¡Tu sitio web estará listo para recibir clientes!
