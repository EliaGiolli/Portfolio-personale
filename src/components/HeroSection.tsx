//React components
import Button from './Button'
//External libraries
import { useNavigate } from 'react-router-dom'

import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

import FotoLaurea from '../../public/img/foto-laurea.jpg'
import { ButtonVariants } from '../types/enums'

function HeroSection() {

    const { t } = useTranslation('common');
    const {themeMode} = useTheme();

    const router = useNavigate();

  return (
    <>
        <section className='max-w-[1200px] mx-auto px-6 sm:px-10 py-3 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            {/* Colonna sinistra: immagine */}
            <div className="w-full h-80 md:h-[500px] lg:h-[600px] order-1 md:order-none flex items-center justify-center">
                <img
                    src={FotoLaurea}
                    width={400}
                    height={400}
                    alt="Foto della mia laurea"
                    className="object-cover rounded-2xl shadow-lg hidden md:block"
                />
            </div>

            <div className={
                `flex flex-col items-center md:items-start justify-center px-8 py-4 h-screen gap-y-4
                ${themeMode === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                <h3 className='text-lg sm:text-xl font-medium tracking-wide uppercase'>{t("heroSection.h3")}</h3>
                <h1 className={`text-3xl md:text-4xl font-extrabold leading-tight 
                    ${themeMode === 'dark' ? 'text-cyan-300' : 'text-blue-600'} `}>{t("heroSection.h1")}</h1>
                <p className={`text-lg md:text-xl w-full sm:max-w-3xl my-5 
                    ${themeMode === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t("heroSection.p")}</p>
                <div className="flex items-start gap-6">
                    <Button 
                        variant={ButtonVariants.customBtn}
                        onClick={() => router('/contacts')}>
                        {t("heroSection.btn")}
                    </Button>

                    <Button 
                        variant={ButtonVariants.transparentBtn}
                        onClick={() => router('/projects')}>
                        {t("heroSection.buttonTransparent")}
                    </Button>
                </div>
            </div>
        
        </section>
    </>
  )
}

export default HeroSection