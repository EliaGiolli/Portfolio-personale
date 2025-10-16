//React components
import Button from './Button';
//External libraries
import { useNavigate } from 'react-router-dom';
import  {easeIn, motion} from 'motion/react';
import { useTranslation } from 'react-i18next';
//Internal imports
import FotoLaurea from '../../public/img/foto-laurea.jpg';
import { useThemeStore } from '../store/store';
//Types
import { ButtonVariants } from '../types/enums';

function HeroSection() {

    const { t } = useTranslation('common');
    const initialTheme = useThemeStore(state => state.initialTheme);

    const router = useNavigate();
    //Framer Motion uses a motion() API to wrap any custom component in React
    const MotionButton = motion(Button);

  return (
    <>
        <motion.section 
            className='max-w-[1200px] mx-auto px-6 sm:px-10 py-3 grid grid-cols-1 md:grid-cols-2 gap-10 items-center opacity-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: easeIn, duration: 2}}
            >
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
                ${initialTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                <h3 className='text-lg sm:text-xl font-medium tracking-wide uppercase'>{t("heroSection.h3")}</h3>
                <h1 className={`text-3xl md:text-4xl font-extrabold leading-tight 
                    ${initialTheme === 'dark' ? 'text-cyan-300' : 'text-blue-600'} `}>{t("heroSection.h1")}</h1>
                <p className={`text-lg md:text-xl w-full sm:max-w-3xl my-5 
                    ${initialTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t("heroSection.p")}</p>
                <div className="flex items-start gap-6">
                    <MotionButton 
                        variant={ButtonVariants.customBtn}
                        onClick={() => router('/contacts')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        {t("heroSection.btn")}
                    </MotionButton>

                    <MotionButton 
                        variant={ButtonVariants.transparentBtn}
                        onClick={() => router('/projects')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        {t("heroSection.buttonTransparent")}
                    </MotionButton>
                </div>
            </div>
        
        </motion.section>
    </>
  )
}

export default HeroSection