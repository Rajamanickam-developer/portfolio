import facebookIcon from "../../assets/images/icons8-facebook-48.png"
import twitterIcon from "../../assets/images/icons8-twitter-48.png"
import instagramIcon from "../../assets/images/icons8-instagram-48.png"
import githubIcon from "../../assets/images/icons8-github-48.png"
import linkedinIcon from "../../assets/images/icons8-linkedin-48.png"

function Footer(){
    return(
        <footer className="footer-content">
            <h2 className="footer-heading">Foolish Developer</h2>
            <p className="footer-description">Foolish Developer is a blog website when you will find great tutorials on web design and development. Here each tutorial is beautifully step by step with the required source code.</p>
            <ul className="social-media-icons">
                <li><img src={facebookIcon} alt="facebook logo" className="media-icons"/></li>
                <li><img src={twitterIcon} alt="twitter logo" className="media-icons"/></li>
                <li><img src={instagramIcon} alt="instagram logo" className="media-icons"/></li>
                <li><img src={githubIcon} alt="github logo" className="media-icons"/></li>
                <li><img src={linkedinIcon} alt="linkedin logo" className="media-icons"/></li>
            </ul>
        </footer>
    )
}

export default Footer;