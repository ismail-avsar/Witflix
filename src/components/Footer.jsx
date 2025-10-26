import './Footer.css'

function Footer() {
    return (
        <footer>
            <div>
                <nav className="d-flex">
                    <a href="">Term of use</a>
                    <a href="">Privacy</a>
                    <a href="">FAQ</a>
                    <a href="">Watch List</a>
                </nav>
                <p className="copyright">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                    magni iste non ut consectetur tenetur blanditiis repudiandae hic
                    placeat autem.
                </p>
            </div>
            <div>
                <p>Follow US</p>
                <div className="social d-flex">
                    <img src="./src/assets/facebook-icon.png" alt="" />
                    <img src="./src/assets/youtube-icon.png" alt="" />
                    <img src="./src/assets/twitter-icon.png" alt="" />
                </div>
            </div>
            <div>
                <p>Apps</p>
                <div className="apps d-flex">
                    <img src="./src/assets/applestore.png" alt="" />
                    <img src="./src/assets/googleplay.png" alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
