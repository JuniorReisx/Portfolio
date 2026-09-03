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
    id: "app",
    code: "APP-01",
    name: "Application layer",
    status: "core",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    log: [
      "React + TypeScript for government and enterprise surfaces",
      "Portals, dashboards, ops tools — usable by non-technical staff",
      "REST clients, auth flows, and third-party integrations",
    ],
  },
  {
    id: "api",
    code: "API-02",
    name: "Services & data",
    status: "online",
    stack: ["Node.js", "Express", "PostgreSQL", "LDAP", "Spring Boot"],
    log: [
      "Node/Express APIs for internal and operational systems",
      "Relational models, LDAP / Active Directory, spatial SQL when needed",
      "Spring Boot when the backend has to live on Java",
    ],
  },
  {
    id: "gis",
    code: "GIS-03",
    name: "Spatial stack",
    status: "online",
    stack: ["ArcGIS Enterprise", "Experience Builder", "Dashboards", "PostGIS", "QGIS"],
    log: [
      "Enterprise web maps, Dashboards, Experience Builder",
      "PostGIS for infrastructure & hydrology data",
      "MapLibre when a custom map runtime fits better",
    ],
  },
  {
    id: "field",
    code: "FLD-04",
    name: "Field & mobile",
    status: "online",
    stack: ["PWA", "Geolocation", "React Native"],
    log: [
      "Mobile-first UIs for field and office staff",
      "Location-aware flows when GPS and maps are part of the job",
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
      "Figma → component systems for product UIs",
      "Workflows designed for operators, not designers",
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
      "Docker + Linux so apps leave the laptop",
      "Pipelines that ship frontends and APIs the same way",
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
          Full stack in production — UI, APIs, data, GIS, and delivery.
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
