import Header from "./components/Header";
import Slider from "./components/Slider";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";
import Footer from "./components/Footer";
import './App.css'
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllMovies from "./components/AllMovies";



const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function App() {
  const [filmler, setFilmler] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then((response) => setFilmler(response.data))
      .catch((err) => console.log(err))
      .finally(() => console.log("istek tamamlandı"));
  }, []);

  return (
    <Router>
      <Container item='test'>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Slider />
            <Popular popular={filmler.filter(item => item.type === 'Popular')} />
            <Recommended recommended={filmler.filter(item => item.type === 'Recommended')} />
          </Route>
          <Route path="/allmovies/cat">
            <AllMovies />
          </Route>
          <Route path="/allmovies" exact>
            <AllMovies />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
