import React from 'react'

const SearchCard = (props) => {
    const venue = props.venue
    return <div>
            <h3>{venue.name}</h3>
            <p>{venue.address}</p>
            <hr />
        </div>
    


}

export default SearchCard