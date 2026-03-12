

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
    title: "E-Commerce",
    des: "A web page i created for my ASP.Net subject final proyect and consists on a online shop web page for buy products as a client and upload and sell products as an administrator.",
    longDes: "This E-Commerce platform was developed as a final project for my ASP.NET subject. It features a complete online shopping experience, allowing clients to browse and purchase products, while administrators have a dedicated dashboard to manage inventory, upload new products, and track sales. The project demonstrates my proficiency in building secure, scalable backend architectures with .NET and C#.",
    img: "/ecommerce.png",
    iconLists: ["/NET.png", "/C_sharp.png", "sql-logo.png"],
    link: "https://excited-essentials-783297.framer.app/e-commerce",
    resources: [
      { name: "GitHub Repository", link: "https://github.com/LucasRoyoPerez/E-commerce", icon: "/git.svg" }
    ],
    keyFeatures: [
      { title: "Product Catalog", description: "Clients can browse a full catalog of products with search and filtering capabilities, viewing detailed product information including images, descriptions, and pricing." },
      { title: "Shopping Cart & Checkout", description: "A complete shopping cart system that allows users to add products, adjust quantities, and proceed through a checkout flow to complete their purchases." },
      { title: "Admin Dashboard", description: "Administrators have access to a dedicated management panel where they can upload new products, edit existing listings, manage inventory, and track sales performance." },
      { title: "User Authentication & Roles", description: "The platform implements role-based access control, distinguishing between client and administrator accounts with different permissions and views." },
    ]
  },
  {
    id: 4,
    title: "Racing Game",
    des: "A 3D racing game created with Unity and C#.",
    longDes: "A fully playable 3D racing game developed using the Unity engine and C#. It features custom physics for vehicle handling, challenging tracks, and basic AI opponents. This project allowed me to explore game development concepts such as collision detection, game loops, performance optimization, and 3D math.",
    img: "/racinggame.png",
    iconLists: ["/unity.png", "/C_sharp.png"],
    link: "/ui.apple.co",
    resources: [
      { name: "Play Demo", link: "https://example.com/play", icon: "/link.svg" },
      { name: "GitHub Repository", link: "https://github.com", icon: "/git.svg" }
    ],
    keyFeatures: [
      { title: "Custom Vehicle Physics", description: "The game features a custom-built physics system for realistic vehicle handling, including acceleration, braking, drifting, and suspension dynamics." },
      { title: "AI Opponents", description: "Basic AI-controlled opponents that follow racing lines and provide competitive challenges across different difficulty levels." },
      { title: "Track Design", description: "Multiple challenging tracks with varied terrain, turns, and elevation changes designed to test driving skills." },
      { title: "Performance Optimization", description: "Optimized rendering and physics calculations to maintain smooth frame rates while handling complex 3D scenes with multiple vehicles." },
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

