import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
    }) {

    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className="overflow-hidden shadow-[0_0_7px_3px_rgba(0,0,0,0.2)] relative rounded-xl">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between sm:p-4">
                <button
                onClick={prev}
                className="p-1 rounded-full scale-75 sm:scale-100 shadow bg-gray/80 duration-200 cursor-pointer text-white hover:bg-gray"
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                onClick={next}
                className="p-1 rounded-full scale-75 sm:scale-100 shadow bg-gray/80 duration-200 cursor-pointer text-white hover:bg-gray"
                >
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className="absolute sm:bottom-4 bottom-2 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div
                    key={i}
                    className={`
                    transition-all w-2 h-2 sm:w-3 sm:h-3 rounded-full
                    ${curr === i ? "p-[7px] sm:p-2 bg-title" : "bg-opacity-50 bg-gray opacity-60"}
                    `}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}