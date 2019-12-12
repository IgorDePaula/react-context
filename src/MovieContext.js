import React, {useState, createContext} from "react";
export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Poter',
            price: 200.0,
            id: 3,
        },
        {
            name: 'star wars',
            price: 700.0,
            id: 2,
        },{
            name: 'era uma vez',
            price: 100.0,
            id: 1,
        }
    ])
    return (
<MovieContext.Provider value={[movies, setMovies]}>
    {props.children}
</MovieContext.Provider>
    );
}
