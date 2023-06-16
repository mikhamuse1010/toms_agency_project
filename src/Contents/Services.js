import WwdImage from "../Attachments/Images/WWDsect.png";
import Carousel from "./Components/Carousel/Carousel";
import Carousel1Data from "./Components/CarouselData/Carousel1Data";
import AOS from "aos";
import { useEffect } from "react";

const WWD = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const className = {
    container: "w-screen h-screen py-20 relative overflow-hidden",
    image: "w-full h-full -z-20 absolute top-0 inset-x-0 object-contain",
    innerContainer: "h-screen space-y-10",
    titleContainer: "w-full h-fit text-center font-hindVadodara",
    title: "text-4xl z-20",
    titleLine1: "font-bold",
    titleLine3: "w-16 h-6 relative",
    titleLine3Underline:
      "w-full h-2 bg-yellow-400 absolute top-9 inset-x-0 -z-10",
    cardOuterContainer: "flex justify-center",
    cardContainer: "w-80 h-56 rounded-xl p-5 bg-white shadow-lg space-y-4",
    cardIconContainer: "h-12 w-12 p-3 rounded-xl",
    cardDetailsContainer: "space-y-2 font-hindVadodara",
    cardTitle: "font-bold text-xl",
  };

  return (
    <div className={className.container}>
      <img
        src={WwdImage}
        className={className.image}
        alt="a graphic with a lot of elements"
      />
      <div className={className.innerContainer}>
        <div className={className.titleContainer}>
          <h1 id="Services" className={className.title}>
            <span className={className.titleLine1}>What We Do </span>
            <br /> For Your{" "}
            <span className={className.titleLine3}>
              Business <div className={className.titleLine3Underline} />
            </span>
          </h1>
        </div>

        <Carousel show={3}>
          {Carousel1Data.map((data, index) => {
            return (
              <div
                data-aos="fade-down"
                className={className.cardOuterContainer}
                key={index}
              >
                <div className={className.cardContainer}>
                  <div
                    className={`${data.iconsBG} ${className.cardIconContainer}`}
                  >
                    {data.Icons}
                  </div>
                  <div className={className.cardDetailsContainer}>
                    <h1 className={className.cardTitle}>{data.title}</h1>
                    <p>{data.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default WWD;
