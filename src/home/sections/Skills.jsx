const SkillBadge = ({ name, proficiency }) => {
  const getProficiencyWidth = () => {
    switch (proficiency) {
      case 'full':
        return 'w-full';
      case 'twothirds':
        return 'w-2/3';
      case 'half':
        return 'w-1/2';
      case 'third':
        return 'w-1/3';
      default:
        return 'w-full';
    }
  };

  return (
    <span className="relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]">
      <div
        className={`absolute bottom-0 ${getProficiencyWidth()} h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70`}
      ></div>
      <span className="m-2">{name}</span>
    </span>
  );
};

export const Skills = ({ skills }) => {
  return (
    <div className="flex border-b border-[#E2E8F0] flex-col sm:flex-row gap-3 sm:gap-0 px-2 sm:px-0 py-10">
      <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
        Skills & Tools
      </div>
      <div className="flex-1 flex flex-col gap-6">
        {/* Indicators */}
        <section>
          <div className="flex">
            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
              Underline indicators
            </div>
            <div className="flex-1 flex flex-row gap-2">
              <SkillBadge name="Frequently Used" proficiency="full" />
              <SkillBadge name="Occasionally" proficiency="third" />
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex-none w-1/4">
                <span className="text-title font-bold text-[20px] font-custom dark:text-slate-200">
                  Languages
                </span>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex items-center">
              <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                FE related
              </div>
              <div className="flex-1 flex flex-row gap-2">
                {skills.languages.frontend.map((lang, index) => (
                  <SkillBadge key={index} name={lang.name} proficiency={lang.proficiency} />
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                BE related
              </div>
              <div className="flex-1 flex flex-row gap-2">
                {skills.languages.backend.map((lang, index) => (
                  <SkillBadge key={index} name={lang.name} proficiency={lang.proficiency} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="flex-none w-1/4">
                <span className="text-title font-bold text-[20px] font-custom dark:text-slate-200">
                  Technologies
                </span>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex">
              <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                UI related
              </div>
              <div className="flex-1 flex flex-row gap-2 flex-wrap">
                {skills.technologies.ui.map((tech, index) => (
                  <SkillBadge key={index} name={tech.name} proficiency={tech.proficiency} />
                ))}
              </div>
            </div>

            <div className="flex">
              <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                FE related
              </div>
              <div className="flex-1 flex flex-row gap-2 flex-wrap">
                {skills.technologies.frontend.map((tech, index) => (
                  <SkillBadge key={index} name={tech.name} proficiency={tech.proficiency} />
                ))}
              </div>
            </div>

            <div className="flex">
              <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                BE related
              </div>
              <div className="flex-1 flex flex-row gap-2 flex-wrap">
                {skills.technologies.backend.map((tech, index) => (
                  <SkillBadge key={index} name={tech.name} proficiency={tech.proficiency} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Softwares */}
        <section>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex-none w-1/4">
                <span className="text-title font-bold text-[20px] font-custom dark:text-slate-200">
                  Tools & Softwares
                </span>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex items-center">
              <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                Coder related
              </div>
              <div className="flex-1 flex flex-row gap-2">
                {skills.tools.coder.map((tool, index) => (
                  <SkillBadge key={index} name={tool.name} proficiency={tool.proficiency} />
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                Designer related
              </div>
              <div className="flex-1 flex flex-row gap-2">
                {skills.tools.designer.map((tool, index) => (
                  <SkillBadge key={index} name={tool.name} proficiency={tool.proficiency} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
