import React  from 'react';

const Home = () => {
  const className = {
    ContainerWbg:
      "w-screen h-screen bg-homeSectBg bg-contain bg-no-repeat bg-right flex justify-start items-center px-10",
    spacingContainer: "space-y-5 font-hindVadodara",
    title: "font-light text-5xl lg:text-7xl",
    titleLine1: "font-bold",
    titleLine3: "w-16 h-6 relative",
    titleLine3Underline:
      "w-full h-4 bg-yellow-400 absolute top-12 lg:top-16 -z-20",
    description: "text-sm lg:text-base",
    buttonContainer: "py-5",
    button: "px-10 py-4 bg-dark-purple text-white rounded-xl font-medium",
  };

  return (
    <div className={className.ContainerWbg}>
      <div className={className.spacingContainer}>
        <h1 className={className.title}>
          <span className={className.titleLine1}>We Help you</span> <br /> to
          grow your <br />
          <span className={className.titleLine3}>
            Business
            <div className={className.titleLine3Underline} />
          </span>
        </h1>
        <p className={className.description}>
          Lorem Ipsum has been the industry's standard dummy text ever <br />{" "}
          since the 1500s, when an unknown printer took a galley of type and{" "}
          <br /> scrambled it to make a type specimen book.
        </p>
        <div className={className.buttonContainer}>
          <a href="#Services" className={className.button}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
