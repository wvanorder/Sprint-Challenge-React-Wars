import React from 'react';

import CharacterCard from './CharacterCard';
import './StarWars.scss';

const Characters = props => {
        return (
            <div>
                <h1>Star Wars Characters</h1>
                <div className='characters'>
                    {props.characterList.map(characterOnList => (
                        <CharacterCard key={Date.now() + Math.random()}character={characterOnList} /> 
                    ))}
                </div>
            </div>
            
        )
    };

export default Characters;