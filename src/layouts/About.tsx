import Card from '../components/Card';
import Button from '../components/Button';

// LIBRARIES
import { useThemeStore } from '../store/store';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react'

// ICONS
import { FaLaptopCode } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

//Types
import { CardVariants } from '../types/enums';

function About() {

  const initialTheme = useThemeStore(state => state.initialTheme);
  const { t } = useTranslation('common');
  const router = useNavigate();

  const MotionButton = motion(Button);

  return (
    <>
      <section className="flex flex-col w-full min-h-screen p-2 mb-12 sm:mb-16">
        
        <Card variant={CardVariants.profile} className="mb-11 bg-inherit">
          <div className="flex flex-col items-center text-center md:text-left px-8 py-5 grow">
            
            <h3 className={`text-xl sm:text-2xl text-center 
              ${initialTheme === 'dark' ? 'text-primary' : 'text-gray-900'}`}>
              Elia Giolli
            </h3>
            
            <span className={`text-3xl sm:text-5xl font-bold my-4 ${initialTheme === 'dark' ? 'text-tertiary' : 'text-blue-600'}`}>
              <ReactTyped
                strings={[
                  "Jr React developer",
                  "Jr Full-stack developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>

            <p className={`text-center text-lg sm:text-2xl p-3 
              ${initialTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t('about.intro1')}
            </p>

            <p className={`text-center text-lg sm:text-2xl p-3 
              ${initialTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t('about.intro2')}
            </p>
          </div>
        </Card>

        <Card variant={CardVariants.profile} className='bg-inherit'>
          <div className="grid col-span-2 px-4">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center break-words 
              ${initialTheme === 'dark' ? 'text-cyan-300' : 'text-blue-600'}`}>
              {t('about.h2')}
            </h2>

            <p className="text-center text-lg sm:text-2xl p-3">{t('about.p1')}</p>

            <ul className='flex flex-col justify-center items-center text-center p-3'>
              <li className={`md:text-xl text-center p-2 flex items-center 
                ${initialTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                <FaLaptopCode size={30} className='mr-3' />
                {t('about.features.responsive')}
              </li>
              <li className={`md:text-xl text-center p-2 flex items-center 
                ${initialTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                <TbManualGearbox size={30} className='mr-3' />
                {t('about.features.seo')}
              </li>
              <li className={`md:text-xl text-center p-2 flex items-center 
                ${initialTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                <TiTick size={30} className='mr-3' />
                {t('about.features.navigation')}
              </li>
            </ul>

            <p className={`text-center text-lg sm:text-2xl p-3 mb-4 
              ${initialTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t('about.p2')}</p>

            <MotionButton 
              onClick={() => router('/contacts')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                {t('about.button')}
            </MotionButton>
          </div>
        </Card>

      </section>
    </>
  )
}

export default About
