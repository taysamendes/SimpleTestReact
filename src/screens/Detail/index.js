import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { doGet } from '../../helpers/APIHelper';


const Detail = () => {

    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        doGet(`/people/${id}`).then(setPerson);
    }, [id]);

    if (!person) {
        return <h1>Loading...</h1>;
    }

    return <h1>{person.name}</h1>;
};

export default Detail;
