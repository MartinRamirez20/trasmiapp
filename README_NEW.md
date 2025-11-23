# Transmilenio App 🚌

Aplicación web moderna y completa de Transmilenio, el sistema de transporte masivo de Bogotá D.C.

Esta es una réplica visual funcional de la aplicación de Transmilenio, desarrollada con tecnologías modernas.

## ✨ Características Principales

### 🎯 Funcionalidades Implementadas

- ✅ **Dashboard Principal** - Página de inicio con búsqueda de rutas
- ✅ **Búsqueda de Rutas** - Buscar entre cualquier par de estaciones
- ✅ **Catálogo de Rutas** - Listado completo de rutas con filtros
- ✅ **Detalles de Ruta** - Información detallada de cada ruta
- ✅ **Mapa Interactivo** - Visualización de estaciones y líneas
- ✅ **Centro de Alertas** - Notificaciones del sistema
- ✅ **Perfil de Usuario** - Gestión de cuenta y tarjeta
- ✅ **Centro de Ayuda** - FAQ y contacto
- ✅ **Información General** - Acerca de Transmilenio
- ✅ **Diseño Responsivo** - Mobile, tablet y desktop
- ✅ **Interfaz Intuitiva** - Fácil de usar

## 📱 Páginas Disponibles

| Página | Ruta | Descripción |
|--------|------|-------------|
| Inicio | `/` | Dashboard con búsqueda y alertas |
| Rutas | `/rutas` | Listado completo de rutas |
| Detalle Ruta | `/rutas/[id]` | Información detallada |
| Mapa | `/mapa` | Visualización geográfica |
| Alertas | `/alertas` | Centro de notificaciones |
| Perfil | `/perfil` | Gestión de cuenta |
| Ayuda | `/ayuda` | Centro de soporte |
| Acerca de | `/about` | Información de Transmilenio |

## 🚀 Quick Start

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd trasmiapp

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Visita `http://localhost:3000`

### Comandos disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Compilar
npm start        # Producción
npm run lint     # Validar código
```

## 🏗️ Estructura del Proyecto

```
trasmiapp/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── AlertBanner.tsx
│   │   ├── Features.tsx
│   │   ├── FAQ.tsx
│   │   ├── Hero.tsx
│   │   ├── LinesList.tsx
│   │   ├── RouteCard.tsx
│   │   ├── SearchRoute.tsx
│   │   └── Statistics.tsx
│   ├── lib/
│   │   └── data.ts          # Datos simulados
│   ├── rutas/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── mapa/
│   │   └── page.tsx
│   ├── alertas/
│   │   └── page.tsx
│   ├── perfil/
│   │   └── page.tsx
│   ├── ayuda/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## 🎨 Diseño y Colores

### Paleta de Colores
- **Amarillo Primario**: `#FFD700` - Color corporativo
- **Gris Oscuro**: `#1A1A1A`
- **Gris Claro**: `#F5F5F5`
- **Éxito**: `#4CAF50` (Verde)
- **Advertencia**: `#FF9800` (Naranja)
- **Peligro**: `#F44336` (Rojo)
- **Información**: `#2196F3` (Azul)

### Componentes UI
- Cards responsivos
- Botones con estados
- Formularios interactivos
- Tarjetas de información
- Badges y etiquetas

## 📊 Datos Incluidos

### Estaciones (8)
- Calle 100, Calle 76, Carrera 7, Centro
- Suba, Américas, La Candelaria, USME

### Rutas (5)
- K05: Calle 100 - Aeropuerto
- A01: Centro - Usaquén
- B10: Suba - Patio Bonito
- D22: Centro - USME
- H06: Américas - Calle 100

### Líneas (5)
- Línea A (Roja)
- Línea B (Teal)
- Línea C (Amarilla)
- Línea D (Verde)
- Línea K (Rosa)

### Alertas (3)
Ejemplos de alertas de información, advertencia y críticas

## 🛠️ Stack Tecnológico

- **Next.js** 16.0.3 - React Framework
- **React** 19.2.0 - UI Library
- **TypeScript** 5 - Tipado de código
- **Tailwind CSS** 4 - Estilos
- **PostCSS** - Procesamiento CSS
- **ESLint** - Validación

## 📱 Características Responsivas

| Dispositivo | Ancho | Breakpoint |
|------------|-------|-----------|
| Mobile | < 768px | `sm` |
| Tablet | 768px - 1024px | `md`, `lg` |
| Desktop | > 1024px | `xl` |

## 🎯 Componentes Reutilizables

### Hero
```tsx
<Hero 
  title="Título" 
  subtitle="Subtítulo"
  backgroundGradient="from-color-1 to-color-2"
/>
```

### SearchRoute
```tsx
<SearchRoute onSearch={(from, to) => {}} />
```

### RouteCard
```tsx
<RouteCard route={routeObject} />
```

### AlertBanner
```tsx
<AlertBanner />
```

### LinesList
```tsx
<LinesList />
```

## 🔧 Configuración

### Tailwind CSS
Configurado con soporte completo para utilidades de Transmilenio.

### ESLint
Reglas de linting configuradas para Next.js.

### TypeScript
Configuración estricta para máxima seguridad de tipos.

## 📈 Futuras Mejoras

- [ ] API Backend
- [ ] Autenticación real
- [ ] Sistema de pagos integrado
- [ ] Mapa de Google Maps
- [ ] WebSockets para alertas en tiempo real
- [ ] Base de datos
- [ ] Sistema de comentarios
- [ ] Dark mode
- [ ] Multi-idioma
- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push

## 📝 Licencia

Este proyecto es una demostración educativa de la interfaz de Transmilenio.

## 👨‍💻 Desarrollado por

Réplica visual de la aplicación de Transmilenio

---

**¡Bienvenido a Transmilenio App!** 🚌

Para más información, visita [www.transmilenio.gov.co](https://www.transmilenio.gov.co)
