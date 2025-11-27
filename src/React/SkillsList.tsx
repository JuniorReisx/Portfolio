import React, { useState } from "react";

  const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 md:w-7 md:h-7 text-[var(--sec)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Mobile Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 md:w-7 md:h-7 text-[var(--sec)] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "UI/UX Design & Prototyping": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 md:w-7 md:h-7 text-[var(--sec)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
  "Backend & Database": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 md:w-7 md:h-7 text-[var(--sec)] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
    >
      <path d="M5 12.5C5 12.8134 5.46101 13.3584 6.53047 13.8931C7.91405 14.5849 9.87677 15 12 15C14.1232 15 16.0859 14.5849 17.4695 13.8931C18.539 13.3584 19 12.8134 19 12.5V10.3287C17.35 11.3482 14.8273 12 12 12C9.17273 12 6.65 11.3482 5 10.3287V12.5ZM19 15.3287C17.35 16.3482 14.8273 17 12 17C9.17273 17 6.65 16.3482 5 15.3287V17.5C5 17.8134 5.46101 18.3584 6.53047 18.8931C7.91405 19.5849 9.87677 20 12 20C14.1232 20 16.0859 19.5849 17.4695 18.8931C18.539 18.3584 19 17.8134 19 17.5V15.3287ZM3 17.5V7.5C3 5.01472 7.02944 3 12 3C16.9706 3 21 5.01472 21 7.5V17.5C21 19.9853 16.9706 22 12 22C7.02944 22 3 19.9853 3 17.5ZM12 10C14.1232 10 16.0859 9.58492 17.4695 8.89313C18.539 8.3584 19 7.81342 19 7.5C19 7.18658 18.539 6.6416 17.4695 6.10687C16.0859 5.41508 14.1232 5 12 5C9.87677 5 7.91405 5.41508 6.53047 6.10687C5.46101 6.6416 5 7.18658 5 7.5C5 7.81342 5.46101 8.3584 6.53047 8.89313C7.91405 9.58492 9.87677 10 12 10Z"></path>
    </svg>
  ),
  "DevOps & Best Practices": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 md:w-7 md:h-7 text-[var(--sec)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs) with React/Next.js",
      "Landing pages and business websites",
      "Portfolio websites",
      "Progressive Web Apps (PWAs)",
      "E-commerce platforms and payment integration",
      "RESTful APIs and third-party integrations",
      "Server-Side Rendering (SSR) and Static Site Generation (SSG)",
    ],
    "Mobile Development": [
      "Cross-platform mobile apps with React Native",
      "Mobile-first responsive web applications",
      "Native features integration (Camera, GPS, Push Notifications)",
      "App Store and Google Play deployment",
    ],
    "UI/UX Design & Prototyping": [
      "UI design with Figma & Canva",
      "UX research & user testing",
      "Design systems and component libraries",
      "Interactive prototypes and wireframing",
      "Accessibility (A11Y) compliance",
    ],
    "Backend & Database": [
      "Node.js and Express.js APIs",
      "Database design (SQL and NoSQL)",
      "Firebase/Supabase integration",
      "Authentication and authorization systems",
    ],
    "DevOps & Best Practices": [
      "Git version control and team collaboration",
      "CI/CD pipelines and automated deployments",
      "Performance optimization and SEO",
      "Testing (Unit, Integration, E2E)",
      "Docker containerization",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      {/* Header com gradiente */}
      <div className="mb-8">
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-bold mb-2 relative inline-block">
          What I do?
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--sec)] via-[var(--sec)]/50 to-transparent rounded-full"></div>
        </h3>
        <p className="text-[var(--white-icon)] text-sm md:text-base mt-3">
          Click on each category to see details
        </p>
      </div>

      <ul className="space-y-4 text-lg">
        {Object.entries(skills).map(([category, items], index) => {
          const isOpen = openItem === category;
          return (
            <li
              key={category}
              className="w-full"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                onClick={() => toggleItem(category)}
                className={`group relative w-full max-w-full md:max-w-[480px] backdrop-blur-sm rounded-2xl text-left cursor-pointer overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--sec)]/10 border-2 border-[var(--sec)]/50 shadow-lg shadow-[var(--sec)]/20"
                    : "bg-[#1414149c] border border-[var(--white-icon-tr)] hover:border-[var(--sec)]/30 hover:bg-[#1a1a1a]"
                }`}
              >
                {/* Brilho de fundo ao hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--sec)]/0 via-[var(--sec)]/5 to-[var(--sec)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Header do card */}
                <div className="relative flex items-center gap-3 md:gap-4 p-4 md:p-5">
                  {/* Ícone com background */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--sec)]/10 flex items-center justify-center group-hover:bg-[var(--sec)]/20 transition-colors">
                    {CategoryIcons[category]}
                  </div>

                  {/* Texto e seta */}
                  <div className="flex items-center gap-2 md:gap-3 flex-grow justify-between min-w-0">
                    <span className="block text-[var(--white)] text-base md:text-lg font-semibold group-hover:text-[var(--sec)] transition-colors truncate pr-2">
                      {category}
                    </span>

                    {/* Badge com contador */}
                    <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                      <span className="px-2 md:px-2.5 py-0.5 md:py-1 bg-[var(--sec)]/20 text-[var(--sec)] text-xs font-bold rounded-full">
                        {items.length}
                      </span>

                      {/* Seta animada */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-5 h-5 md:w-6 md:h-6 text-[var(--white)] transition-all duration-300 ${
                          isOpen ? "rotate-180 text-[var(--sec)]" : "group-hover:translate-y-0.5"
                        }`}
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Conteúdo expansível */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2">
                    {/* Linha divisória */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[var(--sec)]/30 to-transparent mb-3 md:mb-4"></div>

                    {/* Lista de items */}
                    <ul className="space-y-2 md:space-y-3">
                      {items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 md:gap-3 text-[var(--white-icon)] text-xs md:text-sm group/item hover:text-[var(--white)] transition-colors"
                          style={{
                            animation: isOpen
                              ? `slideIn 0.3s ease-out ${itemIndex * 0.05}s both`
                              : "none",
                          }}
                        >
                          {/* Bullet point customizado */}
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--sec)] mt-1.5 md:mt-2 group-hover/item:scale-150 transition-transform"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Animações CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsList;