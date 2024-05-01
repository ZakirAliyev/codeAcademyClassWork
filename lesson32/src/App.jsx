import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import Movies from "./components/Movies/index.jsx";
import {useEffect, useState} from "react";
import {getAll} from "./requests/requests.js";

function App() {
    const [movies, setMovies] = useState([]);
    const [skeleton, setSkeleton] = useState(true);
    // const [searchQuery, setSearchQuery] = useState("");
    // let filteredMovies = movies.filter((movie) => {
    //     return movie.name
    //         .toLowerCase()
    //         .trim()
    //         .includes(searchQuery.toLowerCase().trim());
    // });

    useEffect(() => {
        getAll('/movies')
            .then((data) => {
                setMovies(data);
                setSkeleton(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Navbar/>
            <div className="container" style={{paddingTop: '100px'}}>
                <Movies movies={movies} skeleton={skeleton} setSkeleton={setSkeleton}/>
            </div>
        </>
    )
}

export default App
