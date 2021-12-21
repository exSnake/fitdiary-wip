import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function ViewCocktails() {
    return (
        <Link to={'/search'}>
            <button className="button">Cerca un cocktail</button>
        </Link>
    )
}

export default ViewCocktails