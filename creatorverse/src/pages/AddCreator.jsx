/**
 * For the user to add a new content creator
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client.js';

function AddCreatorPage({getAllCreators}) {
    const navigate = useNavigate();

    async function addCreator(e){
        e.preventDefault();

        const form = new FormData(e.target);
        const newCreator = {
            name: form.get('name'),
            description: form.get('description'),
            url: form.get('url'),
            imageURL: form.get('imageURL')
        }

        try {
            const { error } = await supabase.from('creators').insert(newCreator);
            if (error) {
                throw error;
            }
            await getAllCreators();
            navigate('/');
        }
        catch(error) {
            console.error("Error adding creator:", error.message);
        }
    }

    return(
        <>
            <h1>Add a new creator! </h1>
            <form onSubmit={(e) => addCreator(e)}>
                <label for='name'>Name</label>
                <input 
                    id='name'
                    name='name'
                    type='text'
                />
                <label for='description'>Description</label>
                <input 
                    id='description'
                    name='description'
                    type='text'
                />
                <label for='url'>URL</label>
                <input 
                    id='url'
                    name='url'
                    type='url'
                />
                <label for='imageURL'>Image URL</label>
                <input 
                    id='imageURL'
                    name='imageURL'
                    type='url'
                />
                <input
                    type='submit'
                    value='Submit'
                />
            </form>
        </>
    )
}

export default AddCreatorPage;