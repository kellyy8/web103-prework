/**
 * For the user to update a content creator's information
 */

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client.js';

function EditCreatorPage({getAllCreators}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});
    
    async function updateCreator(e) {
        e.preventDefault();
        try {
            const { error } = await supabase.from('creators').update(creator).eq('id', id);
            if (error) {
                throw error;
            }
            console.log('Successfully updated creator!');
            await getAllCreators();
            navigate('/');
        }
        catch(error) {
            console.error('Error updating creator.', error.message);
        }
        
    }

    async function deleteCreator() {
        try {
            const { error } = await supabase.from('creators').delete().eq('id', id);
            if (error) {
                throw error;
            }
            console.log('Successfully deleted creator!');
            await getAllCreators();
            navigate('/');
        }
        catch (error) {
            console.error('Error deleting creator.', error.message);
        }
    }

    useEffect(() => {
        async function getCreator(){
            try {
                const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
                if(error){
                    throw error;
                }
                setCreator(data);
                console.log('Successfully fetched creator for updates!');
            }
            catch(error) {
                console.error('Error fetching creator for updates.', error.message);
            }
        }

        getCreator();
    }, [id]);

    {/** TODO: mark required fields! */}
    return(
        <>
            <form onSubmit={(e) => updateCreator(e)}>
                <label for='name'/>
                <input
                    id='name'
                    name='name'
                    type='text'
                    value={creator.name}
                    onChange={(e) => {setCreator({...creator, name: e.target.value})}}
                />
                <label for='description'/>
                <input
                    id='description'
                    name='description'
                    type='text'
                    value={creator.description}
                    onChange={(e) => {setCreator({...creator, description: e.target.value})}}
                />
                <label for='url'/>
                <input
                    id='url'
                    name='url'
                    type='url'
                    value={creator.url}
                    onChange={(e) => {setCreator({...creator, url: e.target.value})}}
                />
                <label for='imageURL'/>
                <input
                    id='imageURL'
                    name='imageURL'
                    type='url'
                    value={creator.imageURL}
                    onChange={(e) => {setCreator({...creator, imageURL: e.target.value})}}
                />
                <input
                    type='submit'
                    value='Submit'
                />
                <button onClick={deleteCreator}>Delete</button>
            </form>
        </>
    )
}

export default EditCreatorPage;