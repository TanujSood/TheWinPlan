import './css/AboutUs.css'
import Footer from './assets/footer2.png'
import Card from './strategy_card'

function AboutUs() {
    return (
        <div className="one">
        <div className="aboutus">
            <h1 className="headline">Who we are</h1>

            <div class="row">
                <div class="column left">
                    
                </div>

                <div class="column right">
                    <h3>The Science of Election</h3>
                </div>
            </div>
        </div>
        <div><img className="footer2" src={Footer} alt="footer"></img></div>
        </div>
    )
}

export default AboutUs
