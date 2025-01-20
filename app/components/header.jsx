import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hola Soy Johan Collao{" "}
                <Image src={assets.hand_icon} alt="" className="w-6" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[50px] font-Ovo">
                Ingeniero en Informática y desarrollador de software con sede en
                Santiago, Chile.
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo">

                Bienvenido a mi portafolio web 👋. Aquí encontrarás mis <strong>proyectos destacados</strong>,
                una copia actualizada de mi <strong>currículum</strong> y una forma sencilla de <strong>contactarme</strong> para nuevas oportunidades.
                


            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a
                    href="#contact"
                    className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
                >
                    Contáctame{" "}
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </a>

                <a
                    href="/sample-resume.pdf"
                    download
                    className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                >
                    Mi CV <Image src={assets.download_icon} alt="" className="w-4" />
                </a>
            </div>
        </div>
    );
};

export default Header;
