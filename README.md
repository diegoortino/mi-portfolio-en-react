# Portfolio · Diego Ortino

Portfolio profesional inspirado en la estética editorial de 421.news. Todo el contenido se alimenta desde archivos de datos y se compone con React + Vite + TypeScript.

## Stack
- React 19 + Vite + TypeScript
- CSS vanilla con tokens en `src/styles/tokens.css`
- `react-router-dom` para SPA con modal `/blog/:id`
- ESLint + Prettier

## Cómo correrlo
1) Instalar dependencias: `npm install`  
2) Desarrollo con HMR: `npm run dev` (http://localhost:5173)  
3) Lint: `npm run lint`  
4) Build de producción: `npm run build`  
5) Previsualizar build: `npm run preview`

## Contenido editable (data-driven)
- Proyectos: `src/data/projects.ts` — agregar/editar objetos `Project`. Usa campos `type`, `tech`, `featured` y links `demo/repo`.
- Skills: `src/data/skills.ts` — arreglo de `Skill` agrupado por `category` y `level`.
- Posts/Blog: `src/data/posts.ts` — al click abre modal y ruta `/blog/:id`.
- Contacto: `src/data/contact.ts` — email, redes, ubicación y disponibilidad.
- CV: reemplazá `public/cv.pdf` con tu PDF real (el hero apunta a este archivo).

## Estructura de carpetas
```
src/
  assets/halftone.svg          // textura repetible
  components/
    layout/{Header,Footer,Section}.tsx
    ui/{Button,Tag,Card,Divider}.tsx
  data/{projects,skills,posts,contact}.ts
  sections/{Hero,Projects,Skills,Blog,Contact}.tsx
  styles/{tokens.css,global.css}
  App.tsx
  main.tsx
```

## Personalizar estilo
- Colores, radios, tipografías y gradientes en `src/styles/tokens.css`.
- Estilos base y componentes en `src/styles/global.css` (botones, cards, layout, modal).
- Las imágenes de las tarjetas usan URLs en escala de grises; podés moverlas a `src/assets/images/` y apuntar allí.

## Deploy sugerido
- `npm run build` genera `dist/`. Subilo a Vercel/Netlify como proyecto Vite.
- Mantener rutas de SPA (`/blog/:id`) habilitando fallback al `index.html` en el proveedor.
