/**
 * For viewing a single creator
 */

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client.js';

function ViewCreatorPage() {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        border: 'solid white 1px',
        borderRadius: '8px',
        width: '30%',
        padding: '1em',
    };

    const imageStyle = {
        borderRadius: '8px',
        maxWidth: '100%',
    }

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
                console.log('Successfully fetched creator to view.');
            }
            catch (error) {
                console.error('Error fetching creator to view.', error.message);
            }
        }

        getCreator();
    }, [id]);
    
    return(
        <div style={cardStyle}>
            {creator && 
                <>
                    {creator.imageURL && <img src={creator.imageURL} style={imageStyle}/>}
                    <p>{creator.name}</p>
                    <p>{creator.description}</p>
                    <Link to={creator.url} target="_blank">{creator.url}</Link>
                    <br/>
                    <Link to={`/edit/${creator.id}`}>EDIT</Link>
                </>
            }
        </div>
    )
}

export default ViewCreatorPage;