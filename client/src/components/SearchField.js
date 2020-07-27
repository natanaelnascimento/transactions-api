import React from 'react';

export default function SearchField({ value, onChange }) {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="input-field">
            <input onChange={handleChange} id="searchBar" type="text" value={value} />
            <label htmlFor="searchBar">Pesquisar Lançamentos</label>
        </div>
    )
}
