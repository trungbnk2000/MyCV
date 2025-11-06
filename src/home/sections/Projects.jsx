import stars from '../../assets/svgs/stars.svg';
import darkStars from '../../assets/svgs/dark-stars.svg';
import link from '../../assets/svgs/link.svg';
import darkLink from '../../assets/svgs/dark-link.svg';

export const Projects = ({ projects, isDarkMode }) => {
  return (
    <div className="flex border-b border-[#E2E8F0] flex-col sm:flex-row gap-3 sm:gap-0 px-2 sm:px-0 py-10">
      <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
        Featured Project
      </div>
      <div className="flex-1 flex flex-col gap-6">
        {projects.map((project, index) => (
          <section key={index}>
            <div className="flex flex-row justify-between items-center">
              <span className="text-title font-bold text-[20px] font-custom dark:text-slate-200">
                {project.name}
              </span>
            </div>

            <div className="flex flex-row justify-start items-center gap-2 flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.description.map((desc, descIndex) => (
              <span
                key={descIndex}
                className="flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200"
              >
                - {desc}
              </span>
            ))}

            <br />

            {project.url && (
              <span className="flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200">
                <img src={isDarkMode ? darkStars : stars} alt="Featured icon" />
                <img src={isDarkMode ? darkLink : link} alt="Link icon" />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic cursor-pointer underline hover:text-blue-400"
                >
                  {project.url.replace('https://', '')}
                </a>
              </span>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};
