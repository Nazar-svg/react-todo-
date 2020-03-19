import React from 'react';
import './seach-panel.css';

const SearchPenal = () => {
    const searchText = 'Type here to search'
    return <input placeholder={searchText} className="search-input" type="text"/>;
};

export default SearchPenal;