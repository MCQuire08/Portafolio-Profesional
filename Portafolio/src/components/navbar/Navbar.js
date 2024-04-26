import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Logo from '../../assets/LogoSinFondo.png';
import { useLanguage } from '../../LanguageContext';
import iconEnglish from '../../assets/united-states.png';
import iconSpanish from '../../assets/spain.png';

export default function Navbar({ scrollToTop, setActiveSection }) {
    const { data, toggleLanguage } = useLanguage();
    const [isChecked, setIsChecked] = useState(false);

    const handleScroll = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleChangeLanguage = () => {
        toggleLanguage();
        setIsChecked(prevState => !prevState);
    };

    return (
        <div id="navbar" className="fixed top-0 left-0 right-0 z-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="relative py-6">
                    <nav className="flex items-center justify-between" aria-label="Global">
                        <div className="flex items-center">
                            <a href="#" onClick={scrollToTop}>
                                <span className="sr-only"></span>
                                <span className='text-secondary font-bold text-2xl'>R<span className='text-white font-bold text-2xl'>Q</span></span>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-10">
                            <button onClick={() => handleScroll('about')} className="text-base font-normal text-gray-300 hover:text-secondary">{data['nav-about']}</button>
                            <button onClick={() => handleScroll('projects')} className="text-base font-normal text-gray-300 hover:text-secondary">{data['nav-projects']}</button>
                            <button onClick={() => handleScroll('skills')} className="text-base font-normal text-gray-300 hover:text-secondary">{data['nav-skills']}</button>
                            <button onClick={() => handleScroll('contact')} className="text-base font-normal text-gray-300 hover:text-secondary">{data['nav-contact']}</button>
                        </div>
                        <div className="flex items-center">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only"
                                    onChange={handleChangeLanguage}
                                    checked={isChecked}
                                />
                                <div className="flex items-center">
                                    <img src={isChecked ? iconEnglish : iconSpanish} alt={isChecked ? 'English' : 'Español'} className="w-6 h-6 mr-2" />
                                    <span className="text-sm font-medium text-white dark:text-gray-300">{isChecked ? 'English' : 'Español'}</span>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
