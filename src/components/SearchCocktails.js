import React, {Component} from 'react'
import DrinkList from './DrinkList'
import '../App.css'

export default class SearchCocktails extends Component {
    constructor() {
        super()
        this.state = {
            cocktails: [],
            ingredient: ''
        }
    }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "40bf57fa4amshd0014b2fc067c82p1fbb5ejsn04b68aa7a5b4",
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(cocktails => this.setState({cocktails: cocktails.drinks, ingredient: 'Più conosciuti'}))
            .catch(error => {
                throw(error);
            })
    }


    handleClick = (e) => {
        fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${this.state.ingredient}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "40bf57fa4amshd0014b2fc067c82p1fbb5ejsn04b68aa7a5b4",
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(cocktails => this.setState({cocktails: cocktails.drinks}))
            .catch(error => {
                throw(error);
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeypress = (e) => {
        if (e.charCode === 13) {
            this.handleClick()
            console.log(e)
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="search"
                 style={{backgroundImage: `url(https://dg38gzoej82xh.cloudfront.net/sites/default/files/styles/image_gallery_xl/public/images/node/article/22-different-cocktails-garnishes.jpg?itok=O5fN3kze)`}}>
                <div className="searchBox">
                    <label>Cerca per Ingrediente</label><br/>
                    <input type="text" name="ingredient" onChange={this.handleChange} onKeyPress={this.handleKeypress}/>
                    <button className="button" onClick={this.handleClick}>Cerca</button>
                    <h2>{this.state.ingredient.toUpperCase()}</h2>
                    <DrinkList cocktails={this.state.cocktails}/>
                </div>
            </div>
        )
    }
}

