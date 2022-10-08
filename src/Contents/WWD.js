import WwdImage from '../Attachments/Images/WWDsect.png';
import Carousel from './Components/Carousel/Carousel';

const WWD = () => {
    return (
        <div className="w-screen h-screen py-10 relative">
            <img src={WwdImage} className="w-full h-full -z-20 absolute top-0" alt='a graphic with a lot of elements' />
            <div className='h-screen space-y-10'>
                <div className="w-full h-fit text-center font-hindVadodara">
                    <h1 className="text-4xl z-20">
                        <span className="font-bold">What We Do </span><br /> For Your <span className="w-16 h-6 relative">Business <div className="w-full h-3 bg-yellow-400 absolute top-8 inset-x-0 -z-10" /></span>
                    </h1>
                </div>
                <Carousel show={3}>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/illuminate-the-show-picture-id1414080709" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/young-woman-shopping-for-pumpkins-at-outdoor-fruit-stand-in-autumn-picture-id1183173683" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/side-pike-langdales-lake-district-cumbria-england-picture-id1374958574" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/elter-water-and-the-langdale-pikes-elterwater-lake-district-national-picture-id926144814" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/aerial-view-of-lng-and-oil-tankers-picture-id1413680131" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/autumn-tree-in-japan-picture-id1407058591" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/fuji-mountain-with-maple-tree-in-autumn-at-kawaguchiko-lake-picture-id951431280?s=2048x2048" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://media.gettyimages.com/photos/pyrrhuloxia-and-cardinal-feeding-together-in-south-texas-usa-picture-id1411888953" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default WWD;