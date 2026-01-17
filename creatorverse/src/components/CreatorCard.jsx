/**
 *  This component should contain the content creator's information
 *  (name, url, description, and imageURL (optional))
 *  so it can be displayed on the main page.
 */

import { Link } from 'react-router-dom';

function CreatorCard({creator}){
    return(
        <div>
            {creator.imageURL && <img src={creator.imageURL} width='50%' height='50%'/>}
            <p>{creator.name}</p>
            <p>{creator.description}</p>
            <Link to={creator.url}>{creator.url}</Link>
            <Link to={`/view/${creator.id}`}>VIEW</Link>
            <Link to={`/edit/${creator.id}`}>EDIT</Link>
        </div>
    )
}

export default CreatorCard;