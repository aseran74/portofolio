# 📚 Módulo de Recursos Educativos - Resumen Ejecutivo

## 🎯 Qué es

Un módulo dentro de The Lab Trader que proporciona:
1. **Biblioteca curada** de 16 recursos educativos verificados sobre inversión
2. **Sistema de notas personales** para que cada usuario registre sus aprendizajes

## 🎨 Cómo se ve

```
┌─────────────────────────────────────────────────────────────┐
│  [☰ Menú Lateral]                                          │
│  • Dashboard                                                │
│  • Señales                                                  │
│  • Value Investing                                          │
│  • Simulador                                                │
│  ► 📚 RECURSOS ← NUEVO                                     │
│  • Perfil                                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  📚 Recursos Educativos                                     │
│                                                             │
│  [🔍 Buscar...]  [Todos] [Value] [YouTubers] [Mis notas]  │
│                                                             │
│  ━━━ Value Investing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐         │
│  │ 🎓 Aswath Damodaran│  │ 🏢 Cobas AM         │         │
│  │ YouTube + Blog 📝   │  │ Gestora + YouTube   │         │
│  │                     │  │                     │         │
│  │ Experto valoración  │  │ F. García Paramés   │         │
│  │ empresas, DCF       │  │ filosofía largo     │         │
│  │                     │  │ plazo               │         │
│  │ [📖 YouTube] [🔗]   │  │ [📖 Web] [▶️ YouTube]│         │
│  │ [✏️ Ver mis notas]  │  │ [✏️ Añadir notas]   │         │
│  └─────────────────────┘  └─────────────────────┘         │
│                                                             │
│  ━━━ YouTubers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ...                                                        │
└─────────────────────────────────────────────────────────────┘

                    Panel de Notas (overlay)
        ┌───────────────────────────────────────────┐
        │ 🎓 Aswath Damodaran              [✕]     │
        │                                           │
        │ [🔗 Abrir recurso ↗]                     │
        │                                           │
        │ ┌───────────────────────────────────────┐│
        │ │ Mis notas:                            ││
        │ │                                       ││
        │ │ Concepto clave: ERP (Equity Risk      ││
        │ │ Premium) - prima de riesgo que        ││
        │ │ justifica invertir en acciones vs     ││
        │ │ bonos.                                ││
        │ │                                       ││
        │ │ Vídeos recomendados:                  ││
        │ │ - Valuation methods overview          ││
        │ │ - DCF step-by-step                    ││
        │ │                                       ││
        │ │ TODO: Ver su libro "Little Book of   ││
        │ │ Valuation"                            ││
        │ │                                       ││
        │ └───────────────────────────────────────┘│
        │                                           │
        │ Última actualización: 2026-11-20 12:45   │
        │                                           │
        │ [💾 Guardar]  [🗑️ Eliminar notas]        │
        └───────────────────────────────────────────┘
```

## 🎁 Valor para el usuario

| Antes | Después |
|-------|---------|
| Recursos dispersos en bookmarks | ✅ Todo centralizado en la app |
| No sé cuáles son de calidad | ✅ 16 fuentes pre-verificadas |
| Notas en papel/Notion/etc | ✅ Notas junto a cada recurso |
| Pierdo el contexto | ✅ Veo mis notas al consultar la fuente |
| No hay seguimiento de aprendizaje | ✅ Registro mi progreso por recurso |

## 📦 16 Recursos incluidos

### 🏛️ Value Investing (6)
1. **Aswath Damodaran** - Profesor NYU, experto valoración
2. **Rankia** - Mayor comunidad financiera española
3. **Finect** - Plataforma análisis y fondos
4. **Cobas AM** - Gestora F. García Paramés
5. **Azvalor** - Gestora value española
6. **Magallanes** - Gestora Iván Martín y Carlos Tercero

### 📹 YouTubers (4)
7. **Ben Felix** - Inversión pasiva basada en evidencia
8. **The Plain Bagel** - Conceptos financieros claros
9. **Patrick Boyle** - Hedge funds y burbujas
10. **Joseph Carlson** - Dividendos e ingresos pasivos

### 📝 Blogs (3)
11. **Of Dollars and Data** - Nick Maggiulli, análisis con datos
12. **Morgan Housel** - Psicología del dinero
13. **Howard Marks** - Memos Oaktree Capital

### 📊 Cuantitativo (3)
14. **Alpha Architect** - Factor investing y backtesting
15. **Quantpedia** - Enciclopedia estrategias cuantitativas
16. **Quantocracy** - Agregador blogs trading sistemático

## 🔧 Stack técnico

```
Frontend:  Nuxt 3 + TypeScript + Tailwind CSS
Backend:   InsForge / Postgres
API:       REST (4 endpoints)
Auth:      Basada en sesión existente
```

## 📐 Arquitectura de datos

```sql
┌─────────────────────┐
│   resources         │  (catálogo maestro)
├─────────────────────┤
│ id (PK)             │
│ name                │
│ category            │
│ type                │
│ description         │
│ url_primary         │
│ url_secondary       │
│ logo_url            │
│ display_order       │
└─────────────────────┘
           │
           │ 1:N
           │
┌─────────────────────┐
│ user_resource_notes │  (notas privadas)
├─────────────────────┤
│ id (PK)             │
│ user_id (FK) ───────┼──→ users.id
│ resource_id (FK) ───┤
│ notes (text)        │
│ created_at          │
│ updated_at          │
│                     │
│ UNIQUE(user_id,     │
│        resource_id) │
└─────────────────────┘
```

## 🚀 API Endpoints

```typescript
GET    /api/resources
       Query: ?category=Value&search=damodaran&with_notes=true
       Response: Lista de recursos con flag has_notes

GET    /api/resources/:id/notes
       Response: Notas del usuario para ese recurso

POST   /api/resources/:id/notes
       Body: { notes: "..." }
       Response: Confirmación + timestamp

DELETE /api/resources/:id/notes
       Response: Confirmación eliminación
```

## 🧩 Componentes Vue

```
pages/
  recursos.vue           ← Página principal con filtros

components/
  ResourceCard.vue       ← Tarjeta de cada recurso
  NotesPanel.vue         ← Panel lateral de edición de notas
```

## ✅ Funcionalidades

- [x] Vista de recursos organizados por categorías
- [x] Filtro por categoría (tabs)
- [x] Búsqueda por nombre
- [x] Filtro "Con mis notas" (solo recursos donde tengo notas)
- [x] Badge visual en recursos con notas
- [x] Panel lateral para ver/editar notas
- [x] Guardado explícito de notas (botón "Guardar")
- [x] Eliminación de notas con confirmación
- [x] Timestamp de última edición
- [x] Enlaces externos (nueva pestaña)
- [x] Persistencia en BD (Postgres)
- [x] Privacidad: cada usuario solo ve sus notas
- [x] Responsive (móvil, tablet, desktop)

## 📋 Criterios de éxito

### Funcional
✅ Todos los 16 recursos aparecen correctamente  
✅ Filtros y búsqueda funcionan  
✅ Notas se guardan y persisten entre sesiones  
✅ Badge aparece/desaparece según haya notas  
✅ No se pueden ver notas de otros usuarios  

### Técnica
✅ API responde < 500ms  
✅ Índices de BD optimizados  
✅ Sin errores de consola  

### UX
✅ UI responsive en todos los dispositivos  
✅ Feedback visual en todas las acciones  
✅ Botones con estados hover claros  
✅ Panel no se cierra al hacer clic dentro  

## 🏗️ Plan de implementación

### Fase 1: Backend (2-3h)
1. Crear migración SQL (resources + user_resource_notes)
2. Ejecutar migración y cargar 16 recursos
3. Implementar 4 endpoints API
4. Probar con Postman/Insomnia

### Fase 2: Frontend Base (2-3h)
5. Crear página `/recursos.vue`
6. Crear componente `ResourceCard.vue`
7. Conectar API GET /resources
8. Implementar filtros y búsqueda

### Fase 3: Sistema de Notas (2-3h)
9. Crear componente `NotesPanel.vue`
10. Conectar API GET/POST/DELETE notes
11. Implementar badges de "tiene notas"
12. Añadir confirmaciones y mensajes de éxito

### Fase 4: Polish (1-2h)
13. Añadir enlace en menú lateral
14. Ajustar estilos y responsive
15. Testing manual completo
16. Correcciones UX

**Total estimado: 7-11 horas**

## 🎯 Casos de uso principales

### CU-001: Explorar recursos
```
Usuario → Menú "Recursos" → Ve 16 recursos por categorías
       → Filtra "Value Investing" → Ve solo 6 recursos de esa categoría
       → Busca "damodaran" → Ve solo ese recurso
```

### CU-002: Añadir notas
```
Usuario → Click "Añadir notas" en Damodaran
       → Se abre panel lateral
       → Escribe "Concepto clave: ERP..."
       → Click "Guardar"
       → ✓ Confirmación visual
       → Badge 📝 aparece en la tarjeta
```

### CU-003: Consultar notas
```
Usuario → Click "Ver notas" en recurso con badge
       → Se abre panel con notas previas
       → Lee/edita sus notas
       → Click "Guardar" si editó
       → Cierra panel
```

### CU-004: Filtrar "Mis notas"
```
Usuario → Click tab "Con mis notas"
       → Ve solo recursos donde tiene notas guardadas
       → Click en cualquiera → Ve sus notas
```

## 🔐 Seguridad

- ✅ Solo usuarios autenticados pueden acceder
- ✅ Cada usuario solo ve/edita sus propias notas
- ✅ Validación backend en todos los endpoints
- ✅ Sanitización de entrada (si se usa markdown)
- ✅ Row Level Security (si se usa Supabase)

## 🎨 Diseño UI sugerido

**Colores:**
- Badge "tiene notas": Verde (#23ce6b) o amarillo (#fbbf24)
- Botón "Guardar": Verde (#23ce6b)
- Botón "Eliminar": Rojo (#ef4444)
- Hover estados: Transiciones suaves 200ms

**Iconos:**
- Recursos: 📚 o 📖
- Nota adhesiva: 📝 o ✏️
- Enlace externo: ↗ o 🔗
- Cerrar panel: ✕
- Guardar: 💾
- Eliminar: 🗑️

**Responsive:**
- Desktop: Grid de 3 columnas para tarjetas
- Tablet: Grid de 2 columnas
- Móvil: 1 columna, panel de notas ocupa toda la pantalla

## 📈 Extensiones futuras (v2.0)

Fuera de scope para v1.0, pero ideas para después:

- [ ] Etiquetas personalizadas por recurso
- [ ] Compartir notas públicamente (opt-in)
- [ ] Exportar notas a PDF/Markdown
- [ ] Añadir recursos personalizados (usuario añade sus enlaces)
- [ ] Historial de versiones de notas
- [ ] Búsqueda full-text en contenido de notas
- [ ] Estadísticas (recursos más consultados, tiempo de lectura)
- [ ] Integración con Notion/Obsidian
- [ ] Resaltados dentro de artículos (tipo Hypothesis)

## 📄 Documentación completa

Ver `SPEC_RECURSOS_EDUCATIVOS.md` (794 líneas) para:
- Requisitos funcionales detallados (RF-001 a RF-007)
- Requisitos no funcionales (RNF-001 a RNF-005)
- Modelo de datos SQL completo
- API endpoints con ejemplos de request/response
- Código de componentes Vue completo
- Funciones backend InsForge
- Script de migración SQL
- Casos de uso expandidos
- Criterios de validación

## ✨ Resumen en 3 puntos

1. **16 recursos educativos curados** sobre inversión (value, YouTubers, blogs, cuantitativo)
2. **Sistema de notas personales** para registrar aprendizajes por recurso
3. **Integrado en The Lab Trader** como un módulo más del flujo de aprendizaje → práctica

---

**Estado:** ✅ Spec completo y listo para implementación  
**Versión:** 1.0.0  
**Fecha:** 2026-11-20  
**Siguiente paso:** Implementar en repositorio The Lab Trader
