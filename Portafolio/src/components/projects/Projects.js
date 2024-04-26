import Moka from '../../assets/Proyecto-Moka.jpg'
import POO from '../../assets/Proyecto-POO.jpg'
import EventWizz from '../../assets/Proyecto-EventWizz.jpg'
import Cursos from '../../assets/Proyecto-Cursos.jpg'
import Billing from '../../assets/facturacion.webp'
import Componentes from '../../assets/Proyecto-Componentes.jpg'
import { useLanguage } from '../../LanguageContext'
import '../../styles/Projects.css'

export default function Projects() {
    const { data } = useLanguage();
    return (
        <div className="bg-primary" id='projects'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 className="text-white text-5xl font-bold ">{data['tit-projects']}</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4 transform transition-transform hover:scale-110 relative cursor-pointer">
                            <a href="https://github.com/MCQuire08/ProyectoIngSoftware1.git" target="_blank" rel="noopener noreferrer">
                                <div className="flex relative h-64">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Moka} />
                                    <div class="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-80">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-white mb-1">{data['card1-tit']}</h2>
                                        <p class="leading-relaxed text-white">{data['card1-tex']}</p>
                                        <div class="flex mt-24">
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-orange-500 rounded">HTML 5</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-500 rounded ml-2">CSS3</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-500 rounded ml-2">Node JS</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-yellow-300 rounded ml-2">Javascript</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div class="lg:w-1/3 sm:w-1/2 p-4 transform transition-transform hover:scale-110 cursor-pointer">
                            <a href="https://github.com/MCQuire08/Proy-Programacion-Orientada-Objetos.git" target="_blank" rel="noopener noreferrer">
                                <div class="flex relative h-64">
                                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={POO} />
                                    <div class="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-80">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-white mb-1">{data['card2-tit']}</h2>
                                        <p class="leading-relaxed text-white">{data['card2-tex']}</p>
                                        <div class="flex mt-24">
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-700 rounded">Java</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-800 rounded ml-2">Java FX</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="lg:w-1/3 sm:w-1/2 p-4 transform transition-transform hover:scale-110 cursor-pointer">
                            <a href="https://github.com/MCQuire08/Proy-Ingenieria-Sofware-2.git" target="_blank" rel="noopener noreferrer">
                                <div class="flex relative h-64">
                                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={EventWizz} />
                                    <div class="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-80">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-white mb-1">{data['card3-tit']}</h2>
                                        <p class="leading-relaxed text-white">{data['card3-tex']}</p>
                                        <div class="flex mt-24">
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-700 rounded">ASP.NET</span>
                                            7<span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-700 rounded ml-2">API Restfull</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 transform transition-transform hover:scale-110 cursor-pointer hidden-project">
                            <a href="https://bitbucket.org/rquiros-cenfotec/workspace/projects/DDC" target="_blank" rel="noopener noreferrer">
                                <div class="flex relative h-64">
                                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Componentes} />
                                    <div class="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-80">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-white mb-1">{data['card4-tit']}</h2>
                                        <p class="leading-relaxed text-white">{data['card4-tex']}</p>
                                        <div class="flex mt-16">
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-700 rounded">React JS</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-cyan-800 rounded ml-2">Tailwind Css</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-500 rounded ml-2">Spring Boot</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-orange-500 rounded ml-2">AWS Lambda</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-500 rounded ml-2">Microservicios</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4 transform transition-transform hover:scale-110 cursor-pointer">
                            <a href="https://github.com/MCQuire08/SistemaGestionCursos.git" target="_blank" rel="noopener noreferrer">
                                <div class="flex relative h-64">
                                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Cursos} />
                                    <div class="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-80">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-white mb-1">{data['card5-tit']}</h2>
                                        <p class="leading-relaxed text-white">{data['card5-tex']}</p>
                                        <div class="flex mt-24">
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-700 rounded">Angular</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-cyan-800 rounded ml-2">Tailwind Css</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-500 rounded ml-2">Node JS</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4 transform transition-transform hover:scale-110 cursor-pointer">
                            <a href="https://bitbucket.org/rquiros-cenfotec/workspace/projects/BP" target="_blank" rel="noopener noreferrer">
                                <div class="flex relative h-64">
                                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Billing} />
                                    <div class="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-80">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-white mb-1">{data['card6-tit']}</h2>
                                        <p class="leading-relaxed text-white">{data['card6-tex']}</p>
                                        <div class="flex mt-24">
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-700 rounded">React JS</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-cyan-800 rounded ml-2">Tailwind Css</span>
                                            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-500 rounded ml-2">.Net</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}