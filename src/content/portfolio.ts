export type Profile = {
  name: string;
  role: string;
  eyebrow: string;
  summary: string;
  location: string;
  cvHref: string;
  cvLabel: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  mode: string;
  description: string;
  highlights: string[];
};

export type Project = {
  name: string;
  summary: string;
  featured?: boolean;
  stack: string[];
  outcome: string;
  href?: { label: string; url: string }[];
  images?: string[];
  cover?: string;
};

export type TechGroup = {
  title: string;
  items: TechItem[];
};

export type TechItem = {
  name: string;
  icon: string;
  color: string;
};

export type ContactLink = {
  label: string;
  href: string;
  description: string;
  placeholder?: boolean;
};

export const profile: Profile = {
  name: 'Bryan Rodríguez',
  role: 'Desarrollador Java Full Stack',
  eyebrow: 'Java Full Stack Developer',
  summary:
    'Transformo ideas en productos funcionales. Trabajo de punta a punta para crear soluciones digitales que resuelven problemas reales y escalan con el producto.',
  location: 'Argentina · Disponible para proyectos remotos',
  cvHref: 'mailto:bg.rodriguez.sanchez@gmail.com?subject=Solicitud%20de%20CV%20-%20Bryan%20Rodr%C3%ADguez',
  cvLabel: 'Solicitar CV',
};

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Mozaiko',
    role: 'Desarrollador Java Full Stack Freelancer',
    period: 'Marzo 2026 — Mayo 2026',
    mode: 'Freelance · Remoto',
    description:
      'Desarrollo completo del sistema de Orbit desde cero: plataforma multi-tenant para organizaciones y Echo, servicio de monitoreo legislativo con procesamiento de sesiones, IA y alertas por intereses de organización.',
    highlights: [
      'Diseño del modelo multi-tenant con organizaciones, miembros, roles, servicios e intereses por cliente.',
      'Implementación de scraping legislativo, persistencia en PostgreSQL, migraciones con Flyway y APIs REST para calendario de sesiones.',
      'Automatización de captura HLS, generación de resúmenes y versiones estenográficas con IA, matching de intereses y notificaciones por correo.',
      'Puesta en producción sobre Linux VPS con Docker, firewall, reverse proxy y TLS.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Orbit / Echo',
    featured: true,
    summary:
      'Orbit Intelligence es la plataforma multi-tenant para la que desarrollé Echo, el servicio de monitoreo legislativo con IA para registrar agendas, procesar sesiones del Congreso mexicano y alertar a organizaciones según sus intereses.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Docker', 'Linux VPS', 'IA', 'APIs REST'],
    outcome: 'Sistema productivo desde cero, con administración multi-tenant, scraping legislativo, procesamiento con IA, notificaciones y despliegue en infraestructura propia.',
  },
  {
    name: 'URL Shortener',
    summary:
      'Acortador de URLs con códigos cortos seguros, redirección, conteo de visitas en entornos concurrentes y despliegue en VPS con Docker y CI/CD automatizado con GitHub Actions.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Thymeleaf', 'JPA / Hibernate', 'Docker', 'GitHub Actions'],
    outcome: 'API REST desplegada con interfaz web, persistencia relacional, manejo de concurrencia, Docker y CI/CD con GitHub Actions.',
  },
  {
    name: 'LanguageDive',
    summary: 'Plataforma para aprender inglés mediante la lectura de libros en EPUB. El sistema procesa el contenido, lo divide en oraciones, detecta el idioma automáticamente y organiza las lecciones por capítulo. Permite guardar palabras con su traducción al instante y mantiene el progreso sincronizado entre sesiones.',
    featured: true,
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Docker', 'Swagger/OpenAPI'],
    outcome: 'Sistema completo con autenticación JWT, parsing de EPUB, sistema de vocabulario con estados de aprendizaje y seguimiento de progreso.',
    href: [
      { label: 'GitHub', url: 'https://github.com/LanguageDive/languagedive-backend' },
      { label: 'Swagger', url: 'https://languagedive.bryanrodriguez.tech/swagger-ui.html' }
    ]
  },
  {
    name: 'Lumina Books',
    summary: 'Catálogo de más de 1.6M de libros para buscar por título o autor. Incluye autocompletado mientras escribes, filtros por categoría, precio y rating, y paginación. Todo indexado con Elasticsearch.',
    stack: ['Java', 'Spring Boot', 'Elasticsearch', 'PostgreSQL', 'Docker', 'HTML', 'CSS', 'JavaScript'],
    outcome: 'Catálogo completo con estados de carga, filtros dinámicos y navegación fluida en grilla o lista.',
    href: [{ label: 'GitHub', url: 'https://github.com/BryanR1910/indexed-search' }],
    images: ['/lumina/lumina-01-hero.png', '/lumina/lumina-02-suggest.png', '/lumina/lumina-03-author.png'],
    cover: '/lumina/lumina-01-hero.png'
  }
];

export const techGroups: TechGroup[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Java', icon: 'icons/java.svg', color: '#f89820' },
      { name: 'Spring Boot', icon: 'icons/spring.svg', color: '#6db33f' },
      { name: 'Spring Security', icon: 'icons/spring.svg', color: '#6db33f' },
      { name: 'JPA / Hibernate', icon: 'icons/hibernate.svg', color: '#bcae79' },
      { name: 'Maven', icon: 'icons/maven.svg', color: '#c71a36' },
    ],
  },
  {
    title: 'Datos',
    items: [
      { name: 'PostgreSQL', icon: 'icons/postgresql.svg', color: '#336791' },
      { name: 'MySQL', icon: 'icons/mysql.svg', color: '#00758f' },
      { name: 'MongoDB', icon: 'icons/mongodb.svg', color: '#47a248' },
      { name: 'Redis', icon: 'icons/redis.svg', color: '#dc382d' },
      { name: 'Elasticsearch', icon: 'icons/elasticsearch.svg', color: '#00bfb3' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: 'icons/HTML5.svg', color: '#e34f26' },
      { name: 'CSS', icon: 'icons/CSS3.svg', color: '#1572b6' },
      { name: 'JavaScript', icon: 'icons/JavaScript.svg', color: '#f7df1e' },
    ],
  },
  {
    title: 'Infraestructura',
    items: [
      { name: 'Docker', icon: 'icons/docker.svg', color: '#2496ed' },
      { name: 'Linux', icon: 'icons/linux.svg', color: '#fcc624' },
      { name: 'GitHub Actions', icon: 'icons/github-actions.svg', color: '#2088ff' },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git', icon: 'icons/git.svg', color: '#f05032' },
      { name: 'GitHub', icon: 'icons/github.svg', color: '#f0f6fc' },
      { name: 'Postman', icon: 'icons/postman.svg', color: '#ff6c37' },
      { name: 'Swagger', icon: 'icons/swagger.svg', color: '#85ea2d' },
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:bg.rodriguez.sanchez@gmail.com',
    description: 'Contacto profesional directo.',
    placeholder: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bryan-rodriguez-sanchez-41508b3b8/',
    description: 'Perfil profesional para oportunidades y networking.',
    placeholder: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/BryanR1910',
    description: 'Repositorios y proyectos técnicos.',
    placeholder: true,
  },
];
