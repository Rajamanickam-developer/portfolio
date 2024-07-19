import ProfilePic from "../../assets/images/profile-pic.jpg"
import DownloadResume from "./download.resume";

function Main(){
    return(
        <main className="main-container">
            <div className="image-container">
                <img src={ProfilePic} alt="profile-pic" className="profile-pic"/>
            </div>
            <div className="content-container">
                <h2 className="clr">Hi Everyone!</h2>
                <h1 id="role">I'm a Web <span className="clr">Developer</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iure labore ea natus vero facere odit? Aperiam in maxime minima voluptatum iure modi id rem, placeat aliquid quibusdam amet earum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at, ad id deleniti rerum consequuntur.</p>
                <button className="download-cv btn" onClick={(DownloadResume)}>DOWNLOAD RESUME</button>
            </div>
        </main>
    )
}

export default Main;