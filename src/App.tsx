import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  const theme = {
    bgPrimary: "#242948",
    accentSecondary: "#96A4D3",
    accentSpecial: "#A98F76",
    textLight: "#E0E0E0",
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center backdrop-blur-md transition-colors duration-700 animate-fadeIn px-8 py-16"
      style={{ backgroundColor: theme.bgPrimary, color: theme.textLight }}
    >
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h1 className="text-6xl font-bold font-outfit mb-6 text-center">Vinicius Souza</h1>
        <p className="text-2xl mb-12 text-center font-poppins">
          Senior Frontend Engineer | Building multi-tenant and AI-powered platforms
        </p>

        <div className="flex gap-10 mb-16 text-5xl">
          <a
            href="https://linkedin.com/in/viniciuspizettadesouza"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
            className="transition-transform duration-300 hover:scale-110"
            style={{ color: theme.accentSecondary }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/viniciuspizettadesouza"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub Profile"
            className="transition-transform duration-300 hover:scale-110"
            style={{ color: theme.accentSecondary }}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:viniciuspzt@gmail.com"
            title="Email"
            aria-label="Send Email"
            className="transition-transform duration-300 hover:scale-110"
            style={{ color: theme.accentSecondary }}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mb-16">
        {["Robin", "Storefront Manager", "Abo-Online"].map((title, idx) => (
          <article
            key={idx}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
            style={{ boxShadow: `0 0 15px ${theme.accentSpecial}` }}
          >
            <h3 className="text-3xl font-semibold mb-4 font-poppins text-center">{title}</h3>
            <p className="text-base font-poppins text-center">
              {title === "Storefront Manager"
                ? "Multi-tenant platform supporting 10k+ product uploads."
                : title === "Robin"
                  ? "AI-powered agent with chatbot, notifications, and dashboards."
                  : "Public transport platform for 60+ companies in Germany."}
            </p>
          </article>
        ))}
      </div>

      <section className="w-full max-w-4xl flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold font-outfit mb-2" style={{ color: theme.accentSecondary }}>Tech Stack</h2>
        <div className="w-24 h-1 bg-[#A98F76] rounded-full mb-6"></div>
        <ul className="flex flex-wrap justify-center gap-6 text-xl font-poppins mb-12">
          {[
            "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Storybook", "Playwright"
          ].map((tech, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-lg" style={{ color: theme.accentSpecial }}>•</span> {tech}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
