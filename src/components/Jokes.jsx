import React from 'react';
import JokesData from '../data/jokesData.json';

const Jokes = () => {
    return (
        <div>
            {JokesData.map((joke) => (
                <div key={joke.id}>
                    <h1>{joke.id}</h1>
                    <p>{joke.joke}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Jokes;
