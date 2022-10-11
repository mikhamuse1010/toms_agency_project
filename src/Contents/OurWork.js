import { useEffect } from 'react';
import AOS from 'aos';
import background from '../Attachments/Images/OurWorks.png';
import Carousel from './Components/Carousel/Carousel';
import Carousel2Data from './Components/CarouselData/Carousel2Data';

const OurWork = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);


    const className = {
        container: "w-screen h-auto lg:h-screen relative overflow-hidden py-14 px-6",
        image: "w-auto h-full right-0 absolute top-0 -z-20",
        innerContainer: "h-screen space-y-10",
        titleContainer: "w-full h-fit flex-col space-y-4 text-center lg:flex-row lg:text-start lg:flex lg:justify-between font-hindVadodara",
        title: "text-4xl z-20",
        titleLine1: "font-bold",
        titleLine3: "w-16 h-6 relative",
        titleLine3Underline: "w-full h-2 bg-yellow-400 absolute top-9 inset-x-0 -z-10",
        description: "w-auto lg:w-[500px]",
        cardOuterContainer: "flex justify-center",
        cardContainer: "w-fit h-fit rounded-xl p-5 bg-white shadow-lg space-y-4",
        cardImagesContainer: "flex space-x-5",
        cardDesktopImage: "h-60 w-72",
        cardMobileImage: "h-60 w-24",
        cardContentsContainer: "w-full flex justify-between",
        cardTitle: "font-bold text-xl",
        cardButton: "w-24 h-7 text-sm border border-black rounded-xl",
    }

    return (
        <div className={className.container}>
            <img src={background} className={className.image} alt="a graphicated background" />
            <div className={className.innerContainer}>
                <div className={className.titleContainer}>
                    <h1 className={className.title}>
                        <span className={className.titleLine1}>Our Recent Work </span><br /> By Our <span className={className.titleLine3}>Experts <div className={className.titleLine3Underline} /></span>
                    </h1>
                    <p className={className.description}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <Carousel show={2}>
                    {
                        Carousel2Data.map((data, index) => {
                            return (
                                <div key={index} data-aos="fade" className={className.cardOuterContainer}>
                                    <div className={className.cardContainer}>
                                        <div className={className.cardImagesContainer}>
                                            <img className={className.cardDesktopImage} src={data.desktopImage} alt="Desktop design example" />
                                            <img className={className.cardMobileImage} src={data.mobileImage} alt="Mobile design example" />
                                        </div>
                                        <div className={className.cardContentsContainer}>
                                            <h1 className={className.cardTitle}>
                                                {data.title}
                                            </h1>
                                            <button href="#" className={className.cardButton}>
                                                View Work
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default OurWork;