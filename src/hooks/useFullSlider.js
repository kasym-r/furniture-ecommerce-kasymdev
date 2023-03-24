import React, {useState, useEffect} from 'react';

const useFullSlider = (slides=[], autoplayDuration = 3000) => {
      const [activeSlide, setActiveSlide] = useState(1);
            const next =()=>{
                activeSlide === (slides.length - 1) ? setActiveSlide(0) : setActiveSlide(activeSlide + 1)
            }
            const prev =()=>{
                activeSlide === 0 ? setActiveSlide(slides.length - 1) : setActiveSlide(activeSlide - 1)
            }
            const jump=(slide)=>{
                setActiveSlide(slide)
            }
       useEffect(() => {
           let slider = setInterval(() => {
                next();
           }, autoplayDuration);
           return ()=>{
            clearInterval(slider);
           }
       }, [activeSlide]);
    return {next, prev, jump, activeSlide}
};

export default useFullSlider;
