import React from 'react';

export default function InfoField({ value, label, color }) {
    return (
        <div className="input-field">
            <input style={{...STYLES.input, color }} id="numberField" type="text" value={value} readOnly="readOnly"></input>
            <label htmlFor="numberField">{label}</label>
        </div>
    )
}

const STYLES = {
    input: {
        fontWeight: "bold",
        textAlign: "right"
    }
}
