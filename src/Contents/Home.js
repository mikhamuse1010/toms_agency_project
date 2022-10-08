
const Home = () => {
    const className = {
        ContainerWbg: "w-screen h-screen bg-homeSectBg bg-contain bg-no-repeat bg-right flex justify-start items-center px-10",
        spacingContainer: "space-y-5 font-hindVadodara",
        title: "font-light text-7xl",
        titleLine1: "font-bold",
        titleLine3: "w-16 h-6 relative",
        titleLine3Underline: "w-full h-5 bg-yellow-400 absolute top-16 -z-20",
        button: "px-10 py-4 bg-dark-purple text-white rounded-xl font-medium",
    }

    return <div className={className.ContainerWbg}>
        <div className={className.spacingContainer}>
            <h1 className={className.title}>
                <span className={className.titleLine1}>We Help you</span> <br /> to grow your <br />
                <span className={className.titleLine3}>
                    Business
                    <div className={className.titleLine3Underline} />
                </span>
            </h1>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever <br /> since the 1500s, when an unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.
            </p>
            <button className={className.button}>
                Get Started
            </button>
        </div>
    </div>
}


export default Home;