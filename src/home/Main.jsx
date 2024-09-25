import location from '../assets/svgs/location.svg'
import darkLocation from '../assets/svgs/dark-location.svg'
import mail from '../assets/svgs/mail.svg'
import darkMail from '../assets/svgs/dark-mail.svg'
import global from '../assets/svgs/global.svg'
import linkedIn from '../assets/svgs/linkedIn.svg'
import gitHub from '../assets/svgs/gitHub.svg'
import figma from '../assets/svgs/figma.svg'
import date from '../assets/svgs/date.svg'
import stars from '../assets/svgs/stars.svg'
import darkStars from '../assets/svgs/dark-stars.svg'
import link from '../assets/svgs/link.svg'
import darkLink from '../assets/svgs/dark-link.svg'
import { useEffect, useState } from 'react'

export const Main = () => {
    const htmlElement = document.documentElement
    const [toggleDarkmode, setToggleDarkmode] = useState(localStorage.getItem('theme') === 'dark' ? true : false)

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            htmlElement.classList.add('dark')
        }
    }, [])

    useEffect(() => {
        if (toggleDarkmode) {
            htmlElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        else {
            htmlElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [toggleDarkmode])

    return (
        <>
            <div className="absolute top-3 right-3">
                <label class="relative inline-flex cursor-pointer items-center">
                    <input defaultChecked={localStorage.getItem('theme') === 'dark' ? true : false} value={toggleDarkmode} onChange={(e) => setToggleDarkmode(e.target.checked)} id="switch" type="checkbox" class="peer sr-only" />
                    <label for="switch" class="hidden"></label>
                    <div class="peer h-6 w-11 rounded-full border bg-slate-200 dark:border-none after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                </label>
            </div>
            <div className="bg-cover bg-[url('./assets/images/header-bg.png')] dark:bg-[url('./assets/images/dark-header-bg.png')] ease-in-out duration-500 min-h-[600px] flex flex-col justify-center items-center text-center">
                <section title="CV-Title">
                    <div class="text-slate-700 text-[50px] sm:text-[60px] md:text-[80px] dark:text-slate-200 font-custom font-bold">Trung Tran</div>
                    <div class="text-slate-500 text-[20px] sm:text-[30px] dark:text-slate-200 font-medium font-custom">Front-End Developer · React Developer</div>
                </section>
                <section title="Brief-Information">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
                        <div class="text-slate-700 dark:text-slate-200 md:text-[20px] font-normal font-custom leading-[20px] inline-flex gap-1 items-center">
                            <img src={toggleDarkmode ? darkLocation : location} />
                            Hanoi</div>
                        <div class="text-slate-700 dark:text-slate-200 md:text-[20px] font-normal font-custom inline-flex gap-1 items-center">
                            <img src={toggleDarkmode ? darkMail : mail} />
                            trungtran13900@gmail.com</div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 gap-4">
                            <div class="px-2 py-1 bg-violet-50 rounded-[20px] border border-violet-600 justify-center items-center gap-1 inline-flex hover:drop-shadow-xl cursor-pointer">
                                <img src={global} />
                                <div class="text-violet-600 text-[16px] font-semibold font-custom">bnk.dev</div>
                            </div>
                            <div class="px-2 py-1 bg-violet-50 rounded-[20px] border border-violet-600 justify-center items-center gap-1 inline-flex hover:drop-shadow-xl cursor-pointer">
                                <img src={linkedIn} />
                                <div class="text-[#0A66C2] text-[16px] font-semibold font-custom">TrungTran</div>
                            </div>
                            <div class="px-2 py-1  rounded-[20px] bg-[#F2F2F2] border border-[#222] justify-center items-center gap-1 inline-flex hover:drop-shadow-xl cursor-pointer">
                                <img src={gitHub} />
                                <div class="text-[#222] text-[16px] font-semibold font-custom">trungbnk2000</div>
                            </div>
                            <div class="px-2 py-1 bg-[#FFF4F1] rounded-[20px] border border-[#F24E1E] justify-center items-center gap-1 inline-flex hover:drop-shadow-xl cursor-pointer">
                                <img src={figma} />
                                <div class="text-[#F24E1E] text-[16px] font-semibold font-custom">trungbnk2000</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="dark:bg-[#0F172A] ease-in-out duration-500">
                <div className="container py-20 m-auto">
                    <div className="grids-col-1">
                        <div className="flex border-b border-[#E2E8F0] flex-col gap-3 sm:gap-0 sm:flex-row px-2 sm:px-0 pb-10">
                            <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
                                Education
                            </div>
                            <div className="flex-1 flex flex-row justify-between items-center">
                                <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>Bachelor Degree <span class="text-slate-700 text-[20px] font-normal font-custom dark:text-slate-200">  — Posts and Telecommunications Institute of Technology</span></span>
                                <span className='text-title font-light text-[16px] font-custom flex-row flex gap-2 dark:text-slate-200'><img src={date} />2018 - 2022</span>
                            </div>
                        </div>
                        <div className="flex border-b border-[#E2E8F0] flex-col sm:flex-row gap-3 sm:gap-0 px-2 sm:px-0 py-10">
                            <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
                                Experience
                            </div>
                            <div className="flex-1 flex flex-col gap-6">
                                {/* <section title='Femicam'>
                                    <div className="flex flex-row justify-between items-center">
                                        <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>Femicam 1928.id <span class="text-slate-700 text-[20px] font-normal font-custom dark:text-slate-200">  — Front-End Developer</span></span>
                                        <span className='text-title font-light text-[16px] font-custom flex-row flex gap-2 dark:text-slate-200'><img src={date} />Mar 2022 - present</span>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-2">
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Material UI</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Electron</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>React</span>
                                    </div>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px] "></div> Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div> Designing and creating React components for the application dashboard</span>
                                </section> */}

                                <section title='Ciptaloka'>
                                    <div className="flex flex-row justify-between items-center">
                                        <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>TANDAN.JSC <span class="text-slate-700 text-[20px] font-normal font-custom dark:text-slate-200">  — Front-End Developer</span></span>
                                        <span className='text-title font-light text-[16px] font-custom flex-row flex gap-2 dark:text-slate-200'><img src={date} />Sep 2022 - Present</span>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-2">
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1] ease-in-out duration-500'>ReactJs</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1] ease-in-out duration-500'>ReactNative</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1] ease-in-out duration-500'>CSS/SCSS</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1] ease-in-out duration-500'>TailwindCSS</span>
                                    </div>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div> Created main site navigation (mega-menu, mobile drawer) using Tailwind CSS</span>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div> Revamped shopping cart & checkout pages (~18 pages in total)</span>
                                </section>

                                <section title='Ciptaloka2'>
                                    <div className="flex flex-row justify-between items-center">
                                        <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>TANDAN.JSC <span class="text-slate-700 text-[20px] font-normal font-custom dark:text-slate-200">  — Intern Software Developer</span></span>
                                        <span className='text-title font-light text-[16px] font-custom flex-row flex gap-2 dark:text-slate-200'><img src={date} />2021 - 2022</span>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-2">
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>C#</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>.NET</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>C# Winform</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>HTML</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>CSS</span>
                                    </div>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div> Redesigned the website's front page from vanilla CSS to use Foundation 6</span>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div> Developed interactive UI on mobile editor using Framework7, Backbone.js, and Marionette.js</span>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div> Created e-mail marketing design templates using Foundation for E-mails</span>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'><div className="flex-none rounded-[4px] bg-[#CBD5E1] h-[14px] w-[14px]"></div> Customized the blog.ciptaloka.com WordPress theme to match the looks and feels of the main site</span>
                                </section>
                            </div>
                        </div>
                        <div className="flex border-b border-[#E2E8F0] flex-col sm:flex-row gap-3 sm:gap-0 px-2 sm:px-0 py-10">
                            <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
                                Featured Project
                            </div>
                            <div className="flex-1 flex flex-col gap-6">
                                <section title='SPKJS'>
                                    <div className="flex flex-row justify-between items-center">
                                        <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>Codemath.vn</span>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-2 flex-wrap">
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>React</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Chakra UI</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Express</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>MongoDB</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Redis</span>
                                    </div>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur ab illum, officia necessitatibus omnis sapiente sit, dignissimos corrupti in enim. Velit, fugit explicabo? Perferendis nemo aliquid similique amet nisi!</span>
                                    <br />
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'> <img src={toggleDarkmode ? darkStars : stars} /> see all of my projects on my portfolio: <img src={toggleDarkmode ? darkLink : link} /><a className='italic cursor-pointer underline hover:text-blue-400'>bnk.dev/projects</a> </span>
                                </section>
                                <section title='SPKJS'>
                                    <div className="flex flex-row justify-between items-center">
                                        <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>Tiengtrunggioi.vn</span>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-2 flex-wrap">
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>React</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Chakra UI</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Express</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>MongoDB</span>
                                        <span className='rounded-[5px] p-1 px-2 bg-[#F1F5F9] text-[#64748B] dark:bg-[#334155] dark:text-[#CBD5E1]'>Redis</span>
                                    </div>
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur ab illum, officia necessitatibus omnis sapiente sit, dignissimos corrupti in enim. Velit, fugit explicabo? Perferendis nemo aliquid similique amet nisi!</span>
                                    <br />
                                    <span className='flex-row flex gap-2 items-center text-title font-normal font-custom text-[18px] dark:text-slate-200'> <img src={toggleDarkmode ? darkStars : stars} /> see all of my projects on my portfolio: <img src={toggleDarkmode ? darkLink : link} /><a className='italic cursor-pointer underline hover:text-blue-400'>bnk.dev/projects</a> </span>
                                </section>
                            </div>

                        </div>
                        <div className="flex border-b border-[#E2E8F0] flex-col sm:flex-row gap-3 sm:gap-0 px-2 sm:px-0 py-10">
                            <div className="flex-none w-full sm:w-1/4 text-title font-bold text-[30px] sm:text-[20px] font-custom dark:text-slate-200">
                                Skills & Tools
                            </div>
                            <div className="flex-1 flex flex-col gap-6">
                                <section title='Indicators'>
                                    <div className="flex">
                                        <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                            Underline indicators
                                        </div>
                                        <div className="flex-1 flex flex-row gap-2">
                                            <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                <span className='m-2'>Frequently Used</span>
                                            </span>
                                            <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                <span className='m-2'>Occasionally</span>
                                            </span>
                                        </div>
                                    </div>
                                </section>
                                <section title='Languages'>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <div className="flex-none w-1/4">
                                                <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>Languages</span>
                                            </div>
                                            <div className="flex-1"></div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                                FE related
                                            </div>
                                            <div className="flex-1 flex flex-row gap-2">
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>HTML</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>CSS/SCSS</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>JavaScript</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                                BE related
                                            </div>
                                            <div className="flex-1 flex flex-row gap-2">
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/2 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>C#</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/2 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>SQL</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Java</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section title='Languages'>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex">
                                            <div className="flex-none w-1/4">
                                                <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>Technologies</span>
                                            </div>
                                            <div className="flex-1"></div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                                UI related
                                            </div>
                                            <div className="flex-1 flex flex-row gap-2 flex-wrap">
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Tailwind CSS</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Material UI</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Bootstrap</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                                FE related
                                            </div>
                                            <div className="flex-1 flex flex-row gap-2 flex-wrap">
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/2 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>React</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/2 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Next.js</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Redux</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Framer Motion</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Webpack</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>WordPress</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Gulp</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Framework 7</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Marionette.js</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/3 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Backbone.js</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                                BE related
                                            </div>
                                            <div className="flex-1 flex flex-row gap-2 flex-wrap">
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Express</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Redis</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>MongoDB</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section title='Languages'>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <div className="flex-none w-1/4">
                                                <span className='text-title font-bold text-[20px] font-custom dark:text-slate-200'>Tools & Softwares</span>
                                            </div>
                                            <div className="flex-1"></div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                                Coder related
                                            </div>
                                            <div className="flex-1 flex flex-row gap-2">
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>VS Code</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Node.js</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-full h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Git</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-none w-1/4 font-custom text-[#64748B] dark:text-slate-200">
                                                Designer related
                                            </div>
                                            <div className="flex-1 flex flex-row gap-2">
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/2 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Figma</span>
                                                </span>
                                                <span className='relative bg-slate-100 rounded-[8px] text-slate-500 text-[18px] font-medium font-custom h-[35px] overflow-hidden dark:bg-[#334155] dark:text-[#CBD5E1]'>
                                                    <div class="absolute bottom-0 w-1/2 h-[5px] bg-slate-500/25 rounded-[10px] dark:bg-slate-500/70"></div>
                                                    <span className='m-2'>Adobe Photoshop</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
