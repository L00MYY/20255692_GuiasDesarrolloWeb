Build a Netflix-style homepage for a Salvadoran cinema chain called 
"Cinemark El Salvador".

=== STRICT DESIGN SYSTEM (follow exactly) ===

Rules:
- Pure black (#000000) background for ALL sections
- Netflix Red (#e50914) ONLY for logo accent, primary CTAs, active state
- Font: load "Inter" from Google Fonts (weights 400, 500, 700, 900) 
  as substitute for Netflix Sans
- Buttons: 4px radius, SOLID fills, no outlines, no shadows
- Cards: 16px radius
- Feature cards: background linear-gradient(149deg, #192247, #210e17), 
  NO box-shadow
- NO box-shadows anywhere on the page
- Max content width: 1280px, centered
- Section gap: 48px
- Primary text: #ffffff, Secondary text: #b3b3b3, Placeholder: #808080
- No saturated colors other than Netflix Red
- 4px base spacing unit

=== PAGE STRUCTURE ===

1. Header (transparent, sticky over hero):
   - Left: logo "CINEMARK" — "CINE" in white, "MARK" in Netflix Red
   - Center: nav links "Cartelera" (active), "Cines", "Dulcería"
   - Right: red "Iniciar sesión" button (padding 4px 16px, 14px font, weight 500)

2. Full-viewport hero (min-height: 90vh):
   - Dark dimmed background using a linear-gradient overlay on a 
     placeholder collage of posters (use a dark radial/linear gradient 
     as placeholder, no external images)
   - Centered content:
     * Small uppercase tagline "ESTRENO 2026" in silver, letter-spacing
     * Big headline "Toda la magia del cine, en un solo lugar" 
       (56px, weight 700, line-height 1.17, white)
     * Subheadline (20px, silver): "Compra tus boletos, descubre 
       estrenos y encuentra tu sucursal más cercana."
     * Red CTA button "Ver cartelera" (padding 16px 24px, 24px font, 
       weight 700, radius 4px)
     * A translucent "Cambiar sucursal" button next to it 
       (bg rgba(0,0,0,0.4), 1px #808080 border, white text)

3. Quick search section (on black, between hero and cartelera):
   - Row with 4 fields: Fecha | Película | Formato | Hora
   - Each field: label (13px silver above), select styled with 
     background rgba(22,22,22,0.7), 1px #5a5a5a border, 4px radius, 
     white text, 16px padding
   - Red "Buscar funciones" button on the right (weight 700)
   - Full row collapses to 1 column on mobile

4. Section "Cartelera de la semana":
   - Title (24px, weight 900, white) + link "Ver todas →" in red on the right
   - Horizontal scrollable carousel (scroll-snap) of movie cards
   - Each card: 
     * Vertical poster (aspect-ratio 2/3) with dark gradient placeholder
     * Netflix Red badge "ESTRENO" in top-left corner (13px, weight 700, 
       padding 4px 8px, radius 4px)
     * Below poster: title (16px, weight 700, white, 2 lines max)
     * Genre + duration (13px, silver)
     * Netflix Red "Comprar boletos" button (full-width, 16px padding, 
       weight 700)
   - Show these 6 movies:
     1. Cuidado con los niños: El Heladero — Terror · 15+ · 105 min
     2. Zona Cero (Colony) — Acción · 15+ · 125 min
     3. Mamut: El regreso de los dinosaurios — Animación · TP · 96 min
     4. Rebelión en la granja — Animación · TP · 90 min
     5. Terminator 2: El juicio final — Acción · 15+ · 137 min
     6. Avengers: Endgame Bonus — Acción · 13+ · 181 min

5. Feature cards section (grid of 3, using the gradient background):
   - Card 1: "3 sucursales en todo el país" + short description
   - Card 2: "Formatos 2D, 3D y 4D" + short description
   - Card 3: "Dulcería completa" + short description
   - Each card: 16px radius, 24px padding, gradient bg
   - Title: 24px weight 900 white
   - Body: 16px weight 400 white

6. Section "Próximos estrenos":
   - Same carousel pattern but with poster + title + release date in 
     Netflix Red (13px, weight 600)
   - 5 movies: Avengers Endgame Bonus (24 sep), Relajadas y muy 
     peligrosas (10 sep), Don't Look Back in Anger (10 sep), 
     Rápido y Furioso — 25 aniversario (10 sep), One Piece: La película 
     (10 sep)

7. Footer (background #000000, top border 1px #2d2d2d):
   - 4 columns of links (Programación | Sobre Cinemark | Ayuda | Legal)
   - Link color: #b3b3b3, 14px, weight 400, hover color #ffffff
   - Bottom row: "© 2026 Cinemark El Salvador" + "Proyecto académico 
     de rediseño — no afiliado a Cinemark Holdings." in #808080

=== OUTPUT REQUIREMENTS ===

- Single HTML file
- CSS in a <style> tag inside <head>
- Pure HTML5 + CSS, NO React, NO Tailwind, NO JavaScript frameworks
- NO JS allowed
- Semantic HTML (header, nav, main, section, article, footer)
- Responsive: mobile (<640px), tablet (<1024px), desktop
- Add @media (prefers-reduced-motion: reduce) to disable animations

Build the "Cines" page for the same "Cinemark El Salvador" site. 
SAME design system and header/footer as the homepage (pure black bg, 
Netflix Red accents only, Inter font, 1280px max-width, 4px button 
radius, 16px card radius, no shadows).

=== PAGE STRUCTURE ===

1. Same sticky header (with "Cines" as active nav link)

2. Compact page hero (not full-viewport, ~40vh):
   - Big headline "Nuestros cines" (56px, weight 700, white)
   - Subheadline "3 sucursales en El Salvador. Encuentra la más 
     cercana y consulta sus funciones." (silver, 20px)

3. Filter bar (sticky under header on scroll):
   - Dropdown "Departamento": Todos | San Salvador | La Libertad | 
     Cuscatlán
   - Dropdown "Formato": Todos | 2D | 3D | 4D
   - Dropdown "Fecha": Hoy | Mañana | Miércoles 10 sep | ...
   - All styled with rgba(22,22,22,0.7) bg, 1px #5a5a5a border, 
     4px radius

4. Grid of cinema cards (3 columns on desktop, 1 on mobile):
   Each card contains:
   - Dark gradient header with the cinema name in white (24px, weight 900)
   - Address (silver, 14px) with a red map pin icon (SVG, 16px)
   - Phone number (silver, 14px)
   - Hours "11:00 am – 11:00 pm" (silver)
   - Format badges as small pills: "2D", "3D", "4D", "D-BOX" 
     (background #2d2d2d, white text, 4px radius, 4px 8px padding)
   - Divider line (#2d2d2d)
   - "Funciones de hoy" subheading (16px, weight 700, white)
   - List of 3-4 movies with their showtime pills:
     * Movie title in white (14px, weight 500)
     * Showtime pills next to it: background #2d2d2d, white text, 
       4px radius, padding 4px 10px, hover turns Netflix Red
   - Red CTA button "Ver cartelera completa"

   Cinemas to list:
   1. Metrocentro San Salvador
      Address: Bulevar Los Héroes, San Salvador
      Phone: +503 2210-4500
      Formats: 2D, 3D, 4D, D-BOX
      Movies: Zona Cero (20:40), Mamut (15:30, 18:00), Terminator 2 (21:15)

   2. La Gran Vía
      Address: Carretera Panamericana, Antiguo Cuscatlán
      Phone: +503 2210-4600
      Formats: 2D, 3D, D-BOX
      Movies: Cuidado con los niños (17:20, 19:45), Rebelión en la granja 
      (16:10, 18:35, 20:50), Avengers Endgame (14:00)

   3. Plaza Mundo Soyapango
      Address: Calle Nueva 2, Soyapango
      Phone: +503 2210-4700
      Formats: 2D, 3D
      Movies: Mamut (14:00, 17:30), Rebelión en la granja (15:20, 19:00), 
      Zona Cero (21:00)

5. Section "Mapa de sucursales":
   - Full-width placeholder box (aspect-ratio 21/9) with a subtle 
     gradient (black to dark blue) and centered text 
     "Mapa de sucursales — próximamente"

6. Same footer as homepage

=== OUTPUT REQUIREMENTS ===
- Single HTML file, CSS in <style> tag
- Pure HTML + CSS, no frameworks and NO JS
- Responsive
- Include a smooth hover transition on cinema cards: 
  border-color 0.2s ease → Netflix Red, transform translateY(-4px)



Build the "Dulcería" page for the same "Cinemark El Salvador" site. 
SAME design system and header/footer (pure black, Netflix Red accents, 
Inter font, 1280px max-width, 4px button radius, 16px card radius, 
no shadows).

=== PAGE STRUCTURE ===

1. Same sticky header (with "Dulcería" as active nav link)

2. Compact page hero (~40vh):
   - Small red uppercase tag "DULCERÍA"
   - Headline "Todo para acompañar la función" (56px, weight 700, white)
   - Subheadline "Combos, palomitas, bebidas y snacks. Pide antes de 
     entrar y recoge sin filas." (silver, 20px)

3. Category filter (horizontal pills):
   - Pills: Todos | Combos | Palomitas | Bebidas | Snacks | Dulces
   - Active pill: Netflix Red bg, white text
   - Inactive pill: #2d2d2d bg, silver text
   - 4px radius, 8px 16px padding

4. Featured combo section (uses the feature-card gradient):
   - Big card with 16px radius, gradient bg, 32px padding
   - Left side: text "Combo Familiar" (24px weight 900 white), 
     description, red "Agregar al pedido" button
   - Right side: price in Netflix Red, big: "$18.50" (56px, weight 900)
   - Small "Ahorras $4.00" badge below in silver

5. Product grid (4 columns desktop, 2 tablet, 1 mobile):
   Each product card:
   - Square placeholder image area with a subtle dark gradient 
     (top, aspect-ratio 1/1)
   - Below: product name (16px, weight 700, white)
   - Short description (13px, silver)
   - Price in Netflix Red (20px, weight 700)
   - Small "+ Agregar" button (red bg, white text, 4px radius, 
     8px 14px padding)

   Products to list:
   - Combo Individual — Palomitas medianas + refresco mediano — $6.50
   - Combo Pareja — 2 palomitas medianas + 2 refrescos — $11.00
   - Combo Familiar — Palomitas grandes + 4 refrescos + nachos — $18.50
   - Palomitas Grandes — Con mantequilla — $5.00
   - Palomitas Medianas — $4.00
   - Nachos con Queso — $5.50
   - Hot Dog Clásico — $4.25
   - Refresco Grande — $3.00
   - Refresco Mediano — $2.50
   - Agua Embotellada — $1.75
   - Chocolate M&M's — $2.75
   - Dulces Surtidos — $2.00

6. Info banner (Netflix Red background, white text):
   - "Programa de lealtad" title 
   - Description about accumulating points
   - White outline button "Más información"

7. Same footer as homepage

=== ANIMATIONS (IMPORTANT — this page needs them) ===

Add these animations with pure CSS:

a) Product cards appear with a staggered fade-up on page load:
   @keyframes fadeUp {
     from { opacity: 0; transform: translateY(24px); }
     to   { opacity: 1; transform: translateY(0); }
   }
   .product-card {
     animation: fadeUp 0.6s ease-out backwards;
   }
   .product-card:nth-child(1) { animation-delay: 0.05s; }
   .product-card:nth-child(2) { animation-delay: 0.10s; }
   .product-card:nth-child(3) { animation-delay: 0.15s; }
   .product-card:nth-child(4) { animation-delay: 0.20s; }
   (continue pattern)

b) Product card hover: 
   transform: translateY(-6px) scale(1.02), 
   border-color: Netflix Red,
   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

c) Featured combo card: subtle infinite pulse on the price:
   @keyframes pulse {
     0%, 100% { opacity: 1; }
     50%      { opacity: 0.85; }
   }
   .featured-combo__price { animation: pulse 2.4s ease-in-out infinite; }

d) Add @media (prefers-reduced-motion: reduce) to disable all 
   animations and transitions

=== OUTPUT REQUIREMENTS ===
- Single HTML file, CSS in <style> tag
- Pure HTML + CSS, No tailwind and NO JS.
- Responsive
- Comment the CSS sections clearly (/* === HEADER === */ etc.) 
  so the animations are easy to find and modify


  Create a different HTML and CSS file per each section(One for index, the current page, one for Dulceria and other one for Cines). In separeted html files, with the style separeted too.



Build a Netflix-style homepage for a Salvadoran cinema chain called

"Cinemark El Salvador".



=== STRICT DESIGN SYSTEM (follow exactly) ===



Rules:

- Pure black (#000000) background for ALL sections

- Netflix Red (#e50914) ONLY for logo accent, primary CTAs, active state

- Font: load "Inter" from Google Fonts (weights 400, 500, 700, 900)

  as substitute for Netflix Sans

- Buttons: 4px radius, SOLID fills, no outlines, no shadows

- Cards: 16px radius

- Feature cards: background linear-gradient(149deg, #192247, #210e17),

  NO box-shadow

- NO box-shadows anywhere on the page

- Max content width: 1280px, centered

- Section gap: 48px

- Primary text: #ffffff, Secondary text: #b3b3b3, Placeholder: #808080

- No saturated colors other than Netflix Red

- 4px base spacing unit



=== PAGE STRUCTURE ===



1. Header (transparent, sticky over hero):

   - Left: logo "CINEMARK" — "CINE" in white, "MARK" in Netflix Red

   - Center: nav links "Cartelera" (active), "Cines", "Dulcería"

   - Right: red "Iniciar sesión" button (padding 4px 16px, 14px font, weight 500)



2. Full-viewport hero (min-height: 90vh):

   - Dark dimmed background using a linear-gradient overlay on a

     placeholder collage of posters (use a dark radial/linear gradient

     as placeholder, no external images)

   - Centered content:

     * Small uppercase tagline "ESTRENO 2026" in silver, letter-spacing

     * Big headline "Toda la magia del cine, en un solo lugar"

       (56px, weight 700, line-height 1.17, white)

     * Subheadline (20px, silver): "Compra tus boletos, descubre

       estrenos y encuentra tu sucursal más cercana."

     * Red CTA button "Ver cartelera" (padding 16px 24px, 24px font,

       weight 700, radius 4px)

     * A translucent "Cambiar sucursal" button next to it

       (bg rgba(0,0,0,0.4), 1px #808080 border, white text)



3. Quick search section (on black, between hero and cartelera):

   - Row with 4 fields: Fecha | Película | Formato | Hora

   - Each field: label (13px silver above), select styled with

     background rgba(22,22,22,0.7), 1px #5a5a5a border, 4px radius,

     white text, 16px padding

   - Red "Buscar funciones" button on the right (weight 700)

   - Full row collapses to 1 column on mobile



4. Section "Cartelera de la semana":

   - Title (24px, weight 900, white) + link "Ver todas →" in red on the right

   - Horizontal scrollable carousel (scroll-snap) of movie cards

   - Each card:

     * Vertical poster (aspect-ratio 2/3) with dark gradient placeholder

     * Netflix Red badge "ESTRENO" in top-left corner (13px, weight 700,

       padding 4px 8px, radius 4px)

     * Below poster: title (16px, weight 700, white, 2 lines max)

     * Genre + duration (13px, silver)

     * Netflix Red "Comprar boletos" button (full-width, 16px padding,

       weight 700)

   - Show these 6 movies:

     1. Cuidado con los niños: El Heladero — Terror · 15+ · 105 min

     2. Zona Cero (Colony) — Acción · 15+ · 125 min

     3. Mamut: El regreso de los dinosaurios — Animación · TP · 96 min

     4. Rebelión en la granja — Animación · TP · 90 min

     5. Terminator 2: El juicio final — Acción · 15+ · 137 min

     6. Avengers: Endgame Bonus — Acción · 13+ · 181 min



5. Feature cards section (grid of 3, using the gradient background):

   - Card 1: "3 sucursales en todo el país" + short description

   - Card 2: "Formatos 2D, 3D y 4D" + short description

   - Card 3: "Dulcería completa" + short description

   - Each card: 16px radius, 24px padding, gradient bg

   - Title: 24px weight 900 white

   - Body: 16px weight 400 white



6. Section "Próximos estrenos":

   - Same carousel pattern but with poster + title + release date in

     Netflix Red (13px, weight 600)

   - 5 movies: Avengers Endgame Bonus (24 sep), Relajadas y muy

     peligrosas (10 sep), Don't Look Back in Anger (10 sep),

     Rápido y Furioso — 25 aniversario (10 sep), One Piece: La película

     (10 sep)



7. Footer (background #000000, top border 1px #2d2d2d):

   - 4 columns of links (Programación | Sobre Cinemark | Ayuda | Legal)

   - Link color: #b3b3b3, 14px, weight 400, hover color #ffffff

   - Bottom row: "© 2026 Cinemark El Salvador" + "Proyecto académico

     de rediseño — no afiliado a Cinemark Holdings." in #808080



=== OUTPUT REQUIREMENTS ===



- Single HTML file

- CSS in a <style> tag inside <head>

- Pure HTML5 + CSS, NO React, NO Tailwind, NO JavaScript frameworks

- NO JS allowed

- Semantic HTML (header, nav, main, section, article, footer)

- Responsive: mobile (<640px), tablet (<1024px), desktop

- Add @media (prefers-reduced-motion: reduce) to disable animations



Build the "Cines" page for the same "Cinemark El Salvador" site.

SAME design system and header/footer as the homepage (pure black bg,

Netflix Red accents only, Inter font, 1280px max-width, 4px button

radius, 16px card radius, no shadows).



=== PAGE STRUCTURE ===



1. Same sticky header (with "Cines" as active nav link)



2. Compact page hero (not full-viewport, ~40vh):

   - Big headline "Nuestros cines" (56px, weight 700, white)

   - Subheadline "3 sucursales en El Salvador. Encuentra la más

     cercana y consulta sus funciones." (silver, 20px)



3. Filter bar (sticky under header on scroll):

   - Dropdown "Departamento": Todos | San Salvador | La Libertad |

     Cuscatlán

   - Dropdown "Formato": Todos | 2D | 3D | 4D

   - Dropdown "Fecha": Hoy | Mañana | Miércoles 10 sep | ...

   - All styled with rgba(22,22,22,0.7) bg, 1px #5a5a5a border,

     4px radius



4. Grid of cinema cards (3 columns on desktop, 1 on mobile):

   Each card contains:

   - Dark gradient header with the cinema name in white (24px, weight 900)

   - Address (silver, 14px) with a red map pin icon (SVG, 16px)

   - Phone number (silver, 14px)

   - Hours "11:00 am – 11:00 pm" (silver)

   - Format badges as small pills: "2D", "3D", "4D", "D-BOX"

     (background #2d2d2d, white text, 4px radius, 4px 8px padding)

   - Divider line (#2d2d2d)

   - "Funciones de hoy" subheading (16px, weight 700, white)

   - List of 3-4 movies with their showtime pills:

     * Movie title in white (14px, weight 500)

     * Showtime pills next to it: background #2d2d2d, white text,

       4px radius, padding 4px 10px, hover turns Netflix Red

   - Red CTA button "Ver cartelera completa"



   Cinemas to list:

   1. Metrocentro San Salvador

      Address: Bulevar Los Héroes, San Salvador

      Phone: +503 2210-4500

      Formats: 2D, 3D, 4D, D-BOX

      Movies: Zona Cero (20:40), Mamut (15:30, 18:00), Terminator 2 (21:15)



   2. La Gran Vía

      Address: Carretera Panamericana, Antiguo Cuscatlán

      Phone: +503 2210-4600

      Formats: 2D, 3D, D-BOX

      Movies: Cuidado con los niños (17:20, 19:45), Rebelión en la granja

      (16:10, 18:35, 20:50), Avengers Endgame (14:00)



   3. Plaza Mundo Soyapango

      Address: Calle Nueva 2, Soyapango

      Phone: +503 2210-4700

      Formats: 2D, 3D

      Movies: Mamut (14:00, 17:30), Rebelión en la granja (15:20, 19:00),

      Zona Cero (21:00)



5. Section "Mapa de sucursales":

   - Full-width placeholder box (aspect-ratio 21/9) with a subtle

     gradient (black to dark blue) and centered text

     "Mapa de sucursales — próximamente"



6. Same footer as homepage



=== OUTPUT REQUIREMENTS ===

- Single HTML file, CSS in <style> tag

- Pure HTML + CSS, no frameworks and NO JS

- Responsive

- Include a smooth hover transition on cinema cards:

  border-color 0.2s ease → Netflix Red, transform translateY(-4px)







Build the "Dulcería" page for the same "Cinemark El Salvador" site.

SAME design system and header/footer (pure black, Netflix Red accents,

Inter font, 1280px max-width, 4px button radius, 16px card radius,

no shadows).



=== PAGE STRUCTURE ===



1. Same sticky header (with "Dulcería" as active nav link)



2. Compact page hero (~40vh):

   - Small red uppercase tag "DULCERÍA"

   - Headline "Todo para acompañar la función" (56px, weight 700, white)

   - Subheadline "Combos, palomitas, bebidas y snacks. Pide antes de

     entrar y recoge sin filas." (silver, 20px)



3. Category filter (horizontal pills):

   - Pills: Todos | Combos | Palomitas | Bebidas | Snacks | Dulces

   - Active pill: Netflix Red bg, white text

   - Inactive pill: #2d2d2d bg, silver text

   - 4px radius, 8px 16px padding



4. Featured combo section (uses the feature-card gradient):

   - Big card with 16px radius, gradient bg, 32px padding

   - Left side: text "Combo Familiar" (24px weight 900 white),

     description, red "Agregar al pedido" button

   - Right side: price in Netflix Red, big: "$18.50" (56px, weight 900)

   - Small "Ahorras $4.00" badge below in silver



5. Product grid (4 columns desktop, 2 tablet, 1 mobile):

   Each product card:

   - Square placeholder image area with a subtle dark gradient

     (top, aspect-ratio 1/1)

   - Below: product name (16px, weight 700, white)

   - Short description (13px, silver)

   - Price in Netflix Red (20px, weight 700)

   - Small "+ Agregar" button (red bg, white text, 4px radius,

     8px 14px padding)



   Products to list:

   - Combo Individual — Palomitas medianas + refresco mediano — $6.50

   - Combo Pareja — 2 palomitas medianas + 2 refrescos — $11.00

   - Combo Familiar — Palomitas grandes + 4 refrescos + nachos — $18.50

   - Palomitas Grandes — Con mantequilla — $5.00

   - Palomitas Medianas — $4.00

   - Nachos con Queso — $5.50

   - Hot Dog Clásico — $4.25

   - Refresco Grande — $3.00

   - Refresco Mediano — $2.50

   - Agua Embotellada — $1.75

   - Chocolate M&M's — $2.75

   - Dulces Surtidos — $2.00



6. Info banner (Netflix Red background, white text):

   - "Programa de lealtad" title

   - Description about accumulating points

   - White outline button "Más información"



7. Same footer as homepage



=== ANIMATIONS (IMPORTANT — this page needs them) ===



Add these animations with pure CSS:



a) Product cards appear with a staggered fade-up on page load:

   @keyframes fadeUp {

     from { opacity: 0; transform: translateY(24px); }

     to   { opacity: 1; transform: translateY(0); }

   }

   .product-card {

     animation: fadeUp 0.6s ease-out backwards;

   }

   .product-card:nth-child(1) { animation-delay: 0.05s; }

   .product-card:nth-child(2) { animation-delay: 0.10s; }

   .product-card:nth-child(3) { animation-delay: 0.15s; }

   .product-card:nth-child(4) { animation-delay: 0.20s; }

   (continue pattern)



b) Product card hover:

   transform: translateY(-6px) scale(1.02),

   border-color: Netflix Red,

   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)



c) Featured combo card: subtle infinite pulse on the price:

   @keyframes pulse {

     0%, 100% { opacity: 1; }

     50%      { opacity: 0.85; }

   }

   .featured-combo__price { animation: pulse 2.4s ease-in-out infinite; }



d) Add @media (prefers-reduced-motion: reduce) to disable all

   animations and transitions



=== OUTPUT REQUIREMENTS ===

- Single HTML file, CSS in <style> tag

- Pure HTML + CSS, No tailwind and NO JS.

- Responsive

- Comment the CSS sections clearly (/* === HEADER === */ etc.)

  so the animations are easy to find and modify

Here are the complete, separated HTML and CSS files for all three pages according to your strict design system guidelines.

1. Homepage (index.html & index.style.css)
index.html
HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cinemark El Salvador</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="index.style.css">
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="header__container">
      <a href="index.html" class="header__logo">CINE<span>MARK</span></a>
      <nav class="header__nav">
        <a href="index.html" class="header__nav-link header__nav-link--active">Cartelera</a>
        <a href="cines.html" class="header__nav-link">Cines</a>
        <a href="dulceria.html" class="header__nav-link">Dulcería</a>
      </nav>
      <button class="header__btn-login" type="button">Iniciar sesión</button>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero">
      <div class="hero__content">
        <span class="hero__tagline">ESTRENO 2026</span>
        <h1 class="hero__headline">Toda la magia del cine, en un solo lugar</h1>
        <p class="hero__subheadline">Compra tus boletos, descubre estrenos y encuentra tu sucursal más cercana.</p>
        <div class="hero__actions">
          <a href="#cartelera" class="btn btn--primary">Ver cartelera</a>
          <button class="btn btn--translucent" type="button">Cambiar sucursal</button>
        </div>
      </div>
    </section>

    <div class="container">
      <!-- QUICK SEARCH -->
      <section class="quick-search">
        <div class="quick-search__field">
          <label class="quick-search__label" for="qs-fecha">Fecha</label>
          <select class="quick-search__select" id="qs-fecha">
            <option>Hoy</option>
            <option>Mañana</option>
            <option>Miércoles 10 sep</option>
          </select>
        </div>
        <div class="quick-search__field">
          <label class="quick-search__label" for="qs-pelicula">Película</label>
          <select class="quick-search__select" id="qs-pelicula">
            <option>Todas las películas</option>
            <option>Zona Cero (Colony)</option>
            <option>Mamut</option>
          </select>
        </div>
        <div class="quick-search__field">
          <label class="quick-search__label" for="qs-formato">Formato</label>
          <select class="quick-search__select" id="qs-formato">
            <option>Todos</option>
            <option>2D</option>
            <option>3D</option>
            <option>4D</option>
          </select>
        </div>
        <div class="quick-search__field">
          <label class="quick-search__label" for="qs-hora">Hora</label>
          <select class="quick-search__select" id="qs-hora">
            <option>Todas</option>
            <option>Tarde</option>
            <option>Noche</option>
          </select>
        </div>
        <button class="btn btn--primary quick-search__btn" type="button">Buscar funciones</button>
      </section>

      <!-- CARTELERA DE LA SEMANA -->
      <section class="section" id="cartelera">
        <div class="section__header">
          <h2 class="section__title">Cartelera de la semana</h2>
          <a href="#" class="section__link">Ver todas &rarr;</a>
        </div>
        <div class="carousel">
          <article class="movie-card">
            <div class="movie-card__poster">
              <span class="movie-card__badge">ESTRENO</span>
            </div>
            <h3 class="movie-card__title">Cuidado con los niños: El Heladero</h3>
            <p class="movie-card__meta">Terror · 15+ · 105 min</p>
            <button class="btn btn--primary movie-card__btn" type="button">Comprar boletos</button>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster">
              <span class="movie-card__badge">ESTRENO</span>
            </div>
            <h3 class="movie-card__title">Zona Cero (Colony)</h3>
            <p class="movie-card__meta">Acción · 15+ · 125 min</p>
            <button class="btn btn--primary movie-card__btn" type="button">Comprar boletos</button>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster">
              <span class="movie-card__badge">ESTRENO</span>
            </div>
            <h3 class="movie-card__title">Mamut: El regreso de los dinosaurios</h3>
            <p class="movie-card__meta">Animación · TP · 96 min</p>
            <button class="btn btn--primary movie-card__btn" type="button">Comprar boletos</button>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster">
              <span class="movie-card__badge">ESTRENO</span>
            </div>
            <h3 class="movie-card__title">Rebelión en la granja</h3>
            <p class="movie-card__meta">Animación · TP · 90 min</p>
            <button class="btn btn--primary movie-card__btn" type="button">Comprar boletos</button>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster">
              <span class="movie-card__badge">ESTRENO</span>
            </div>
            <h3 class="movie-card__title">Terminator 2: El juicio final</h3>
            <p class="movie-card__meta">Acción · 15+ · 137 min</p>
            <button class="btn btn--primary movie-card__btn" type="button">Comprar boletos</button>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster">
              <span class="movie-card__badge">ESTRENO</span>
            </div>
            <h3 class="movie-card__title">Avengers: Endgame Bonus</h3>
            <p class="movie-card__meta">Acción · 13+ · 181 min</p>
            <button class="btn btn--primary movie-card__btn" type="button">Comprar boletos</button>
          </article>
        </div>
      </section>

      <!-- FEATURE CARDS -->
      <section class="section features-grid">
        <div class="feature-card">
          <h3 class="feature-card__title">3 sucursales en todo el país</h3>
          <p class="feature-card__body">Ubicados estratégicamente para traerte el mejor entretenimiento muy cerca de ti.</p>
        </div>
        <div class="feature-card">
          <h3 class="feature-card__title">Formatos 2D, 3D y 4D</h3>
          <p class="feature-card__body">Vive el cine con la máxima tecnología de proyección y efectos multisensoriales.</p>
        </div>
        <div class="feature-card">
          <h3 class="feature-card__title">Dulcería completa</h3>
          <p class="feature-card__body">Palomitas recién hechas, combos exclusivos, bebidas y snacks para acompañar tu función.</p>
        </div>
      </section>

      <!-- PRÓXIMOS ESTRENOS -->
      <section class="section">
        <div class="section__header">
          <h2 class="section__title">Próximos estrenos</h2>
        </div>
        <div class="carousel">
          <article class="movie-card">
            <div class="movie-card__poster"></div>
            <h3 class="movie-card__title">Avengers Endgame Bonus</h3>
            <p class="movie-card__date">24 sep</p>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster"></div>
            <h3 class="movie-card__title">Relajadas y muy peligrosas</h3>
            <p class="movie-card__date">10 sep</p>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster"></div>
            <h3 class="movie-card__title">Don't Look Back in Anger</h3>
            <p class="movie-card__date">10 sep</p>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster"></div>
            <h3 class="movie-card__title">Rápido y Furioso — 25 aniversario</h3>
            <p class="movie-card__date">10 sep</p>
          </article>

          <article class="movie-card">
            <div class="movie-card__poster"></div>
            <h3 class="movie-card__title">One Piece: La película</h3>
            <p class="movie-card__date">10 sep</p>
          </article>
        </div>
      </section>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__col">
          <h4 class="footer__title">Programación</h4>
          <a href="#" class="footer__link">Cartelera</a>
          <a href="#" class="footer__link">Próximos estrenos</a>
          <a href="#" class="footer__link">Preventas</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Sobre Cinemark</h4>
          <a href="#" class="footer__link">Nuestra historia</a>
          <a href="#" class="footer__link">Formatos de sala</a>
          <a href="#" class="footer__link">Trabaja con nosotros</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Ayuda</h4>
          <a href="#" class="footer__link">Preguntas frecuentes</a>
          <a href="#" class="footer__link">Contacto</a>
          <a href="#" class="footer__link">Facturación</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Legal</h4>
          <a href="#" class="footer__link">Términos y condiciones</a>
          <a href="#" class="footer__link">Privacidad</a>
          <a href="#" class="footer__link">Reglamento de salas</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2026 Cinemark El Salvador</span>
        <span>Proyecto académico de rediseño — no afiliado a Cinemark Holdings.</span>
      </div>
    </div>
  </footer>

</body>
</html>
index.style.css
CSS
/* === BASE & RESET === */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

/* === LAYOUT === */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  margin-bottom: 48px;
}

.section__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
}

.section__title {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
}

.section__link {
  color: #e50914;
  font-size: 14px;
  font-weight: 700;
}

/* === BUTTONS === */
.btn {
  border-radius: 4px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn--primary {
  background-color: #e50914;
  color: #ffffff;
}

.btn--translucent {
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid #808080;
  color: #ffffff;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 500;
}

/* === HEADER === */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
}

.header__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.header__logo span {
  color: #e50914;
}

.header__nav {
  display: flex;
  gap: 24px;
}

.header__nav-link {
  font-size: 14px;
  color: #b3b3b3;
  font-weight: 500;
}

.header__nav-link--active,
.header__nav-link:hover {
  color: #ffffff;
}

.header__btn-login {
  background-color: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

/* === HERO === */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 64px 24px;
  background: radial-gradient(circle, rgba(20,20,20,0.6) 0%, rgba(0,0,0,0.95) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.4) 0%, #000000 100%);
  margin-bottom: 48px;
}

.hero__content {
  max-width: 800px;
}

.hero__tagline {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #b3b3b3;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.hero__headline {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.17;
  color: #ffffff;
  margin-bottom: 16px;
}

.hero__subheadline {
  font-size: 20px;
  color: #b3b3b3;
  margin-bottom: 32px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__actions .btn--primary {
  padding: 16px 24px;
  font-size: 24px;
  font-weight: 700;
}

/* === QUICK SEARCH === */
.quick-search {
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  gap: 16px;
  align-items: end;
  background-color: #000000;
  margin-bottom: 48px;
}

.quick-search__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quick-search__label {
  font-size: 13px;
  color: #b3b3b3;
}

.quick-search__select {
  background: rgba(22, 22, 22, 0.7);
  border: 1px solid #5a5a5a;
  border-radius: 4px;
  color: #ffffff;
  padding: 16px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
}

.quick-search__btn {
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 700;
  height: 51px;
}

/* === CAROUSEL & MOVIE CARDS === */
.carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 16px;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.movie-card {
  flex: 0 0 220px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
}

.movie-card__poster {
  aspect-ratio: 2/3;
  background: linear-gradient(180deg, #2d2d2d 0%, #111111 100%);
  border-radius: 16px;
  position: relative;
  margin-bottom: 12px;
}

.movie-card__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #e50914;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
}

.movie-card__title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 38px;
}

.movie-card__meta {
  font-size: 13px;
  color: #b3b3b3;
  margin-bottom: 12px;
}

.movie-card__date {
  font-size: 13px;
  font-weight: 600;
  color: #e50914;
}

.movie-card__btn {
  width: 100%;
  padding: 16px 0;
  font-weight: 700;
  font-size: 14px;
  margin-top: auto;
}

/* === FEATURE CARDS === */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-card {
  background: linear-gradient(149deg, #192247, #210e17);
  border-radius: 16px;
  padding: 24px;
}

.feature-card__title {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 12px;
}

.feature-card__body {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.5;
}

/* === FOOTER === */
.footer {
  background-color: #000000;
  border-top: 1px solid #2d2d2d;
  padding: 48px 0 24px 0;
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 48px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__title {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.footer__link {
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 400;
}

.footer__link:hover {
  color: #ffffff;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #808080;
  flex-wrap: wrap;
  gap: 12px;
}

/* === MEDIA QUERIES === */
@media (max-width: 1024px) {
  .hero__headline {
    font-size: 40px;
  }
  .quick-search {
    grid-template-columns: repeat(2, 1fr);
  }
  .quick-search__btn {
    grid-column: span 2;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero__headline {
    font-size: 32px;
  }
  .quick-search {
    grid-template-columns: 1fr;
  }
  .quick-search__btn {
    grid-column: span 1;
  }
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
2. Cines Page (cines.html & cines.style.css)
cines.html
HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuestros Cines — Cinemark El Salvador</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="cines.style.css">
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="header__container">
      <a href="index.html" class="header__logo">CINE<span>MARK</span></a>
      <nav class="header__nav">
        <a href="index.html" class="header__nav-link">Cartelera</a>
        <a href="cines.html" class="header__nav-link header__nav-link--active">Cines</a>
        <a href="dulceria.html" class="header__nav-link">Dulcería</a>
      </nav>
      <button class="header__btn-login" type="button">Iniciar sesión</button>
    </div>
  </header>

  <main>
    <!-- COMPACT HERO -->
    <section class="hero-compact">
      <div class="hero-compact__container">
        <h1 class="hero-compact__title">Nuestros cines</h1>
        <p class="hero-compact__subtitle">3 sucursales en El Salvador. Encuentra la más cercana y consulta sus funciones.</p>
      </div>
    </section>

    <!-- FILTER BAR -->
    <div class="filter-bar">
      <div class="filter-bar__container">
        <select class="filter-bar__select">
          <option>Departamento: Todos</option>
          <option>San Salvador</option>
          <option>La Libertad</option>
          <option>Cuscatlán</option>
        </select>
        <select class="filter-bar__select">
          <option>Formato: Todos</option>
          <option>2D</option>
          <option>3D</option>
          <option>4D</option>
        </select>
        <select class="filter-bar__select">
          <option>Fecha: Hoy</option>
          <option>Mañana</option>
          <option>Miércoles 10 sep</option>
        </select>
      </div>
    </div>

    <!-- CINEMA GRID -->
    <div class="container section">
      <div class="cinema-grid">

        <!-- CINEMA 1 -->
        <article class="cinema-card">
          <div class="cinema-card__header">
            <h2 class="cinema-card__name">Metrocentro San Salvador</h2>
          </div>
          <div class="cinema-card__content">
            <p class="cinema-card__info">
              <svg class="cinema-card__icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Bulevar Los Héroes, San Salvador
            </p>
            <p class="cinema-card__info">+503 2210-4500</p>
            <p class="cinema-card__info">11:00 am – 11:00 pm</p>

            <div class="cinema-card__badges">
              <span class="badge">2D</span>
              <span class="badge">3D</span>
              <span class="badge">4D</span>
              <span class="badge">D-BOX</span>
            </div>

            <hr class="cinema-card__divider">

            <h3 class="cinema-card__subheading">Funciones de hoy</h3>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Zona Cero</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">20:40</button>
              </div>
            </div>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Mamut</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">15:30</button>
                <button class="showtime-pill">18:00</button>
              </div>
            </div>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Terminator 2</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">21:15</button>
              </div>
            </div>

            <button class="btn btn--primary cinema-card__btn" type="button">Ver cartelera completa</button>
          </div>
        </article>

        <!-- CINEMA 2 -->
        <article class="cinema-card">
          <div class="cinema-card__header">
            <h2 class="cinema-card__name">La Gran Vía</h2>
          </div>
          <div class="cinema-card__content">
            <p class="cinema-card__info">
              <svg class="cinema-card__icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Carretera Panamericana, Antiguo Cuscatlán
            </p>
            <p class="cinema-card__info">+503 2210-4600</p>
            <p class="cinema-card__info">11:00 am – 11:00 pm</p>

            <div class="cinema-card__badges">
              <span class="badge">2D</span>
              <span class="badge">3D</span>
              <span class="badge">D-BOX</span>
            </div>

            <hr class="cinema-card__divider">

            <h3 class="cinema-card__subheading">Funciones de hoy</h3>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Cuidado con los niños</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">17:20</button>
                <button class="showtime-pill">19:45</button>
              </div>
            </div>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Rebelión en la granja</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">16:10</button>
                <button class="showtime-pill">18:35</button>
              </div>
            </div>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Avengers Endgame</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">14:00</button>
              </div>
            </div>

            <button class="btn btn--primary cinema-card__btn" type="button">Ver cartelera completa</button>
          </div>
        </article>

        <!-- CINEMA 3 -->
        <article class="cinema-card">
          <div class="cinema-card__header">
            <h2 class="cinema-card__name">Plaza Mundo Soyapango</h2>
          </div>
          <div class="cinema-card__content">
            <p class="cinema-card__info">
              <svg class="cinema-card__icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Calle Nueva 2, Soyapango
            </p>
            <p class="cinema-card__info">+503 2210-4700</p>
            <p class="cinema-card__info">11:00 am – 11:00 pm</p>

            <div class="cinema-card__badges">
              <span class="badge">2D</span>
              <span class="badge">3D</span>
            </div>

            <hr class="cinema-card__divider">

            <h3 class="cinema-card__subheading">Funciones de hoy</h3>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Mamut</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">14:00</button>
                <button class="showtime-pill">17:30</button>
              </div>
            </div>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Rebelión en la granja</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">15:20</button>
                <button class="showtime-pill">19:00</button>
              </div>
            </div>
            <div class="movie-schedule">
              <span class="movie-schedule__title">Zona Cero</span>
              <div class="movie-schedule__times">
                <button class="showtime-pill">21:00</button>
              </div>
            </div>

            <button class="btn btn--primary cinema-card__btn" type="button">Ver cartelera completa</button>
          </div>
        </article>

      </div>
    </div>

    <!-- MAP SECTION -->
    <section class="container section">
      <div class="map-placeholder">
        Mapa de sucursales — próximamente
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__col">
          <h4 class="footer__title">Programación</h4>
          <a href="#" class="footer__link">Cartelera</a>
          <a href="#" class="footer__link">Próximos estrenos</a>
          <a href="#" class="footer__link">Preventas</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Sobre Cinemark</h4>
          <a href="#" class="footer__link">Nuestra historia</a>
          <a href="#" class="footer__link">Formatos de sala</a>
          <a href="#" class="footer__link">Trabaja con nosotros</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Ayuda</h4>
          <a href="#" class="footer__link">Preguntas frecuentes</a>
          <a href="#" class="footer__link">Contacto</a>
          <a href="#" class="footer__link">Facturación</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Legal</h4>
          <a href="#" class="footer__link">Términos y condiciones</a>
          <a href="#" class="footer__link">Privacidad</a>
          <a href="#" class="footer__link">Reglamento de salas</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2026 Cinemark El Salvador</span>
        <span>Proyecto académico de rediseño — no afiliado a Cinemark Holdings.</span>
      </div>
    </div>
  </footer>

</body>
</html>
cines.style.css
CSS
/* === BASE & RESET === */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

/* === LAYOUT === */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  margin-bottom: 48px;
}

/* === BUTTONS === */
.btn {
  border-radius: 4px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn--primary {
  background-color: #e50914;
  color: #ffffff;
}

/* === HEADER === */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
}

.header__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
}

.header__logo span {
  color: #e50914;
}

.header__nav {
  display: flex;
  gap: 24px;
}

.header__nav-link {
  font-size: 14px;
  color: #b3b3b3;
  font-weight: 500;
}

.header__nav-link--active,
.header__nav-link:hover {
  color: #ffffff;
}

.header__btn-login {
  background-color: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

/* === COMPACT HERO === */
.hero-compact {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(circle, rgba(20,20,20,0.8) 0%, rgba(0,0,0,1) 100%);
  padding: 0 24px;
}

.hero-compact__container {
  max-width: 800px;
}

.hero-compact__title {
  font-size: 56px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

.hero-compact__subtitle {
  font-size: 20px;
  color: #b3b3b3;
}

/* === FILTER BAR === */
.filter-bar {
  position: sticky;
  top: 61px;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 16px 0;
  margin-bottom: 48px;
}

.filter-bar__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.filter-bar__select {
  background: rgba(22, 22, 22, 0.7);
  border: 1px solid #5a5a5a;
  border-radius: 4px;
  color: #ffffff;
  padding: 12px 16px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
}

/* === CINEMA CARDS GRID === */
.cinema-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cinema-card {
  background-color: #000000;
  border: 1px solid #2d2d2d;
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.cinema-card:hover {
  border-color: #e50914;
  transform: translateY(-4px);
}

.cinema-card__header {
  background: linear-gradient(180deg, #1f1f1f 0%, #121212 100%);
  padding: 24px;
}

.cinema-card__name {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
}

.cinema-card__content {
  padding: 24px;
}

.cinema-card__info {
  font-size: 14px;
  color: #b3b3b3;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.cinema-card__icon {
  width: 16px;
  height: 16px;
  fill: #e50914;
}

.cinema-card__badges {
  display: flex;
  gap: 8px;
  margin: 16px 0;
}

.badge {
  background-color: #2d2d2d;
  color: #ffffff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.cinema-card__divider {
  border: none;
  border-top: 1px solid #2d2d2d;
  margin: 16px 0;
}

.cinema-card__subheading {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.movie-schedule {
  margin-bottom: 12px;
}

.movie-schedule__title {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  display: block;
  margin-bottom: 6px;
}

.movie-schedule__times {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.showtime-pill {
  background-color: #2d2d2d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.showtime-pill:hover {
  background-color: #e50914;
}

.cinema-card__btn {
  width: 100%;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
}

/* === MAP === */
.map-placeholder {
  aspect-ratio: 21/9;
  background: linear-gradient(135deg, #000000 0%, #0d1527 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b3b3b3;
  font-size: 18px;
  border: 1px solid #2d2d2d;
}

/* === FOOTER === */
.footer {
  background-color: #000000;
  border-top: 1px solid #2d2d2d;
  padding: 48px 0 24px 0;
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 48px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__title {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.footer__link {
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 400;
}

.footer__link:hover {
  color: #ffffff;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #808080;
  flex-wrap: wrap;
  gap: 12px;
}

/* === MEDIA QUERIES === */
@media (max-width: 1024px) {
  .cinema-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-compact__title {
    font-size: 36px;
  }
  .cinema-grid {
    grid-template-columns: 1fr;
  }
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cinema-card {
    transition: none;
  }
  .cinema-card:hover {
    transform: none;
  }
}
3. Dulcería Page (dulceria.html & dulceria.style.css)
dulceria.html
HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dulcería — Cinemark El Salvador</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="dulceria.style.css">
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="header__container">
      <a href="index.html" class="header__logo">CINE<span>MARK</span></a>
      <nav class="header__nav">
        <a href="index.html" class="header__nav-link">Cartelera</a>
        <a href="cines.html" class="header__nav-link">Cines</a>
        <a href="dulceria.html" class="header__nav-link header__nav-link--active">Dulcería</a>
      </nav>
      <button class="header__btn-login" type="button">Iniciar sesión</button>
    </div>
  </header>

  <main>
    <!-- HERO DULCERIA -->
    <section class="hero-dulceria">
      <div class="hero-dulceria__container">
        <span class="hero-dulceria__tag">DULCERÍA</span>
        <h1 class="hero-dulceria__headline">Todo para acompañar la función</h1>
        <p class="hero-dulceria__subheadline">Combos, palomitas, bebidas y snacks. Pide antes de entrar y recoge sin filas.</p>
      </div>
    </section>

    <div class="container">
      <!-- CATEGORY FILTERS -->
      <nav class="pills-nav">
        <button class="pill pill--active" type="button">Todos</button>
        <button class="pill" type="button">Combos</button>
        <button class="pill" type="button">Palomitas</button>
        <button class="pill" type="button">Bebidas</button>
        <button class="pill" type="button">Snacks</button>
        <button class="pill" type="button">Dulces</button>
      </nav>

      <!-- FEATURED COMBO -->
      <section class="section">
        <div class="featured-combo">
          <div class="featured-combo__info">
            <h2 class="featured-combo__title">Combo Familiar</h2>
            <p class="featured-combo__desc">Palomitas grandes + 4 refrescos + nachos con queso. Ideal para compartir en grupo.</p>
            <button class="btn btn--primary featured-combo__btn" type="button">Agregar al pedido</button>
          </div>
          <div class="featured-combo__price-box">
            <span class="featured-combo__price">$18.50</span>
            <span class="featured-combo__badge">Ahorras $4.00</span>
          </div>
        </div>
      </section>

      <!-- PRODUCTS GRID -->
      <section class="section">
        <div class="product-grid">

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Combo Individual</h3>
              <p class="product-card__desc">Palomitas medianas + refresco mediano</p>
              <div class="product-card__footer">
                <span class="product-card__price">$6.50</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Combo Pareja</h3>
              <p class="product-card__desc">2 palomitas medianas + 2 refrescos</p>
              <div class="product-card__footer">
                <span class="product-card__price">$11.00</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Combo Familiar</h3>
              <p class="product-card__desc">Palomitas grandes + 4 refrescos + nachos</p>
              <div class="product-card__footer">
                <span class="product-card__price">$18.50</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Palomitas Grandes</h3>
              <p class="product-card__desc">Con mantequilla</p>
              <div class="product-card__footer">
                <span class="product-card__price">$5.00</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Palomitas Medianas</h3>
              <p class="product-card__desc">Con mantequilla</p>
              <div class="product-card__footer">
                <span class="product-card__price">$4.00</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Nachos con Queso</h3>
              <p class="product-card__desc">Salsa de queso caliente</p>
              <div class="product-card__footer">
                <span class="product-card__price">$5.50</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Hot Dog Clásico</h3>
              <p class="product-card__desc">Con salsas a elegir</p>
              <div class="product-card__footer">
                <span class="product-card__price">$4.25</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Refresco Grande</h3>
              <p class="product-card__desc">32 oz variados sabores</p>
              <div class="product-card__footer">
                <span class="product-card__price">$3.00</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Refresco Mediano</h3>
              <p class="product-card__desc">21 oz variados sabores</p>
              <div class="product-card__footer">
                <span class="product-card__price">$2.50</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Agua Embotellada</h3>
              <p class="product-card__desc">600 ml sin gas</p>
              <div class="product-card__footer">
                <span class="product-card__price">$1.75</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Chocolate M&M's</h3>
              <p class="product-card__desc">Bolsa para compartir</p>
              <div class="product-card__footer">
                <span class="product-card__price">$2.75</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__img"></div>
            <div class="product-card__content">
              <h3 class="product-card__title">Dulces Surtidos</h3>
              <p class="product-card__desc">Gominolas ácidas y dulces</p>
              <div class="product-card__footer">
                <span class="product-card__price">$2.00</span>
                <button class="btn btn--primary product-card__btn" type="button">+ Agregar</button>
              </div>
            </div>
          </article>

        </div>
      </section>

      <!-- INFO BANNER -->
      <section class="section">
        <div class="info-banner">
          <div class="info-banner__text">
            <h3 class="info-banner__title">Programa de lealtad</h3>
            <p class="info-banner__desc">Acumula puntos en cada compra de dulcería y canjéalos por entradas o combos gratis.</p>
          </div>
          <button class="info-banner__btn" type="button">Más información</button>
        </div>
      </section>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__col">
          <h4 class="footer__title">Programación</h4>
          <a href="#" class="footer__link">Cartelera</a>
          <a href="#" class="footer__link">Próximos estrenos</a>
          <a href="#" class="footer__link">Preventas</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Sobre Cinemark</h4>
          <a href="#" class="footer__link">Nuestra historia</a>
          <a href="#" class="footer__link">Formatos de sala</a>
          <a href="#" class="footer__link">Trabaja con nosotros</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Ayuda</h4>
          <a href="#" class="footer__link">Preguntas frecuentes</a>
          <a href="#" class="footer__link">Contacto</a>
          <a href="#" class="footer__link">Facturación</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__title">Legal</h4>
          <a href="#" class="footer__link">Términos y condiciones</a>
          <a href="#" class="footer__link">Privacidad</a>
          <a href="#" class="footer__link">Reglamento de salas</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2026 Cinemark El Salvador</span>
        <span>Proyecto académico de rediseño — no afiliado a Cinemark Holdings.</span>
      </div>
    </div>
  </footer>

</body>
</html>
dulceria.style.css
CSS
/* === BASE & RESET === */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

/* === LAYOUT === */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  margin-bottom: 48px;
}

/* === BUTTONS === */
.btn {
  border-radius: 4px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn--primary {
  background-color: #e50914;
  color: #ffffff;
}

/* === HEADER === */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
}

.header__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
}

.header__logo span {
  color: #e50914;
}

.header__nav {
  display: flex;
  gap: 24px;
}

.header__nav-link {
  font-size: 14px;
  color: #b3b3b3;
  font-weight: 500;
}

.header__nav-link--active,
.header__nav-link:hover {
  color: #ffffff;
}

.header__btn-login {
  background-color: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

/* === HERO DULCERIA === */
.hero-dulceria {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
}

.hero-dulceria__container {
  max-width: 800px;
}

.hero-dulceria__tag {
  color: #e50914;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 8px;
  display: block;
}

.hero-dulceria__headline {
  font-size: 56px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

.hero-dulceria__subheadline {
  font-size: 20px;
  color: #b3b3b3;
}

/* === CATEGORY PILLS === */
.pills-nav {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.pill {
  background-color: #2d2d2d;
  color: #b3b3b3;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.pill--active {
  background-color: #e50914;
  color: #ffffff;
}

/* === FEATURED COMBO === */
.featured-combo {
  background: linear-gradient(149deg, #192247, #210e17);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.featured-combo__title {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 8px;
}

.featured-combo__desc {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 24px;
  max-width: 500px;
}

.featured-combo__btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 700;
}

.featured-combo__price-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.featured-combo__price {
  color: #e50914;
  font-size: 56px;
  font-weight: 900;
}

.featured-combo__badge {
  color: #b3b3b3;
  font-size: 14px;
}

/* === PRODUCT GRID === */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.product-card {
  background-color: #000000;
  border: 1px solid #2d2d2d;
  border-radius: 16px;
  overflow: hidden;
}

.product-card__img {
  aspect-ratio: 1/1;
  background: linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%);
}

.product-card__content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-card__title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
}

.product-card__desc {
  font-size: 13px;
  color: #b3b3b3;
  min-height: 38px;
}

.product-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.product-card__price {
  color: #e50914;
  font-size: 20px;
  font-weight: 700;
}

.product-card__btn {
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 700;
}

/* === INFO BANNER === */
.info-banner {
  background-color: #e50914;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.info-banner__title {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 8px;
}

.info-banner__desc {
  color: #ffffff;
  font-size: 16px;
}

.info-banner__btn {
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

/* === FOOTER === */
.footer {
  background-color: #000000;
  border-top: 1px solid #2d2d2d;
  padding: 48px 0 24px 0;
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 48px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__title {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.footer__link {
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 400;
}

.footer__link:hover {
  color: #ffffff;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #808080;
  flex-wrap: wrap;
  gap: 12px;
}

/* === KEYFRAME ANIMATIONS === */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

/* === ANIMATION ASSIGNMENTS === */
.product-card {
  animation: fadeUp 0.6s ease-out backwards;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:nth-child(1) { animation-delay: 0.05s; }
.product-card:nth-child(2) { animation-delay: 0.10s; }
.product-card:nth-child(3) { animation-delay: 0.15s; }
.product-card:nth-child(4) { animation-delay: 0.20s; }
.product-card:nth-child(5) { animation-delay: 0.25s; }
.product-card:nth-child(6) { animation-delay: 0.30s; }
.product-card:nth-child(7) { animation-delay: 0.35s; }
.product-card:nth-child(8) { animation-delay: 0.40s; }
.product-card:nth-child(9) { animation-delay: 0.45s; }
.product-card:nth-child(10) { animation-delay: 0.50s; }
.product-card:nth-child(11) { animation-delay: 0.55s; }
.product-card:nth-child(12) { animation-delay: 0.60s; }

.product-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: #e50914;
}

.featured-combo__price {
  animation: pulse 2.4s ease-in-out infinite;
}

/* === MEDIA QUERIES === */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-dulceria__headline {
    font-size: 36px;
  }
  .featured-combo,
  .info-banner {
    flex-direction: column;
    align-items: flex-start;
  }
  .featured-combo__price-box {
    align-items: flex-start;
  }
  .product-grid {
    grid-template-columns: 1fr;
  }
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-card,
  .featured-combo__price {
    animation: none !important;
    transition: none !important;
  }
  .product-card:hover {
    transform: none;
  }
}
Las animacione no funcionan no se muestran, copie el codigo tal como tu me lo diste. Y las animaciones no se ven en ningun momento, las url ya estan arregladas pero no se muestran las animaciones al abrir la pagina en el navegador, google chrome..

El problema exacto por el cual no ves las animaciones radica en tres razones principales en tu archivo CSS:

1. Duración excesiva en el pulso (Parece estático)
En la línea 243 de tu CSS tienes:

CSS
.featured-combo__price {
  animation: pulse 19s ease-in-out infinite;
}
19 segundos es un tiempo demasiado largo para una animación de pulso; el cambio de opacidad es tan lento que parece que el texto está completamente quieto.

2. Conflicto entre backwards y la animación inicial
Para .product-card, usas fadeUp 0.6s ease-out backwards. Con la propiedad backwards, si la animación inicia o termina muy rápido antes de hacer scroll, o si ocurre al cargar la página en milesimas de segundo, la tarjeta se queda en la posición final translateY(0) sin que notes el movimiento. Además, si abres la página con la opción de reducción de movimiento activada en Windows/macOS, tu regla @media (prefers-reduced-motion: reduce) desactiva todo.

3. Faltan propiedades de visibilidad durante el retraso (animation-fill-mode)
Si no usas forwards o both, los elementos con retraso (animation-delay) se muestran visibles inmediatamente en su posición original antes de que comience su turno de animarse, eliminando el efecto de entrada progresiva.

Solución: Reemplaza estas secciones en tu CSS
Busca en tu archivo dulceria-style.css las reglas al final del archivo y reemplázalas por lo siguiente:

CSS
/* === KEYFRAME ANIMATIONS === */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.85;
  }
}

/* === ANIMATION ASSIGNMENTS === */
.product-card {
  /* Usamos 'both' para que mantenga el opacity: 0 mientras espera su 'delay' */
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

/* Retrasos escalonados */
.product-card:nth-child(1)  { animation-delay: 0.1s; }
.product-card:nth-child(2)  { animation-delay: 0.15s; }
.product-card:nth-child(3)  { animation-delay: 0.2s; }
.product-card:nth-child(4)  { animation-delay: 0.25s; }
.product-card:nth-child(5)  { animation-delay: 0.3s; }
.product-card:nth-child(6)  { animation-delay: 0.35s; }
.product-card:nth-child(7)  { animation-delay: 0.4s; }
.product-card:nth-child(8)  { animation-delay: 0.45s; }
.product-card:nth-child(9)  { animation-delay: 0.5s; }
.product-card:nth-child(10) { animation-delay: 0.55s; }
.product-card:nth-child(11) { animation-delay: 0.6s; }
.product-card:nth-child(12) { animation-delay: 0.65s; }

.product-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: #e50914;
}

.featured-combo__price {
  /* Reducido a 2s para que el efecto sea visible inmediatamente */
  animation: pulse 2s ease-in-out infinite;
  display: inline-block;
}
Un detalle adicional para verificar:
Asegúrate de que la carpeta y la ruta coincidan. En tu HTML tienes:
<link rel="stylesheet" href="reto-ia-style/dulceria-style.css">

Asegúrate de que la estructura de tus carpetas en tu proyecto sea:

dulceria.html

Carpeta reto-ia-style

Dentro: dulceria-style.css

Guarda los cambios y recarga la página en Google Chrome presionando Ctrl + F5 (o Cmd + Shift + R en Mac) para forzar la limpieza de la caché CSS.