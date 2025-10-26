
function SectionItem({ movie }) {

    return (
        <div className="item">
            <img src={`../src/assets/${movie.image}`} alt="" />
            <div className="item-info d-flex">
                <span className="age item-span">+16</span>
                <span className="item-span">{movie.duration}</span>
                <a href="" className="item-span">Play Now</a>
            </div>
        </div>
    );
}

export default SectionItem;