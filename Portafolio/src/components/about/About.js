import '../../styles/About.css'
import CV_ESP from "../../assets/CV_ESP.pdf";
import CV_ENG from "../../assets/CV_ENG.pdf";
import React from 'react';
import Image from "../../assets/FotoPresentacionDevOps.jpg";
import { useLanguage } from '../../LanguageContext';

export default function About() {
    const { data } = useLanguage();

    const downloadCV = (cv) => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'CV.pdf';
        link.click();
    }

    return (
        <div className="bg-primarySecond" id="about">
            <section className="flex">
                <div className="w-1/2 flex flex-col items-left justify-center text-white pl-10 about-content">
                    <h1 className="text-white text-5xl font-bold pb-10 ml-20">{data['tit-about']}</h1>
                    <p className="ml-20 text-base">{data['tex-about']}</p>
                    <div className='cv-buttons'> 
                        <button onClick={() => downloadCV(CV_ESP)} className="ml-20 mt-10 bg-secondary w-28 rounded-2xl h-10 font-bold transform transition-transform hover:scale-110">CV - ESP</button>
                        <button onClick={() => downloadCV(CV_ENG)} className="ml-20 mt-10 bg-secondary w-28 rounded-2xl h-10 font-bold transform transition-transform hover:scale-110">CV - ENG</button>
                    </div>
                </div>
                <div className="hidden md:flex md:w-1/2 items-center justify-center hidden-mobile">
                    <img src={Image} className="rounded-3xl" style={{ maxWidth: '75%', maxHeight: '75%', width: 'auto', height: 'auto' }} alt={data['tit-about']} />
                </div>
            </section>
        </div>
    )
}