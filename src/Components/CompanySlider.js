import Slider from 'react-infinite-logo-slider'
import Nike from '../Images/nike.png'
import Adidas from '../Images/adidas.png'
import Gucci from '../Images/gucci.png'
import Versace from '../Images/versace.png'
import Rolex from '../Images/rolex.png'
const Component = () => {
    
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={Nike} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Adidas} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Gucci} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Versace} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Rolex} alt="any3" className='w-36' />
            </Slider.Slide>

        </Slider>
    )
}              
                     
export default Component