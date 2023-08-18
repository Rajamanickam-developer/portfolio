import ProfilePic from "../../assets/images/profile-pic.jpg"

function About(){
    return(
        <article className="article-container">
            <div className="about-image-container">
                <img src={ProfilePic} alt="profile-pic" className="about-profile-pic"/>
            </div>
            <div className="about-container">
                <h2 className="clr">About Me</h2>
            </div>
        </article>
    )
}

export default About;