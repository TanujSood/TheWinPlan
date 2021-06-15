import './css/Landing.css'
import Footer from './assets/footer.png'
import Illustration from './assets/Illustration.png'
import Scroll from './assets/scroll-indicator.png'

function LandingPage() {
    return (
        <div>
            <div class="row">
                <div class="column left">
                    <h1 className="punchline">The Science of Election</h1>
                    <p className="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <a href="#"><div className="buttona">Learn More</div></a>
                </div>

                <div class="column right">
                    <img className="illustration" src={Illustration} alt="Illustration"></img>                
                </div>
            </div>
            <div><img className="footer" src={Footer}></img></div>
            
            <div className="extra">
                <p className="scroll-text">Scroll for more</p>
                <img className="scroll-indicator" src={Scroll} alt="scroll"></img>
            </div>
        </div>
    )
}

export default LandingPage
