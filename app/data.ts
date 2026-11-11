export const projects = [
  {
    slug: "vatra",
    title: "Vatra",
    company: "Baisoft Global",
    date: "July 2026",
    description: "I audited and tested a Django REST Framework backend from start to finish.",
    details: [
      "Confirmed and helped fix 6+ real bugs, including a critical permission gap.",
      "Found and fixed a flaw that could let outside clients skip internal payment approvals.",
      "Built an APITestCase suite for login, tenant separation and approvals. It caught 3 regressions during a live refactor.",
      "Designed a recovery and auction workflow and presented it to stakeholders."
    ],
    tags: ["Django REST Framework", "APITestCase", "Security"],
    featured: true
  },
  {
    slug: "baifam",
    title: "Baifam",
    company: "Baisoft Global",
    date: "June 2026",
    description: "A property management system for many organizations on one platform: properties, units, leases, invoices, payments and occupants.",
    details: [
      "Built and improved API endpoints that follow the team’s rules for permissions and serializers.",
      "Made sure each organization only sees its own data.",
      "Debugged the lease, membership and property modules with teammates."
    ],
    tags: ["Django", "Multi-tenant", "Git"],
    featured: false
  },
  {
    slug: "hotel-management",
    title: "Hotel Management System",
    company: "Personal Project",
    date: "In Progress",
    description: "A Django hotel system that I am growing into a multi-tenant platform, so many hotels can use it with their own separate data.",
    details: ["Currently building out the multi-tenant architecture.", "Implementing role-based access control."],
    tags: ["Django", "Multi-tenant"],
    featured: false
  },
  {
    slug: "ecommerce-api",
    title: "E-commerce API",
    company: "Personal Practice",
    date: "2026",
    description: "A simple Django REST API for products, clients and orders.",
    details: ["Practice project to solidify API design and relationships."],
    tags: ["Django REST Framework"],
    featured: false
  },
  {
    slug: "parkease",
    title: "ParkEase",
    company: "Parking System",
    date: "2026",
    description: "I built the vehicle registration backend, a Bootstrap dashboard to watch parking data, and entry forms with strict input checks.",
    details: ["Built a Bootstrap dashboard for real-time parking data.", "Implemented strict input validation on entry forms."],
    tags: ["Django", "Bootstrap"],
    featured: false
  },
  {
    slug: "student-attendance",
    title: "Student Attendance System",
    company: "Records App",
    date: "2026",
    description: "A full-stack CRUD app for student records and attendance, with a secure backend and an admin screen for quick edits.",
    details: ["Full-stack CRUD operations.", "Secure backend with an admin screen for quick data edits."],
    tags: ["Full-stack", "CRUD"],
    featured: false
  }
];

export const skillsData = [
  {
    slug: "backend",
    title: "Backend",
    short: "Python, Django, Django REST Framework, REST API design, SQL, data modeling",
    description: "I design robust relational databases, build scalable APIs with Django REST Framework, and write clean, maintainable Python code. I focus heavily on data modeling to ensure that relationships between data entities are efficient and secure.",
    details: [
      { title: "Django & DRF", desc: "Building scalable REST APIs, custom serializers, and complex query optimization.", icon: "Server" },
      { title: "Relational Databases", desc: "Designing normalized schemas, writing raw SQL when necessary, and optimizing ORM queries.", icon: "Database" },
      { title: "Data Modeling", desc: "Structuring entities and relationships to ensure data integrity and efficient access.", icon: "Network" },
    ]
  },
  {
    slug: "testing-security",
    title: "Testing & Security",
    short: "APITestCase, regression tests, logins and permissions, input checks, SQL injection prevention",
    description: "I write comprehensive automated tests (like APITestCase) to ensure APIs behave exactly as expected. I implement role-based access control, prevent SQL injection by using Django's ORM, and write regression tests to catch bugs before they reach production.",
    details: [
      { title: "Automated Testing", desc: "Writing APITestCase suites to verify business logic and catch regressions early.", icon: "CheckCircle" },
      { title: "Access Control", desc: "Implementing robust login systems, JWT authentication, and fine-grained permissions.", icon: "Shield" },
      { title: "Vulnerability Prevention", desc: "Securing inputs, preventing SQL injection, and protecting against common OWASP threats.", icon: "Lock" },
    ]
  },
  {
    slug: "frontend",
    title: "Front end",
    short: "HTML5, CSS3, Bootstrap, Next.js, Tailwind CSS",
    description: "While I specialize in backend, I am fully capable of bringing designs to life. I use Next.js and Tailwind CSS to build responsive, modern user interfaces that connect seamlessly to my backend APIs.",
    details: [
      { title: "Next.js & React", desc: "Building modern, server-rendered frontend applications that consume my APIs.", icon: "Layout" },
      { title: "Tailwind CSS", desc: "Creating responsive, utility-first designs without writing messy CSS files.", icon: "Paintbrush" },
      { title: "Bootstrap", desc: "Rapidly prototyping dashboards and admin panels for backend systems.", icon: "Monitor" },
    ]
  },
  {
    slug: "tools",
    title: "Tools",
    short: "Git, API documentation, Agile, cloud basics, AI coding tools (with human review)",
    description: "I manage version control with Git, document APIs clearly using tools like Swagger/Postman, and work within Agile workflows. I also leverage AI tools to speed up development, while strictly reviewing all generated code for security and logic.",
    details: [
      { title: "Version Control", desc: "Managing complex Git workflows, branches, and pull requests in team environments.", icon: "GitBranch" },
      { title: "API Documentation", desc: "Writing clear Swagger/Postman documentation so frontend teams can integrate easily.", icon: "FileText" },
      { title: "AI-Assisted Dev", desc: "Using AI tools to accelerate coding, but always reviewing code manually for security.", icon: "Cpu" },
    ]
  }
];