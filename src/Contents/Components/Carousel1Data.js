import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobile, TbRocket, TbWorld } from "react-icons/tb";

const Carousel1Data = [
    {
        Icons: <TbWorld className="h-6 w-6" />,
        iconsBG: "bg-[#FFDED4]",
        title: "Website Design",
        subtitle: "Designing a website with organic process based on the company's image and content.",
    },

    {
        Icons: <FaLaptopCode className="h-6 w-6" />,
        iconsBG: "bg-[#FFEED4]",
        title: "Web Development",
        subtitle: "We know how to develop with futureproof components, endless customizability, and easy content.",
    },

    {
        Icons: <TbDeviceMobile className="h-6 w-6" />,
        iconsBG: "bg-[#D4F0FF]",
        title: "Mobile App Development",
        subtitle: "We know how to develop mobile apps with stable apps and multiple platform.",
    },

    {
        Icons: <TbRocket className="h-6 w-6" />,
        iconsBG: "bg-[#FFD4D4]",
        title: "Digital Marketing",
        subtitle: "Paid media, SEO, email and conversion rate optimization to drive leads, pipeline, and revenue.",
    },

]

export default Carousel1Data;