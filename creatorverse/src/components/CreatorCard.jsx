/**
 *  This component should contain the content creator's information
 *  (name, url, description, and imageURL (optional))
 *  so it can be displayed on the main page.
 */

import { Link } from 'react-router-dom';

function CreatorCard({creator}){
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: 'solid white 1px',
        borderRadius: '8px',
        width: '25%',
        padding: '1em',
        margin: '1em',
    };

    const imageStyle = {
        borderRadius: '8px',
        maxWidth: '100%',
    }
    
    return(
        <div style={cardStyle}>
            {creator.imageURL && <img src={creator.imageURL} style={imageStyle}/>}
            <p>{creator.name}</p>
            <p>{creator.description}</p>
            <Link to={creator.url} target="_blank">{creator.url}</Link>
            <br/>
            <Link to={`/view/${creator.id}`}>VIEW</Link>
            <Link to={`/edit/${creator.id}`}>EDIT</Link>
        </div>
    )
}

export default CreatorCard;