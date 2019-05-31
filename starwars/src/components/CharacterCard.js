import React from 'react';
import '../components/StarWars.scss';

class CharacterCard extends React.Component {
    render() {
        return (
            <div className='character-card'>
                <h2>{this.props.character.name}</h2>
                <h3>{this.props.character.mass}</h3>
            </div>
        )
    }
}

export default CharacterCard;