// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="mb-8 text-center">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Search products..."
            />
        </div>
    );
};

export default SearchBar;
