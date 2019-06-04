import React from 'react';
import '../components/StarWars.scss';

class CharacterCard extends React.Component {

    diet = () => {
        if(this.props.character.mass > 100) {
            return <h6>Looks like {this.props.character.name} needs to lay off the cupcakes in the Break Room!</h6>
        }
    } 

    render() {
        return (
            <div className='character-card'>
                <h2>{this.props.character.name}</h2>
                <h3>{this.props.character.mass}</h3>
                {this.diet()}
            </div>
        )
    }
}

export default CharacterCard;