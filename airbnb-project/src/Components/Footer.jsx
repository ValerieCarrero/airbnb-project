import World from "../assets/icons/world.png";
import Continue from "../assets/icons/continue.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-items">
                
            <div className="footer-content">
            <p className="footer-text">© 2025 Airbnb, Inc.</p>
            <ul className="footer-list">
                <li>∙  Privacy</li>
                <li>∙  Terms</li>
                 <li>∙ Sitemap</li>
            </ul>
            </div>
            <div className="footer-info">
                <div className="footer-language">
            <img src={World} alt="World" className="world-icon" />
            <p>English (CA)</p>
            </div>
            <p>$ CAD</p>
            <div className="footer-support">
            <p>Support & resources</p>
           <img src={Continue} alt="Continue" className="continue-icon" />
           </div>
            </div>
            </div>
            
        </footer>
    );
}