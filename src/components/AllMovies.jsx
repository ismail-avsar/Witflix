import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function AllMovies() {

    const { cat } = useParams();
    const history = useHistory();

    return (
        <>
            <h1>All Movies: {cat ? cat : 'tüm filmler'}</h1>
            <button onClik={() => history.push('/')}>Anasayfa</button>
        </>
    );
}

export default AllMovies;
