import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Carousel.css';

const Carousel = (props) => {
    var { children, show } = props;

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const [currentIndex, setCurrentIndex] = useState(0);
    const [Length, setLength] = useState(children && children.length);

    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
        setLength(children && children.length);
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
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

    var carouselCountDisplay;


    if (show > 2) {
        if (windowSize.innerWidth <= 1100 && windowSize.innerWidth > 730) {
            show = 2;
            carouselCountDisplay = `show-${show}`;
        } else if (windowSize.innerWidth <= 730 && windowSize.innerWidth > 0) {
            show = 1;
            carouselCountDisplay = `show-${show}`;
        } else {
            carouselCountDisplay = `show-${show}`;
        }
    } else {
        if (windowSize.innerWidth <= 1100 && windowSize.innerWidth > 0) {
            show = 1;
            carouselCountDisplay = `show-${show}`;
        } else {
            carouselCountDisplay = `show-${show}`;
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={
                            `carousel-content ${carouselCountDisplay}`
                        }
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
            </div>

            <div className="carousel-button-container space-x-3">
                <button onClick={prev} className={
                    `left-arrow ${currentIndex > 0 && "border-black cursor-pointer"}`
                }>

                    <FaChevronLeft className={`text-[#bababa] 
                    ${currentIndex > 0 && "text-black"}`} />

                </button>

                <button onClick={next} className={
                    `right-arrow ${currentIndex < (Length - show) && "border-black cursor-pointer"}`
                }>

                    <FaChevronRight className={`text-[#bababa] ${currentIndex < (Length - show) && "text-black"}`} />

                </button>
            </div>
        </div>

    )
}

export default Carousel;

export function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}