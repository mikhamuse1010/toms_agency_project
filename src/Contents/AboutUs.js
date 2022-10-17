import graphicBorderedImg from "../Attachments/Images/AboutUs.png";

const AboutUs = () => {
  const className = {
    container:
      "w-screen h-auto xl:h-screen grid grid-cols-1 place-items-center xl:grid-cols-2 gap-10",
    innerContainer:
      "h-full w-full grid place-items-center font-hindVadodara text-center xl:text-left",
    spacingContainer: "space-y-5",
    image: "w-[500px] xl:w-auto",
    title: " text-4xl xl:text-5xl",
    titleLine2: "w-14 h-6 relative",
    titleLine2Underline:
      "w-3/4 inset-x-0 absolute left-5 top-9 xl:top-[49px] h-2 xl:h-3 bg-yellow-400 -z-[1]",
    description: "w-[400px] xl:w-[480px] text-sm xl:text-base",
    buttonContainer: "py-10",
    button: "px-10 py-4 bg-dark-purple text-white rounded-xl font-medium",
  };

  return (
    <div id="AboutUs" className={className.container}>
      <img
        src={graphicBorderedImg}
        alt="an Img with Graphics Bordered"
        className={className.image}
      />
      <div className={className.innerContainer}>
        <div className={className.spacingContainer}>
          <h1 className={className.title}>
            <strong>About Us</strong> <br />
            Toms{" "}
            <span className={className.titleLine2}>
              Agency
              <div className={className.titleLine2Underline} />
            </span>
          </h1>
          <p className={className.description}>
            Toms Agency is not your typical full-service digital marketing
            agency. We drive business outcomes for our clients with a method
            called Revenue-Driven Optimization (RDO). Our data-first approach
            combines platform automation with captivating creative work to
            optimize towards profitable revenue, not just leads or sales.
          </p>
          <div className={className.buttonContainer}>
            <a className={className.button} href="#Testimonial">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
