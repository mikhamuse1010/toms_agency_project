import WwdImage from '../Attachments/Images/WWDsect.png';
import Carousel from './Components/Carousel/Carousel';
import Carousel1Data from './Components/Carousel1Data';

const WWD = () => {
    return (
        <div id='AboutUs' className="w-screen h-screen py-14 relative overflow-y-hidden">
            <img src={WwdImage} className="w-full h-full -z-20 absolute top-0" alt='a graphic with a lot of elements' />
            <div className='h-screen space-y-10'>
                <div className="w-full h-fit text-center font-hindVadodara">
                    <h1 className="text-4xl z-20">
                        <span className="font-bold">What We Do </span><br /> For Your <span className="w-16 h-6 relative">Business <div className="w-full h-2 bg-yellow-400 absolute top-9 inset-x-0 -z-10" /></span>
                    </h1>
                </div>
                <Carousel show={3}>
                    {
                        Carousel1Data.map((data, index) => {
                            return <div key={index}>
                                <div className='w-80 h-56 rounded-xl p-5 bg-white shadow-lg space-y-4'>
                                    <div className={`w-12 h-12 p-3 ${data.iconsBG} rounded-xl`}>
                                        {data.Icons}
                                    </div>
                                    <div className='space-y-2 font-hindVadodara'>
                                        <h1 className='font-bold text-xl'>
                                            {data.title}
                                        </h1>
                                        <p>
                                            {data.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default WWD;