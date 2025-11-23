# Transmilenio App

Aplicación web interactiva de Transmilenio, el sistema de transporte masivo de Bogotá D.C.

## 🚀 Características

### ✅ Implementado
- **Página de inicio** con buscador de rutas y alertas en tiempo real
- **Gestión de rutas** con búsqueda y filtros avanzados
- **Detalles de ruta** con listado de estaciones y información detallada
- **Mapa interactivo** de estaciones y líneas
- **Centro de alertas** con notificaciones críticas, advertencias e información
- **Perfil de usuario** con información de cuenta y tarjeta de Transmilenio
- **Interfaz responsiva** optimizada para móvil y desktop
- **Navegación completa** con header y footer

### 📱 Páginas Disponibles

1. **Inicio** (`/`) - Dashboard principal
   - Buscador de rutas
   - Alertas activas
   - Rutas destacadas
   - Líneas disponibles

2. **Rutas** (`/rutas`) - Catálogo completo
   - Listado de todas las rutas
   - Filtros por tipo de servicio
   - Filtros por estado operacional
   - Tarjetas informativas de cada ruta

3. **Detalle de Ruta** (`/rutas/[id]`) - Información completa
   - Descripción de la ruta
   - Listado de estaciones
   - Estado operacional
   - Información de distancia y tiempo

4. **Mapa** (`/mapa`) - Visualización geográfica
   - Mapa con ubicación de estaciones
   - Listado de estaciones
   - Información de líneas

5. **Alertas** (`/alertas`) - Centro de notificaciones
   - Alertas críticas, advertencias e información
   - Líneas afectadas
   - Timestamps de cada alerta
   - Suscripción a notificaciones

6. **Perfil** (`/perfil`) - Gestión de cuenta
   - Información de usuario
   - Tarjeta de Transmilenio
   - Saldo disponible
   - Historial de viajes
   - Configuración de cuenta

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16.0.3
- **React**: 19.2.0
- **Estilos**: Tailwind CSS 4
- **Tipado**: TypeScript 5
- **Herramientas**: ESLint, PostCSS

## 📁 Estructura del Proyecto

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navegación principal
│   │   └── Footer.tsx        # Pie de página
│   ├── RouteCard.tsx         # Card de rutas
│   ├── SearchRoute.tsx       # Buscador de rutas
│   ├── AlertBanner.tsx       # Banner de alertas
│   └── LinesList.tsx         # Listado de líneas
├── lib/
│   └── data.ts              # Datos simulados
├── rutas/
│   ├── page.tsx             # Página de rutas
│   └── [id]/
│       └── page.tsx         # Detalle de ruta
├── mapa/
│   └── page.tsx             # Página de mapa
├── alertas/
│   └── page.tsx             # Página de alertas
├── perfil/
│   └── page.tsx             # Página de perfil
├── layout.tsx               # Layout principal
├── page.tsx                 # Página de inicio
├── not-found.tsx            # Página 404
└── globals.css              # Estilos globales
```

## 🎨 Paleta de Colores

- **Amarillo (Primario)**: `#FFD700` - Color principal de Transmilenio
- **Gris Oscuro**: `#1A1A1A` - Fondo
- **Gris Claro**: `#F5F5F5` - Fondo secundario
- **Texto Oscuro**: `#333333`
- **Éxito**: `#4CAF50` (Verde)
- **Advertencia**: `#FF9800` (Naranja)
- **Peligro**: `#F44336` (Rojo)
- **Información**: `#2196F3` (Azul)

## 🚀 Instalación y Ejecución

### Prerequisites
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar versión producción
npm start

# Lint del código
npm run lint
```

La aplicación estará disponible en `http://localhost:3000`

## 📊 Datos Simulados

La aplicación incluye datos simulados de:
- 8 estaciones principales de Transmilenio
- 5 rutas troncales operativas
- 5 líneas (A, B, C, D, K)
- 3 alertas activas

Todos estos datos se encuentran en `app/lib/data.ts` y pueden ser reemplazados con datos reales de una API.

## 🔒 Componentes de Interfaz

### SearchRoute
Componente para buscar rutas entre dos estaciones.
```tsx
<SearchRoute onSearch={(from, to) => console.log(from, to)} />
```

### RouteCard
Tarjeta informativa de una ruta.
```tsx
<RouteCard route={route} />
```

### AlertBanner
Banner con alertas activas.
```tsx
<AlertBanner />
```

### LinesList
Listado de líneas disponibles.
```tsx
<LinesList />
```

## 📱 Responsive Design

La aplicación es completamente responsiva:
- **Mobile**: Optimizado para pantallas < 768px
- **Tablet**: Optimizado para pantallas 768px - 1024px
- **Desktop**: Optimizado para pantallas > 1024px

## 🎯 Posibles Mejoras

- [ ] Integración con API real de Transmilenio
- [ ] Autenticación de usuarios
- [ ] Sistema de pagos real
- [ ] Mapa interactivo con Google Maps o Leaflet
- [ ] Notificaciones en tiempo real con WebSockets
- [ ] Historial de viajes completo
- [ ] Comentarios y reseñas de rutas
- [ ] Dark mode
- [ ] Multi-idioma
- [ ] Búsqueda de rutas avanzada con múltiples paradas

## 📄 Licencia

Este proyecto es una demostración educativa de la interfaz de Transmilenio.

## 👨‍💻 Autor

Desarrollado como aplicación web replica de Transmilenio.

---

**¡Gracias por usar Transmilenio App!** 🚌
