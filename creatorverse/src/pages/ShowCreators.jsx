/**
 * For showing all content creators
 */

import React from 'react';
import CreatorCard from '../components/CreatorCard';

function ShowCreatorPage({data}) {
    return(
        <>
            <h1>SHOW PAGE</h1>
            {data && data.length !== 0 ?
                data.map((creator, index) => <CreatorCard key={index} creator={creator}/>)
            :
                (
                    <div>
                        <p>No creators to show.</p>
                    </div>
                )
            }
        </>
    )
}

export default ShowCreatorPage;