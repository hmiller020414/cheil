import './Hero.scss'
import SamsungLogo from '../../images/samsung-logo.png'

const Hero = () =>  {

    return (
        <div className="hero">
            <img src={SamsungLogo} />
            <h1>Product Details</h1>
        </div>
    )
}

export default Hero;