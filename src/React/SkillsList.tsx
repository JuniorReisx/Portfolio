import { useState } from "react";

type Module = {
  id: string;
  code: string;
  name: string;
  status: "online" | "core";
  stack: string[];
  log: string[];
};

const modules: Module[] = [
  {
    id: "gis",
    code: "GIS-01",
    name: "Spatial engine",
    status: "core",
    stack: ["ArcGIS Enterprise", "Experience Builder", "Dashboards", "PostGIS", "QGIS"],
    log: [
      "ArcGIS Enterprise at SIHS — web maps, Dashboards, Experience Builder apps",
      "GIS applications for water and sanitation operations, not desktop-only GIS",
      "PostGIS / PostgreSQL for infrastructure & hydrology data",
      "MapLibre when a custom web map runtime is the right call",
    ],
  },
  {
    id: "app",
    code: "APP-02",
    name: "Application layer",
    status: "online",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    log: [
      "React + TypeScript for government and enterprise surfaces",
      "Portals, dashboards, ops tools — usable by non-technical staff",
      "REST clients, auth flows, and third-party integrations",
    ],
  },
  {
    id: "api",
    code: "API-03",
    name: "Services & data",
    status: "online",
    stack: ["Node.js", "Express", "PostgreSQL", "LDAP", "Spring Boot"],
    log: [
      "Node/Express APIs for operational GIS and internal systems",
      "Spatial SQL, relational models, LDAP / Active Directory",
      "Spring Boot when the backend has to live on Java",
    ],
  },
  {
    id: "field",
    code: "FLD-04",
    name: "Field & mobile",
    status: "online",
    stack: ["PWA", "Geolocation", "React Native"],
    log: [
      "Mobile-first GIS UIs for field and office",
      "Location-aware flows — GPS, maps, asset in the street",
      "React Native when a native shell is the right call",
    ],
  },
  {
    id: "ux",
    code: "UX-05",
    name: "Product surface",
    status: "online",
    stack: ["Figma", "Design systems", "A11y"],
    log: [
      "Figma → component systems for GIS and internal products",
      "Workflows designed for public-sector operators, not designers",
      "Accessible, high-contrast interfaces that survive real use",
    ],
  },
  {
    id: "ops",
    code: "OPS-06",
    name: "Delivery",
    status: "online",
    stack: ["Git", "CI/CD", "Docker", "Linux", "Vercel"],
    log: [
      "Git-based delivery, CI/CD, Vercel and internal infra",
      "Docker + Linux so GIS apps leave the laptop",
      "Pipelines that ship maps the same way they ship APIs",
    ],
  },
];

export default function SkillsList() {
  const [active, setActive] = useState(modules[0].id);
  const current = modules.find((m) => m.id === active) ?? modules[0];

  return (
    <div className="stack-console">
      <header className="stack-console-head">
        <div>
          <p className="type-label !text-[var(--accent-primary)]">stack.manifest</p>
          <h3 className="stack-console-title">Systems I run in production</h3>
        </div>
        <p className="stack-console-lead">
          GIS as software — spatial engine, APIs, and interfaces. Not a tool list. A runtime.
        </p>
      </header>

      <div className="stack-console-grid">
        <ul className="stack-modules" role="list">
          {modules.map((mod) => {
            const on = mod.id === active;
            return (
              <li key={mod.id}>
                <button
                  type="button"
                  className={`stack-module ${on ? "is-on" : ""}`}
                  onClick={() => setActive(mod.id)}
                  aria-pressed={on}
                >
                  <span className="stack-module-code">{mod.code}</span>
                  <span className="stack-module-name">{mod.name}</span>
                  <span className={`stack-module-status ${mod.status}`}>{mod.status}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="stack-term" aria-live="polite">
          <div className="stack-term-bar">
            <span className="stack-term-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="stack-term-path">
              ~/reis/gis/{current.id}
            </span>
            <span className="stack-term-live">live</span>
          </div>
          <pre className="stack-term-body">
            <code>
              <span className="cmt"># inspect --module {current.code}</span>
              {"\n"}
              <span className="cmd">$</span> status{"\n"}
              {`  name      ${current.name}\n`}
              {`  runtime   ${current.stack.join(" · ")}\n`}
              {`  flag      ${current.status === "core" ? "PRIMARY" : "ONLINE"}\n`}
              {"\n"}
              <span className="cmd">$</span> capabilities --verbose{"\n"}
              {current.log.map((line) => `  ▸  ${line}`).join("\n")}
              {"\n"}
              <span className="cursor">█</span>
            </code>
          </pre>
          <div className="stack-term-chips">
            {current.stack.map((tag) => (
              <span key={tag} className="stack-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
