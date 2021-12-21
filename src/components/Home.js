import React, {Component} from 'react'
import ViewCocktails from './ViewCocktails'
import '../App.css'

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1 style={{backgroundColor: 'black', margin:0}}>Cocktail App</h1>
                <ViewCocktails/>
            </div>
        )
    }
}

export default Home