import { Slider } from "../components/Slider.jsx"

const images = [
    {
        image: "./src/assets/img/hero.jpg",
        alt: "una imagen 1"
    },
    {
        image: "./src/assets/img/hero2.jpg",
        alt: "una imagen 2"
    },
    {
        image: "./src/assets/img/hero3.jpg",
        alt: "una imagen 3"
    }
]

export const HomeScreen = () => {
    return (
        <>
        <Slider imagesSlider={images} controls={true} autoplay={true} />
        </>
    )
}