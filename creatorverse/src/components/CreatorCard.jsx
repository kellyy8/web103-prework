/**
 *  This component should contain the content creator's information
 *  (name, url, description, and imageURL (optional))
 *  so it can be displayed on the main page.
 */

import React from 'react';

function CreatorCard({creator}){
    return(
        <div>
            <p>{creator.name}</p>
            <p>{creator.url}</p>
            <p>{creator.description}</p>
        </div>
    )
}

export default CreatorCard;