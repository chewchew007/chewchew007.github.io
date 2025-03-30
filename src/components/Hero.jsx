import React from "react";
import { motion } from "motion/react";
import Music from "./Music";
import { Carousel } from "@material-tailwind/react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
const images = [
    {
        src: "/picture/HBD1.jpg",
        alt: "Image 1",
    },
    {
        src: "/picture/HBD2.jpg",
        alt: "Image 2",
    },
    {
        src: "/picture/HBD3.jpg",
        alt: "Image 3",
    },
    {
        src: "/picture/HBD4.jpg",
        alt: "Image 4",
    },
    {
        src: "/picture/HBD5.jpg",
        alt: "Image 5",      
    },
    {
        src: "/picture/HBD6.jpg",
        alt: "Image 6"
    },
    {
        src: "/picture/HBD7.jpg",
        alt: "Image 7"
    },
];

function Hero() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div className="text-center p-2">
                <div className="text-center bg-white rounded-xl shadow-xl mt-5 mx-3 lg:mx-20">
                    <div className="rounded-full bg-pink-100 inline-flex items-center justify-center w-28 h-28 mt-5">
                        <p className="text-5xl">🎂</p>
                    </div>
                    <div className="p-10">
                        <h1 className="text-5xl md:text-5xl font-semibold text-blue-400">
                            Happy Birthday
                        </h1>
                        <p
                            variant="gradient"
                            className="text-3xl md:text-4xl font-semibold text-pink-200 hover:text-pink-400 duration-300 "
                        >
                            PEACH & PEAR 🎉
                        </p>
                    </div>
                    <Music />             
                   
                    <div className="flex items-center justify-center w-full p-10 h-[700px] md:h-[800px]">
                        <Carousel className="rounded-xl w-full max-w-4xl">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover"
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Hero;
