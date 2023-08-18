import { useEffect, useState } from 'react'
import "../styles/slider.css"

export const Slider = ({imagesSlider, controls = false, autoplay = true}) => {
    const [indexSlider, setIndexSlider] = useState(0);

    useEffect(() => {
        if(autoplay || !controls){
            const loopSlider = setInterval(() => {
                if(imagesSlider.length - 1 > indexSlider){
                    setIndexSlider(indexSlider + 1);
                }else {
                    setIndexSlider(0);
                }
            }, 2000);
            return () => clearInterval(loopSlider)
        }
    }, [indexSlider, autoplay, controls]);

    const previousSlider = () => {
        if(indexSlider === 0){
            console.log()
            setIndexSlider(imagesSlider.length - 1);
        }else{
            setIndexSlider(indexSlider - 1);
        }
    }

    const nextSlider = () => {
        if(indexSlider === imagesSlider.length - 1){
            setIndexSlider(0);
        }else{
            setIndexSlider(indexSlider + 1);
        }
    }

    return (
        <>
        <div className="slider-home container">
            <div className="container-slider">
                <img src={`${imagesSlider[indexSlider].image}`} alt={imagesSlider.alt || "imagen"} />
            </div>
            {controls && (
                <div className="controls-slider">
                    <button className='previous-slider' onClick={previousSlider}>👈</button>
                    <button className='next-slider' onClick={nextSlider}>👉</button>
                </div>
            )}
        </div>
        </>
    )
}