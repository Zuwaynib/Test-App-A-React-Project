import React from 'react';
import JokesData from '../data/jokesData.json';

const Jokes = () => {

    JokesData.map((joke) => {
        return (
            <div key={joke.id}>
                <h1>{joke.id}</h1>
                <p>{joke.joke}</p>
                <hr></hr>
            </div>
        )
    })
}

export default Jokes;