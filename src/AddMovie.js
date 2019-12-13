import React, {useState, useContext} from "react";
import {MovieContext} from "./MovieContext";

const AddMovie = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [Id, setId] = useState('')
    const [movies, setMovies] = useContext(MovieContext)
    const updateName = e => {
        setName(e.target.value)
    }
    const updatePrice = e => {
        setPrice(e.target.value)
    }
    const updateId = e => {
        setId(e.target.value)
    }

    const AddMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => {
            let index = prevMovies.findIndex(i => i.id == Id)
            if (index > -1) {
                let movies = prevMovies.splice(index, 1, {name: name, price: price, id: Id})
                return [...prevMovies]
            } else {
                return [... prevMovies, {name: name, price: price, id: movies.length + 1} ]
            }
        })
    }


    return (
        <form onSubmit={AddMovie}>
            <input type="text" name={Id} value={Id} onChange={updateId}/><br/>
            <input type="text" name={name} value={name} onChange={updateName}/><br/>
            <input type="text" name={price} value={price} onChange={updatePrice}/><br/>
            <button>salvar</button>
        </form>
    )
}
export default AddMovie
