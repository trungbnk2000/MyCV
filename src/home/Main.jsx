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
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-[background,opacity] duration-700 ease-in-out"
        style={{
          background: isDarkMode
            ? `linear-gradient(45deg, #1a1a1a 0%, #003366 100%),
              repeating-linear-gradient(
                45deg,
                rgba(0, 255, 255, 0.1) 0px,
                rgba(0, 255, 255, 0.1) 20px,
                rgba(0, 255, 0, 0.1) 20px,
                rgba(0, 255, 0, 0.1) 40px
              ),
              radial-gradient(
                circle at 50% 50%,
                rgba(32, 196, 232, 0.3) 0%,
                rgba(76, 201, 240, 0.1) 100%
              )`
            : `
              radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
              radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
              linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
            `,
          backgroundBlendMode: isDarkMode ? 'normal, overlay, overlay' : 'normal',
          animation: isDarkMode ? 'aurora 8s linear infinite' : 'none',
        }}
      />
      <div className="relative z-20">
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>

      <div className="relative z-10">
        <Header
          personalInfo={cvData.personalInfo}
          socialLinks={cvData.socialLinks}
          isDarkMode={isDarkMode}
        />

        <div className="ease-in-out duration-500">
          <div className="container py-20 m-auto">
            <div className="grids-col-1">
              <Education education={cvData.education} />
              <Experience experience={cvData.experience} />
              <Projects projects={cvData.projects} isDarkMode={isDarkMode} />
              <Skills skills={cvData.skills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
