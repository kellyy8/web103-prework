/**
 * For viewing a single creator
 */

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client.js';

function ViewCreatorPage() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        async function getCreator(){
            try {
                const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
                if (error) {
                    throw error;
                }
                setCreator({id: id, ...data});
            }
            catch (error) {
                console.error('Error fetching creator with id:', id, '.', error.message);
            }
        }

        getCreator();
    }, [id]);
    
    return(
        <>
            {creator && 
                <>
                    {creator.imageURL && <img src={creator.imageURL} width='50%' height='50%'/>}
                    <p>{creator.name}</p>
                    <p>{creator.url}</p>
                    <p>{creator.description}</p>
                    <Link to={`/edit/${creator.id}`}>EDIT</Link>
                </>
            }
        </>
    )
}

export default ViewCreatorPage;