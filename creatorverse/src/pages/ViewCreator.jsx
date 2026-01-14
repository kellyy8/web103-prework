/**
 * For viewing a single creator
 */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client.js';

function ViewCreatorPage() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        async function getCreator(){
            const { data: result, error } = await supabase.from('creators').select('*').eq('id', id).single();
            
            if (error) {
                console.error("Error fetching creator with id:", id, error);
            }
            else {
                setCreator(result);
            }
        }

        getCreator();
    }, [id]);
    
    return(
        <>
            <h1>VIEW PAGE</h1>
            {creator && 
                <>
                    <p>{creator.name}</p>
                    <p>{creator.url}</p>
                    <p>{creator.description}</p>
                    {creator.imageURL && <p>{creator.imageURL}</p>} {/** TODO: update to image element */}
                </>
            }
        </>
    )
}

export default ViewCreatorPage;