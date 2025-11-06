import { useDarkMode } from '../hooks/useDarkMode';
import { cvData } from '../data/cvData';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { Header } from './sections/Header';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

export const Main = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      <Header
        personalInfo={cvData.personalInfo}
        socialLinks={cvData.socialLinks}
        isDarkMode={isDarkMode}
      />

      <div className="dark:bg-[#0F172A] ease-in-out duration-500">
        <div className="container py-20 m-auto">
          <div className="grids-col-1">
            <Education education={cvData.education} />
            <Experience experience={cvData.experience} />
            <Projects projects={cvData.projects} isDarkMode={isDarkMode} />
            <Skills skills={cvData.skills} />
          </div>
        </div>
      </div>
    </>
  );
};
