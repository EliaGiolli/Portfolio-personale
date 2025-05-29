//React components
import Button from './Button'
//External libraries
import { Link } from 'react-scroll'
import { Parallax } from 'react-parallax'

import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'


function HeroSection() {

    const { t } = useTranslation('common');

    const {themeMode} = useTheme();

  return (
    <>
        <div id='parallaxSectionOne'>
            <Parallax 
                bgImage='/img/foto-laurea.jpg'
                strength={800} 
                bgImageAlt={t("heroSection.bgAltImg")}
                className="relative h-screen w-full overflow-hidden"
            >
            <div className="absolute inset-0 w-full h-screen bg-gradient-to-br bg-primary opacity-70 z-20"></div>
            <div className="flex flex-col items-center justify-center relative z-30 text-white px-8 py-4 h-screen">
                <h3 className='subtitle-secondary py-3'>{t("heroSection.h3")}</h3>
                <h1 className={`title-primary ${themeMode === 'dark' ? 'text-tertiary' : 'text-blue-300'} `}>{t("heroSection.h1")}</h1>
                <p className="paragraph text-lg sm:text-2xl w-full sm:max-w-3xl my-5">{t("heroSection.p")}</p>
                <div className="w-full flex flex-col items-center justify-center p-4">
                    <Button>
                        <Link className='block w-full h-full' to="contacts" smooth={true} duration={500}>{t("heroSection.btn")}</Link>
                    </Button>
                </div>
            </div>
        </Parallax>
        </div>
    </>
  )
}

export default HeroSection