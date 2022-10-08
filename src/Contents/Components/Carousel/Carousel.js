import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        <FaArrowLeft />
                    </button>
                }
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
                {
                    currentIndex < (Length - show) &&
                    <button onClick={next} className="right-arrow">
                        <FaArrowRight />
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel;