Actúa como desarrollador front-end senior especializado en HTML5 semántico, CSS3 moderno y accesibilidad web.

CONTEXTO:
Estoy rediseñando la PÁGINA DE INICIO (index.html) de un sitio llamado
"Cinemark El Salvador", un proyecto académico de rediseño de la cadena de cines.
El sitio ya tiene otras páginas (cines.html y dulceria.html) con una identidad
visual definida, pero en este ejercicio SOLO quiero rediseñar el index.html.

OBJETIVO:
Genera una NUEVA página de inicio (index.html) para Cinemark El Salvador
usando CSS Grid como sistema principal de layout del <main>. Debe conservar
la misma identidad visual, el mismo contenido esencial y la misma navegación
del sitio original, pero reorganizada con CSS Grid.

═══════════════════════════════════════════════════════════════════
IDENTIDAD VISUAL — NO MODIFICAR
═══════════════════════════════════════════════════════════════════

- Paleta de colores:
  · Rojo principal: #e50914
  · Negro profundo: #000000
  · Blanco: #ffffff
  · Gris claro (texto secundario): #b3b3b3
  · Gris borde: #2d2d2d
  · Degradado feature: linear-gradient(149deg, #192247, #210e17)

- Tipografía: "Inter" de Google Fonts (pesos 400, 500, 700, 900).
  · Títulos: font-weight 900
  · Cuerpo: font-weight 400/500
  · body: color #ffffff sobre fondo #000000, con -webkit-font-smoothing: antialiased

- Logo de la marca: "CINE" en blanco + "MARK" en rojo.
  Estructura exacta:
  <a href="index.html" class="header__logo">CINE<span>MARK</span></a>

- Estilo general: moderno, cinematográfico, tipo plataforma de streaming
  (referencia Netflix / HBO Max). Bordes redondeados entre 4px y 16px.

═══════════════════════════════════════════════════════════════════
CONTENIDO DE LA PÁGINA DE INICIO (OBLIGATORIO)
═══════════════════════════════════════════════════════════════════

1) HEADER STICKY con:
   - Logo "CINEMARK"
   - Nav con enlaces a: index.html (activo), cines.html, dulceria.html
   - Botón "Iniciar sesión"

2) HERO principal con:
   - Tagline: "ESTRENO 2026"
   - Headline: "Toda la magia del cine, en un solo lugar"
   - Subheadline: "Compra tus boletos, descubre estrenos y encuentra tu
     sucursal más cercana."
   - Dos botones: "Ver cartelera" (primario rojo) y "Cambiar sucursal"
     (translúcido)
   - Fondo negro con degradado radial

3) QUICK SEARCH con:
   - 4 selects: Fecha, Película, Formato, Hora
   - Botón "Buscar funciones"

4) CARTELERA DE LA SEMANA (id="cartelera") con:
   - Título "Cartelera de la semana" + link "Ver todas →"
   - 6 tarjetas de películas:
     · Cuidado con los niños: El Heladero — Terror · 15+ · 105 min
     · Zona Cero (Colony) — Acción · 15+ · 125 min
     · Mamut: El regreso de los dinosaurios — Animación · TP · 96 min
     · Rebelión en la granja — Animación · TP · 90 min
     · Terminator 2: El juicio final — Acción · 15+ · 137 min
     · Avengers: Endgame Bonus — Acción · 13+ · 181 min
     Cada una con badge "ESTRENO" y botón "Comprar boletos".

5) SECCIÓN DE CARACTERÍSTICAS con 3 tarjetas:
   - "3 sucursales en todo el país"
   - "Formatos 2D, 3D y 4D"
   - "Dulcería completa"

6) PRÓXIMOS ESTRENOS con 5 tarjetas:
   - Avengers Endgame Bonus — 24 sep
   - Relajadas y muy peligrosas — 10 sep
   - Don't Look Back in Anger — 10 sep
   - Rápido y Furioso — 25 aniversario — 10 sep
   - One Piece: La película — 10 sep

7) FOOTER con 4 columnas:
   - Programación (Cartelera, Próximos estrenos, Preventas)
   - Sobre Cinemark (Nuestra historia, Formatos de sala, Trabaja con nosotros)
   - Ayuda (Preguntas frecuentes, Contacto, Facturación)
   - Legal (Términos y condiciones, Privacidad, Reglamento de salas)
   Bottom bar: "© 2026 Cinemark El Salvador" + aviso de proyecto académico.

═══════════════════════════════════════════════════════════════════
REQUISITOS TÉCNICOS OBLIGATORIOS
═══════════════════════════════════════════════════════════════════

⚠️ 1. CSS GRID COMO SISTEMA PRINCIPAL DEL <main>
   El <main> COMPLETO debe construirse con CSS Grid usando
   grid-template-areas. NO basta con usar Grid solo en la cartelera,
   en las tarjetas o en el footer. El layout maestro debe cubrir TODAS
   las secciones dentro del <main>: hero, quick-search, cartelera,
   features y próximos estrenos.

   Ejemplo esperado (ajusta nombres si quieres):
   main {
     display: grid;
     grid-template-areas:
       "hero"
       "search"
       "cartelera"
       "features"
       "proximos";
     gap: 48px;
   }

   @media (min-width: 900px) {
     main {
       grid-template-areas:
         "hero       hero"
         "search     search"
         "cartelera  cartelera"
         "features   proximos";
       grid-template-columns: 1.4fr 1fr;
     }
   }

   Cada sección debe declarar grid-area: hero / search / cartelera /
   features / proximos.

2. Puedes usar Flexbox DENTRO de componentes específicos (header, nav,
   botones, tarjetas de película, columnas del footer). Lo que NO puedes
   es usar Flexbox para el layout general del <main>.

3. Diseño responsivo con al menos 2 breakpoints:
   · Móvil: max-width 640px  → 1 columna
   · Tablet: max-width 1024px → 2 columnas
   · Escritorio: min-width 900px → layout asimétrico

4. HTML5 semántico: <header>, <nav>, <main>, <section>, <article>, <footer>.

5. Accesibilidad:
   · aria-label en el <nav> principal
   · alt descriptivo en imágenes
   · Contraste adecuado (blanco sobre negro, rojo #e50914 sobre negro)
   · Focus visible en enlaces y botones

6. NO uses frameworks ni preprocesadores: sin Bootstrap, sin Tailwind,
   sin SASS. Solo CSS puro.

7. NO uses JavaScript. Todo debe ser HTML + CSS.

═══════════════════════════════════════════════════════════════════
ENTREGABLE
═══════════════════════════════════════════════════════════════════

Genera DOS archivos separados y bien indentados:

─── ARCHIVO 1: index.html ───
Código completo y comentado sección por sección.
El <link> al CSS debe ser: reto-ia-style/reto-ia-style.css
Los enlaces del nav deben apuntar a: index.html, cines.html, dulceria.html

─── ARCHIVO 2: reto-ia-style.css ───
Código completo con comentarios en cada bloque que use CSS Grid,
explicando qué hace cada propiedad (grid-template-areas,
grid-template-columns, grid-area, gap).

Empieza directamente con el código, sin explicaciones previas.