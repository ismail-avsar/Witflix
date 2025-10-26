import './Slider.css'

function Slider() {
    return (
        <main>
            <div className="hero-content">
                <h1>Movie Name</h1>
                <div className="movie-info">
                    <span className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </span>
                    <span>7.3 IMDB</span>
                    <span className="age">+16</span>
                    <span>2h 25m</span>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos reprehenderit culpa officiis sapiente iste architecto
                    illo reiciendis odit, tempore commodi quisquam, optio facilis
                    praesentium saepe quia soluta odio sequi omnis?
                </p>
                <ul>
                    <li><span className="text">Starring:</span>Lorem Ipsum</li>
                    <li><span className="text">Genre:</span>Lorem Ipsum</li>
                    <li><span className="text">Tags:</span>Lorem Ipsun</li>
                </ul>
                <a href="">Play Now</a>
            </div>
        </main>
    )
}

export default Slider;
