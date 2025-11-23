# 🚌 Transmilenio App - Réplica Funcional

Aplicación web interactiva que replica la interfaz y funcionalidades de la app oficial de Transmilenio, el sistema de transporte masivo de Bogotá D.C.

## 🎯 Características Principales

### ✅ Páginas Implementadas

1. **Inicio (/)** - Dashboard Principal
   - Carrusel de notificaciones y ofertas
   - Menú rápido de opciones
   - Estaciones cercanas
   - Botón "Planea tu viaje"
   - Zonas troncales
   - Alertas activas

2. **Rutas (/rutas)** - Catálogo de Servicios
   - Visualización de 11 zonas troncales (A-L)
   - Colores reales de cada línea
   - Información de cobertura

3. **Tarjeta (/tarjeta)** - Gestión de Tullave
   - Consulta de número de tarjeta
   - Saldo disponible con visualización circular
   - Opciones de recarga
   - Información sobre transacciones

4. **Planear Viaje (/planear-viaje)** - Mapa Interactivo
   - Mapa con grilla de calles
   - Marcador de ubicación actual
   - Área de cobertura (5 minutos)
   - Selector de origen y destino
   - Panel inferior deslizable (bottom sheet)

5. **Alertas (/alertas)** - Centro de Notificaciones
   - Alertas críticas, advertencias e información
   - Filtrado por línea afectada
   - Historial de cambios

### 🧩 Componentes Reutilizables

- **Header** - Navegación principal con logo y menú
- **Footer** - Pie de página con información
- **CarouselBanner** - Carrusel de notificaciones
- **MainMenu** - Menú de opciones rápidas
- **NearbyStations** - Estaciones cercanas
- **PlanJourneyButton** - Botón de planificación
- **TroncalZones** - Listado de zonas troncales
- **AlertBanner** - Alertas activas
- **SearchRoute** - Buscador de rutas
- **RouteCard** - Tarjeta de ruta
- **LinesList** - Listado de líneas
- **Statistics** - Estadísticas del sistema
- **Features** - Características de la app
- **FAQ** - Preguntas frecuentes

## 🛠️ Stack Tecnológico

- **Frontend Framework**: Next.js 16.0.3
- **React**: 19.2.0
- **Estilos**: Tailwind CSS 4
- **Lenguaje**: TypeScript 5
- **Herramientas**: ESLint

## 📱 Características de Diseño

### Responsive
- ✅ Móvil (< 768px) - Optimizado para teléfono
- ✅ Tablet (768px - 1024px) - Interfaz intermedia
- ✅ Desktop (> 1024px) - Experiencia completa

### UI/UX
- Colores auténticos de Transmilenio
- Iconos intuitivos (emojis)
- Navegación clara y accesible
- Carruseles interactivos
- Bottom sheets (paneles deslizables)
- Animaciones suaves

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Rojo Transmilenio | #DC2626 | Acciones principales |
| Azul | #2563EB | Información secundaria |
| Verde | #16A34A | Éxito/Disponible |
| Gris | #6B7280 | Textos y bordes |

### Líneas Troncales
- **A**: Rojo (#DC2626) - Caracas
- **B**: Verde (#16A34A) - Autonorte
- **C**: Amarillo (#FBBF24) - Suba
- **D**: Púrpura (#A855F7) - Calle 80
- **E**: Marrón (#92400E) - NQS Central
- **F**: Rojo Oscuro (#991B1B) - Américas
- **G**: Cyan (#06B6D4) - NQS Sur
- **H**: Amarillo Oscuro (#CA8A04) - Caracas Sur
- **J**: Rosa (#EC4899) - Eje Ambiental
- **K**: Amarillo (#B45309) - Calle 26
- **L**: Verde Azulado (#0D9488) - Carrera 10

## 📁 Estructura de Carpetas

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── CarouselBanner.tsx
│   ├── MainMenu.tsx
│   ├── NearbyStations.tsx
│   ├── PlanJourneyButton.tsx
│   ├── TroncalZones.tsx
│   ├── AlertBanner.tsx
│   ├── SearchRoute.tsx
│   ├── RouteCard.tsx
│   ├── LinesList.tsx
│   ├── Statistics.tsx
│   ├── Features.tsx
│   └── FAQ.tsx
├── lib/
│   └── data.ts (Datos simulados)
├── alertas/
│   └── page.tsx
├── planear-viaje/
│   └── page.tsx
├── rutas/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
├── tarjeta/
│   └── page.tsx
├── mapa/
│   └── page.tsx
├── perfil/
│   └── page.tsx
├── layout.tsx
├── page.tsx (Inicio)
├── not-found.tsx
└── globals.css
```

## 🚀 Instalación y Ejecución

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Clonar o entrar al proyecto
cd /workspaces/trasmiapp

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Abrir navegador
# http://localhost:3000
```

### Comandos Disponibles

```bash
npm run dev      # Desarrollo (auto-reload)
npm run build    # Compilación para producción
npm start        # Ejecutar versión compilada
npm run lint     # Verificar código
```

## 📊 Datos Simulados

La aplicación incluye datos ficticios de:

- **8 Estaciones**: Centro, Calle 100, Suba, etc.
- **5 Rutas Principales**: K05, A01, B10, D22, H06
- **11 Líneas Troncales**: A, B, C, D, E, F, G, H, J, K, L
- **3 Alertas Activas**: Información, advertencias y críticas

Todos estos datos se encuentran en `app/lib/data.ts`

## 🔧 Funcionalidades Técnicas

### Estado y Contexto
- Componentes con `useState` para interactividad
- Carrusel de notificaciones con navegación
- Formularios y búsqueda reactiva

### Enrutamiento
- App Router de Next.js
- Rutas dinámicas (`/rutas/[id]`)
- Página 404 personalizada

### Estilos
- Tailwind CSS v4 con configuración personalizada
- CSS variables para temas
- Clases utilitarias personalizadas

### Tipado
- 100% TypeScript
- Interfaces para datos
- Props tipados

## 🎓 Detalles de Implementación

### Carrusel (Página Inicio)
- 3 slides rotables
- Navegación con puntos
- Transiciones suaves

### Mapa (Planear Viaje)
- SVG interactivo
- Grilla de calles
- Radio de cobertura
- Marcadores de ubicación

### Tarjeta (Saldo)
- Visualización de saldo circular
- Gradiente de fondo
- Información detallada

### Zonas Troncales
- 11 líneas con colores reales
- Información de cobertura
- Interfaz tipo lista

## 📱 Flujo de Navegación

```
Inicio (/)
├── Carrusel → Información
├── Menú Rápido
│   ├── Rutas → Zonas Troncales
│   ├── Tarjeta → Saldo y Recargas
│   ├── Planear Viaje → Mapa Interactivo
│   └── WhatsApp → Soporte
├── Estaciones Cercanas
├── Botón Planear Viaje
├── Alertas Activas
└── Zonas Troncales
```

## 🔮 Posibles Mejoras Futuras

- [ ] Integración con API real de Transmilenio
- [ ] Autenticación de usuarios
- [ ] Historial de viajes
- [ ] Sistema de pagos real
- [ ] Mapa interactivo con Google Maps o Leaflet
- [ ] Notificaciones push
- [ ] Dark mode
- [ ] Multi-idioma
- [ ] Búsqueda avanzada de rutas con múltiples paradas
- [ ] Sincronización de datos en tiempo real

## 📞 Información

**Transmilenio Oficial**
- 📞 1-8000-112-287
- 📧 info@transmilenio.gov.co
- 🌐 www.transmilenio.gov.co

## 📝 Notas

- Esta es una réplica funcional con fines educativos
- Los datos son simulados y no reflejan información real en tiempo real
- El diseño busca ser fiel a la app oficial de Transmilenio
- Totalmente responsive y funcional en dispositivos móviles

## ✅ Checklist de Desarrollo

- ✅ Página de inicio con carrusel
- ✅ Menú principal con opciones rápidas
- ✅ Estaciones cercanas
- ✅ Consulta de saldo con visualización circular
- ✅ Mapa interactivo para planear viaje
- ✅ Listado de zonas troncales
- ✅ Centro de alertas
- ✅ Componentes reutilizables
- ✅ Diseño responsive
- ✅ Código TypeScript limpio
- ✅ Documentación completa

---

**Versión**: 1.0.0  
**Última actualización**: Noviembre 2024  
**Estado**: ✅ Funcional y Listo para Usar

¡Disfruta usando Transmilenio App! 🚌
