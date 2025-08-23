import Card from '../components/Card'
import Button from '../components/Button'

import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

// LIBRARIES
import { ReactTyped } from 'react-typed'
import { Element, Link } from 'react-scroll'

// ICONS
import { FaLaptopCode } from "react-icons/fa"
import { TbManualGearbox } from "react-icons/tb"
import { TiTick } from "react-icons/ti"

function About() {
  const { themeMode } = useTheme()
  const { t } = useTranslation('common')

  return (
    <>
      <Element name='about' className="flex flex-col w-full min-h-screen p-2 mb-10 sm:mb-16">
        
        <Card CardVariant="profile" className="mb-11">
          <div className="flex flex-col items-center text-center md:text-left px-8 py-5 grow">
            
            <h3 className={`subtitle-secondary ${themeMode === 'dark' ? 'text-primary' : 'text-gray-900'}`}>
              Elia Giolli
            </h3>
            
            <span className={`text-3xl sm:text-5xl font-bold my-4 ${themeMode === 'dark' ? 'text-tertiary' : 'text-blue-600'}`}>
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

            <p className={`paragraph ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('about.intro1')}
            </p>

            <p className={`paragraph ${themeMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('about.intro2')}
            </p>
          </div>
        </Card>

        <Card CardVariant="profile">
          <div className="grid col-span-2 px-4">
            <h2 className={`subtitle ${themeMode === 'dark' ? 'text-tertiary' : 'text-blue-600'}`}>
              {t('about.h2')}
            </h2>

            <p className="paragraph">{t('about.p1')}</p>

            <ul className='flex flex-col justify-center items-center text-center p-3'>
              <li className={`md:text-xl text-center p-2 flex items-center ${themeMode === 'dark' ? 'text-primary' : 'text-gray-900'}`}>
                <FaLaptopCode size={30} className='mr-3' />
                {t('about.features.responsive')}
              </li>
              <li className={`md:text-xl text-center p-2 flex items-center ${themeMode === 'dark' ? 'text-primary' : 'text-gray-900'}`}>
                <TbManualGearbox size={30} className='mr-3' />
                {t('about.features.seo')}
              </li>
              <li className={`md:text-xl text-center p-2 flex items-center ${themeMode === 'dark' ? 'text-primary' : 'text-gray-900'}`}>
                <TiTick size={30} className='mr-3' />
                {t('about.features.navigation')}
              </li>
            </ul>

            <p className='paragraph text-accent-secondary mb-4'>{t('about.p2')}</p>

            <Button>
              <Link to="contacts" smooth={true} duration={500}>
                {t('about.button')}
              </Link>
            </Button>
          </div>
        </Card>

      </Element>
    </>
  )
}

export default About
