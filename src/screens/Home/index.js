import React, {useState, useEffect} from 'react';

import {doGet} from '../../helpers/APIHelper'

const Home = () => {

    const [people, setPeople] = useState([]);

    useEffect(()=>{
        doGet('/people').then(response => setPeople(response.results)); 
    }, []);

    if(!people || !people.length){
        return (<h1>Loading...</h1>)
    }

const peopleList = people.map(p => <li key={p.url}>{p.name}</li>)

    return (<>
        <h1>Characters</h1>
        <ul>{peopleList}</ul>
        </>
    );
};

export default Home;
