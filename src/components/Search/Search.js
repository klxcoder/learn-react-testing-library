import React from "react";

function Search({ value, onChange }) {
    return (
        <div className="border">
            <input
                id="search"
                type="text"
                value={value}
                onChange={onChange}
                data-testid="search"
            />
            <p>Searches for {value ? value : '...'}</p>
        </div>
    );
}

export default Search;
