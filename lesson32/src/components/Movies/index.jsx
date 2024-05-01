import MovieCard from "./MovieCard/index";
import SkeletonCard from "./SkeletonCard/index";
import PropTypes from "prop-types";

function Movies({movies, skeleton, setSkeleton}) {
    const arr = Array.from({length: 12});

    return (
        <>
            <div className={"row"}>
                {movies && movies.map((movie, i) => {
                    return <MovieCard key={i} movie={movie}/>
                })}
            </div>
            {skeleton ? (
                <div className={"row"}>
                    {arr && arr.map((skeleton, i) => {
                        return <SkeletonCard key={i}/>;
                    })}
                </div>
            ) : (<></>)}
        </>
    );
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    skeleton: PropTypes.bool.isRequired,
    setSkeleton: PropTypes.func.isRequired
}

export default Movies;
