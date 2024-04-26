import React from 'react';
import imageAngular from '../../assets/skills/Angular.png';
import imageReact from '../../assets/skills/React-icon.png';
import imageJavascript from '../../assets/skills/Javascript.png';
import imageTailwind from '../../assets/skills/tailwind.png';

import imageJava from '../../assets/skills/Java-Logo.png';
import imageNet from '../../assets/skills/Net.png';
import imageNodeJs from '../../assets/skills/Nodejs.png';
import imageSpring from '../../assets/skills/spring-boot-logo.png';
import { useLanguage } from '../../LanguageContext';

export default function Skills() {
    const { data } = useLanguage();
    return (
        <div className="bg-primarySecond p-10" id="skills">
            <h1 className="text-white text-5xl font-bold mb-10 ml-20">{data['tit-skills']}</h1>
            <h2 className="text-white text-2xl font-bold mb-5 ml-20">Frontend</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex justify-center">
                            <img className="w-full h-auto" src={imageAngular} alt="Angular Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">Angular</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex justify-center">
                            <img className="w-full pt-4" src={imageReact} alt="React Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">React</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex justify-center">
                            <img className="w-full h-auto" src={imageJavascript} alt="Javascript Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">Javascript</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex justify-center">
                            <img className="w-full pt-12" src={imageTailwind} alt="Tailwind CSS Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">Tailwind CSS</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-white text-2xl font-bold mb-5 ml-20 mt-10">Backend</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex justify-center">
                            <img className="w-full pt-12" src={imageJava} alt="Java Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">Java</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex justify-center">
                            <img className="w-full h-auto" src={imageNet} alt=".Net Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">.Net</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex justify-center">
                            <img className="w-full pt-12" src={imageNodeJs} alt="Node.js Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">Node JS</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-44 mx-auto bg-primary rounded-2xl">
                    <div className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-between h-full">
                        <div className="flex ">
                            <img className="w-full pt-12" src={imageSpring} alt="Spring Boot Logo"/>
                        </div>
                        <div className="bg-primary p-4">
                            <p className="mt-2 font-semibold text-lg text-white text-center">Spring Boot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
