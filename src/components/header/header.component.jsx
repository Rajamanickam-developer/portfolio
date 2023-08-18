import Icon from "../../assets/images/icons8-portfolio-100.png"

function Header() {
    return(
        <header className="nav">
            <img src={Icon} alt="logo" />
            <ul className="header-content">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>More</li>
            </ul>
            <button className="contact-btn btn">CONTACT</button>
        </header>
    );
}

export default Header;