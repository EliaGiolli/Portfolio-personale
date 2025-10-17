// src/pages/projects/ProjectsLayout.tsx
//External libs
import { Outlet, NavLink } from "react-router-dom";
import { motion } from 'motion/react';
//Internal imports
import { useThemeStore } from "../../store/store";
//Components
import Card from "../../components/Card";
//Icons
import { CgBrowser } from "react-icons/cg";
import { BsServer } from "react-icons/bs";
//Types
import { CardVariants } from "../../types/enums";

export default function ProjectPage() {

  const initialTheme = useThemeStore(state => state.initialTheme);
  const MotionCard = motion(Card);

  return (
    <section className="min-h-screen px-8 my-12">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className={`text-3xl md:text-4xl font-extrabold leading-tight 
          ${initialTheme === 'dark' ? 'text-cyan-300' : 'text-blue-600'} `}>I miei progetti</h1>
        <p className={`text-lg md:text-xl w-full sm:max-w-3xl my-5 
          ${initialTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Dai un'occhiata a quello che so fare</p>
      </div>

      <div className="flex flex-col justify-center gap-8 mb-8 text-lg font-medium">
        <MotionCard 
          variant={CardVariants.project} 
          className="min-w-[500px]"
          whileHover={{ scale: 1.1 }}
          >
          <div className="flex gap-6 items-center text-center">  
            <CgBrowser 
              size={50} 
              className={`${initialTheme === 'dark' ? 'text-cyan-500 hover:text-cyan-700 p-2 text-4xl transition-colors duration-300' : 'text-blue-600 hover:text-blue-700 p-2 text-4xl transition-colors duration-300'}`}/>
            <NavLink
              to="frontend"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-gray-500 hover:text-blue-400"
            }
            >
              Front-end
            </NavLink>
          </div>
        </MotionCard>
        <MotionCard 
          variant={CardVariants.project} 
          className="min-w-[500px]"
          whileHover={{ scale: 1.1 }}
          >
          <div className="flex gap-6 items-center text-center">  
            <BsServer 
              size={50} 
              className={`${initialTheme === 'dark' ? 'text-cyan-500 hover:text-cyan-700 p-2 text-4xl transition-colors duration-300' : 'text-blue-600 hover:text-blue-700 p-2 text-4xl transition-colors duration-300'}`}/>
            <NavLink
              to="backend"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-gray-500 hover:text-blue-400"
            }
            >
              Back-end
            </NavLink>
          </div>
        </MotionCard>
      </div>

      <Outlet />
    </section>
  );
}
