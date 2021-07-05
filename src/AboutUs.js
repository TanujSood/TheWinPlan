import './css/AboutUs.css'
import Footer from './assets/footer2.png'
import test from './assets/strategy1.png'

function AboutUs() {
    return (
        <div className="one">
        <div className="aboutus">
            <h1 className="headline">Who we are?</h1>

            <div class="row2">
                <div class="column2 left2">
                    <img src={test} alt="test image"></img>
                </div>

                <div class="column2 right2">
                    <p className="content">The Science of Election</p>
                </div>
            </div>
        </div>
        <div><img className="footer2" src={Footer} alt="footer"></img></div>
        </div>
    )
}

export default AboutUs