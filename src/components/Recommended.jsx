import { Link } from 'react-router-dom'
import SectionItem from './SectionItem';

function Recommended({ recommended }) {


    return (
        <section className="recommended">
            <div className="title d-flex">
                <h3>Recommended Movies</h3>
                <Link to="/allmovies">View all</Link>
            </div>
            <div className="items d-flex">
                {recommended.map((item, index) => (
                    <SectionItem key={index} movie={item} />
                ))}
            </div>
        </section>
    )
}

export default Recommended;
