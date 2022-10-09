import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Carousel.css';

const Carousel = (props) => {
    const { children, show } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [Length, setLength] = useState(children && children.length);

    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
        setLength(children && children.length);
    }, [children]);

    const next = () => {
        if (currentIndex < (Length - show)) {
            setCurrentIndex(prefState => prefState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prefState => prefState - 1);
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper pl-10">
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
            </div>

            <div className="w-full h-fit px-10 flex space-x-3 mt-10">
                <button onClick={prev} className={`left-arrow ${currentIndex > 0 && "border-black cursor-pointer"}`}>
                    <FaChevronLeft className={`text-[#bababa] ${currentIndex > 0 && "text-black"}`} />
                </button>
                <button onClick={next} className={`right-arrow ${currentIndex < (Length - show) && "border-black cursor-pointer"}`}>
                    <FaChevronRight className={`text-[#bababa] ${currentIndex < (Length - show) && "text-black"}`} />
                </button>
            </div>
        </div>

    )
}

export default Carousel;