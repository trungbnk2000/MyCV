import date from '../../assets/svgs/date.svg';

export const Experience = ({ experience }) => {
  return (
    <div className="flex border-b border-[#E2E8F0] flex-col sm:flex-row gap-3 sm:gap-0 px-2 sm:px-0 py-10">
      <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
        Experience
      </div>
      <div className="flex-1 flex flex-col gap-6">
        {experience.map((exp, index) => (
          <section key={index}>
            <div className="flex flex-row justify-between items-center">
              <span className="text-title font-bold text-[20px] font-custom dark:text-slate-200">
                {exp.company}
                <span className="text-slate-700 text-[20px] font-normal font-custom dark:text-slate-200">
                  {' '}
                  — {exp.position}
                </span>
              </span>
              <span className="text-title font-light text-[16px] font-custom flex-row flex gap-2 dark:text-slate-200">
                <img src={date} alt="Date icon" />
                {exp.period}
                {exp.duration && ` (${exp.duration})`}
              </span>
            </div>

            <div className="flex flex-row justify-start items-center gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1] ease-in-out duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {exp.responsibilities.map((resp, respIndex) => (
              <span
                key={respIndex}
                className="flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200"
              >
                <div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div>
                {resp}
              </span>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};
