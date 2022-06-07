import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {Slide1, Slide2, Slide3} from '../../../../Assets/index'

import "./Slideshow.css";


const Slideshow = () => {
    const sliderData = [
        {
            image: Slide1,
            heading: "Name",
            desc: "This is the description for the picture shown right here. it is a very nice picture",
        },
        {
            image: Slide2,
            heading: "Name",
            desc: "Description",
        },
        {
            image: Slide3,
            heading: "Name",
            desc: "Description",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 1000000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
        auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                return (
                <div
                    className={index === currentSlide ? "slide current" : "slide"}
                    key={index}
                >
                    {index === currentSlide && (
                    <div className="slide current center ">
                        <img src={slide.image} alt="slide" className="image " />
                        <div className="content">
                            <h2>{slide.heading}</h2>
                            <p>{slide.desc}</p>
                            
                            <button className="slide-button">Shop now</button>
                        </div>
                    </div>
                    )}
                </div>
                );
            })}
        </div>
    );
};

export default Slideshow;