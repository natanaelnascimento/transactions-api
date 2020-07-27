import React from 'react'
import Period from './Period';
import SearchField from './SearchField';

export default function ToolBar({periodValue, onPeriodChange, searchValue, onSearchChange}) {

    return (
        <div className="row">
            <div className="col s12 m4 l4">
                <Period value={periodValue} onChange={onPeriodChange} />
            </div>
            <div className="col s12 m8 l8">
                <SearchField value={searchValue} onChange={onSearchChange}/>
            </div>
        </div>
    );
}
