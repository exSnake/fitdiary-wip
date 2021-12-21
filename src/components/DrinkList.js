import React, {Component} from 'react'
import Drink from './Drink'

class DrinkList extends Component {

    renderDrinks() {
        if (Array.isArray(this.props.cocktails)) {
            return this.props.cocktails.map(item => <Drink key={item.strDrink} item={item}/>)
        } else {
            return <li>Non è stato trovato nessun cocktail con questo ingrediente</li>
        }
    }

    render() {
        return (
            <ul>
                {this.renderDrinks()}
            </ul>
        )
    }
}

export default DrinkList 
