/**
 * For the user to add a new content creator
 */

import { useNavigate } from 'react-router-dom';
import { supabase } from '../client.js';

function AddCreatorPage({getAllCreators}) {
    const addPageStyle = {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        minWidth: '80vh',
    }

    const submitButtonStyle = {
        background: 'green',
        border: 'none',
        borderRadius: '0.5em',
        fontWeight: 'bold',
        padding: '0.5em',
    }

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
            console.log('Successfully added creator!');
            await getAllCreators();
            navigate('/');
        }
        catch(error) {
            console.error('Error adding creator.', error.message);
        }
    }

    {/** TODO: mark required fields! */}
    return(
        <>
            <h1>Add a new creator! </h1>
            <form onSubmit={(e) => addCreator(e)} style={addPageStyle}>
                <label for='name'>Name*</label>
                <input 
                    id='name'
                    name='name'
                    type='text'
                />
                <br/>
                <label for='description'>Description*</label>
                <input 
                    id='description'
                    name='description'
                    type='text'
                />
                <br/>
                <label for='url'>URL*</label>
                <input 
                    id='url'
                    name='url'
                    type='url'
                />
                <br/>
                <label for='imageURL'>Image URL</label>
                <input 
                    id='imageURL'
                    name='imageURL'
                    type='url'
                />
                <br/>
                <input
                    style={submitButtonStyle}
                    type='submit'
                    value='Submit'
                />
            </form>
        </>
    )
}

export default AddCreatorPage;