import { motion } from 'framer-motion';
import location from '../../assets/svgs/location.svg';
import darkLocation from '../../assets/svgs/dark-location.svg';
import mail from '../../assets/svgs/mail.svg';
import darkMail from '../../assets/svgs/dark-mail.svg';
import global from '../../assets/svgs/global.svg';
import linkedIn from '../../assets/svgs/linkedIn.svg';
import gitHub from '../../assets/svgs/gitHub.svg';

export const Header = ({ personalInfo, socialLinks, isDarkMode }) => {
  return (
    <div className="bg-cover bg-[url('./assets/images/header-bg.png')] dark:bg-[url('./assets/images/dark-header-bg.png')] ease-in-out duration-500 min-h-[600px] flex flex-col justify-center items-center text-center">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="text-slate-700 text-[50px] sm:text-[60px] md:text-[80px] dark:text-slate-200 font-custom font-bold">
          {personalInfo.name}
        </div>
        <div className="text-slate-500 text-[20px] sm:text-[30px] dark:text-slate-200 font-medium font-custom">
          {personalInfo.title}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
          <div className="text-slate-700 dark:text-slate-200 md:text-[20px] font-normal font-custom leading-[20px] inline-flex gap-1 items-center">
            <img src={isDarkMode ? darkLocation : location} alt="Location icon" />
            {personalInfo.location}
          </div>
          <div className="text-slate-700 dark:text-slate-200 md:text-[20px] font-normal font-custom inline-flex gap-1 items-center">
            <img src={isDarkMode ? darkMail : mail} alt="Email icon" />
            {personalInfo.email}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 mt-4 gap-4">
            <a
              href={`tel:${personalInfo.phone}`}
              className="px-2 py-1 bg-violet-50 rounded-[20px] border border-violet-600 justify-center items-center gap-1 inline-flex hover:drop-shadow-xl cursor-pointer"
            >
              <img src={global} alt="Phone icon" />
              <div className="text-violet-600 text-[16px] font-semibold font-custom">
                {personalInfo.phone}
              </div>
            </a>

            {/* {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-violet-50 rounded-[20px] border border-violet-600 justify-center items-center gap-1 inline-flex hover:drop-shadow-xl cursor-pointer"
              >
                <img src={linkedIn} alt="LinkedIn icon" />
                <div className="text-[#0A66C2] text-[16px] font-semibold font-custom">
                  TrungTran
                </div>
              </a>
            )} */}

            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-[20px] bg-[#F2F2F2] border border-[#222] justify-center items-center gap-1 inline-flex hover:drop-shadow-xl cursor-pointer"
              >
                <img src={gitHub} alt="GitHub icon" />
                <div className="text-[#222] text-[16px] font-semibold font-custom">
                  trungbnk2000
                </div>
              </a>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
};
