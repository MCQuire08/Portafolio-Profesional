import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import SplineScene from './SplineScene';
import '../../styles/Banner.css'

export default function Banner() {
    const [text] = useTypewriter({
        words: ['Rolando Quiros', 'Software Developer', 'DevOps Engineer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div className="banner-container">
            <section className="relative flex flex-col sm:flex-row banner">
                <div className="w-full sm:w-1/2 relative right-0 top-0 spline-scene">
                    <SplineScene />
                </div>

                <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start div-banner">
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium text-white'>
                        I'm {' '}
                        <span className='text-secondary text-5xl sm:text-6xl md:text-7xl font-bold'>
                            {text}
                        </span>
                        <span className='text-white text-5xl sm:text-6xl md:text-7xl'>
                            <Cursor cursorStyle='|' />
                        </span>
                    </h1>
                </div>
            </section>
        </div>
    );
}
