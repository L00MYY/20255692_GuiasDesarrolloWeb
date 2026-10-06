<!-- ============================================================
     ARCHIVO: index.html
     ============================================================ -->
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cinemark El Salvador</title>

  <!-- Tipografía oficial del rediseño -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
    rel="stylesheet"
  >

  <!-- Hoja de estilos del proyecto -->
  <link rel="stylesheet" href="reto-ia-style/reto-ia-style.css">
</head>

<body>

  <!-- =========================================================
       HEADER
       Navegación principal sticky.
       ========================================================= -->
  <header class="header">
    <div class="header__container">

      <!-- Logo -->
      <a href="index.html" class="header__logo">CINE<span>MARK</span></a>

      <!-- Navegación principal -->
      <nav class="header__nav" aria-label="Navegación principal">
        <a href="index.html" class="header__nav-link header__nav-link--active" aria-current="page">
          Cartelera
        </a>
        <a href="cines.html" class="header__nav-link">Cines</a>
        <a href="dulceria.html" class="header__nav-link">Dulcería</a>
      </nav>

      <!-- Acción de inicio de sesión -->
      <button class="header__btn-login" type="button">Iniciar sesión</button>

    </div>
  </header>


  <!-- =========================================================
       MAIN
       Todo el layout maestro utiliza CSS Grid.
       Las cinco áreas principales son:
       hero, search, cartelera, features y proximos.
       ========================================================= -->
  <main>

    <!-- =======================================================
         HERO
         ======================================================= -->
    <section class="hero" id="inicio">
      <div class="hero__content">

        <span class="hero__tagline">ESTRENO 2026</span>

        <h1 class="hero__headline">
          Toda la magia del cine, en un solo lugar
        </h1>

        <p class="hero__subheadline">
          Compra tus boletos, descubre estrenos y encuentra tu sucursal más cercana.
        </p>

        <div class="hero__actions">
          <a href="#cartelera" class="btn btn--primary">Ver cartelera</a>
          <button class="btn btn--translucent" type="button">
            Cambiar sucursal
          </button>
        </div>

      </div>
    </section>


    <!-- =======================================================
         QUICK SEARCH
         Formulario visual sin JavaScript.
         ======================================================= -->
    <section class="quick-search" aria-label="Buscar funciones">

      <div class="quick-search__field">
        <label class="quick-search__label" for="qs-fecha">Fecha</label>
        <select class="quick-search__select" id="qs-fecha" name="fecha">
          <option>Hoy</option>
          <option>Mañana</option>
          <option>Miércoles 10 sep</option>
        </select>
      </div>

      <div class="quick-search__field">
        <label class="quick-search__label" for="qs-pelicula">Película</label>
        <select class="quick-search__select" id="qs-pelicula" name="pelicula">
          <option>Todas las películas</option>
          <option>Zona Cero (Colony)</option>
          <option>Mamut</option>
        </select>
      </div>

      <div class="quick-search__field">
        <label class="quick-search__label" for="qs-formato">Formato</label>
        <select class="quick-search__select" id="qs-formato" name="formato">
          <option>Todos</option>
          <option>2D</option>
          <option>3D</option>
          <option>4D</option>
        </select>
      </div>

      <div class="quick-search__field">
        <label class="quick-search__label" for="qs-hora">Hora</label>
        <select class="quick-search__select" id="qs-hora" name="hora">
          <option>Todas</option>
          <option>Tarde</option>
          <option>Noche</option>
        </select>
      </div>

      <button class="btn btn--primary quick-search__btn" type="button">
        Buscar funciones
      </button>

    </section>


    <!-- =======================================================
         CARTELERA DE LA SEMANA
         ======================================================= -->
    <section class="section cartelera" id="cartelera">

      <div class="section__header">
        <h2 class="section__title">Cartelera de la semana</h2>
        <a href="#cartelera" class="section__link">
          Ver todas &rarr;
        </a>
      </div>

      <div class="movie-grid">

        <!-- Película 1 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--heladero"
            role="img"
            aria-label="Póster de Cuidado con los niños: El Heladero"
          >
            <span class="movie-card__badge">ESTRENO</span>
          </div>

          <h3 class="movie-card__title">
            Cuidado con los niños: El Heladero
          </h3>

          <p class="movie-card__meta">
            Terror · 15+ · 105 min
          </p>

          <button class="btn btn--primary movie-card__btn" type="button">
            Comprar boletos
          </button>
        </article>


        <!-- Película 2 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--colony"
            role="img"
            aria-label="Póster de Zona Cero (Colony)"
          >
            <span class="movie-card__badge">ESTRENO</span>
          </div>

          <h3 class="movie-card__title">
            Zona Cero (Colony)
          </h3>

          <p class="movie-card__meta">
            Acción · 15+ · 125 min
          </p>

          <button class="btn btn--primary movie-card__btn" type="button">
            Comprar boletos
          </button>
        </article>


        <!-- Película 3 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--mamut"
            role="img"
            aria-label="Póster de Mamut: El regreso de los dinosaurios"
          >
            <span class="movie-card__badge">ESTRENO</span>
          </div>

          <h3 class="movie-card__title">
            Mamut: El regreso de los dinosaurios
          </h3>

          <p class="movie-card__meta">
            Animación · TP · 96 min
          </p>

          <button class="btn btn--primary movie-card__btn" type="button">
            Comprar boletos
          </button>
        </article>


        <!-- Película 4 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--granja"
            role="img"
            aria-label="Póster de Rebelión en la granja"
          >
            <span class="movie-card__badge">ESTRENO</span>
          </div>

          <h3 class="movie-card__title">
            Rebelión en la granja
          </h3>

          <p class="movie-card__meta">
            Animación · TP · 90 min
          </p>

          <button class="btn btn--primary movie-card__btn" type="button">
            Comprar boletos
          </button>
        </article>


        <!-- Película 5 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--terminator"
            role="img"
            aria-label="Póster de Terminator 2: El juicio final"
          >
            <span class="movie-card__badge">ESTRENO</span>
          </div>

          <h3 class="movie-card__title">
            Terminator 2: El juicio final
          </h3>

          <p class="movie-card__meta">
            Acción · 15+ · 137 min
          </p>

          <button class="btn btn--primary movie-card__btn" type="button">
            Comprar boletos
          </button>
        </article>


        <!-- Película 6 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--avengers"
            role="img"
            aria-label="Póster de Avengers: Endgame Bonus"
          >
            <span class="movie-card__badge">ESTRENO</span>
          </div>

          <h3 class="movie-card__title">
            Avengers: Endgame Bonus
          </h3>

          <p class="movie-card__meta">
            Acción · 13+ · 181 min
          </p>

          <button class="btn btn--primary movie-card__btn" type="button">
            Comprar boletos
          </button>
        </article>

      </div>
    </section>


    <!-- =======================================================
         CARACTERÍSTICAS
         ======================================================= -->
    <section
      class="section features"
      aria-label="Características de Cinemark"
    >

      <div class="section__header">
        <h2 class="section__title">
          La experiencia Cinemark
        </h2>
      </div>

      <div class="features-grid">

        <article class="feature-card">
          <h3 class="feature-card__title">
            3 sucursales en todo el país
          </h3>

          <p class="feature-card__body">
            Ubicados estratégicamente para traerte el mejor entretenimiento
            muy cerca de ti.
          </p>
        </article>


        <article class="feature-card">
          <h3 class="feature-card__title">
            Formatos 2D, 3D y 4D
          </h3>

          <p class="feature-card__body">
            Vive el cine con la máxima tecnología de proyección y efectos
            multisensoriales.
          </p>
        </article>


        <article class="feature-card">
          <h3 class="feature-card__title">
            Dulcería completa
          </h3>

          <p class="feature-card__body">
            Palomitas recién hechas, combos exclusivos, bebidas y snacks
            para acompañar tu función.
          </p>
        </article>

      </div>
    </section>


    <!-- =======================================================
         PRÓXIMOS ESTRENOS
         ======================================================= -->
    <section class="section proximos" id="proximos">

      <div class="section__header">
        <h2 class="section__title">
          Próximos estrenos
        </h2>
      </div>

      <div class="upcoming-grid">

        <!-- Próximo estreno 1 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--avengers-upcoming"
            role="img"
            aria-label="Póster de Avengers Endgame Bonus"
          ></div>

          <h3 class="movie-card__title">
            Avengers Endgame Bonus
          </h3>

          <p class="movie-card__date">
            24 sep
          </p>
        </article>


        <!-- Próximo estreno 2 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--relajadas"
            role="img"
            aria-label="Póster de Relajadas y muy peligrosas"
          ></div>

          <h3 class="movie-card__title">
            Relajadas y muy peligrosas
          </h3>

          <p class="movie-card__date">
            10 sep
          </p>
        </article>


        <!-- Próximo estreno 3 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--lookback"
            role="img"
            aria-label="Póster de Don't Look Back in Anger"
          ></div>

          <h3 class="movie-card__title">
            Don't Look Back in Anger
          </h3>

          <p class="movie-card__date">
            10 sep
          </p>
        </article>


        <!-- Próximo estreno 4 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--rapido"
            role="img"
            aria-label="Póster de Rápido y Furioso — 25 aniversario"
          ></div>

          <h3 class="movie-card__title">
            Rápido y Furioso — 25 aniversario
          </h3>

          <p class="movie-card__date">
            10 sep
          </p>
        </article>


        <!-- Próximo estreno 5 -->
        <article class="movie-card">
          <div
            class="movie-card__poster movie-card__poster--onepiece"
            role="img"
            aria-label="Póster de One Piece: La película"
          ></div>

          <h3 class="movie-card__title">
            One Piece: La película
          </h3>

          <p class="movie-card__date">
            10 sep
          </p>
        </article>

      </div>
    </section>

  </main>


  <!-- =========================================================
       FOOTER
       ========================================================= -->
  <footer class="footer">
    <div class="footer__container">

      <div class="footer__grid">

        <!-- Columna 1 -->
        <div class="footer__col">
          <h2 class="footer__title">
            Programación
          </h2>

          <a href="#cartelera" class="footer__link">
            Cartelera
          </a>

          <a href="#proximos" class="footer__link">
            Próximos estrenos
          </a>

          <a href="#" class="footer__link">
            Preventas
          </a>
        </div>


        <!-- Columna 2 -->
        <div class="footer__col">
          <h2 class="footer__title">
            Sobre Cinemark
          </h2>

          <a href="#" class="footer__link">
            Nuestra historia
          </a>

          <a href="#" class="footer__link">
            Formatos de sala
          </a>

          <a href="#" class="footer__link">
            Trabaja con nosotros
          </a>
        </div>


        <!-- Columna 3 -->
        <div class="footer__col">
          <h2 class="footer__title">
            Ayuda
          </h2>

          <a href="#" class="footer__link">
            Preguntas frecuentes
          </a>

          <a href="#" class="footer__link">
            Contacto
          </a>

          <a href="#" class="footer__link">
            Facturación
          </a>
        </div>


        <!-- Columna 4 -->
        <div class="footer__col">
          <h2 class="footer__title">
            Legal
          </h2>

          <a href="#" class="footer__link">
            Términos y condiciones
          </a>

          <a href="#" class="footer__link">
            Privacidad
          </a>

          <a href="#" class="footer__link">
            Reglamento de salas
          </a>
        </div>

      </div>


      <!-- Barra inferior -->
      <div class="footer__bottom">
        <span>© 2026 Cinemark El Salvador</span>

        <span>
          Proyecto académico de rediseño — no afiliado a Cinemark Holdings.
        </span>
      </div>

    </div>
  </footer>

</body>
</html>