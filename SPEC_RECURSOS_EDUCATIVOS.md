# SPEC: Módulo de Recursos Educativos y Notas Personales

## Identificación
- **Título**: Biblioteca de recursos educativos con notas personales
- **Proyecto**: The Lab Trader
- **Versión**: 1.0.0
- **Fecha**: 2026-11-20
- **Autor**: Álvaro Serrano

## 1. Propósito e Intención

### 1.1 Objetivo
Proporcionar a los usuarios de The Lab Trader un espacio centralizado donde puedan:
- Acceder a recursos educativos curados sobre inversión, value investing y análisis cuantitativo
- Añadir, editar y consultar sus propias notas, resúmenes e ideas sobre cada recurso
- Mantener un registro personal de aprendizaje vinculado a la plataforma

### 1.2 Problema que resuelve
Actualmente los traders e inversores tienen dispersos sus recursos educativos y notas personales en múltiples lugares (marcadores del navegador, notas en papel, Notion, etc.). Este módulo centraliza:
- Referencias verificadas a educadores y plataformas de calidad
- Notas personales vinculadas a cada recurso
- Un repositorio de conocimiento que crece con el uso de la plataforma

### 1.3 Valor para el usuario
- **Centralización**: Todo el conocimiento en un solo lugar
- **Contextualización**: Notas vinculadas directamente a la fuente educativa
- **Aprendizaje continuo**: Fomenta la toma de notas y reflexión sobre lo aprendido
- **Calidad**: Recursos pre-verificados por la plataforma

## 2. Requisitos Funcionales

### 2.1 Navegación (RF-001)
**Como** usuario autenticado  
**Quiero** acceder al módulo de recursos desde el menú lateral  
**Para** consultar recursos educativos y mis notas

**Criterios de aceptación:**
- Existe un ítem "Recursos" o "Biblioteca" en el menú lateral
- Al hacer clic, navega a la ruta `/recursos` o `/biblioteca`
- El ítem del menú muestra un icono representativo (libro, biblioteca, etc.)
- El enlace se marca como activo cuando estoy en esa sección

### 2.2 Vista principal de recursos (RF-002)
**Como** usuario  
**Quiero** ver los recursos organizados por categorías  
**Para** encontrar rápidamente lo que necesito

**Criterios de aceptación:**
- Los recursos se agrupan en estas categorías:
  - **Value Investing** (Damodaran, Cobas AM, Azvalor, Magallanes Value)
  - **Comunidades y Plataformas** (Rankia, Finect)
  - **YouTubers educativos** (Ben Felix, The Plain Bagel, Patrick Boyle, Joseph Carlson)
  - **Blogs y Análisis** (Of Dollars and Data, Morgan Housel, Howard Marks)
  - **Cuantitativo y Trading Sistemático** (Alpha Architect, Quantpedia, Quantocracy)
- Cada categoría muestra:
  - Título de la categoría
  - Número de recursos
  - Lista de recursos con nombre, descripción breve y enlace
- Hay un buscador para filtrar recursos por nombre

### 2.3 Listado de recursos (RF-003)
**Como** usuario  
**Quiero** ver cada recurso con su información básica  
**Para** decidir si acceder al enlace o consultar mis notas

**Cada recurso muestra:**
- Nombre del recurso/creador
- Avatar o logo (opcional)
- Tipo: YouTube, Blog, Web, Memos, Agregador
- Descripción breve (1-2 líneas)
- Enlace externo (se abre en nueva pestaña)
- Indicador visual si tengo notas guardadas sobre ese recurso
- Botón "Ver/Añadir notas"

**Recursos incluidos:**

#### Value Investing
1. **Aswath Damodaran**
   - Tipo: YouTube + Blog
   - YouTube: https://www.youtube.com/@AswathDamodaranonValuation
   - Blog: https://pages.stern.nyu.edu/~adamodar/
   - Descripción: Profesor de finanzas de NYU Stern. Experto en valoración de empresas, métodos DCF y equity risk premium.

2. **Rankia**
   - Tipo: Comunidad + YouTube
   - Web: https://www.rankia.com
   - YouTube: https://www.youtube.com/results?search_query=rankia+bolsa
   - Descripción: Mayor comunidad financiera en español. Foros, blogs y análisis de mercados.

3. **Finect**
   - Tipo: Plataforma + YouTube
   - Web: https://www.finect.com
   - YouTube: https://www.youtube.com/results?search_query=finect
   - Descripción: Plataforma española de análisis financiero y comparación de fondos de inversión.

4. **Cobas AM**
   - Tipo: Gestora + YouTube
   - Web: https://www.cobasam.com
   - YouTube: https://www.youtube.com/results?search_query=cobas+asset+management
   - Descripción: Gestora value de Francisco García Paramés. Filosofía de inversión a largo plazo.

5. **Azvalor**
   - Tipo: Gestora + YouTube
   - Web: https://www.azvalor.com
   - YouTube: https://www.youtube.com/results?search_query=azvalor+asset+management
   - Descripción: Gestora value española. Cartas trimestrales con análisis de inversiones.

6. **Magallanes Value Investors**
   - Tipo: Gestora + YouTube
   - Web: https://www.magallanes.com
   - YouTube: https://www.youtube.com/results?search_query=magallanes+value+investors
   - Descripción: Gestora value de Iván Martín y Carlos Tercero. Enfoque contrarian.

#### Educadores en YouTube
7. **Ben Felix**
   - Tipo: YouTube
   - YouTube: https://www.youtube.com/results?search_query=ben+felix+common+sense+investing
   - Descripción: Portfolio manager canadiense. Contenido basado en evidencia académica sobre inversión pasiva.

8. **The Plain Bagel**
   - Tipo: YouTube
   - YouTube: https://www.youtube.com/results?search_query=the+plain+bagel
   - Descripción: Explicaciones claras de conceptos financieros. Análisis de empresas y mercados.

9. **Patrick Boyle**
   - Tipo: YouTube
   - YouTube: https://www.youtube.com/results?search_query=patrick+boyle
   - Descripción: Profesor de finanzas y gestor de hedge funds. Análisis de eventos financieros y burbujas.

10. **Joseph Carlson**
    - Tipo: YouTube
    - YouTube: https://www.youtube.com/results?search_query=joseph+carlson+dividend
    - Descripción: Inversión en dividendos. Análisis de carteras y empresas generadoras de ingresos pasivos.

#### Blogs y Análisis
11. **Of Dollars and Data (Nick Maggiulli)**
    - Tipo: Blog
    - Web: https://ofdollarsanddata.com
    - Descripción: Análisis basado en datos sobre ahorro, inversión y comportamiento financiero.

12. **Morgan Housel (Collaborative Fund)**
    - Tipo: Blog
    - Web: https://collabfund.com/blog
    - Descripción: Autor de "The Psychology of Money". Ensayos sobre comportamiento e historia financiera.

13. **Howard Marks Memos**
    - Tipo: Memos
    - Web: https://www.oaktreecapital.com/insights
    - Descripción: Memos trimestrales de Howard Marks (Oaktree Capital). Filosofía de inversión en crédito y ciclos.

#### Cuantitativo y Trading Sistemático
14. **Alpha Architect**
    - Tipo: Blog + Research
    - Web: https://alphaarchitect.com
    - Descripción: Factor investing, backtesting y estrategias cuantitativas. Recursos educativos gratuitos.

15. **Quantpedia**
    - Tipo: Plataforma
    - Web: https://quantpedia.com
    - Descripción: Enciclopedia de estrategias cuantitativas basadas en papers académicos.

16. **Quantocracy**
    - Tipo: Agregador
    - Web: https://quantocracy.com
    - Descripción: Agregador diario de blogs sobre trading sistemático y análisis cuantitativo.

### 2.4 Panel de notas personales (RF-004)
**Como** usuario  
**Quiero** añadir y editar notas sobre cada recurso  
**Para** registrar aprendizajes, ideas y reflexiones

**Criterios de aceptación:**
- Al hacer clic en "Ver/Añadir notas" de un recurso, se abre un panel lateral o modal
- El panel muestra:
  - Nombre del recurso en el encabezado
  - Enlace directo al recurso (botón "Abrir recurso")
  - Área de texto para escribir/editar notas (markdown opcional)
  - Botón "Guardar"
  - Botón "Cerrar"
  - Timestamp de última edición (si existen notas previas)
- Las notas se guardan por recurso y por usuario
- Las notas son privadas (solo visibles para el usuario que las creó)
- El guardado es explícito (no auto-save)
- Muestra confirmación visual al guardar correctamente

### 2.5 Persistencia de notas (RF-005)
**Como** usuario  
**Quiero** que mis notas se guarden en la base de datos  
**Para** consultarlas en futuras sesiones

**Criterios de aceptación:**
- Las notas se almacenan en una tabla `user_resource_notes` con:
  - `id` (PK)
  - `user_id` (FK a users)
  - `resource_id` (identificador del recurso)
  - `notes` (text, permite NULL)
  - `created_at`
  - `updated_at`
- Índice único en (`user_id`, `resource_id`)
- Las notas se cargan al abrir el panel de un recurso
- Si no hay notas previas, el campo aparece vacío

### 2.6 Indicadores visuales (RF-006)
**Como** usuario  
**Quiero** ver de un vistazo qué recursos tienen notas  
**Para** priorizar mi consulta

**Criterios de aceptación:**
- Cada recurso con notas guardadas muestra:
  - Un badge o icono distintivo (ej: nota adhesiva, lápiz)
  - Opcionalmente, un contador de caracteres o indicador de "tiene contenido"
- Los recursos sin notas no muestran indicador
- El indicador se actualiza inmediatamente al guardar o borrar notas

### 2.7 Búsqueda y filtrado (RF-007)
**Como** usuario  
**Quiero** filtrar recursos por nombre o categoría  
**Para** encontrar rápidamente lo que busco

**Criterios de aceptación:**
- Hay un campo de búsqueda en la parte superior de la vista
- Al escribir, filtra recursos por nombre (case-insensitive)
- Hay botones o tabs para filtrar por categoría
- Opción "Todos" muestra todos los recursos
- Opción "Con mis notas" muestra solo recursos donde tengo notas guardadas

## 3. Requisitos No Funcionales

### 3.1 Autenticación (RNF-001)
- El módulo solo es accesible para usuarios autenticados
- Si un usuario no autenticado intenta acceder, redirigir a login

### 3.2 Rendimiento (RNF-002)
- La carga de la vista de recursos debe completarse en < 1 segundo
- La carga de notas al abrir el panel debe ser < 300ms
- El guardado de notas debe confirmar en < 500ms

### 3.3 Usabilidad (RNF-003)
- Diseño responsive: funciona en móvil, tablet y desktop
- Los enlaces externos se abren en nueva pestaña
- Los botones tienen estados hover y disabled claros
- Feedback visual inmediato en todas las acciones (guardar, cargar, error)

### 3.4 Seguridad (RNF-004)
- Las notas son privadas por usuario (nunca se muestran notas de otros)
- Validación backend: un usuario solo puede editar sus propias notas
- Sanitización de entrada para prevenir XSS si se permite markdown

### 3.5 Accesibilidad (RNF-005)
- Navegación por teclado funcional
- Etiquetas ARIA en botones e iconos
- Contraste de colores cumple WCAG AA

## 4. Modelo de Datos

### 4.1 Tabla: `resources` (catálogo de recursos)
```sql
CREATE TABLE resources (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  description TEXT,
  url_primary VARCHAR(500),
  url_secondary VARCHAR(500),
  logo_url VARCHAR(500),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Ejemplo de registros:**
```sql
INSERT INTO resources (id, name, category, type, description, url_primary, url_secondary) VALUES
('damodaran', 'Aswath Damodaran', 'Value Investing', 'YouTube + Blog', 'Profesor de finanzas de NYU Stern. Experto en valoración de empresas.', 'https://www.youtube.com/@AswathDamodaranonValuation', 'https://pages.stern.nyu.edu/~adamodar/'),
('rankia', 'Rankia', 'Value Investing', 'Comunidad + YouTube', 'Mayor comunidad financiera en español.', 'https://www.rankia.com', 'https://www.youtube.com/results?search_query=rankia+bolsa'),
-- ... resto de recursos
```

### 4.2 Tabla: `user_resource_notes`
```sql
CREATE TABLE user_resource_notes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_id VARCHAR(50) NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, resource_id)
);

CREATE INDEX idx_user_resource_notes_user ON user_resource_notes(user_id);
CREATE INDEX idx_user_resource_notes_resource ON user_resource_notes(resource_id);
```

## 5. API Endpoints

### 5.1 GET /api/resources
**Descripción**: Obtiene todos los recursos con indicador de si el usuario tiene notas

**Autenticación**: Requerida

**Query params:**
- `category` (opcional): filtra por categoría
- `search` (opcional): filtra por nombre (case-insensitive)
- `with_notes` (opcional): boolean, solo recursos donde user tiene notas

**Response 200:**
```json
{
  "resources": [
    {
      "id": "damodaran",
      "name": "Aswath Damodaran",
      "category": "Value Investing",
      "type": "YouTube + Blog",
      "description": "Profesor de finanzas de NYU Stern...",
      "url_primary": "https://www.youtube.com/@AswathDamodaranonValuation",
      "url_secondary": "https://pages.stern.nyu.edu/~adamodar/",
      "logo_url": null,
      "has_notes": true
    },
    ...
  ]
}
```

### 5.2 GET /api/resources/:resourceId/notes
**Descripción**: Obtiene las notas del usuario para un recurso específico

**Autenticación**: Requerida

**Response 200:**
```json
{
  "resource_id": "damodaran",
  "notes": "Concepto clave: ERP (Equity Risk Premium)...",
  "updated_at": "2026-11-20T12:30:00Z"
}
```

**Response 404:** Si no hay notas para ese recurso y usuario

### 5.3 POST /api/resources/:resourceId/notes
**Descripción**: Crea o actualiza las notas del usuario para un recurso

**Autenticación**: Requerida

**Body:**
```json
{
  "notes": "Mis apuntes sobre el recurso..."
}
```

**Response 200:**
```json
{
  "message": "Notas guardadas correctamente",
  "updated_at": "2026-11-20T12:35:00Z"
}
```

**Response 400:** Si `notes` no es válido

### 5.4 DELETE /api/resources/:resourceId/notes
**Descripción**: Elimina las notas del usuario para un recurso

**Autenticación**: Requerida

**Response 200:**
```json
{
  "message": "Notas eliminadas correctamente"
}
```

## 6. Componentes UI (Nuxt 3 + TypeScript)

### 6.1 Página principal: `/pages/recursos.vue`
```typescript
<template>
  <div class="recursos-page">
    <h1>Recursos Educativos</h1>
    
    <!-- Buscador y filtros -->
    <div class="filters">
      <input v-model="searchQuery" placeholder="Buscar recursos..." />
      <div class="category-tabs">
        <button @click="filterCategory = null">Todos</button>
        <button @click="filterCategory = 'Value Investing'">Value Investing</button>
        <button @click="filterCategory = 'YouTubers'">YouTubers</button>
        <button @click="filterCategory = 'Blogs'">Blogs</button>
        <button @click="filterCategory = 'Cuantitativo'">Cuantitativo</button>
        <button @click="showOnlyWithNotes = !showOnlyWithNotes">
          Mis notas ({{ notesCount }})
        </button>
      </div>
    </div>

    <!-- Lista de recursos -->
    <div class="resources-grid">
      <ResourceCard 
        v-for="resource in filteredResources" 
        :key="resource.id"
        :resource="resource"
        @open-notes="openNotesPanel(resource)"
      />
    </div>

    <!-- Panel lateral de notas -->
    <NotesPanel 
      v-if="selectedResource"
      :resource="selectedResource"
      @close="selectedResource = null"
    />
  </div>
</template>
```

### 6.2 Componente: `ResourceCard.vue`
```typescript
<template>
  <div class="resource-card">
    <div class="resource-header">
      <h3>{{ resource.name }}</h3>
      <span class="resource-type">{{ resource.type }}</span>
      <span v-if="resource.has_notes" class="has-notes-badge">📝</span>
    </div>
    
    <p class="resource-description">{{ resource.description }}</p>
    
    <div class="resource-links">
      <a v-if="resource.url_primary" :href="resource.url_primary" target="_blank">
        Enlace principal
      </a>
      <a v-if="resource.url_secondary" :href="resource.url_secondary" target="_blank">
        Enlace secundario
      </a>
    </div>
    
    <button @click="$emit('open-notes')" class="notes-btn">
      {{ resource.has_notes ? 'Ver notas' : 'Añadir notas' }}
    </button>
  </div>
</template>
```

### 6.3 Componente: `NotesPanel.vue`
```typescript
<template>
  <div class="notes-panel-overlay" @click.self="$emit('close')">
    <div class="notes-panel">
      <div class="panel-header">
        <h2>{{ resource.name }}</h2>
        <button @click="$emit('close')" class="close-btn">✕</button>
      </div>
      
      <div class="panel-body">
        <a :href="resource.url_primary" target="_blank" class="open-resource-btn">
          Abrir recurso ↗
        </a>
        
        <textarea 
          v-model="notesContent"
          placeholder="Escribe tus notas, ideas o resúmenes aquí..."
          rows="15"
        />
        
        <div v-if="lastUpdated" class="last-updated">
          Última actualización: {{ formatDate(lastUpdated) }}
        </div>
      </div>
      
      <div class="panel-footer">
        <button @click="saveNotes" :disabled="saving" class="save-btn">
          {{ saving ? 'Guardando...' : 'Guardar' }}
        </button>
        <button v-if="hasNotes" @click="deleteNotes" class="delete-btn">
          Eliminar notas
        </button>
      </div>
      
      <div v-if="saveSuccess" class="success-message">
        ✓ Notas guardadas correctamente
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ resource: Resource }>();
const emit = defineEmits(['close']);

const notesContent = ref('');
const saving = ref(false);
const saveSuccess = ref(false);
const lastUpdated = ref<string | null>(null);

// Cargar notas al montar
onMounted(async () => {
  const { data } = await $fetch(`/api/resources/${props.resource.id}/notes`);
  if (data) {
    notesContent.value = data.notes;
    lastUpdated.value = data.updated_at;
  }
});

// Guardar notas
const saveNotes = async () => {
  saving.value = true;
  try {
    await $fetch(`/api/resources/${props.resource.id}/notes`, {
      method: 'POST',
      body: { notes: notesContent.value }
    });
    saveSuccess.value = true;
    setTimeout(() => saveSuccess.value = false, 3000);
  } finally {
    saving.value = false;
  }
};

// Eliminar notas
const deleteNotes = async () => {
  if (!confirm('¿Eliminar tus notas sobre este recurso?')) return;
  await $fetch(`/api/resources/${props.resource.id}/notes`, { method: 'DELETE' });
  notesContent.value = '';
  emit('close');
};
</script>
```

## 7. Lógica Backend (InsForge / Supabase)

### 7.1 Función: `getResources`
```typescript
// insforge/functions/resources/getResources.ts
export default async function getResources(req: Request) {
  const { userId } = await authenticate(req);
  const { category, search, with_notes } = req.query;
  
  let query = db.select(`
    resources.*,
    EXISTS(
      SELECT 1 FROM user_resource_notes 
      WHERE user_id = $1 AND resource_id = resources.id
    ) as has_notes
  `).from('resources').where('user_id', userId);
  
  if (category) {
    query = query.where('category', category);
  }
  
  if (search) {
    query = query.whereILike('name', `%${search}%`);
  }
  
  if (with_notes === 'true') {
    query = query.having('has_notes', true);
  }
  
  const resources = await query.orderBy('display_order', 'category', 'name');
  
  return { resources };
}
```

### 7.2 Función: `getUserNotes`
```typescript
// insforge/functions/resources/getUserNotes.ts
export default async function getUserNotes(req: Request) {
  const { userId } = await authenticate(req);
  const { resourceId } = req.params;
  
  const note = await db
    .select('notes', 'updated_at')
    .from('user_resource_notes')
    .where({ user_id: userId, resource_id: resourceId })
    .first();
  
  if (!note) {
    return { status: 404, body: { message: 'No notes found' } };
  }
  
  return { resource_id: resourceId, ...note };
}
```

### 7.3 Función: `saveUserNotes`
```typescript
// insforge/functions/resources/saveUserNotes.ts
export default async function saveUserNotes(req: Request) {
  const { userId } = await authenticate(req);
  const { resourceId } = req.params;
  const { notes } = await req.json();
  
  if (typeof notes !== 'string') {
    return { status: 400, body: { message: 'Invalid notes format' } };
  }
  
  await db
    .table('user_resource_notes')
    .insert({
      user_id: userId,
      resource_id: resourceId,
      notes,
      updated_at: new Date()
    })
    .onConflict(['user_id', 'resource_id'])
    .merge(['notes', 'updated_at']);
  
  return { message: 'Notes saved successfully', updated_at: new Date() };
}
```

### 7.4 Función: `deleteUserNotes`
```typescript
// insforge/functions/resources/deleteUserNotes.ts
export default async function deleteUserNotes(req: Request) {
  const { userId } = await authenticate(req);
  const { resourceId } = req.params;
  
  await db
    .table('user_resource_notes')
    .where({ user_id: userId, resource_id: resourceId })
    .delete();
  
  return { message: 'Notes deleted successfully' };
}
```

## 8. Migración de Base de Datos

### 8.1 Script de migración SQL
```sql
-- migrations/001_create_resources_tables.sql

-- Tabla de recursos (catálogo)
CREATE TABLE IF NOT EXISTS resources (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  description TEXT,
  url_primary VARCHAR(500),
  url_secondary VARCHAR(500),
  logo_url VARCHAR(500),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de notas de usuario
CREATE TABLE IF NOT EXISTS user_resource_notes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_id VARCHAR(50) NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, resource_id)
);

CREATE INDEX IF NOT EXISTS idx_user_resource_notes_user ON user_resource_notes(user_id);
CREATE INDEX IF NOT EXISTS idx_user_resource_notes_resource ON user_resource_notes(resource_id);

-- Insertar recursos iniciales
INSERT INTO resources (id, name, category, type, description, url_primary, url_secondary, display_order) VALUES
-- Value Investing
('damodaran', 'Aswath Damodaran', 'Value Investing', 'YouTube + Blog', 'Profesor de finanzas de NYU Stern. Experto en valoración de empresas, métodos DCF y equity risk premium.', 'https://www.youtube.com/@AswathDamodaranonValuation', 'https://pages.stern.nyu.edu/~adamodar/', 1),
('rankia', 'Rankia', 'Value Investing', 'Comunidad + YouTube', 'Mayor comunidad financiera en español. Foros, blogs y análisis de mercados.', 'https://www.rankia.com', 'https://www.youtube.com/results?search_query=rankia+bolsa', 2),
('finect', 'Finect', 'Value Investing', 'Plataforma + YouTube', 'Plataforma española de análisis financiero y comparación de fondos de inversión.', 'https://www.finect.com', 'https://www.youtube.com/results?search_query=finect', 3),
('cobas', 'Cobas AM', 'Value Investing', 'Gestora + YouTube', 'Gestora value de Francisco García Paramés. Filosofía de inversión a largo plazo.', 'https://www.cobasam.com', 'https://www.youtube.com/results?search_query=cobas+asset+management', 4),
('azvalor', 'Azvalor', 'Value Investing', 'Gestora + YouTube', 'Gestora value española. Cartas trimestrales con análisis de inversiones.', 'https://www.azvalor.com', 'https://www.youtube.com/results?search_query=azvalor+asset+management', 5),
('magallanes', 'Magallanes Value Investors', 'Value Investing', 'Gestora + YouTube', 'Gestora value de Iván Martín y Carlos Tercero. Enfoque contrarian.', 'https://www.magallanes.com', 'https://www.youtube.com/results?search_query=magallanes+value+investors', 6),

-- YouTubers
('ben-felix', 'Ben Felix', 'YouTubers', 'YouTube', 'Portfolio manager canadiense. Contenido basado en evidencia académica sobre inversión pasiva.', 'https://www.youtube.com/results?search_query=ben+felix+common+sense+investing', NULL, 10),
('plain-bagel', 'The Plain Bagel', 'YouTubers', 'YouTube', 'Explicaciones claras de conceptos financieros. Análisis de empresas y mercados.', 'https://www.youtube.com/results?search_query=the+plain+bagel', NULL, 11),
('patrick-boyle', 'Patrick Boyle', 'YouTubers', 'YouTube', 'Profesor de finanzas y gestor de hedge funds. Análisis de eventos financieros y burbujas.', 'https://www.youtube.com/results?search_query=patrick+boyle', NULL, 12),
('joseph-carlson', 'Joseph Carlson', 'YouTubers', 'YouTube', 'Inversión en dividendos. Análisis de carteras y empresas generadoras de ingresos pasivos.', 'https://www.youtube.com/results?search_query=joseph+carlson+dividend', NULL, 13),

-- Blogs
('ofdollarsanddata', 'Of Dollars and Data', 'Blogs', 'Blog', 'Análisis basado en datos sobre ahorro, inversión y comportamiento financiero.', 'https://ofdollarsanddata.com', NULL, 20),
('morgan-housel', 'Morgan Housel', 'Blogs', 'Blog', 'Autor de "The Psychology of Money". Ensayos sobre comportamiento e historia financiera.', 'https://collabfund.com/blog', NULL, 21),
('howard-marks', 'Howard Marks Memos', 'Blogs', 'Memos', 'Memos trimestrales de Howard Marks (Oaktree Capital). Filosofía de inversión en crédito y ciclos.', 'https://www.oaktreecapital.com/insights', NULL, 22),

-- Cuantitativo
('alpha-architect', 'Alpha Architect', 'Cuantitativo', 'Blog + Research', 'Factor investing, backtesting y estrategias cuantitativas. Recursos educativos gratuitos.', 'https://alphaarchitect.com', NULL, 30),
('quantpedia', 'Quantpedia', 'Cuantitativo', 'Plataforma', 'Enciclopedia de estrategias cuantitativas basadas en papers académicos.', 'https://quantpedia.com', NULL, 31),
('quantocracy', 'Quantocracy', 'Cuantitativo', 'Agregador', 'Agregador diario de blogs sobre trading sistemático y análisis cuantitativo.', 'https://quantocracy.com', NULL, 32)

ON CONFLICT (id) DO NOTHING;
```

## 9. Casos de Uso

### 9.1 CU-001: Usuario consulta recursos
1. Usuario navega a "Recursos" desde el menú lateral
2. Sistema muestra todos los recursos agrupados por categoría
3. Usuario ve cuáles tienen notas (badge 📝)
4. Usuario puede filtrar por categoría o buscar por nombre

### 9.2 CU-002: Usuario añade notas a un recurso
1. Usuario hace clic en "Añadir notas" de un recurso
2. Sistema abre panel lateral con campo de texto vacío
3. Usuario escribe sus notas
4. Usuario hace clic en "Guardar"
5. Sistema guarda las notas en BD y muestra confirmación
6. Sistema actualiza el badge del recurso

### 9.3 CU-003: Usuario edita notas existentes
1. Usuario hace clic en "Ver notas" de un recurso con badge
2. Sistema abre panel con las notas previamente guardadas
3. Usuario modifica el texto
4. Usuario hace clic en "Guardar"
5. Sistema actualiza las notas y muestra confirmación

### 9.4 CU-004: Usuario elimina sus notas
1. Usuario abre el panel de notas de un recurso
2. Usuario hace clic en "Eliminar notas"
3. Sistema solicita confirmación
4. Usuario confirma
5. Sistema elimina las notas de BD
6. Sistema cierra el panel y quita el badge del recurso

## 10. Criterios de Validación

### 10.1 Validación funcional
- ✅ Todos los 16 recursos aparecen en la vista
- ✅ Los enlaces externos funcionan y abren en nueva pestaña
- ✅ El panel de notas se abre y cierra correctamente
- ✅ Las notas se guardan y persisten entre sesiones
- ✅ El badge de "tiene notas" aparece/desaparece correctamente
- ✅ La búsqueda filtra recursos por nombre
- ✅ Los filtros de categoría funcionan
- ✅ El filtro "Con mis notas" muestra solo recursos con notas del usuario

### 10.2 Validación técnica
- ✅ La API responde en < 500ms en promedio
- ✅ Las notas se guardan en la base de datos con user_id correcto
- ✅ No se pueden ver notas de otros usuarios
- ✅ Los índices de BD están creados correctamente
- ✅ No hay errores de consola en el frontend

### 10.3 Validación UX
- ✅ La UI es responsive en móvil, tablet y desktop
- ✅ Los botones tienen estados hover claros
- ✅ Hay feedback visual al guardar/cargar/error
- ✅ El panel de notas no se cierra accidentalmente al hacer clic dentro
- ✅ El textarea tiene altura suficiente para escribir cómodamente

## 11. Notas de Implementación

### 11.1 Orden de desarrollo recomendado
1. Crear migración de BD y ejecutarla
2. Implementar endpoints de API (GET resources, GET/POST/DELETE notes)
3. Crear componente `ResourceCard`
4. Crear componente `NotesPanel`
5. Crear página `/recursos.vue` con filtros y búsqueda
6. Añadir enlace en el menú lateral
7. Testing manual de todos los flujos
8. Ajustes de estilo y UX

### 11.2 Consideraciones técnicas
- Si usas Supabase, puedes usar Row Level Security (RLS) para asegurar que cada usuario solo vea sus notas
- El campo `notes` puede soportar markdown; renderízalo con una librería como `marked` o `markdown-it`
- Considera añadir un contador de caracteres en el textarea
- Opcionalmente, implementa auto-save cada X segundos para evitar pérdida de datos

### 11.3 Extensiones futuras (fuera de scope v1.0)
- Etiquetas personalizadas para recursos
- Compartir notas públicamente (opt-in)
- Exportar notas a PDF o Markdown
- Añadir recursos personalizados (usuario puede añadir sus propios enlaces)
- Historial de versiones de notas
- Búsqueda full-text en notas

## 12. Aprobación

Este spec debe ser revisado y aprobado antes de comenzar la implementación.

**Cambios posteriores al spec:**
- Cualquier cambio debe documentarse en este archivo con fecha y justificación
- Los cambios que afecten la API o el modelo de datos requieren nueva aprobación

---

**Versión**: 1.0.0  
**Fecha de creación**: 2026-11-20  
**Última actualización**: 2026-11-20  
**Estado**: ✅ Listo para implementación
