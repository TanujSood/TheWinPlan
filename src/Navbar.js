import './css/Navbar.css';

function Navbar() {
  return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    TheWinPlan
                </div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
            <div className="button">
                    <a href="#"  target="_blank">Home</a>
                </div>
                <div className="button">
                    <a href="#"  target="_blank">About Us</a>
                </div>
                <div className="button">
                    <a href="#"  target="_blank">Pricing</a>
                </div>

                <div className="button green">
                    <a href="#"  target="_blank">Contact Us</a>
                </div>
            </div>
        </div>
  );
}

export default Navbar;