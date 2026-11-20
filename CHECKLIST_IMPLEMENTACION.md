# ✅ Checklist de Implementación - Módulo de Recursos Educativos

## 📋 Guía paso a paso para implementar el módulo

Tiempo estimado: **7-11 horas**

---

## 🗂️ FASE 1: Setup y Base de Datos (2-3h)

### 1.1 Preparación del entorno
- [ ] Clonar/acceder al repositorio The Lab Trader
- [ ] Asegurar conexión a base de datos Postgres/InsForge
- [ ] Verificar que existe tabla `users` (FK requerida)
- [ ] Crear rama: `git checkout -b feature/recursos-educativos`

### 1.2 Migración de base de datos
- [ ] Crear archivo `migrations/YYYYMMDD_create_resources_tables.sql`
- [ ] Copiar contenido de `SPEC_RECURSOS_EDUCATIVOS.md` sección 8.1
- [ ] Ejecutar migración:
  ```bash
  # Si usas InsForge
  npx insforge db migrate

  # Si usas Supabase
  psql -h <host> -U <user> -d <db> -f migrations/YYYYMMDD_create_resources_tables.sql

  # O desde SQL Editor en Supabase Dashboard
  ```
- [ ] Verificar que se crearon las tablas:
  ```sql
  SELECT * FROM resources; -- Debe tener 16 filas
  SELECT * FROM user_resource_notes; -- Debe estar vacía
  ```

### 1.3 Row Level Security (si usas Supabase)
- [ ] Habilitar RLS en `user_resource_notes`:
  ```sql
  ALTER TABLE user_resource_notes ENABLE ROW LEVEL SECURITY;

  CREATE POLICY "Users can view their own notes"
    ON user_resource_notes FOR SELECT
    USING (auth.uid() = user_id);

  CREATE POLICY "Users can insert their own notes"
    ON user_resource_notes FOR INSERT
    WITH CHECK (auth.uid() = user_id);

  CREATE POLICY "Users can update their own notes"
    ON user_resource_notes FOR UPDATE
    USING (auth.uid() = user_id);

  CREATE POLICY "Users can delete their own notes"
    ON user_resource_notes FOR DELETE
    USING (auth.uid() = user_id);
  ```

---

## 🔌 FASE 2: API Backend (2-3h)

### 2.1 Estructura de carpetas
- [ ] Crear `server/api/resources/index.get.ts` (si Nuxt)
- [ ] O crear `insforge/functions/resources/` (si InsForge)

### 2.2 Endpoint: GET /api/resources
- [ ] Crear archivo según spec (sección 7.1)
- [ ] Implementar query con JOIN para `has_notes`
- [ ] Implementar filtros: `category`, `search`, `with_notes`
- [ ] Probar con:
  ```bash
  # Todos los recursos
  curl http://localhost:3000/api/resources

  # Por categoría
  curl http://localhost:3000/api/resources?category=Value%20Investing

  # Con búsqueda
  curl http://localhost:3000/api/resources?search=damodaran

  # Solo con notas
  curl http://localhost:3000/api/resources?with_notes=true
  ```

### 2.3 Endpoint: GET /api/resources/:id/notes
- [ ] Crear archivo según spec (sección 7.2)
- [ ] Validar autenticación
- [ ] Retornar 404 si no hay notas
- [ ] Probar con:
  ```bash
  curl -H "Authorization: Bearer <token>" \
       http://localhost:3000/api/resources/damodaran/notes
  ```

### 2.4 Endpoint: POST /api/resources/:id/notes
- [ ] Crear archivo según spec (sección 7.3)
- [ ] Validar autenticación
- [ ] Validar que `notes` es string
- [ ] Usar UPSERT (INSERT ... ON CONFLICT ... UPDATE)
- [ ] Probar con:
  ```bash
  curl -X POST \
       -H "Authorization: Bearer <token>" \
       -H "Content-Type: application/json" \
       -d '{"notes":"Mis apuntes sobre Damodaran..."}' \
       http://localhost:3000/api/resources/damodaran/notes
  ```

### 2.5 Endpoint: DELETE /api/resources/:id/notes
- [ ] Crear archivo según spec (sección 7.4)
- [ ] Validar autenticación
- [ ] Eliminar solo si `user_id` coincide
- [ ] Probar con:
  ```bash
  curl -X DELETE \
       -H "Authorization: Bearer <token>" \
       http://localhost:3000/api/resources/damodaran/notes
  ```

### 2.6 Testing backend
- [ ] Probar todos los endpoints con Postman/Insomnia
- [ ] Verificar que un usuario no puede ver notas de otro
- [ ] Verificar tiempos de respuesta < 500ms
- [ ] Verificar errores 401 sin autenticación
- [ ] Verificar errores 404 cuando corresponde

---

## 🎨 FASE 3: Frontend - Componentes Base (2-3h)

### 3.1 Tipos TypeScript
- [ ] Crear `types/resources.ts`:
  ```typescript
  export interface Resource {
    id: string;
    name: string;
    category: string;
    type: string;
    description: string;
    url_primary: string;
    url_secondary?: string;
    logo_url?: string;
    has_notes: boolean;
  }

  export interface UserNote {
    resource_id: string;
    notes: string;
    updated_at: string;
  }
  ```

### 3.2 Componente: ResourceCard.vue
- [ ] Crear `components/ResourceCard.vue`
- [ ] Copiar estructura de spec (sección 6.2)
- [ ] Implementar props: `resource: Resource`
- [ ] Implementar emit: `@open-notes`
- [ ] Añadir badge condicional si `has_notes === true`
- [ ] Estilizar con Tailwind:
  - [ ] Card con borde y sombra
  - [ ] Hover effect
  - [ ] Badge verde o amarillo para "tiene notas"
  - [ ] Botones con estilos consistentes

### 3.3 Página: pages/recursos.vue
- [ ] Crear `pages/recursos.vue`
- [ ] Copiar estructura de spec (sección 6.1)
- [ ] Implementar estado:
  ```typescript
  const resources = ref<Resource[]>([]);
  const searchQuery = ref('');
  const filterCategory = ref<string | null>(null);
  const showOnlyWithNotes = ref(false);
  const selectedResource = ref<Resource | null>(null);
  const loading = ref(false);
  ```
- [ ] Implementar `fetchResources()` con composable `$fetch`
- [ ] Implementar computed `filteredResources`
- [ ] Añadir buscador (input con v-model)
- [ ] Añadir tabs de categorías
- [ ] Renderizar grid de `ResourceCard`
- [ ] Layout responsive:
  - [ ] Desktop: 3 columnas
  - [ ] Tablet: 2 columnas
  - [ ] Móvil: 1 columna

### 3.4 Estilos base
- [ ] Estilizar página con Tailwind
- [ ] Añadir transiciones suaves
- [ ] Verificar contraste de colores (WCAG AA)
- [ ] Verificar responsive en DevTools

---

## 📝 FASE 4: Sistema de Notas (2-3h)

### 4.1 Componente: NotesPanel.vue
- [ ] Crear `components/NotesPanel.vue`
- [ ] Copiar estructura de spec (sección 6.3)
- [ ] Implementar props: `resource: Resource`
- [ ] Implementar emit: `@close`
- [ ] Implementar estado:
  ```typescript
  const notesContent = ref('');
  const saving = ref(false);
  const saveSuccess = ref(false);
  const lastUpdated = ref<string | null>(null);
  ```
- [ ] Implementar `onMounted` para cargar notas existentes
- [ ] Implementar función `saveNotes()`
- [ ] Implementar función `deleteNotes()` con confirmación
- [ ] Estilizar:
  - [ ] Overlay oscuro semi-transparente
  - [ ] Panel lateral (o modal en móvil)
  - [ ] Textarea grande (min 300px altura)
  - [ ] Botones "Guardar" y "Eliminar" con estilos claros
  - [ ] Mensaje de confirmación "✓ Guardado correctamente"

### 4.2 Integración en página principal
- [ ] Añadir `<NotesPanel>` en `recursos.vue`
- [ ] Pasar `selectedResource` como prop
- [ ] Implementar handler `@open-notes` en `ResourceCard`
- [ ] Implementar handler `@close` en `NotesPanel`
- [ ] Verificar que se abre/cierra correctamente

### 4.3 Actualización de badges
- [ ] Después de guardar notas, actualizar `resource.has_notes = true`
- [ ] Después de eliminar notas, actualizar `resource.has_notes = false`
- [ ] O refetch todos los recursos después de guardar/eliminar

### 4.4 Feedback visual
- [ ] Mostrar loading spinner al cargar notas
- [ ] Mostrar estado "Guardando..." en botón
- [ ] Mostrar mensaje "✓ Guardado correctamente" 3 segundos
- [ ] Mostrar confirmación antes de eliminar
- [ ] Deshabilitar botón "Guardar" mientras guarda

---

## 🎨 FASE 5: Polish y UX (1-2h)

### 5.1 Menú lateral
- [ ] Añadir ítem "Recursos" o "Biblioteca" en menú principal
- [ ] Añadir icono (📚 o 📖)
- [ ] Enlace a `/recursos`
- [ ] Marcar como activo cuando estás en la página

### 5.2 Loading states
- [ ] Skeleton loader mientras carga recursos
- [ ] Loading spinner en panel de notas
- [ ] Indicador de guardado en progreso

### 5.3 Empty states
- [ ] Mensaje si no hay recursos (no debería pasar)
- [ ] Mensaje si búsqueda no encuentra nada: "No se encontraron recursos"
- [ ] Mensaje si filtro "Con mis notas" no tiene resultados: "Aún no has añadido notas"

### 5.4 Accesibilidad
- [ ] Añadir `aria-label` a botones de iconos
- [ ] Navegación por teclado funciona (Tab, Enter, Esc)
- [ ] Esc cierra el panel de notas
- [ ] Focus trap en el panel de notas
- [ ] Verificar con Lighthouse (> 90 accesibilidad)

### 5.5 SEO
- [ ] Añadir meta tags en `/recursos`:
  ```vue
  <script setup>
  useHead({
    title: 'Recursos Educativos - The Lab Trader',
    meta: [
      { name: 'description', content: 'Biblioteca curada de recursos sobre inversión, value investing y trading cuantitativo.' }
    ]
  })
  </script>
  ```

### 5.6 Responsive final
- [ ] Probar en móvil real (si es posible)
- [ ] Verificar que panel de notas funciona bien en móvil
- [ ] Verificar que tabs de categorías no se rompen en pantallas pequeñas
- [ ] Verificar que textarea es cómodo de usar en móvil

---

## 🧪 FASE 6: Testing Completo (1h)

### 6.1 Testing funcional
- [ ] Visitar `/recursos` → Se muestran 16 recursos
- [ ] Filtrar por "Value Investing" → Se muestran 6 recursos
- [ ] Buscar "damodaran" → Se muestra solo ese recurso
- [ ] Click en enlace externo → Se abre en nueva pestaña
- [ ] Click "Añadir notas" → Se abre panel
- [ ] Escribir notas y guardar → Aparece confirmación
- [ ] Cerrar panel → Badge 📝 aparece en la tarjeta
- [ ] Click "Ver notas" → Panel se abre con notas guardadas
- [ ] Editar notas y guardar → Se actualiza correctamente
- [ ] Click "Eliminar notas" → Pide confirmación
- [ ] Confirmar eliminación → Notas se borran y badge desaparece
- [ ] Filtrar "Con mis notas" → Solo muestra recursos con notas

### 6.2 Testing multi-usuario
- [ ] Login con usuario A → Añadir notas a "Damodaran"
- [ ] Logout → Login con usuario B
- [ ] Ver "Damodaran" → NO debe ver las notas de usuario A
- [ ] Usuario B añade sus propias notas
- [ ] Logout → Login con usuario A
- [ ] Ver "Damodaran" → Solo ve sus propias notas

### 6.3 Testing de rendimiento
- [ ] Abrir DevTools → Network
- [ ] Cargar `/recursos` → Debe tardar < 1 segundo
- [ ] Abrir panel de notas → Debe cargar < 300ms
- [ ] Guardar notas → Debe confirmar < 500ms

### 6.4 Testing de errores
- [ ] Sin conexión → Mostrar error apropiado
- [ ] Backend caído → Mostrar mensaje amigable
- [ ] Token expirado → Redirigir a login

### 6.5 Testing responsive
- [ ] Desktop 1920x1080 → Grid de 3 columnas
- [ ] Tablet 768x1024 → Grid de 2 columnas
- [ ] Móvil 375x667 → 1 columna
- [ ] Panel de notas en móvil → Ocupa toda la pantalla

---

## 🚀 FASE 7: Deploy (30min)

### 7.1 Pre-deploy checklist
- [ ] Verificar que todas las migraciones están en repo
- [ ] Verificar que `.env` tiene variables necesarias
- [ ] Hacer commit de todos los cambios:
  ```bash
  git add .
  git commit -m "feat: add educational resources module with personal notes"
  ```
- [ ] Push a rama feature:
  ```bash
  git push origin feature/recursos-educativos
  ```

### 7.2 Migración en producción
- [ ] Ejecutar migración en BD de producción
- [ ] Verificar que se crearon las tablas
- [ ] Verificar que se cargaron los 16 recursos

### 7.3 Deploy
- [ ] Merge a `main` (o hacer PR y aprobar)
- [ ] Deploy automático (Vercel/Railway/etc)
- [ ] O deploy manual:
  ```bash
  git checkout main
  git merge feature/recursos-educativos
  git push origin main
  ```

### 7.4 Post-deploy verification
- [ ] Visitar producción: `https://thelabtrader.vercel.app/recursos`
- [ ] Verificar que carga correctamente
- [ ] Hacer test rápido: añadir notas, filtrar, buscar
- [ ] Verificar en móvil

---

## ✅ Criterios de Éxito Final

### Funcional
- [x] Los 16 recursos aparecen correctamente
- [x] Filtros y búsqueda funcionan
- [x] Notas se guardan y persisten
- [x] Badge aparece/desaparece
- [x] Notas son privadas por usuario

### Técnica
- [x] API responde < 500ms
- [x] Índices de BD creados
- [x] Sin errores de consola
- [x] Lighthouse > 90 en todo

### UX
- [x] Responsive en todos los dispositivos
- [x] Feedback visual en todas las acciones
- [x] Botones con hover claro
- [x] Panel no se cierra accidentalmente

---

## 📝 Notas de implementación

### Decisiones técnicas
- **Base de datos**: Se usa constraint UNIQUE(user_id, resource_id) para evitar duplicados
- **API**: Se usa UPSERT en POST para crear o actualizar en una sola operación
- **Frontend**: Se usa `$fetch` de Nuxt 3 (o `useFetch` para SSR)
- **Estilos**: Tailwind CSS con clases utilitarias, sin CSS custom

### Problemas comunes y soluciones

**Problema**: Panel de notas se cierra al hacer click dentro
**Solución**: Añadir `@click.self` en el overlay, no en todo el panel

**Problema**: Badge no se actualiza después de guardar notas
**Solución**: O refetch todos los recursos, o actualizar manualmente `resource.has_notes = true`

**Problema**: Textarea demasiado pequeño en móvil
**Solución**: Usar `min-h-[300px]` y permitir scroll si es necesario

**Problema**: Usuario puede ver notas de otro
**Solución**: Verificar RLS en Supabase o validación en endpoint

**Problema**: Loading lento en primera carga
**Solución**: Considerar SSR para la lista de recursos (son datos públicos)

---

## 🎉 Siguientes pasos (Opcional - v2.0)

Si el módulo tiene éxito, considera estas extensiones:

- [ ] Markdown rendering en notas (usar `marked` o `markdown-it`)
- [ ] Etiquetas personalizadas por recurso
- [ ] Exportar notas a PDF/Markdown
- [ ] Recursos personalizados (usuario añade sus enlaces)
- [ ] Historial de versiones de notas
- [ ] Búsqueda full-text en contenido de notas
- [ ] Compartir notas públicamente (opt-in)
- [ ] Estadísticas de uso (recursos más consultados)
- [ ] Integración con Notion/Obsidian

---

## 📚 Referencias

- **Spec completa**: `SPEC_RECURSOS_EDUCATIVOS.md`
- **Resumen ejecutivo**: `RESUMEN_RECURSOS_EDUCATIVOS.md`
- **PR en portfolio**: [#5](https://github.com/aseran74/portofolio/pull/5)

---

**Estado**: ⬜ Pendiente de implementación  
**Tiempo estimado**: 7-11 horas  
**Dificultad**: Media  
**Prioridad**: Alta (mejora experiencia educativa)

---

## ✍️ Log de implementación

Usa esta sección para anotar fechas y observaciones durante la implementación:

```
FECHA       | FASE | NOTAS
------------|------|--------------------------------------------------
2026-11-20  | 0    | Spec creado
            |      | 
            |      | 
            |      | 
```
