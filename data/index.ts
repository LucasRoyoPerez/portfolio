export const uiText = {
  heroTitle: {
    en: "Hi! I'm Lucas Royo, welcome to my portfolio!",
    es: "¡Hola! Soy Lucas Royo, ¡bienvenido a mi portfolio!"
  },
  heroDescription: {
    en: "I'm a full-stack developer with a double degree in Computer Engineering and Game Design and Development, and a Master’s in Multiplatform Application Management and Development. \n\n I have 2 years of experience in software development, participating in the design and implementation of applications.",
    es: "Soy desarrollador full-stack con un doble grado en Ingeniería Informática y Diseño y Desarrollo de Videojuegos, y un Máster en Gestión y Desarrollo de Aplicaciones Multiplataforma. \n\n Tengo 2 años de experiencia en desarrollo de software, participando en el diseño e implementación de aplicaciones."
  },
  downloadCV: {
    en: "Download CV",
    es: "Descargar CV"
  },
  featuredProjectsHeading1: {
    en: "Featured ",
    es: "Proyectos "
  },
  featuredProjectsHeading2: {
    en: "projects",
    es: "destacados"
  },
  mySkillsHeading1: {
    en: "My ",
    es: "Mis "
  },
  mySkillsHeading2: {
    en: "skills",
    es: "habilidades"
  },
  backToProjects: {
    en: "Back to Projects",
    es: "Volver a Proyectos"
  },
  aboutTheProject: {
    en: "About the Project",
    es: "Sobre el Proyecto"
  },
  technologies: {
    en: "Technologies",
    es: "Tecnologías"
  },
  keyFeaturesTitle: {
    en: "Key Features",
    es: "Características Principales"
  }
};

export const navItems = [
  { name: { en: "About", es: "Sobre mí" }, link: "#about" },
  { name: { en: "Projects", es: "Proyectos" }, link: "#projects" },
  { name: { en: "Skills", es: "Habilidades" }, link: "#skills" },
];

export const projects = [
  {
    id: 1,
    title: "Ruteo",
    des: {
      en: "A community-driven web platform for discovering and sharing routes such as hiking, cycling, or driving paths. Users can create routes, upload images, leave ratings and comments, and search using advanced filters. Built with ASP.NET, .NET, and SQL Server using an MVC architecture.",
      es: "Una plataforma web impulsada por la comunidad para descubrir y compartir rutas como senderismo, ciclismo o recorridos en coche. Los usuarios pueden crear rutas, subir imágenes, dejar valoraciones y comentarios, y buscar utilizando filtros avanzados. Está desarrollada con ASP.NET, .NET y SQL Server, utilizando una arquitectura MVC."
    },
    longDes: {
      en: `This project was developed as my Master’s Thesis and focuses on the design and implementation of a functional web platform for discovering and sharing routes. The platform allows users to explore different types of routes—such as hiking, cycling, or driving routes—while also enabling them to create and share their own experiences with the community.

    The main objective of the application is to provide a centralized environment where users can search for routes tailored to their specific preferences. By using customizable filters such as location, distance, difficulty, type of route, or user ratings, the platform helps users easily find routes that match their interests and requirements.

    The system includes user authentication, allowing users to register, log in, and manage their own routes. Each route can contain detailed information including a description, distance, elevation gain, location, route type, images, and community feedback. Users can also interact with routes created by others through ratings and comments, creating a collaborative and community-driven environment.

    From a technical perspective, the platform was built using ASP.NET and .NET, following the Model–View–Controller (MVC) architecture to ensure a clear separation of concerns. The application also follows a layered architecture, consisting of presentation, business logic, data access, and entity layers. Route data, user information, comments, and ratings are stored in a SQL Server database, designed using an entity-relationship model to ensure efficient data organization and integrity.

    Overall, the project demonstrates the development of a full-featured web application, combining user interaction, database management, and scalable software architecture to create a platform that encourages users to discover and share outdoor routes.`,
      es: `Este proyecto fue desarrollado como mi Trabajo de Fin de Máster y se centra en el diseño e implementación de una plataforma web funcional para descubrir y compartir rutas. La plataforma permite a los usuarios explorar distintos tipos de rutas, como senderismo, ciclismo o recorridos en coche, al mismo tiempo que les posibilita crear y compartir sus propias experiencias con la comunidad.

      El objetivo principal de la aplicación es ofrecer un entorno centralizado donde los usuarios puedan buscar rutas adaptadas a sus preferencias específicas. Mediante filtros personalizables como ubicación, distancia, dificultad, tipo de ruta o valoraciones de otros usuarios, la plataforma ayuda a los usuarios a encontrar fácilmente rutas que se ajusten a sus intereses y necesidades.

      El sistema incluye autenticación de usuarios, permitiendo que se registren, inicien sesión y gestionen sus propias rutas. Cada ruta puede contener información detallada, incluyendo descripción, distancia, desnivel, ubicación, tipo de ruta, imágenes y comentarios de la comunidad. Además, los usuarios pueden interactuar con las rutas creadas por otros mediante valoraciones y comentarios, fomentando un entorno colaborativo y dirigido por la comunidad.

      Desde un punto de vista técnico, la plataforma fue desarrollada con ASP.NET y .NET, siguiendo la arquitectura Modelo–Vista–Controlador (MVC) para asegurar una clara separación de responsabilidades. La aplicación también sigue una arquitectura por capas, compuesta por capas de presentación, lógica de negocio, acceso a datos y entidades. Los datos de rutas, información de usuarios, comentarios y valoraciones se almacenan en una base de datos SQL Server, diseñada mediante un modelo entidad-relación para garantizar una organización eficiente y la integridad de los datos.

      En resumen, el proyecto demuestra el desarrollo de una aplicación web completa, combinando interacción con el usuario, gestión de bases de datos y arquitectura de software escalable, creando una plataforma que incentiva a los usuarios a descubrir y compartir rutas al aire libre.`
    },
    img: "/LogoRuteo.png",
    iconLists: ["/NET.png", "/C_sharp.png", "sql-logo.png"],
    link: "https://github.com/LucasRoyoPerez/Ruteo",
    resources: [
      { name: { en: "GitHub Repository", es: "Repositorio de GitHub" }, link: "https://github.com/LucasRoyoPerez/Ruteo", icon: "/git.svg" },
      { name: { en: "TFM Presentation", es: "Presentación del TFM" }, link: "https://docs.google.com/presentation/d/1tW64WCtXqM0eGTymQ_I8IQ73ofKtDk_j/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/ppt.png" },
      { name: { en: "TFM Document", es: "Memoria del TFM" }, link: "https://docs.google.com/document/d/10Od65hAZtKuEWr40tv6bopVpQ9l_b-6f/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" }
    ],
    keyFeatures: [
      { 
        title: { en: "User Authentication System", es: "Sistema de Autenticación de Usuarios" }, 
        description: { en: "Users can create accounts and securely log in to the platform, enabling them to manage their own routes and interact with the community.", es: "Los usuarios pueden registrarse e iniciar sesión de forma segura en la plataforma, lo que les permite gestionar sus propias rutas e interactuar con la comunidad." } 
      },
      { 
        title: { en: "Route Creation and Management", es: "Creación y Gestión de Rutas" }, 
        description: { en: "Users can create and upload routes with detailed information including description, location, route type, distance, elevation gain, and images. Routes can also be edited or deleted by their creators.", es: "Los usuarios pueden crear y subir rutas con información detallada, incluyendo descripción, ubicación, tipo de ruta, distancia, desnivel e imágenes. Además, las rutas pueden ser editadas o eliminadas por sus creadores." } 
      },
      { 
        title: { en: "Advanced Route Search and Filtering", es: "Búsqueda y Filtrado Avanzado de Rutas" }, 
        description: { en: "The platform allows users to find routes using customizable filters such as: location, route type (hiking, cycling, driving, etc.),distance, difficulty level, user ratings... This enables users to quickly discover routes that match their preferences.", es: "La plataforma permite a los usuarios buscar rutas utilizando filtros personalizables, tales como: ubicación, tipo de ruta (senderismo, ciclismo, coche, etc.), distancia, nivel de dificultad y valoraciones de usuarios. Esto permite a los usuarios descubrir rápidamente rutas que se ajusten a sus preferencias." } 
      },
      { 
        title: { en: "Community Ratings System", es: "Sistema de Valoraciones de la Comunidad" }, 
        description: { en: "Users can rate routes created by others. The platform calculates the average rating dynamically based on all user votes, providing a reliable indicator of route quality.", es: "Los usuarios pueden valorar las rutas creadas por otros. La plataforma calcula dinámicamente la puntuación media basándose en todos los votos de los usuarios, proporcionando un indicador fiable de la calidad de la ruta." } 
      },
      { 
        title: { en: "Comment and Feedback System", es: "Sistema de Comentarios y Reseñas" }, 
        description: { en: "Each route includes a comment section where users can share their experiences, opinions, and recommendations, helping others better evaluate the route before trying it.", es: "Cada ruta incluye una sección de comentarios donde los usuarios pueden compartir sus experiencias, opiniones y recomendaciones, ayudando a otros a evaluar mejor la ruta antes de hacerla." } 
      },
      { 
        title: { en: "Image Upload and Management", es: "Subida y Gestión de Imágenes" }, 
        description: { en: "Users can upload photos of their routes to showcase the landscape and environment. Route creators can also manage and delete their uploaded images.", es: "Los usuarios pueden subir fotos de sus rutas para mostrar el paisaje y el entorno. Los creadores de las rutas también pueden gestionar y eliminar las imágenes que han subido." } 
      },
      { 
        title: { en: "Personal Route Dashboard", es: "Panel de rutas personal" }, 
        description: { en: "Users have access to a personal section where they can view, edit, or delete the routes they have uploaded.", es: "Los usuarios tienen acceso a una sección personal donde pueden ver, editar o eliminar las rutas que han subido." } 
      },
      { 
        title: { en: "Scalable Software Architecture", es: "Arquitectura de Software Escalable" }, 
        description: { en: "The application follows an MVC architecture combined with a layered structure, including presentation, business logic, data access, and entity layers. This approach improves maintainability, scalability, and separation of responsibilities.", es: "La aplicación sigue una arquitectura MVC combinada con una estructura por capas, que incluye capa de presentación, lógica de negocio, acceso a datos y capa de entidades. Este enfoque mejora la mantenibilidad, la escalabilidad y la separación de responsabilidades." } 
      },
    ]
  },
  {
    id: 2,
    title: "InfoSport",
    des: {
      en: "A full-stack sports information platform featuring an Android mobile app, a Node.js REST API, and a SQLite database. The system dynamically calculates league standings from match results and provides detailed competition insights, player rankings, and match predictions using a custom statistical algorithm.",
      es: "Una plataforma de información deportiva full-stack que incluye una app móvil para Android, una API REST en Node.js y una base de datos SQLite. El sistema calcula dinámicamente las clasificaciones de la liga a partir de los resultados de los partidos y ofrece información detallada de las competiciones, rankings de jugadores y predicciones de partidos mediante un algoritmo estadístico personalizado."
    },
    longDes: {
      en: `This project was developed as my Computer Science final degree project and focuses on the design and implementation of a sports information application that provides users with detailed insights into different sports tournaments.

    The system follows a three-tier architecture, consisting of a mobile client, a backend API, and a database layer. The mobile application was built using Android Studio with Kotlin and Jetpack Compose, while the backend API was developed using Node.js, acting as an intermediary between the application and the database. The system stores its data in a SQLite relational database, designed through an entity-relationship model to manage sports, tournaments, teams, and match results.

    The main goal of the application is to provide users with an intuitive way to explore sports competitions and access relevant information such as league standings, match results, player rankings, and predictive analytics.

    The mobile application allows users to navigate through different sports and tournaments. Currently, the implemented dataset focuses on football competitions, including leagues such as La Liga, Premier League, Serie A, and Spain's Second Division. Each tournament provides a set of detailed views that present different aspects of the competition.

    One of the key technical aspects of the project is the dynamic generation of league standings. Instead of storing precomputed statistics such as points, wins, or goal differences, the system calculates these values dynamically based on the match results stored in the database. This approach ensures data consistency and enables advanced features such as viewing the league table at any specific matchday, allowing users to explore how the standings evolved throughout the season.

    Additionally, the project includes a prediction system capable of estimating the most probable outcome of upcoming matches. The prediction algorithm evaluates several statistical factors, such as team performance, home advantage, recent form, and historical head-to-head results, combining them to generate a predicted result for each match.

    From a backend perspective, the API was designed following a layered architecture, including controllers, services, and repositories. Controllers handle HTTP requests, repositories manage database access, and services implement the core business logic, particularly for the prediction engine.

    Overall, this project demonstrates the integration of mobile development, backend architecture, database design, and algorithmic logic to build a complete and functional sports information platform.`,
      es: `Este proyecto fue desarrollado como mi Trabajo de Fin de Grado en Informática y se centra en el diseño e implementación de una aplicación de información deportiva que proporciona a los usuarios detalles completos sobre distintos torneos deportivos.

      El sistema sigue una arquitectura de tres capas, compuesta por un cliente móvil, una API backend y una capa de base de datos. La aplicación móvil fue desarrollada con Android Studio usando Kotlin y Jetpack Compose, mientras que la API backend se implementó con Node.js, actuando como intermediaria entre la aplicación y la base de datos. Los datos se almacenan en una base de datos relacional SQLite, diseñada mediante un modelo entidad-relación para gestionar deportes, torneos, equipos y resultados de partidos.

      El objetivo principal de la aplicación es ofrecer a los usuarios una forma intuitiva de explorar competiciones deportivas y acceder a información relevante, como clasificaciones, resultados de partidos, rankings de jugadores y análisis predictivo.

      La aplicación móvil permite a los usuarios navegar por distintos deportes y torneos. Actualmente, el conjunto de datos implementado se centra en competiciones de fútbol, incluyendo ligas como La Liga, Premier League, Serie A y la Segunda División española. Cada torneo proporciona vistas detalladas que presentan diferentes aspectos de la competición.

      Uno de los aspectos técnicos clave del proyecto es la generación dinámica de las clasificaciones de liga. En lugar de almacenar estadísticas precomputadas como puntos, victorias o diferencias de goles, el sistema calcula estos valores dinámicamente a partir de los resultados de los partidos almacenados en la base de datos. Este enfoque garantiza la consistencia de los datos y permite funcionalidades avanzadas, como visualizar la tabla de posiciones en cualquier jornada, permitiendo a los usuarios explorar cómo evolucionaron las clasificaciones a lo largo de la temporada.

      Además, el proyecto incluye un sistema de predicción capaz de estimar el resultado más probable de los próximos partidos. El algoritmo de predicción evalúa varios factores estadísticos, como el rendimiento del equipo, la ventaja de local, la forma reciente y los enfrentamientos históricos, combinándolos para generar un resultado predicho para cada partido.

      Desde el punto de vista del backend, la API fue diseñada siguiendo una arquitectura por capas, que incluye controladores, servicios y repositorios. Los controladores manejan las solicitudes HTTP, los repositorios gestionan el acceso a la base de datos y los servicios implementan la lógica de negocio central, especialmente para el motor de predicciones.

      En resumen, este proyecto demuestra la integración de desarrollo móvil, arquitectura backend, diseño de bases de datos y lógica algorítmica para construir una plataforma completa y funcional de información deportiva.`
    },
    img: "/infosport.png",
    iconLists: ["/AndroidStudio.png", "/kotlin.png", "/jetpack.png", "/node_js.webp", "/sql-logo.png","/api.png", "/js.svg", "/ts.svg"],
    link: "https://excited-essentials-783297.framer.app/infosport",
    resources: [
      { name: { en: "GitHub Repository API", es: "Repositorio de GitHub (API)" }, link: "https://github.com/LucasRoyoPerez/Infosport_API", icon: "/git.svg" },
      { name: { en: "GitHub Repository Mobile App", es: "Repositorio de GitHub (App Móvil)" }, link: "https://github.com/LucasRoyoPerez/Infosport_AppMovil", icon: "/git.svg" },
      { name: { en: "TFG Presentation", es: "Presentación del TFG" }, link: "https://docs.google.com/presentation/d/1QQj0MyipV1z-7QaEfB7VoNF3UIx662Uf/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/ppt.png" },
      { name: { en: "TFG Document", es: "Memoria del TFG" }, link: "https://docs.google.com/document/d/1X9YQmNL0NX_T-Mb6_xrw-sCW10vLx7QJ/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" }
    ],
    keyFeatures: [
      { 
        title: { en: "Multi-Sport Navigation", es: "Navegación Multideporte" }, 
        description: { en: "The application allows users to explore different sports and tournaments through a structured navigation system. Users can select a sport and then browse the available competitions within that category.", es: "La aplicación permite a los usuarios explorar distintos deportes y torneos mediante un sistema de navegación estructurado. Los usuarios pueden seleccionar un deporte y luego consultar las competiciones disponibles dentro de esa categoría." } 
      },
      { 
        title: { en: "Dynamic League Standings", es: "Clasificaciones de liga dinámicas" }, 
        description: { en: "League tables are not stored statically. Instead, they are generated dynamically from match results, calculating: points, matches played, wins, draws, and losses, goals scored and conceded, goal difference. This ensures accurate and up-to-date standings.", es: "Las tablas de clasificación no se almacenan de forma estática. En su lugar, se generan dinámicamente a partir de los resultados de los partidos, calculando: puntos, partidos jugados, victorias, empates, derrotas, goles a favor y en contra, y diferencia de goles. Esto garantiza clasificaciones precisas y actualizadas." } 
      },
      { 
        title: { en: "Historical Matchday Visualization", es: "Visualización histórica por jornada" }, 
        description: { en: "Users can view the league table at any specific matchday. By retrieving match results up to a chosen round, the system reconstructs the standings as they were at that point in the season, allowing users to analyze how the competition evolved over time.", es: "Los usuarios pueden consultar la tabla de la liga en cualquier jornada específica. Al recuperar los resultados de los partidos hasta la ronda seleccionada, el sistema reconstruye la clasificación tal como estaba en ese momento de la temporada, permitiendo a los usuarios analizar cómo evolucionó la competición a lo largo del tiempo." } 
      },
      { 
        title: { en: "Match Results by Round", es: "Resultados de partidos por jornada" }, 
        description: { en: "The application displays match results organized by matchday, providing a clear overview of the progression of the tournament.", es: "La aplicación muestra los resultados de los partidos organizados por jornada, proporcionando una visión clara de la evolución del torneo." } 
      },
      { 
        title: { en: "Player Performance Rankings", es: "Clasificación del rendimiento de los jugadores" }, 
        description: { en: "The system generates rankings for player performance, including: top goal scorers, top assist providers, best goalkeepers based on goals conceded per match. These rankings allow users to quickly identify standout players within a competition.", es: "El sistema genera clasificaciones del rendimiento de los jugadores, incluyendo: máximos goleadores, máximos asistentes y mejores porteros según los goles recibidos por partido. Estas clasificaciones permiten a los usuarios identificar rápidamente a los jugadores más destacados dentro de una competición." } 
      },
      { 
        title: { en: "Match Prediction System", es: "Sistema de predicción de partidos" }, 
        description: { en: "The application includes a prediction engine capable of estimating the most likely outcome of upcoming matches. The algorithm evaluates multiple statistical factors, including: overall team performance, home vs. away performance, recent team form (trend factor), historical head-to-head matchups. By combining these factors, the system generates predictions for future match results.", es: "La aplicación incluye un motor de predicción capaz de estimar el resultado más probable de los próximos partidos. El algoritmo evalúa múltiples factores estadísticos, incluyendo: rendimiento general del equipo, desempeño en casa y fuera, forma reciente del equipo (factor de tendencia) y enfrentamientos históricos directos. Al combinar estos factores, el sistema genera predicciones para los resultados de futuros partidos." } 
      },
      { 
        title: { en: "Modular Backend API", es: "API Backend Modular" }, 
        description: { en: "The backend API follows a layered architecture consisting of: Controllers for handling HTTP requests, Services for implementing business logic, Repositories for managing database queries. This modular structure improves maintainability, scalability, and separation of concerns.", es: "La API backend sigue una arquitectura por capas que consta de: Controladores para manejar las solicitudes HTTP, Servicios para implementar la lógica de negocio y Repositorios para gestionar las consultas a la base de datos. Esta estructura modular mejora la mantenibilidad, la escalabilidad y la separación de responsabilidades." } 
      },
    ]
  },
  {
    id: 3,
    title: "Nevasca",
    des: {
      en: "A full-stack e-commerce platform for ski equipment featuring product browsing, filtering, and a shopping cart system. The application includes user authentication with role-based access (admin and customer) and an administration panel for managing products, categories, brands, and users. Built with ASP.NET and SQL Server using a layered architecture",
      es: "Una plataforma de comercio electrónico full-stack para material de esquí que incluye exploración de productos, filtros de búsqueda y un sistema de carrito de compras. La aplicación cuenta con autenticación de usuarios con acceso basado en roles (administrador y cliente) y un panel de administración para gestionar productos, categorías, marcas y usuarios. Está desarrollada con ASP.NET y SQL Server, utilizando una arquitectura por capas."
    },
    longDes: {
      en: `This project is a fully functional e-commerce web application for ski equipment, designed to simulate a complete online store where users can browse and purchase ski-related products. The platform provides a structured shopping experience where customers can explore products, filter them based on different criteria, and manage their purchases through a shopping cart system.

    The application includes a user authentication system, allowing visitors to register and log into their accounts. The system supports role-based access control, distinguishing between regular users and administrators. Regular users can browse products, manage their shopping cart, and complete purchases, while administrators have access to a dedicated management panel where they can control the store’s inventory and platform data.

    From a technical perspective, the project was developed using ASP.NET and SQL Server and follows a layered architecture composed of data, entity, business logic, and presentation layers. The data layer handles communication with the database, the entity layer defines the core models of the system, and the business layer manages validation and application logic. The platform also includes two presentation environments: a customer-facing storefront and an administrative interface for managing the store.

    Overall, the project demonstrates the implementation of a complete e-commerce solution, combining authentication, role management, database integration, and a structured backend architecture to create a functional and scalable online store.`,
      es: `Este proyecto es una aplicación web de comercio electrónico totalmente funcional para material de esquí, diseñada para simular una tienda online completa donde los usuarios pueden explorar y comprar productos relacionados con el esquí. La plataforma ofrece una experiencia de compra estructurada, permitiendo a los clientes explorar productos, filtrarlos según distintos criterios y gestionar sus compras mediante un sistema de carrito.

      La aplicación incluye un sistema de autenticación de usuarios, que permite a los visitantes registrarse e iniciar sesión en sus cuentas. El sistema soporta control de acceso basado en roles, diferenciando entre usuarios normales y administradores. Los usuarios normales pueden explorar productos, gestionar su carrito y completar compras, mientras que los administradores tienen acceso a un panel de gestión dedicado donde pueden controlar el inventario de la tienda y los datos de la plataforma.

      Desde un punto de vista técnico, el proyecto fue desarrollado con ASP.NET y SQL Server, siguiendo una arquitectura por capas compuesta por capa de datos, capa de entidades, capa de lógica de negocio y capa de presentación. La capa de datos gestiona la comunicación con la base de datos, la capa de entidades define los modelos principales del sistema, y la capa de negocio se encarga de la validación y de la lógica de la aplicación. La plataforma incluye dos entornos de presentación: un front-end orientado al cliente y una interfaz administrativa para la gestión de la tienda.

      En resumen, el proyecto demuestra la implementación de una solución de comercio electrónico completa, combinando autenticación, gestión de roles, integración con base de datos y una arquitectura backend estructurada, para crear una tienda online funcional y escalable.`
    },
    img: "/Ecommerce.png",
    iconLists: ["/NET.png", "/C_sharp.png", "sql-logo.png"],
    link: "https://excited-essentials-783297.framer.app/e-commerce",
    resources: [
      { name: { en: "GitHub Repository", es: "Repositorio de GitHub" }, link: "https://github.com/LucasRoyoPerez/E-commerce", icon: "/git.svg" },
      { name: { en: "Nevasca documentation", es: "Documentación de Nevasca" }, link: "https://docs.google.com/document/d/1rdErLMxGJ7qA_M89ue0jx1wnb7B1qW9U/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" }
    ],
    keyFeatures: [
      { 
        title: { en: "User Authentication System", es: "Sistema de autenticación de usuarios" }, 
        description: { en: "The platform includes a complete authentication system that allows users to register and log in securely to access the store.", es: "La plataforma incluye un sistema de autenticación completo que permite a los usuarios registrarse e iniciar sesión de forma segura para acceder a la tienda." } 
      },
      { 
        title: { en: "Role-Based Access Control", es: "Control de acceso basado en roles" }, 
        description: { en: "The system supports two types of users: Admin users, who can access the administration panel and Regular users (customers), who can browse and purchase products", es: "El sistema soporta dos tipos de usuarios: administradores, que pueden acceder al panel de administración, y usuarios regulares (clientes), que pueden explorar y comprar productos." } 
      },
      { 
        title: { en: "Product Catalog", es: "Catálogo de productos" }, 
        description: { en: "Users can browse a complete catalog of ski equipment products, each including detailed information such as name, description, price, and product image.", es: "Los usuarios pueden explorar un catálogo completo de productos de material de esquí, cada uno con información detallada, como nombre, descripción, precio e imagen del producto." } 
      },
      { 
        title: { en: "Product Filtering", es: "Filtrado de productos" }, 
        description: { en: "Products can be filtered by category and brand, allowing users to quickly find items that match their preferences.", es: "Los productos se pueden filtrar por categoría y marca, lo que permite a los usuarios encontrar rápidamente los artículos que se ajusten a sus preferencias." } 
      },
      { 
        title: { en: "Product Detail Pages", es: "Páginas de detalle de producto" }, 
        description: { en: "Each product includes a dedicated detail page where users can view additional information before adding it to their cart.", es: "Cada producto incluye una página de detalle dedicada, donde los usuarios pueden ver información adicional antes de añadirlo al carrito." } 
      },
      { 
        title: { en: "Shopping Cart System", es: "Sistema de carrito de compras" }, 
        description: { en: "Users can add products to a cart, adjust quantities, remove items, and review their order before completing the purchase.", es: "Los usuarios pueden añadir productos al carrito, ajustar las cantidades, eliminar artículos y revisar su pedido antes de completar la compra." } 
      },
      { 
        title: { en: "Stock Validation", es: "Validación de stock" }, 
        description: { en: "The system checks product availability when modifying cart quantities and alerts the user if the requested quantity exceeds the available stock.", es: "El sistema comprueba la disponibilidad del producto al modificar las cantidades en el carrito y avisa al usuario si la cantidad solicitada supera el stock disponible." } 
      },
      { 
        title: { en: "Checkout Process", es: "Proceso de pago" }, 
        description: { en: "Once users finish selecting products, they can proceed to checkout and finalize their purchase from the cart page.", es: "Una vez que los usuarios terminan de seleccionar productos, pueden proceder al pago y finalizar su compra desde la página del carrito." } 
      },
      { 
        title: { en: "Administration Panel", es: "Panel de administración" }, 
        description: { en: "Administrators have access to a management dashboard where they can: Manage products (add, edit, delete), Manage categories (add, edit, delete), Manage brands (add, edit, delete) and manage users with access to the administration section", es: "Los administradores tienen acceso a un panel de gestión donde pueden: gestionar productos (añadir, editar, eliminar), gestionar categorías (añadir, editar, eliminar), gestionar marcas (añadir, editar, eliminar) y gestionar usuarios con acceso a la sección de administración." } 
      },
      { 
        title: { en: "Store Overview Dashboard", es: "Dashboard general de la tienda" }, 
        description: { en: "The admin dashboard provides quick insights into the store, such as the number of registered customers and available products.", es: "El panel de administración proporciona información rápida sobre la tienda, como el número de clientes registrados y los productos disponibles." } 
      },
      { 
        title: { en: "Layered Architecture", es: "Arquitectura por capas" }, 
        description: { en: "The application is structured using multiple layers to ensure maintainability and scalability: Data Layer for database communication, Entity Layer for defining system models, Business Layer for implementing validation and logic, Presentation Layers for both the storefront and the administration interface", es: "La aplicación está estructurada utilizando múltiples capas para garantizar la mantenibilidad y la escalabilidad: Capa de datos para la comunicación con la base de datos, Capa de entidades para definir los modelos del sistema, Capa de negocio para implementar la validación y la lógica, y Capas de presentación tanto para la tienda en línea como para la interfaz de administración." } 
      },
    ]
  },
  {
    id: 4,
    title: "Racing simulator",
    des: {
      en: "A racing simulation prototype developed in Unity featuring realistic car physics and AI-controlled opponents. The project implements custom vehicle dynamics, waypoint-based pathfinding, obstacle detection, and dynamic speed control to simulate competitive racing behavior.",
      es: "Un prototipo de simulación de carreras desarrollado en Unity que incluye física de coches realista y oponentes controlados por IA. El proyecto implementa dinámicas de vehículo personalizadas, pathfinding basado en waypoints, detección de obstáculos y control dinámico de velocidad para simular un comportamiento de carrera competitivo."
    },
    longDes: {
      en: `This project was developed as my Final Degree Project for the Video Game Development program and focuses on the creation of a car racing simulation in Unity, with special emphasis on realistic vehicle physics and artificial intelligence for autonomous racing opponents.

    The main objective of the project was to simulate the behavior of racing cars as realistically as possible while developing an AI system capable of navigating a racing circuit and competing against the player. The vehicle physics were implemented manually using Unity’s physics system, including acceleration, braking, steering, drifting, reverse movement, and aerodynamic resistance. These mechanics were developed using Wheel Colliders, allowing the vehicle to behave similarly to a real car by simulating traction, suspension, and friction forces.

    In addition to the vehicle physics, the project implements an AI system capable of navigating a racing track using waypoint-based pathfinding. AI-controlled cars follow a series of nodes placed along the circuit and dynamically adjust their speed depending on the characteristics of each section of the track. This allows the vehicles to accelerate on straights and slow down appropriately when approaching tighter curves.

    To increase realism and robustness, the AI also includes environment awareness through sensor systems based on raycasts, allowing vehicles to detect obstacles and react accordingly. If a vehicle becomes blocked or stuck, a recovery system enables it to reverse and reposition itself to continue the race.

    Finally, the simulation was integrated into a playable racing game prototype, where the player can control a vehicle and compete against AI opponents on a racing circuit. The game includes menus and a basic user interface displaying vehicle speed and race information.

    Overall, the project demonstrates the development of a complete racing simulation system, combining vehicle physics programming, artificial intelligence behavior, and gameplay systems within the Unity game engine.`,
      es: `Este proyecto fue desarrollado como mi Trabajo de Fin de Grado en Desarrollo de Videojuegos y se centra en la creación de una simulación de carreras de coches en Unity, con especial énfasis en física de vehículos realista e inteligencia artificial para oponentes autónomos.

      El objetivo principal del proyecto fue simular el comportamiento de los coches de carreras de la manera más realista posible, a la vez que se desarrollaba un sistema de IA capaz de navegar un circuito y competir contra el jugador. La física del vehículo se implementó manualmente utilizando el sistema de físicas de Unity, incluyendo aceleración, frenado, dirección, derrapes, marcha atrás y resistencia aerodinámica. Estas mecánicas se desarrollaron usando Wheel Colliders, lo que permite que el vehículo se comporte de manera similar a un coche real al simular tracción, suspensión y fuerzas de fricción.

      Además de la física del vehículo, el proyecto implementa un sistema de IA capaz de navegar por la pista mediante pathfinding basado en waypoints. Los coches controlados por IA siguen una serie de nodos colocados a lo largo del circuito y ajustan dinámicamente su velocidad según las características de cada tramo, acelerando en rectas y reduciendo la velocidad al aproximarse a curvas cerradas.

      Para aumentar el realismo y la robustez, la IA también incluye sensores ambientales basados en raycasts, que permiten a los vehículos detectar obstáculos y reaccionar en consecuencia. Si un vehículo queda bloqueado o atascado, un sistema de recuperación le permite retroceder y reposicionarse para continuar la carrera.

      Finalmente, la simulación se integró en un prototipo de juego de carreras jugable, donde el jugador puede controlar un vehículo y competir contra oponentes IA en un circuito. El juego incluye menús y una interfaz básica que muestra la velocidad del vehículo y la información de la carrera.

      En resumen, el proyecto demuestra el desarrollo de un sistema completo de simulación de carreras, combinando programación de física de vehículos, comportamiento de inteligencia artificial y sistemas de juego dentro del motor Unity.`
    },
    img: "/racinggame.png",
    iconLists: ["/unity.png", "/C_sharp.png"],
    link: "/ui.apple.co",
    resources: [
      { name: { en: "GitHub Repository", es: "Repositorio de GitHub" }, link: "https://github.com", icon: "/git.svg" },
      { name: { en: "TFG Document", es: "Memoria del TFG" }, link: "https://docs.google.com/document/d/1JNamhXazmxP8MzGSgLwejJF-fZuTggp8/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" },
      { name: { en: "TFG Presentation", es: "Presentación del TFG" }, link: "https://docs.google.com/presentation/d/1VXDTh_XbEJ0SXLg0mhNJsKkpJGlTpS5A/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/ppt.png" },
    ],
    keyFeatures: [
      { 
        title: { en: "Realistic Vehicle Physics", es: "Física de vehículos realista" }, 
        description: { en: "The project implements custom vehicle physics using Unity’s Wheel Collider system, simulating realistic car behavior including: Acceleration and engine torque, braking using brake torque, steering with smooth wheel rotation, drifting through traction loss simulation, reverse driving, aerodynamic drag and vehicle mass effects. These mechanics create a driving experience that resembles real vehicle dynamics.", es: "El proyecto implementa física de vehículos personalizada utilizando el sistema de Wheel Colliders de Unity, simulando un comportamiento de coche realista, que incluye: aceleración y torque del motor, frenado mediante torque de freno, dirección con rotación suave de las ruedas, derrapes mediante simulación de pérdida de tracción, marcha atrás, resistencia aerodinámica y efectos de la masa del vehículo. Estas mecánicas crean una experiencia de conducción que se asemeja a la dinámica de un vehículo real." } 
      },
      { 
        title: { en: "Waypoint-Based Pathfinding", es: "Pathfinding basado en waypoints" }, 
        description: { en: "AI-controlled vehicles navigate the circuit using a node-based pathfinding system. Each car follows a sequence of waypoints placed along the track, allowing them to complete laps autonomously.", es: "Los vehículos controlados por IA navegan por el circuito utilizando un sistema de pathfinding basado en nodos. Cada coche sigue una secuencia de waypoints colocados a lo largo de la pista, lo que les permite completar vueltas de manera autónoma." } 
      },
      { 
        title: { en: "Dynamic Speed Control", es: "Control dinámico de velocidad" }, 
        description: { en: "AI vehicles adjust their speed based on the characteristics of each part of the track. Sections of the circuit are categorized into different speed zones (high, medium, and low speed), enabling the AI to slow down before tight curves and accelerate on straight sections.", es: "Los vehículos controlados por IA ajustan su velocidad según las características de cada tramo de la pista. Las secciones del circuito se clasifican en diferentes zonas de velocidad (alta, media y baja), lo que permite a la IA reducir la velocidad antes de curvas cerradas y acelerar en rectas." } 
      },
      { 
        title: { en: "Obstacle Detection System", es: "Sistema de detección de obstáculos" }, 
        description: { en: "The AI includes multiple raycast-based sensors placed at the front of the vehicle. These sensors detect obstacles and walls, allowing the AI to react and steer away to avoid collisions.", es: "La IA incluye múltiples sensores basados en raycasts colocados en la parte frontal del vehículo. Estos sensores detectan obstáculos y paredes, permitiendo que la IA reaccione y gire para evitar colisiones." } 
      },
      { 
        title: { en: "Anti-Stuck Recovery System", es: "Sistema de recuperación anti-bloqueos" }, 
        description: { en: "If a vehicle becomes stuck against an obstacle or wall, the system detects when the car’s speed drops below a certain threshold and automatically activates a reverse maneuver to recover and continue driving.", es: "Si un vehículo queda atrapado contra un obstáculo o una pared, el sistema detecta cuando la velocidad del coche cae por debajo de un umbral determinado y activa automáticamente una maniobra en reversa para recuperarse y continuar la conducción." } 
      },
      { 
        title: { en: "AI Navigation and Steering Logic", es: "Lógica de navegación y dirección de la IA" }, 
        description: { en: "The steering behavior of AI vehicles is calculated by determining the direction vector toward the next waypoint and converting it into steering input, allowing the car to smoothly follow the optimal path around the track.", es: "El comportamiento de la dirección de los vehículos controlados por IA se calcula determinando el vector de dirección hacia el siguiente waypoint y convirtiéndolo en la entrada de dirección, lo que permite que el coche siga de manera suave la trayectoria óptima a lo largo del circuito." } 
      },
      { 
        title: { en: "Playable Racing Prototype", es: "Prototipo de carreras jugable" }, 
        description: { en: "The simulation was integrated into a playable prototype where the player can control a vehicle and compete against AI opponents on a racing circuit.", es: "La simulación se integró en un prototipo jugable, donde el jugador puede controlar un vehículo y competir contra oponentes IA en un circuito de carreras." } 
      },
      { 
        title: { en: "Basic Game Interface", es: "Interfaz básica del juego" }, 
        description: { en: "The project includes menus and a user interface displaying information such as the vehicle’s speed during gameplay.", es: "El proyecto incluye menús y una interfaz de usuario que muestra información como la velocidad del vehículo durante la partida." } 
      },
    ]
  },
];


export const workExperience = [
  {
    id: 1,
    title: {
      en: "Frontend Engineer Intern",
      es: "Estudiante en Prácticas de Ingeniería Frontend"
    },
    desc: {
      en: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      es: "Asistí en el desarrollo de una plataforma web utilizando React.js, mejorando la interactividad."
    },
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: {
      en: "Mobile App Dev - JSM Tech",
      es: "Desarrollador de Apps Móviles - JSM Tech"
    },
    desc: {
      en: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      es: "Diseñé y desarrollé aplicaciones móviles para plataformas iOS y Android utilizando React Native."
    },
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: {
      en: "Freelance App Dev Project",
      es: "Proyecto Freelance de Desarrollo de Apps"
    },
    desc: {
      en: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      es: "Lideré el desarrollo de una aplicación móvil para un cliente, desde el concepto inicial hasta el despliegue en las tiendas de aplicaciones."
    },
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: {
      en: "Lead Frontend Developer",
      es: "Desarrollador Frontend Principal"
    },
    desc: {
      en: "Developed and maintained user-facing features using modern frontend technologies.",
      es: "Desarrollé y mantuve características de cara al usuario utilizando tecnologías frontend modernas."
    },
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
];

export const skills = [
  {
    id: 1,
    category: { en: "Languages", es: "Lenguajes" },
    items: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "Java", icon: "/java.png" },
      { name: "C", icon: "/c.png" },
      { name: "C++", icon: "/cpp.png" },
      { name: "C#", icon: "/C_sharp.png" },     
      { name: "PHP", icon: "/PHP.png" },
      { name: "Python", icon: "/python.png" },
      { name: "Kotlin", icon: "/kotlin.png" },
      { name: "Pascal", icon: "/pascal.png" },
      { name: "Assembly", icon: "/assembly.svg" },
      
    ],
  },
  {
    id: 2,
    category: { en: "Frontend", es: "Frontend" },
    items: [
      { name: "CSS", icon: "/css.png" },
      { name: "HTML", icon: "/html.png" },
      { name: "React", icon: "/re.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "Bootstrap", icon: "/bootstrap.png" },
      { name: "Aceternity UI", icon: "/aceternity.png" },
      { name: "Next.js", icon: "/next.svg" },
    ],
  },
  {
    id: 3,
    category: { en: "Backend", es: "Backend" },
    items: [
      { name: ".NET", icon: "/NET.png" },
      { name: "Node.js", icon: "/node_js.webp" },
      { name: "REST API", icon: "/api.png" },
    ],
  },
  {
    id: 4,
    category: { en: "Database", es: "Base de Datos" },
    items: [
      { name: "SQL", icon: "/sql-logo.png" },
      { name: "SQL Server", icon: "/microsoft-sql-server.png" },
      { name: "MySQL", icon: "/mySQL.png" },
      { name: "MongoDB", icon: "/mongodb.webp" },
      { name: "PostgreSQL & pgAdmin", icon: "/PostgreSQL.png" },
    ],
  },
  {
    id: 5,
    category: { en: "Game Dev", es: "Desarrollo de Videojuegos" },
    items: [
      { name: "Unity", icon: "/unity.png" },
      { name: "Unreal Engine", icon: "/unreal.png" },
      { name: "Game Maker Studio 2", icon: "/gamemaker-studio.png" },
      { name: "Phaser", icon: "/phaser.png" },
    ],
  },
  {
    id: 6,
    category: { en: "DevOps / Cloud", es: "DevOps / Cloud" },
    items: [
      { name: "Git", icon: "/git.webp" },
      { name: "Docker", icon: "/dock.svg" },
      { name: "Azure DevOps", icon: "/azure.webp" },
      { name: "GitHub Actions", icon: "/githubActions.png" },
    ],
  },
  {
    id: 7,
    category: { en: "Mobile development", es: "Desarrollo Móvil" },
    items: [
      { name: "Android Studio", icon: "/AndroidStudio.png" },
      { name: "Jetpack Compose", icon: "/jetpack.png" },
    ],
  },
  {
    id: 8,
    category: { en: "Other tools", es: "Otras herramientas" },
    items: [
      { name: "GitHub", icon: "/git.svg" },
      { name: "Jira", icon: "/jira.png" },
      { name: "VS Code", icon: "/VSCode.png" },
      { name: "Visual Studio", icon: "/VisualStudio.png" },
      { name: "Postman", icon: "/postman.webp" },
      { name: "Delphi", icon: "/delphi.png" },
      { name: "NetBeans", icon: "/NetBeans.png" },
      { name: "IntelliJ IDEA", icon: "/IntelliJ_IDEA.png" },
    ],
  },
];
