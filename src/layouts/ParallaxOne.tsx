import { Parallax } from "react-parallax"
import { useTheme } from "../contexts/ThemeContext"
import { useTranslation } from "react-i18next";
import { FaRocket } from "react-icons/fa"

function ParallaxOne() {
  const { themeMode } = useTheme();
  const { t } = useTranslation();

    return (
      <Parallax
          bgImage="/img/ambiente-lavoro.jpg"
          strength={800}
          bgImageAlt={t("parallax.one.iconAlt")}
          className="relative h-screen"
          >
          <div className="bg-gradient-to-br bg-primary opacity-70 absolute inset-0 h-screen w-full z-20"></div>
          <div className="flex items-center justify-center flex-col w-full h-screen z-20 relative">
              <div className={`flex flex-col justify-center items-center w-full max-w-3xl max-h-fit p-10 sm:p-14 rounded-lg shadow-lg mx-auto ${themeMode === 'dark'?'bg-primary':'bg-white'}`}>
                <div className="flex justify-between items-center text-center p-2">
                    <FaRocket size={30} className={`${themeMode === 'dark' ? 'icon': 'p-2 text-4xl text-blue-600 sm:text-5xl hover:text-blue-700 transition-colors duration-300'}`} />
                    <span className={`text-lg sm:text-xl ${themeMode === 'dark' ? 'text-tertiary':'text-blue-600'}`}>
                      {t("parallax.one.title")}
                    </span>
                </div>
                <p className="paragraph">{t("parallax.one.text")}</p>
              </div>
          </div>
      </Parallax>
    )
  }
export default ParallaxOne