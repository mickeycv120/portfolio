/* ---------- Skills ---------- */
const SKILL_GROUPS = [
  { title: "Frontend", items: ["Angular", "Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Backend",  items: ["NestJS", "Node.js", "Prisma", "REST", "MQTT"] },
  { title: "Data",     items: ["PostgreSQL", "SQL Server", "Firebase"] },
  { title: "DevOps",   items: ["Docker", "Linux", "CI/CD"] },
  { title: "ERP",      items: ["SAP B1 Service Layer"] },
  { title: "Hardware", items: ["Raspberry Pi", "ESP32"] },
];

/* ---------- Portfolio ---------- */
const PROJECTS = [
  {
    badge: "Enterprise · WMS",
    title: "WMS Empresarial",
    company: "Grupo SIM",
    desc: "Warehouse Management System integrated with SAP Business One: inventory, purchase orders and real-time data sync across the operation.",
    stack: ["Angular", "NestJS", "Prisma", "SQL Server", "Docker", "SAP B1"],
    accent: "v",
    icon: "factory",
    metrics: [["live", "in production"], ["sync", "real-time"]],
  },
  {
    badge: "SaaS · Recruitment",
    title: "BeeMatch",
    company: "Recruitment platform",
    desc: "End-to-end SaaS for candidate management & recruitment workflows, with payments integration and a refined UX layer for recruiters.",
    stack: ["Angular", "Firebase", "Node.js", "Tailwind"],
    accent: "p",
    icon: "people",
    metrics: [["users", "active"], ["status", "production"]],
  },
  {
    badge: "IoT · Aquaponics",
    title: "Sistema de Acuaponia",
    company: "Research project",
    desc: "Real-time monitoring system for aquaponics: IoT sensors streaming over MQTT into a NestJS backend, with a Next.js dashboard for live data and control.",
    stack: ["NestJS", "PostgreSQL", "MQTT", "Next.js", "Raspberry Pi", "ESP32"],
    accent: "g",
    icon: "leaf",
    metrics: [["sensors", "16+"], ["latency", "< 200ms"]],
  },
];

/* ---------- Experience ---------- */
const TIMELINE = [
  { year: "2024 — present", role: "Full-Stack Developer", org: "Grupo SIM", desc: "Architecting & shipping the WMS platform integrated with SAP B1. Owning Angular front-end, NestJS services and PostgreSQL/SQL Server schemas." },
  { year: "2023 — 2024", role: "Frontend / SaaS Developer", org: "BeeMatch", desc: "Delivered the recruitment SaaS product: candidate flows, payments, and UX hardening — taking the platform to production with real customers." },
  { year: "2022 — 2023", role: "IoT / Backend Builder", org: "Aquaponics R&D", desc: "Designed the data pipeline from ESP32 sensors → MQTT → NestJS → PostgreSQL, with a Next.js dashboard for live monitoring & control." },
  { year: "2021 — 2022", role: "Software Developer", org: "Independent / Freelance", desc: "Web platforms, internal tools and integrations for SMB clients. Foundations in TypeScript, relational data and Linux deployments." },
];

/* ---------- Animated Terminal ---------- */
const TERMINAL_LINES = [
  { type: "cmd", text: "efrain@portfolio:~$ whoami" },
  { type: "out", text: "Full-Stack Developer · Builder of systems" },
  { type: "cmd", text: "efrain@portfolio:~$ cat stack.json" },
  { type: "code", lines: [
    "{",
    "  \"frontend\": [\"Angular\", \"Next.js\", \"React\", \"Tailwind\"],",
    "  \"backend\":  [\"NestJS\", \"Node.js\", \"Prisma\"],",
    "  \"data\":     [\"PostgreSQL\", \"SQL Server\"],",
    "  \"devops\":   [\"Docker\", \"Linux\"],",
    "  \"erp\":      [\"SAP B1 Service Layer\"]",
    "}"
  ]},
  { type: "cmd", text: "efrain@portfolio:~$ ./run --hire" },
  { type: "out", text: "✓ Available for new opportunities" },
  { type: "cursor" }
];