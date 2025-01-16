import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduccion</h4>
            <h2 className=' text-center text-5xl font-Ovo'>About me</h2>
            
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>Con experiencia en desarrollo web, móvil y backend, estoy listo para colaborar en nuevos desafíos.
                    ¡Explora mi trabajo y hablemos!</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=>(
                            <li className='border-[0.5px] border-x-gray-400 rounded-xl p-6
                            cursor-pointer hover:bg-ligthHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                                <Image src={icon} alt={title}/>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'>Herramientas que uso</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>{toolsData.map((tool, index)=>(
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
                        cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>

                        </li>

                    ))}</ul>

                </div>
            </div>

        </div>
    )
}

export default About