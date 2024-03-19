import facebookLogo from "../img/facebook-logo.png"
import twitterLogo from "../img/twitter-logo.png"
import githubLogo from "../img/github-logo.png"
import instagramLogo from "../img/instagram-logo.png"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="social-links">
                <div>
                    <h4>Follow me on social media</h4>
                </div>
                <br/>
                <div>
                    <a href="https://github.com/inthenile" target="blank_"><img src={githubLogo} alt="" /></a>
                    <a href="/"><img src={facebookLogo} alt="" /></a>
                    <a href="/"><img src={twitterLogo} alt="" /></a>
                    <a href="/"><img src={instagramLogo} alt="" /></a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;