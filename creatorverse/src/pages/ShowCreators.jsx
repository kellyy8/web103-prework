/**
 * For showing all content creators
 */

import CreatorCard from '../components/CreatorCard';

function ShowCreatorPage({data}) {
    const showPageStyle = {
        display: 'flex',
        flex: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }

    return(
        <>
            <h1>WELCOME TO CREATORVERSE!</h1>
            <div style={showPageStyle}>
                {data && data.length !== 0 ?
                    data.map((creator, index) => <CreatorCard key={index} creator={creator}/>)
                :
                    (
                        <div>
                            <p>No creators to show.</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ShowCreatorPage;