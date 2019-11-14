import React from 'react'
import SearchCard from './card'

const SearchList = (props) => {
    return props.venues.map(venue => <SearchCard venue={venue} />)
}

export default SearchList