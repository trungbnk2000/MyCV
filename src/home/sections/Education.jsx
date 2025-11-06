import date from '../../assets/svgs/date.svg';

export const Education = ({ education }) => {
  return (
    <div className="flex border-b border-[#E2E8F0] flex-col gap-3 sm:gap-0 sm:flex-row px-2 sm:px-0 pb-10">
      <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
        Education
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-row justify-between items-center">
            <span className="text-title font-bold text-[20px] font-custom dark:text-slate-200">
              {edu.degree}
              {edu.institution && (
                <span className="text-slate-700 text-[20px] font-normal font-custom dark:text-slate-200">
                  {' '}
                  — {edu.institution}
                  {edu.gpa && `. GPA: ${edu.gpa}`}
                </span>
              )}
              {edu.score && (
                <span className="text-slate-700 text-[20px] font-normal font-custom dark:text-slate-200">
                  {' '}
                  — {edu.score}
                </span>
              )}
            </span>
            {edu.period && (
              <span className="text-title font-light text-[16px] font-custom dark:text-slate-200">
                <img className="inline-block mr-2 mb-1" src={date} alt="Date icon" />
                {edu.period}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
