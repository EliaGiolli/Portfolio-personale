//Internal imports
import { useThemeStore } from "../store/store";
//External imports
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//React Icons
import { FaLinkedinIn, FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";

function Footer() {
  const { t } = useTranslation("common");
  const initialTheme = useThemeStore((state) => state.initialTheme);

  // Centralized dynamic classes
  const isDark = initialTheme === "dark";

  const footerClasses = `p-3 ${isDark ? "bg-gray-800 text-white" : "bg-blue-50 text-gray-700"}`;
  const brandTextClass = `text-2xl sm:text-3xl lg:text-4xl font-bold text-center break-words ${
    isDark ? "text-cyan-300" : "text-blue-600"
  }`;

  const iconClass = `p-2 text-4xl transition-colors duration-300 ${
    isDark ? "text-cyan-300 hover:text-cyan-500" : "text-blue-600 hover:text-blue-700"
  }`;

  return (
    <footer className={footerClasses}>
      <div className="w-full px-4 py-8 text-center space-y-6">
        {/* === BRAND === */}
        <section aria-label="Brand e logo" className="flex items-center justify-center gap-4">
          <Link to="/" aria-label="Homepage Giolli Design">
            <img
              src="/img/logo.jpg"
              alt="Logo Giolli Design"
              className="w-12 h-11 object-cover rounded"
            />
          </Link>
          <p className={brandTextClass}>GIOLLI DESIGN</p>
        </section>

        {/* === CONTATTI === */}
        <section aria-label="Contatti" className="space-y-2">
          <h5 className="text-xl sm:text-2xl">{t("footer.connect")}</h5>
          <address className="not-italic">
            <p className="text-lg sm:text-2xl">
              {t("footer.email")}:{" "}
              <a
                href="mailto:eliagiolli22@gmail.com"
                className={`underline hover:no-underline ${
                  isDark ? "text-cyan-400 hover:text-cyan-300" : "text-blue-600 hover:text-blue-700"
                }`}
              >
                eliagiolli22@gmail.com
              </a>
            </p>
          </address>
        </section>

        {/* === SOCIAL === */}
        <nav aria-label="Social links" className="flex justify-center gap-8">
          <Link
            to="https://www.linkedin.com/in/eliagiolli/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo LinkedIn di Elia Giolli"
          >
            <FaLinkedinIn className={iconClass} />
          </Link>
          <Link
            to="https://github.com/EliaGiolli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo GitHub di Elia Giolli"
          >
            <FaGithub className={iconClass} />
          </Link>
        </nav>

        {/* === STACK TECNOLOGICO === */}
        <section aria-hidden="true" className="flex justify-center flex-wrap gap-6 mt-4">
          <FaReact className={iconClass} />
          <IoLogoJavascript className={iconClass} />
          <FaHtml5 className={iconClass} />
          <FaCss3 className={iconClass} />
          <FaNodeJs className={iconClass} />
          <SiExpress className={iconClass} />
          <SiMongodb className={iconClass} />
        </section>
      </div>
    </footer>
  );
}

export default Footer;
