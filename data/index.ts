

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
];



export const projects = [
  {
    id: 1,
    title: "Ruteo",
    des: "A community-driven web platform for discovering and sharing routes such as hiking, cycling, or driving paths. Users can create routes, upload images, leave ratings and comments, and search using advanced filters. Built with ASP.NET, .NET, and SQL Server using an MVC architecture.",
    longDes: `This project was developed as my Master’s Thesis and focuses on the design and implementation of a functional web platform for discovering and sharing routes. The platform allows users to explore different types of routes—such as hiking, cycling, or driving routes—while also enabling them to create and share their own experiences with the community.

    The main objective of the application is to provide a centralized environment where users can search for routes tailored to their specific preferences. By using customizable filters such as location, distance, difficulty, type of route, or user ratings, the platform helps users easily find routes that match their interests and requirements.

    The system includes user authentication, allowing users to register, log in, and manage their own routes. Each route can contain detailed information including a description, distance, elevation gain, location, route type, images, and community feedback. Users can also interact with routes created by others through ratings and comments, creating a collaborative and community-driven environment.

    From a technical perspective, the platform was built using ASP.NET and .NET, following the Model–View–Controller (MVC) architecture to ensure a clear separation of concerns. The application also follows a layered architecture, consisting of presentation, business logic, data access, and entity layers. Route data, user information, comments, and ratings are stored in a SQL Server database, designed using an entity-relationship model to ensure efficient data organization and integrity.

    Overall, the project demonstrates the development of a full-featured web application, combining user interaction, database management, and scalable software architecture to create a platform that encourages users to discover and share outdoor routes.`,

    img: "/LogoRuteo.png",
    iconLists: ["/NET.png", "/C_sharp.png", "sql-logo.png"],
    link: "https://github.com/LucasRoyoPerez/Ruteo",
    resources: [
      { name: "GitHub Repository", link: "https://github.com/LucasRoyoPerez/Ruteo", icon: "/git.svg" },
      { name: "TFM Presentation", link: "https://docs.google.com/presentation/d/1tW64WCtXqM0eGTymQ_I8IQ73ofKtDk_j/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/ppt.png" },
      { name: "TFM Document", link: "https://docs.google.com/document/d/10Od65hAZtKuEWr40tv6bopVpQ9l_b-6f/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" }
    ],
    keyFeatures: [
      { title: "User Authentication System", description: "Users can create accounts and securely log in to the platform, enabling them to manage their own routes and interact with the community." },
      { title: "Route Creation and Management", description: "Users can create and upload routes with detailed information including description, location, route type, distance, elevation gain, and images. Routes can also be edited or deleted by their creators." },
      { title: "Advanced Route Search and Filtering", description: "The platform allows users to find routes using customizable filters such as: location, route type (hiking, cycling, driving, etc.),distance, difficulty level, user ratings... This enables users to quickly discover routes that match their preferences." },
      { title: "Community Ratings System", description: "Users can rate routes created by others. The platform calculates the average rating dynamically based on all user votes, providing a reliable indicator of route quality." },
      { title: "Comment and Feedback System", description: "Each route includes a comment section where users can share their experiences, opinions, and recommendations, helping others better evaluate the route before trying it." },
      { title: "Image Upload and Management", description: "Users can upload photos of their routes to showcase the landscape and environment. Route creators can also manage and delete their uploaded images." },
      { title: "Personal Route Dashboard", description: "Users have access to a personal section where they can view, edit, or delete the routes they have uploaded." },
      { title: "Scalable Software Architecture", description: "The application follows an MVC architecture combined with a layered structure, including presentation, business logic, data access, and entity layers. This approach improves maintainability, scalability, and separation of responsibilities." },
    ]
  },
  {
    id: 2,
    title: "InfoSport",
    des: "A full-stack sports information platform featuring an Android mobile app, a Node.js REST API, and a SQLite database. The system dynamically calculates league standings from match results and provides detailed competition insights, player rankings, and match predictions using a custom statistical algorithm.",
    longDes: `This project was developed as my Computer Science final degree project and focuses on the design and implementation of a sports information application that provides users with detailed insights into different sports tournaments.

    The system follows a three-tier architecture, consisting of a mobile client, a backend API, and a database layer. The mobile application was built using Android Studio with Kotlin and Jetpack Compose, while the backend API was developed using Node.js, acting as an intermediary between the application and the database. The system stores its data in a SQLite relational database, designed through an entity-relationship model to manage sports, tournaments, teams, and match results.

    The main goal of the application is to provide users with an intuitive way to explore sports competitions and access relevant information such as league standings, match results, player rankings, and predictive analytics.

    The mobile application allows users to navigate through different sports and tournaments. Currently, the implemented dataset focuses on football competitions, including leagues such as La Liga, Premier League, Serie A, and Spain's Second Division. Each tournament provides a set of detailed views that present different aspects of the competition.

    One of the key technical aspects of the project is the dynamic generation of league standings. Instead of storing precomputed statistics such as points, wins, or goal differences, the system calculates these values dynamically based on the match results stored in the database. This approach ensures data consistency and enables advanced features such as viewing the league table at any specific matchday, allowing users to explore how the standings evolved throughout the season.

    Additionally, the project includes a prediction system capable of estimating the most probable outcome of upcoming matches. The prediction algorithm evaluates several statistical factors, such as team performance, home advantage, recent form, and historical head-to-head results, combining them to generate a predicted result for each match.

    From a backend perspective, the API was designed following a layered architecture, including controllers, services, and repositories. Controllers handle HTTP requests, repositories manage database access, and services implement the core business logic, particularly for the prediction engine.

    Overall, this project demonstrates the integration of mobile development, backend architecture, database design, and algorithmic logic to build a complete and functional sports information platform.`,
    img: "/infosport.png",
    iconLists: ["/AndroidStudio.png", "/kotlin.png", "/jetpack.png", "/node_js.webp", "/sql-logo.png","/api.png", "/js.svg", "/ts.svg"],
    link: "https://excited-essentials-783297.framer.app/infosport",
    resources: [
      { name: "GitHub Repository API", link: "https://github.com/LucasRoyoPerez/Infosport_API", icon: "/git.svg" },
      { name: "GitHub Repository Mobile App", link: "https://github.com/LucasRoyoPerez/Infosport_AppMovil", icon: "/git.svg" },
      { name: "TFG Presentation", link: "https://docs.google.com/presentation/d/1QQj0MyipV1z-7QaEfB7VoNF3UIx662Uf/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/ppt.png" },
      { name: "TFG Document", link: "https://docs.google.com/document/d/1X9YQmNL0NX_T-Mb6_xrw-sCW10vLx7QJ/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" }
    ],
    keyFeatures: [
      { title: "Multi-Sport Navigation", description: "The application allows users to explore different sports and tournaments through a structured navigation system. Users can select a sport and then browse the available competitions within that category." },
      { title: "Dynamic League Standings", description: "League tables are not stored statically. Instead, they are generated dynamically from match results, calculating: points, matches played, wins, draws, and losses, goals scored and conceded, goal difference. This ensures accurate and up-to-date standings." },
      { title: "Historical Matchday Visualization", description: "Users can view the league table at any specific matchday. By retrieving match results up to a chosen round, the system reconstructs the standings as they were at that point in the season, allowing users to analyze how the competition evolved over time." },
      { title: "Match Results by Round", description: "The application displays match results organized by matchday, providing a clear overview of the progression of the tournament." },
      { title: "Player Performance Rankings", description: "The system generates rankings for player performance, including: top goal scorers, top assist providers, best goalkeepers based on goals conceded per match. These rankings allow users to quickly identify standout players within a competition." },
      { title: "Match Prediction System", description: "The application includes a prediction engine capable of estimating the most likely outcome of upcoming matches. The algorithm evaluates multiple statistical factors, including: overall team performance, home vs. away performance, recent team form (trend factor), historical head-to-head matchups. By combining these factors, the system generates predictions for future match results." },
      { title: "Modular Backend API", description: "The backend API follows a layered architecture consisting of: Controllers for handling HTTP requests, Services for implementing business logic, Repositories for managing database queries. This modular structure improves maintainability, scalability, and separation of concerns." },
    ]
  },
  {
    id: 3,
    title: "Nevasca",
    des: "A full-stack e-commerce platform for ski equipment featuring product browsing, filtering, and a shopping cart system. The application includes user authentication with role-based access (admin and customer) and an administration panel for managing products, categories, brands, and users. Built with ASP.NET and SQL Server using a layered architecture",
    longDes: `This project is a fully functional e-commerce web application for ski equipment, designed to simulate a complete online store where users can browse and purchase ski-related products. The platform provides a structured shopping experience where customers can explore products, filter them based on different criteria, and manage their purchases through a shopping cart system.

    The application includes a user authentication system, allowing visitors to register and log into their accounts. The system supports role-based access control, distinguishing between regular users and administrators. Regular users can browse products, manage their shopping cart, and complete purchases, while administrators have access to a dedicated management panel where they can control the store’s inventory and platform data.

    From a technical perspective, the project was developed using ASP.NET and SQL Server and follows a layered architecture composed of data, entity, business logic, and presentation layers. The data layer handles communication with the database, the entity layer defines the core models of the system, and the business layer manages validation and application logic. The platform also includes two presentation environments: a customer-facing storefront and an administrative interface for managing the store.

    Overall, the project demonstrates the implementation of a complete e-commerce solution, combining authentication, role management, database integration, and a structured backend architecture to create a functional and scalable online store.`,
    img: "/Ecommerce.png",
    iconLists: ["/NET.png", "/C_sharp.png", "sql-logo.png"],
    link: "https://excited-essentials-783297.framer.app/e-commerce",
    resources: [
      { name: "GitHub Repository", link: "https://github.com/LucasRoyoPerez/E-commerce", icon: "/git.svg" },
      { name: "Nevasca documentation", link: "https://docs.google.com/document/d/1rdErLMxGJ7qA_M89ue0jx1wnb7B1qW9U/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" }
    ],
    keyFeatures: [
      { title: "User Authentication System", description: "The platform includes a complete authentication system that allows users to register and log in securely to access the store." },
      { title: "Role-Based Access Control", description: "The system supports two types of users: Admin users, who can access the administration panel and Regular users (customers), who can browse and purchase products" },
      { title: "Product Catalog", description: "Users can browse a complete catalog of ski equipment products, each including detailed information such as name, description, price, and product image." },
      { title: "Product Filtering", description: "Products can be filtered by category and brand, allowing users to quickly find items that match their preferences." },
      { title: "Product Detail Pages", description: "Each product includes a dedicated detail page where users can view additional information before adding it to their cart." },
      { title: "Shopping Cart System", description: "Users can add products to a cart, adjust quantities, remove items, and review their order before completing the purchase." },
      { title: "Stock Validation", description: "The system checks product availability when modifying cart quantities and alerts the user if the requested quantity exceeds the available stock." },
      { title: "Checkout Process", description: "Once users finish selecting products, they can proceed to checkout and finalize their purchase from the cart page." },
      { title: "Administration Panel", description: "Administrators have access to a management dashboard where they can: Manage products (add, edit, delete), Manage categories (add, edit, delete), Manage brands (add, edit, delete) and manage users with access to the administration section" },
      { title: "Store Overview Dashboard", description: "The admin dashboard provides quick insights into the store, such as the number of registered customers and available products." },
      { title: "Layered Architecture", description: "The application is structured using multiple layers to ensure maintainability and scalability: Data Layer for database communication, Entity Layer for defining system models, Business Layer for implementing validation and logic, Presentation Layers for both the storefront and the administration interface" },
    ]
  },
  {
    id: 4,
    title: "Racing simulator",
    des: "A racing simulation prototype developed in Unity featuring realistic car physics and AI-controlled opponents. The project implements custom vehicle dynamics, waypoint-based pathfinding, obstacle detection, and dynamic speed control to simulate competitive racing behavior.",
    longDes: `This project was developed as my Final Degree Project for the Video Game Development program and focuses on the creation of a car racing simulation in Unity, with special emphasis on realistic vehicle physics and artificial intelligence for autonomous racing opponents.

    The main objective of the project was to simulate the behavior of racing cars as realistically as possible while developing an AI system capable of navigating a racing circuit and competing against the player. The vehicle physics were implemented manually using Unity’s physics system, including acceleration, braking, steering, drifting, reverse movement, and aerodynamic resistance. These mechanics were developed using Wheel Colliders, allowing the vehicle to behave similarly to a real car by simulating traction, suspension, and friction forces.

    In addition to the vehicle physics, the project implements an AI system capable of navigating a racing track using waypoint-based pathfinding. AI-controlled cars follow a series of nodes placed along the circuit and dynamically adjust their speed depending on the characteristics of each section of the track. This allows the vehicles to accelerate on straights and slow down appropriately when approaching tighter curves.

    To increase realism and robustness, the AI also includes environment awareness through sensor systems based on raycasts, allowing vehicles to detect obstacles and react accordingly. If a vehicle becomes blocked or stuck, a recovery system enables it to reverse and reposition itself to continue the race.

    Finally, the simulation was integrated into a playable racing game prototype, where the player can control a vehicle and compete against AI opponents on a racing circuit. The game includes menus and a basic user interface displaying vehicle speed and race information.

    Overall, the project demonstrates the development of a complete racing simulation system, combining vehicle physics programming, artificial intelligence behavior, and gameplay systems within the Unity game engine.`,
    img: "/racinggame.png",
    iconLists: ["/unity.png", "/C_sharp.png"],
    link: "/ui.apple.co",
    resources: [
      { name: "GitHub Repository", link: "https://github.com", icon: "/git.svg" },
      { name: "TFG Document", link: "https://docs.google.com/document/d/1JNamhXazmxP8MzGSgLwejJF-fZuTggp8/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/doc.webp" },
      { name: "TFG Presentation", link: "https://docs.google.com/presentation/d/1VXDTh_XbEJ0SXLg0mhNJsKkpJGlTpS5A/edit?usp=sharing&ouid=110757857491741472977&rtpof=true&sd=true", icon: "/ppt.png" },
    ],
    keyFeatures: [
      { title: "Realistic Vehicle Physics", description: "The project implements custom vehicle physics using Unity’s Wheel Collider system, simulating realistic car behavior including: Acceleration and engine torque, braking using brake torque, steering with smooth wheel rotation, drifting through traction loss simulation, reverse driving, aerodynamic drag and vehicle mass effects. These mechanics create a driving experience that resembles real vehicle dynamics." },
      { title: "Waypoint-Based Pathfinding", description: "AI-controlled vehicles navigate the circuit using a node-based pathfinding system. Each car follows a sequence of waypoints placed along the track, allowing them to complete laps autonomously." },
      { title: "Dynamic Speed Control", description: "AI vehicles adjust their speed based on the characteristics of each part of the track. Sections of the circuit are categorized into different speed zones (high, medium, and low speed), enabling the AI to slow down before tight curves and accelerate on straight sections." },
      { title: "Obstacle Detection System", description: "The AI includes multiple raycast-based sensors placed at the front of the vehicle. These sensors detect obstacles and walls, allowing the AI to react and steer away to avoid collisions." },
      { title: "Anti-Stuck Recovery System", description: "If a vehicle becomes stuck against an obstacle or wall, the system detects when the car’s speed drops below a certain threshold and automatically activates a reverse maneuver to recover and continue driving." },
      { title: "AI Navigation and Steering Logic", description: "The steering behavior of AI vehicles is calculated by determining the direction vector toward the next waypoint and converting it into steering input, allowing the car to smoothly follow the optimal path around the track." },
      { title: "Playable Racing Prototype", description: "The simulation was integrated into a playable prototype where the player can control a vehicle and compete against AI opponents on a racing circuit." },
      { title: "Basic Game Interface", description: "The project includes menus and a user interface displaying information such as the vehicle’s speed during gameplay." },
    ]
  },
];





export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
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
    category: "Languages",
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
    category: "Frontend",
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
    category: "Backend",
    items: [
      { name: ".NET", icon: "/NET.png" },
      { name: "Node.js", icon: "/node_js.webp" },
      { name: "REST API", icon: "/api.png" },
    ],
  },
  {
    id: 4,
    category: "Database",
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
    category: "Game Dev",
    items: [
      { name: "Unity", icon: "/unity.png" },
      { name: "Unreal Engine", icon: "/unreal.png" },
      { name: "Game Maker Studio 2", icon: "/gamemaker-studio.png" },
      { name: "Phaser", icon: "/phaser.png" },
    ],
  },
  {
    id: 6,
    category: "DevOps / Cloud",
    items: [
      { name: "Git", icon: "/git.webp" },
      { name: "Docker", icon: "/dock.svg" },
      { name: "Azure DevOps", icon: "/azure.webp" },
      { name: "GitHub Actions", icon: "/githubActions.png" },
    ],
  },
    {
    id: 7,
    category: "Mobile development",
    items: [
      { name: "Android Studio", icon: "/AndroidStudio.png" },
      { name: "Jetpack Compose", icon: "/jetpack.png" },
    ],
  },
   {
    id: 8,
    category: "Other tools",
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

