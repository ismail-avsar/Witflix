import './Section.css'
import SectionItem from './SectionItem';
import { Link } from 'react-router-dom'

function Popular({ popular }) {


    return (
        <section className="popular">
            <div className="title d-flex">
                <h3>Popular Movies</h3>
                <Link to="/allmovies">View all</Link>
            </div>
            <div className="items d-flex">
                {popular.map((item, index) => (
                    <SectionItem key={index} movie={item} />
                ))}
            </div>
        </section>
    )
}

export default Popular;
