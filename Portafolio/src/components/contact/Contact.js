import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useLanguage } from '../../LanguageContext';

export default function Contact() {
    const form = useRef();
    const { data } = useLanguage();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_jjhdsi8', form.current, 'mzK3YInAAZbOhzMSG')
            .then(
                (result) => {
                    Swal.fire({
                        icon: 'success',
                        title: data['contact-success-title'],
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.current.reset(); 
                },
                (error) => {
                    console.error('Email send failed:', error);
                    Swal.fire({
                        icon: 'error',
                        title: data['contact-error-title'],
                        text: data['contact-error-text'],
                    });
                }
            );
    };

    return (
        <div className="bg-primary" id="contact">
            <div className="container mx-auto px-5 py-24">
                <div className="mb-12 flex w-full flex-col text-center">
                    <h1 className="text-white text-5xl font-bold mb-10">{data['tit-contact']}</h1>
                    <p className="mx-auto text-white text-base leading-relaxed lg:w-2/3">{data['tex-contact']}</p>
                </div>
                <form onSubmit={sendEmail} ref={form} className="mx-auto md:w-2/3 lg:w-1/2">
                    <div className="-m-2 flex flex-wrap">
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <input type="text" id="name" name="name" className="peer w-full rounded border border-secondary bg-primary bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder={data['form-name']} />
                                <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-primary peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary">{data['form-name']}</label>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <input type="email" id="email" name="email" className="peer w-full rounded border border-secondary bg-primary bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder={data['form-email']} />
                                <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-primary peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary">{data['form-email']}</label>
                            </div>
                        </div>
                        <div className="mt-4 w-full p-2">
                            <div className="relative">
                                <textarea id="message" name="message" className="peer w-full rounded border border-secondary bg-primary bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder={data['form-message']}></textarea>
                                <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-primary peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary">{data['form-message']}</label>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <button type="submit" className="mx-auto flex rounded border-0 bg-secondary py-2 px-8 text-lg text-white focus:outline-none">{data['form-send']}</button>
                        </div>
                    </div>
                </form>
                <div className="mt-8 w-full border-t border-secondary p-2 pt-8 text-center">
                    <a className="text-gray-200" href="mailto:rjquiros21@gmail.com">rjquiros21@gmail.com</a>
                    <p className="my-5 leading-normal text-gray-200">Rolando Quirós Artavia<br />San José, Costa Rica</p>
                </div>
            </div>
        </div>
    );
}
